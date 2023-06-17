import './styles/main.scss';

import { Splide } from '@splidejs/splide';

new Splide('.splide', {
	autoplay: true,
	interval: 5000,
	type: 'loop',
}).mount();
