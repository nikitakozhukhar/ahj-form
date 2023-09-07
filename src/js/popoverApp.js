import Popover from "./popover";

const popoverBtn = document.querySelector('.btn-popover');

const popover = new Popover();

popoverBtn.addEventListener('click', e => {
	e.preventDefault();
	e.stopImmediatePropagation();
	const title = e.target.dataset.title;
	const bodyText = e.target.dataset.content;
	const element = e.target;
	
	popover.showPopover(title, bodyText, element);
})