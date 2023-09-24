import Popover from "./popover";

const popoverBtn = document.querySelector('.popover-show-btn');

const title = 'Popover title';
const text = 'And here\'s some amazing content. It\'s very engaging. Right?';

const popover = new Popover(popoverBtn, title, text);