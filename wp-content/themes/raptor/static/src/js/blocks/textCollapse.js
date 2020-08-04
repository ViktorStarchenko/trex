export default function textCollapseInit() {
	if(document.querySelectorAll('.js-text-collapse-wrap').length) {
		let textCollapseWrap = document.querySelectorAll('.js-text-collapse-wrap');
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

				if(CollapseText.length > 1 && CollapseText.length > collapseVisible) {
					for(let i = collapseVisible ; i < CollapseText.length; i++) {
						CollapseText[i].dataset.height = CollapseText[i].scrollHeight;
						CollapseText[i].style.height = 0 + 'px';
					}
					let buttonCollapseToggle = document.createElement('button');
					buttonCollapseToggle.classList.add('advance-card__button');
					let bttnText = textCollapseText.dataset.bttn ? textCollapseText.dataset.bttn : 'Learn More';
					let bttnTextSwitch = textCollapseText.dataset.switch ? textCollapseText.dataset.switch : 'Show Less';
					buttonCollapseToggle.innerText = bttnText;
					textCollapseText.after(buttonCollapseToggle);

					window.addEventListener('resize', () => {
						for(let i = collapseVisible ; i < CollapseText.length; i++) {
							CollapseText[i].dataset.height = CollapseText[i].scrollHeight;
						}
					});

					buttonCollapseToggle.addEventListener('click', (e) => {
						e.preventDefault();
						if(item.classList.contains('active')) {
							for(let i = collapseVisible ; i < CollapseText.length; i++) {
								CollapseText[i].style.height = 0 + 'px';
							}
							buttonCollapseToggle.innerText = bttnText;
							item.classList.remove('active');
						} else {
							let curretnActive = [...textCollapseItem].find(element => element.classList.contains('active'));
							if(curretnActive) {
								let curretnActiveText = curretnActive.querySelector('.js-text-collapse');
								let currentVisibleText = [...curretnActiveText.querySelectorAll('p')];

								for(let i = curretnActiveText.dataset.visible ; i < currentVisibleText.length; i++) {
									currentVisibleText[i].style.height = 0 + 'px';
								}
								curretnActive.querySelector('.advance-card__button').innerText = bttnText;
								curretnActive.classList.remove('active');
							}
							for(let i = collapseVisible ; i < CollapseText.length; i++) {
								CollapseText[i].style.height = CollapseText[i].dataset.height + 'px';
							}
							buttonCollapseToggle.innerText = bttnTextSwitch;
							item.classList.add('active');
						}
					});

				} else {
					// console.log('dd');
				}
			});
		});
	}
}
