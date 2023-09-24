export default class Popover {
	constructor(targetEl, title, text) {
    this.targetEl = targetEl;
    this.title = title;
    this.text = text;

    this.onPopoverShow = this.onPopoverShow.bind(this);
    this.onPopoverClose = this.onPopoverClose.bind(this);

    this.targetEl.addEventListener('click', this.onPopoverShow);
  }

  markUp() {
    return `
      <div class="popover-title"><span class="popover-title__text">${this.title}</span></div>
      <div class="popover-text">${this.text}</div>
      <button class="popover-btn">Ok</button>
    `;
  }

  onPopoverShow() {
    this.popover = document.createElement('div');
    this.popover.classList.add('popover');
    this.popover.innerHTML = this.markUp();
    document.body.appendChild(this.popover);

    const btnOk = this.popover.querySelector('.popover-btn');
    btnOk.addEventListener('click', this.onPopoverClose);
    window.addEventListener('resize', this.onPopoverClose);

    const { top, left, bottom } = this.targetEl.getBoundingClientRect();

    // поповер сверху или снизу элемента
    if (top > this.popover.offsetHeight) {
      this.popover.style.left = `${left + this.targetEl.offsetWidth / 2 - this.popover.offsetWidth / 2}px`;
      this.popover.style.top = `${top - this.popover.offsetHeight - 20}px`;
    } else {
      this.popover.classList.remove('popover');
      this.popover.classList.add('popover-bottom');
      this.popover.style.left = `${left + this.targetEl.offsetWidth / 2 - this.popover.offsetWidth / 2}px`;
      this.popover.style.top = `${bottom + 20}px`;
    }
    this.targetEl.removeEventListener('click', this.onPopoverShow);
    this.targetEl.addEventListener('click', this.onPopoverClose);
  }

  onPopoverClose() {
    this.popover.remove();
    this.targetEl.addEventListener('click', this.onPopoverShow);
    window.removeEventListener('resize', this.onPopoverClose);
  }
	
}