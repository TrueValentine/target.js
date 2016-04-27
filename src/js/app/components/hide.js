/**
 *
 * target.Hide
 *
 * UI element that hides another element onclick
 *
 * usage:
 *
 * `<a data-target-hide="#my-target">Click to hide #my-target</a>`
 *
 */
;((target, undefined) => {
	
	'use strict';

	target.Hide = class TargetHide extends target.UI {
	
		constructor(el, _id, target, name) {
	
			super(el, _id, target, name);
			
			this.targets = this.utils.qsa(
	
				this.el.getAttribute(this.utils.stripBrackets(this.config.attributes.Hide))
	
			);


			this.addDomEventHandler('click', this.onClick);
			
		}

		/**
		 * when the element is clicked,
		 * hide the target element
		 * (using css)
		 */
		onClick(e) {

			var _this = this;

			if (!this.isDisabled()) {
			
				if (this.NODE_NAME === 'A') {

					e.preventDefault();
				
				}
			
				this.utils.forEach.call(this.targets, (target) => {

					_this.hide(target);

				});

			}
		
		}

	};

})(window.target = window.target || {});