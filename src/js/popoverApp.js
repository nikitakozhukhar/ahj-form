import Popover from "./popover";

const popoverBtn = document.querySelector('.btn-popover');

const popover = new Popover();

let actualPopover = [];

popoverBtn.addEventListener('click', e => {
	e.preventDefault();
	e.stopImmediatePropagation();
	const title = e.target.dataset.title;
	const bodyText = e.target.dataset.content;
	const element = e.target;
	

	popover.showPopover(title, bodyText, element);

	const elem = [...popover._popover];

	actualPopover.push({
		id: elem[0].id,
		name: elem[0].element
	})

	if (elem) {
		popover.removePopover(actualPopover[0].id)
	}
	
	// console.log(elem[0]);
	console.log(actualPopover);
})