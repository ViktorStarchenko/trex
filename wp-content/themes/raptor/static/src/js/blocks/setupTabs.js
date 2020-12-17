import {hideStart, hideElement, showElement} from './toggleElVisible';
export default function setupTabs() {
	if (document.querySelectorAll('.js-tabs-wrapper').length) {
		// search all tabs wrappers on the page
		const tabsWrappers = document.querySelectorAll('.js-tabs-wrapper');

		tabsWrappers.forEach((wrapper) => {
			const data = wrapper.dataset.tabs;
			const triggers = data ? wrapper.querySelectorAll(`.js-tab-trigger[data-tabs="${data}"]`) : wrapper.querySelectorAll('.js-tab-trigger');
			const tabContents = data ? wrapper.querySelectorAll(`.js-tab-content[data-tabs="${data}"]`) : wrapper.querySelectorAll('.js-tab-content');
			let currentTrigger = data ? wrapper.querySelector(`.js-tab-trigger.active[data-tabs="${data}"]`) : wrapper.querySelector('.js-tab-trigger.active');
			let currentTriggerHash;

			if(currentTrigger) {
				// hide all contents besides active
				currentTriggerHash = currentTrigger.hash ? currentTrigger.hash.slice(1) : currentTrigger.dataset.hash.slice(1);
				tabContents.forEach((content) => {
					currentTrigger.parentNode.classList.toggle('active');
					content.style.opacity = '1';
					content.style.transform = 'none';
					if (content.id ? content.id !== currentTriggerHash : content.dataset.id !== currentTriggerHash) {
						hideStart(content);
					}
				});
			} else {
				currentTrigger = triggers[0];
				// hide all contents besides the first one
				if(!currentTrigger.classList.contains('not-initial')) {
					currentTrigger.classList.toggle('active');
					currentTrigger.parentNode.classList.toggle('active');
					currentTriggerHash = currentTrigger.hash ? currentTrigger.hash.slice(1) : currentTrigger.dataset.hash.slice(1);
					tabContents.forEach((content, index) => {
						if (content.id ? content.id !== currentTriggerHash : content.dataset.id !== currentTriggerHash) {
							hideStart(content);
						} else {
							content.classList.toggle('active');
						}
					});
				} else {
					tabContents.forEach((content, index) => {
						hideStart(content);
					});
				}
			}

			let current = currentTrigger;
			triggers.forEach((trigger) => {
				trigger.addEventListener('click', (e) => {
					e.preventDefault();
					wrapper.classList.add('tab-wrapper-active');

					let parentList = trigger.closest('ul');
					if(parentList) {
						parentList.classList.add('active');
					}
					if(!trigger.classList.contains('active')) {
						current.classList.remove('active');
						current.parentElement.classList.remove('active');
						trigger.classList.add('active');
						trigger.parentElement.classList.add('active');

						let triggerHash = trigger.hash ? trigger.hash : trigger.dataset.hash;

						tabContents.forEach((content) => {
							if (content.id ? content.id !== triggerHash.slice(1) : content.dataset.id !== triggerHash.slice(1)) {
								hideElement(content);
								content.classList.remove('active');
							} else {
								showElement(content);
								content.classList.add('active');

								setTimeout(() => {
									let textCollapseWrap = content.querySelectorAll('.js-text-collapse-wrap');
									textCollapseWrap.forEach(wrap => {
										let textCollapseItem = wrap.querySelectorAll('.js-text-collapse-item');
										textCollapseItem.forEach(item => {
											let textCollapseText = item.querySelector('.js-text-collapse');
											let collapseVisible = 1;
											if(textCollapseText.dataset.visible) {
												collapseVisible = textCollapseText.dataset.visible;
											} else {
												textCollapseText.dataset.visible = collapseVisible;
											}
											let CollapseText = [...item.querySelectorAll('p')];
											for(let i = collapseVisible ; i < CollapseText.length; i++) {
												CollapseText[i].dataset.height = CollapseText[i].scrollHeight;

											}
										});
									});
								}, 500);

							}
						});
						current = trigger;
					}
				});
			});
		});
	}
}

