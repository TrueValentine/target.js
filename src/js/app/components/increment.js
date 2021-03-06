/**
 * target.Increment
 *
 * UI element that increments the value of an input
 *
 * usage:
 *
 * `<a data-target-increment="#qty" data-target-max="99">+1 to #qty</a>`
 */
(function(target, undefined) {
	
	'use strict';

	target.Increment = target.UI.extend({
	
		init: function(el, _id, target, name) {
	
			this._super.apply(this, arguments);

			this.targets = this.utils.qsa(
	
				this.el.getAttribute(this.utils.stripBrackets(this.config.attributes.Increment))
	
			);

			this.setLimits();

			this.addDomEventHandler('click', this.onClick);

		},

		/**
		 * get min and max values
		 * declared on the element itself
		 * use defaults if not declared
		 */
		setLimits: function() {

			this.max = this.el.getAttribute(this.config.attributes.max);
			this.min = this.el.getAttribute(this.config.attributes.min);

			if (this.min === null) {
		
				this.min = 0;
			
			}

			if (this.max !== null) {
			
				this.max = parseInt(this.max, 10);
			
			}

		},

		/**
		 * increment the value of the target input
		 * only if lower than the specified maximum value
		 */
		increment: function(target) {

			var curVal = parseInt(target.value, 10);
			var val = curVal + 1;
			
			if (this.max !== null) {
				
				if (this.max >= val) {

					this.events.publish('max', target);

				}

				val = Math.min(val, this.max);
			
			}
			
			target.value = val;
		
		},

		/**
		 * when the incrementer is clicked,
		 * increment the target input element
		 */
		onClick: function(e) {

			var _this = this;

			if (!this.isDisabled()) {
			
				this.utils.forEach.call(this.targets, function(target) {

					_this.increment(target);

				});

			}
		
		}

	});

})(window.target = window.target || {});
