import './styles/main.scss';

import { NavSwitcher } from './scripts/navSwitch';
import { Splide } from '@splidejs/splide';

new NavSwitcher().init();

const slider = new Splide(document.querySelector('#slider'), {
	lazyLoad: true,
	perPage: 3,
	autoHeight: true,
});

slider.mount();
