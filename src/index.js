import './styles/main.scss';

import { NavSwitcher } from './scripts/navSwitch';
import { Splide } from '@splidejs/splide';

new NavSwitcher().init();

const slider = new Splide(document.querySelector('#slider'), {
	lazyLoad: true,
	perPage: 3,
	autoHeight: true,
	type: 'loop',
	gap: '1.5rem',
	breakpoints: {
		1250: {
			perPage: 2,
		},
		660: {
			perPage: 1,
		},
	},
});

slider.mount();
