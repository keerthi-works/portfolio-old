/* *********** */
/* variables */
/* *********** */
const yearEl = document.getElementById('year');
const projectsEl = document.getElementById('projects');
const filterEls = document.querySelectorAll('#filters li');

for (let i = 0; i < filterEls.length; i++) {
	filterEls[i].addEventListener('click', function (e) {
		document.querySelector('#filters li.active').classList.remove('active');
		filterEls[i].classList.add('active');
		let tag = e.target.id;
		renderProjects(tag);
	});
}

yearEl.innerHTML = new Date().getFullYear();

/* *********** */
/* projects */
/* *********** */
const projects = [
	{
		name: 'ToDo App',
		img: 'todo.png',
		codeUrl: 'https://github.com/justdecodeme/portfolio/tree/master/projects/todo',
		liveUrl: 'https://justdecodeme.github.io/portfolio/projects/todo/',
		tags: ['html', 'css', 'js'],
	},
	{
		name: 'Slider App',
		img: 'slider.png',
		codeUrl: 'https://github.com/justdecodeme/portfolio/tree/master/projects/slider',
		liveUrl: 'https://justdecodeme.github.io/portfolio/projects/slider/',
		tags: ['html', 'css', 'js'],
	},
	{
		name: 'Change BG App',
		img: 'change-bg.png',
		codeUrl: 'https://github.com/justdecodeme/js-practice-01-change-bg',
		liveUrl: 'https://justdecodeme.github.io/js-practice-01-change-bg/',
		tags: ['html', 'js'],
	},
	{
		name: 'Change BG App',
		img: 'change-bg.png',
		codeUrl: 'https://github.com/justdecodeme/js-practice-01-change-bg',
		liveUrl: 'https://justdecodeme.github.io/js-practice-01-change-bg/',
		tags: ['html', 'js'],
	},
	{
		name: 'ToDo App',
		img: 'todo.png',
		codeUrl: 'https://github.com/justdecodeme/portfolio/tree/master/projects/todo',
		liveUrl: 'https://justdecodeme.github.io/portfolio/projects/todo/',
		tags: ['html', 'css', 'js'],
	},
	{
		name: 'Slider App',
		img: 'slider.png',
		codeUrl: 'https://github.com/justdecodeme/portfolio/tree/master/projects/slider',
		liveUrl: 'https://justdecodeme.github.io/portfolio/projects/slider/',
		tags: ['html', 'css', 'js'],
	},
	{
		name: 'ToDo App',
		img: 'todo.png',
		codeUrl: 'https://github.com/justdecodeme/portfolio/tree/master/projects/todo',
		liveUrl: 'https://justdecodeme.github.io/portfolio/projects/todo/',
		tags: ['html', 'css', 'js'],
	},
	{
		name: 'Slider App',
		img: 'slider.png',
		codeUrl: 'https://github.com/justdecodeme/portfolio/tree/master/projects/slider',
		liveUrl: 'https://justdecodeme.github.io/portfolio/projects/slider/',
		tags: ['html', 'css', 'js'],
	},
	{
		name: 'Change BG App',
		img: 'change-bg.png',
		codeUrl: 'https://github.com/justdecodeme/js-practice-01-change-bg',
		liveUrl: 'https://justdecodeme.github.io/js-practice-01-change-bg/',
		tags: ['html', 'js'],
	},
	{
		name: 'Change BG App',
		img: 'change-bg.png',
		codeUrl: 'https://github.com/justdecodeme/js-practice-01-change-bg',
		liveUrl: 'https://justdecodeme.github.io/js-practice-01-change-bg/',
		tags: ['html', 'js'],
	},
	{
		name: 'ToDo App',
		img: 'todo.png',
		codeUrl: 'https://github.com/justdecodeme/portfolio/tree/master/projects/todo',
		liveUrl: 'https://justdecodeme.github.io/portfolio/projects/todo/',
		tags: ['html', 'css', 'js'],
	},
	{
		name: 'Slider App',
		img: 'slider.png',
		codeUrl: 'https://github.com/justdecodeme/portfolio/tree/master/projects/slider',
		liveUrl: 'https://justdecodeme.github.io/portfolio/projects/slider/',
		tags: ['html', 'css', 'js'],
	},
	{
		name: 'ToDo App',
		img: 'todo.png',
		codeUrl: 'https://github.com/justdecodeme/portfolio/tree/master/projects/todo',
		liveUrl: 'https://justdecodeme.github.io/portfolio/projects/todo/',
		tags: ['html', 'css', 'js'],
	},
	{
		name: 'Slider App',
		img: 'slider.png',
		codeUrl: 'https://github.com/justdecodeme/portfolio/tree/master/projects/slider',
		liveUrl: 'https://justdecodeme.github.io/portfolio/projects/slider/',
		tags: ['html', 'css', 'js'],
	},
	{
		name: 'Change BG App',
		img: 'change-bg.png',
		codeUrl: 'https://github.com/justdecodeme/js-practice-01-change-bg',
		liveUrl: 'https://justdecodeme.github.io/js-practice-01-change-bg/',
		tags: ['html', 'js'],
	},
	{
		name: 'Change BG App',
		img: 'change-bg.png',
		codeUrl: 'https://github.com/justdecodeme/js-practice-01-change-bg',
		liveUrl: 'https://justdecodeme.github.io/js-practice-01-change-bg/',
		tags: ['html', 'js'],
	},
	{
		name: 'ToDo App',
		img: 'todo.png',
		codeUrl: 'https://github.com/justdecodeme/portfolio/tree/master/projects/todo',
		liveUrl: 'https://justdecodeme.github.io/portfolio/projects/todo/',
		tags: ['html', 'css', 'js'],
	},
	{
		name: 'Slider App',
		img: 'slider.png',
		codeUrl: 'https://github.com/justdecodeme/portfolio/tree/master/projects/slider',
		liveUrl: 'https://justdecodeme.github.io/portfolio/projects/slider/',
		tags: ['html', 'css', 'js'],
	},
];

function renderProjects(tag) {
	let output = '';
	// <img src="img/project/${projects[i].img}" alt="Calculator Project Image">

	for (let i = 0; i < projects.length; i++) {
		if (tag == 'all' || projects[i].tags.includes(tag)) {
			output += `<div class="project">
				<div class="project-img" style="
					background-image: url('img/project/${projects[i].img}');
				">
				</div>
				<a class="content flex" href="${projects[i].liveUrl}" target="_blank">
					<p>${projects[i].name}</p>
					<p class="flex">
						<img class="figma_icon" src="img/icon/figma.svg" alt="Figma Icon">
						<img class="external_icon" src="img/icon/arrow-up-right-from-square-solid.svg" alt="External link">
					</p>
				</a>
			</div> `;
		}
	}

	projectsEl.innerHTML = output;
}

renderProjects('all');
