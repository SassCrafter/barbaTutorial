import '../sass/style.scss';
import barba from '@barba/core'
import barbaCss from '@barba/css';

barba.use(barbaCss);

const body = document.querySelector('body');

barba.hooks.before((data) => {
	const currentBg = data.current.container.dataset.background;
	body.style.setProperty('--page-background', currentBg);
});

barba.init({
	transitions: [
		{
			name: 'home',
			beforeOnce() {
				console.log("Before");
			},
			// with css plugin this will not run
			once() {},
			afterOnce() {
				console.log('After')
			},
		},
		// Home end
		{
			name: 'fade',
			to: {
				namespace: ['fade']
			},
			// with css plugin this will not run use beforeLeave afterLeave ...
			leave() {},
			enter() {}
		},
		{
			name: 'clip',
			sync: true,
			to: {
				namespace: ['clip']
			},
			// with css plugin this will not run use beforeLeave afterLeave ...
			leave() {},
			enter() {}
		},
	],
});