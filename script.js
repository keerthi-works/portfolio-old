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
		name: 'logo',
		img: 'logo-sample.png',
		liveUrl: "https://www.figma.com/file/0nbRCpi5MDj4cUFPmHr2Wt/Logo?type=design&node-id=0%3A1&mode=design&t=menc7mOEWAYpc8zM-1",
		tags: [ 'logo'],
	},
	
	{
		name: 'logo',
		img: 'logo-sample.png',
		liveUrl: "https://www.figma.com/design/VaQgldUXQsAUkoV9eK6sJV/Untitled?node-id=0%3A1&t=94mfhrmv2TEN4mHW-1",
		tags: [ 'logo'],
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
