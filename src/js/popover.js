export default class Popover {
	constructor() {
		this._popover = [];
	}

	showPopover(title, bodyText, element) {
		const popoverElement = document.createElement('div');
		popoverElement.className = 'popover';

		const popoverTitle = document.createElement('h3');
		popoverTitle.className = 'popover-title';
		popoverTitle.textContent = title;

		const popoverBody = document.createElement('p');
		popoverBody.className = 'popover-body';
		popoverBody.textContent = bodyText;

		popoverElement.appendChild(popoverTitle);
		popoverElement.appendChild(popoverBody);

		const id = performance.now();

		this._popover.push({
			id,
			element: popoverElement,
		})

		document.body.appendChild(popoverElement);
		
		console.log(element.getBoundingClientRect());

		const {left, top} = element.getBoundingClientRect();

		console.log(element.offsetHeight);
		console.log('top' + '=' + top);

		popoverElement.style.left = left - 26 + 'px';
    	popoverElement.style.top = top - element.offsetHeight * 2.8 + 'px';

		return id

	}

	removePopover(id) {
		const popover = this._popover.find(p => p.id == id);

		popover.element.remove();

		this._popover = this._popover.filter(t => t !== id)

	}

}