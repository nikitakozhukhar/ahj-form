import Popover from "./popover";

const popoverBtn = document.querySelector('.btn-popover');

// const titles

const popover = new Popover();

let actualMessages = [];

// const showPopover = (title, bodyText) => {
// 	title =  
// 	actualMessages.push({
// 		name: element.name,
// 		id: popover.showPopover(title, bodyText, element),
// 	  })
// }

popoverBtn.addEventListener('click', e => {
	e.preventDefault();
	e.stopImmediatePropagation();
	
	const title = e.target.dataset.title;
	const bodyText = e.target.dataset.content;
	const element = e.target;
	popover.showPopover(title, bodyText, element)

	// console.log([...e.target.attributes][2]);
	// console.log(e.target.dataset.title);
	// console.log(e.target.dataset.content);
	

})