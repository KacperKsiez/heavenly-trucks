import './styles/main.scss';

// import { Splide } from '@splidejs/splide';

// new Splide('.splide', {
// 	autoplay: true,
// 	interval: 5000,
// 	type: 'loop',
// }).mount();

import { NavSwitcher } from './scripts/navSwitch';
import { ScrollManager } from './scripts/scroll';

new NavSwitcher().init();
// new ScrollManager().init();
