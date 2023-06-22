import { Functionality } from './type';

class ScrollManager implements Functionality {
	private offerBtn = document.querySelector('#our-offer-btn');
	private offerHeader = document.querySelector('#our-offer-heading');

	private offerHeaderLink = document.querySelector('#link-offer');

	private contactHeaderLink = document.querySelector('#link-contact');
	private contactSection = document.querySelector('#contact-header');

	// private offerBtn = document.querySelector('#our-offer-btn');
	// private offerHeader = document.querySelector('#our-offer-heading');

	// private offerBtn = document.querySelector('#our-offer-btn');
	// private offerHeader = document.querySelector('#our-offer-heading');

	// private offerBtn = document.querySelector('#our-offer-btn');
	// private offerHeader = document.querySelector('#our-offer-heading');

	// private offerBtn = document.querySelector('#our-offer-btn');
	// private offerHeader = document.querySelector('#our-offer-heading');

	private defaultOffset = 80;

	init(): void {
		this.addScrollEvent(this.offerBtn, this.offerHeader);
		this.addScrollEvent(this.offerHeaderLink, this.offerHeader);
		this.addScrollEvent(this.contactHeaderLink, this.contactSection);
	}

	addScrollEvent(executeButton: Element, target: Element, options?: { offset: number }): void {
		const finalOffset = options?.offset || this.defaultOffset;

		executeButton.addEventListener('click', (e: Event) => {
			e.preventDefault();
			window.scrollTo({
				top: innerHeight - target.clientHeight - finalOffset,
			});
		});
	}
}

export { ScrollManager };
