export default function textLimit() {
	if(document.querySelectorAll('.js-text-limit').length) {
		let textLimitItemsParents = document.querySelectorAll('.js-text-limit');
		textLimitItemsParents.forEach(limitItemParent => {
						
			limitItemParent.classList.add('text-limit');
			let textLimitItems = limitItemParent.querySelectorAll('input, textarea');
			textLimitItems.forEach(limitItem => {
                        
				let limit = +limitItem.maxLength;

				let limitValue = document.createElement('span');
				limitValue.className = 'text-limit__caption';
				limitValue.innerText = limitItem.value.length + ' of ' + limit + ' characters';
				limitItem.before(limitValue);

				limitItem.addEventListener('input', () => {
					let currentVal = +limitItem.value.length;
					limitValue.innerText = currentVal + ' of ' + limit + ' characters';
					if(currentVal >= limit) {
						return false;
					}
				});
			});
		});
	}
}
