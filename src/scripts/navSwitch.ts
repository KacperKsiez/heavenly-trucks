class NavSwitcher {
	private headerDiv = document.querySelector('.main-header');
	private sectionTopDiv = document.querySelector('.section-top');

	constructor() {}

	init() {
		this.addObserver();
	}

	addObserver() {
		const observer = new IntersectionObserver(
			(elements) => {
				const sectionTopDiv = elements[0];

				if (!sectionTopDiv.isIntersecting) {
					this.headerDiv.classList.add('main-header--scrolled');
				} else {
					this.headerDiv.classList.remove('main-header--scrolled');
				}
			},
			{
				threshold: 0.8,
			}
		);

		observer.observe(this.sectionTopDiv);
	}
}

export { NavSwitcher };
