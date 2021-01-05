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

				let svgObject = item.querySelector('object');
				let svgIcon = false;
				let svgIconElems = [];
				if(svgObject) {
					let svgObjectDoc = svgObject.contentDocument;
					svgIcon = svgObjectDoc.querySelector('svg');
					svgIconElems = [...svgIcon.querySelectorAll('*')];
					let svgIconStyles = [...svgIcon.querySelectorAll('style')];
					console.log(svgIconStyles);
					svgIconStyles.remove();
					svgIcon.setAttribute('fill', '#ffffff');
					svgIconElems.forEach(el => {
						el.setAttribute('fill', '#ffffff');
					});
					svgIconStyles.forEach(el => {
						el.remove();
					});
				}

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
								CollapseText[i].style.height = CollapseText[i].dataset.height + 'px';
								setTimeout(() => {
									CollapseText[i].style.height = 0 + 'px';
								}, 50);
							}
							buttonCollapseToggle.innerText = bttnText;
							setTimeout(() => {
								item.classList.remove('active');
							}, 100);
							if(svgIcon) {
								svgIcon.setAttribute('fill', '#ffffff'); //svg
								svgIconElems.forEach(el => {
									el.setAttribute('fill', '#ffffff');
								});
							}
						} else {
							let curretnActive = [...textCollapseItem].find(element => element.classList.contains('active'));
							let delay = 0;
							if(curretnActive) {
								delay = 300;
								let curretnActiveText = curretnActive.querySelector('.js-text-collapse');
								let currentVisibleText = [...curretnActiveText.querySelectorAll('p')];

								for(let i = curretnActiveText.dataset.visible ; i < currentVisibleText.length; i++) {
									currentVisibleText[i].style.height = currentVisibleText[i].dataset.height + 'px';
									setTimeout(() => {
										currentVisibleText[i].style.height = 0 + 'px';
									}, 100);
								}
								curretnActive.querySelector('.advance-card__button').innerText = bttnText;
								setTimeout(() => {
									curretnActive.classList.remove('active');
								}, 100);
								if(svgIcon) {
									svgIcon.setAttribute('fill', '#ffffff'); //svg
									svgIconElems.forEach(el => {
										el.setAttribute('fill', '#ffffff');
									});
								}
							}
							setTimeout(() => {
								for(let i = collapseVisible ; i < CollapseText.length; i++) {
									CollapseText[i].style.height = CollapseText[i].dataset.height + 'px';
									setTimeout(() => {
										CollapseText[i].style.height = 'auto';
									}, 100);
								}
								buttonCollapseToggle.innerText = bttnTextSwitch;
								item.classList.add('active');
								if(svgIcon) {
									svgIcon.setAttribute('fill', '#2e1a47'); //svg
									svgIconElems.forEach(el => {
										el.setAttribute('fill', '#2e1a47');
									});
								}
							}, delay);
						}
					});

				} else {
					return false;
				}
			});
		});
	}
}
