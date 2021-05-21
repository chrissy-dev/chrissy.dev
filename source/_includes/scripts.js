var theme = localStorage.getItem('theme');
var themeToggle = document.querySelector('.js-theme-toggle');

if (theme == "color-scheme=light") {
	document.documentElement.setAttribute('data-color-scheme', 'light');
	document.querySelector('.moon').style.display = 'block';
	document.querySelector('.sun').style.display = 'none';
} else if (theme == "color-scheme=dark") {
	document.documentElement.setAttribute('data-color-scheme', 'dark');
	document.querySelector('.moon').style.display = 'none';
	document.querySelector('.sun').style.display = 'block';
} else {
	document.querySelector('.moon').style.display = 'block';
	document.querySelector('.sun').style.display = 'none';
}

themeToggle.addEventListener('click', function () {
	if (document.documentElement.getAttribute("data-color-scheme") == "light") {
		document.documentElement.setAttribute('data-color-scheme', 'dark');
		this.querySelector('.moon').style.display = 'none';
		this.querySelector('.sun').style.display = 'block';
		localStorage.setItem('theme', 'color-scheme=dark');
	} else {
		document.documentElement.setAttribute('data-color-scheme', 'light');
		this.querySelector('.sun').style.display = 'none';
		this.querySelector('.moon').style.display = 'block';
		localStorage.setItem('theme', 'color-scheme=light');
	}
});