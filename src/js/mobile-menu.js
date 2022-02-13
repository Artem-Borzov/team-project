(() => {
	const mobileMenu = document.querySelector('.js-menu-container');
	const openMenuBtn = document.querySelector('.js-open-menu');
	const closeMenuBtn = document.querySelector('.js-close-menu');
	const closeMenuId1Btn = document.querySelector('.js-close-id1-menu');
	const closeMenuId2Btn = document.querySelector('.js-close-id2-menu');
	const closeMenuId3Btn = document.querySelector('.js-close-id3-menu');
	const closeMenuId4Btn = document.querySelector('.js-close-id4-menu');
	const closeMenuId5Btn = document.querySelector('.js-close-id5-menu');

	const toggleMenu = () => {
		const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
		openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
		mobileMenu.classList.toggle('is-open');

		const scrollLockMethod = !isMenuOpen ? 'disableBodyScroll' : 'enableBodyScroll';
		bodyScrollLock[scrollLockMethod](document.body);
	};

	openMenuBtn.addEventListener('click', toggleMenu);
	closeMenuBtn.addEventListener('click', toggleMenu);
	closeMenuId1Btn.addEventListener('click', toggleMenu);
	closeMenuId2Btn.addEventListener('click', toggleMenu);
	closeMenuId3Btn.addEventListener('click', toggleMenu);
	closeMenuId4Btn.addEventListener('click', toggleMenu);
	closeMenuId5Btn.addEventListener('click', toggleMenu);
	// Закрываем мобильное меню на более широких экранах
	// в случае изменения ориентации устройства.
	window.matchMedia('(min-width: 940px)').addEventListener('change', e => {
		if (!e.matches) return;
		mobileMenu.classList.remove('is-open');
		openMenuBtn.setAttribute('aria-expanded', false);
		bodyScrollLock.enableBodyScroll(document.body);
	});
})();
