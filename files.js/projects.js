const projectList = [
  {
    id: 'proj2',
    projectImage: '../images/vsb-home.png',
    projectHeader: 'The Vision Straight Discovery Project',
    projectDesc: 'This project is about a fictional show based on a real life musical crew of friends in Bamenda, Cameroon. check it out.',
    projectHtml: 'html',
    projectbootstrap: 'bootstrap',
    projectRuby: 'ruby',
    projectButton: 'See Project',
  },
  {
    id: 'proj3',
    projectImage: '../images/movies-home.png',
    projectHeader: 'Movies2Watch',
    projectDesc: 'We built a movie app that sends and receives data to and from not just one, but two APIs to display a large array of tv shows and allow for engagements.',
    projectHtml: 'html',
    projectbootstrap: 'bootstrap',
    projectRuby: 'ruby',
    projectButton: 'See Project',
  },
  {
    id: 'proj4',
    projectImage: '',
    projectHeader: 'Profesional Art Printing Data',
    projectDesc: 'A daily selection of privately personalized reads; no accounts orsign-ups required. has been the industrys standard',
    projectHtml: 'html',
    projectbootstrap: 'bootstrap',
    projectRuby: 'ruby',
    projectButton: 'See Project',
  },
  {
    id: 'proj5',
    projectImage: '',
    projectHeader: 'Profesional Art Printing Data',
    projectDesc: 'A daily selection of privately personalized reads; no accounts orsign-ups required. has been the industrys standard',
    projectHtml: 'html',
    projectbootstrap: 'bootstrap',
    projectRuby: 'ruby',
    projectButton: 'See Project',
  },
  {
    id: 'proj6',
    projectImage: '',
    projectHeader: 'Profesional Art Printing Data',
    projectDesc: 'A daily selection of privately personalized reads; no accounts orsign-ups required. has been the industrys standard',
    projectHtml: 'html',
    projectbootstrap: 'bootstrap',
    projectRuby: 'ruby',
    projectButton: 'See Project',
  },
  {
    id: 'proj7',
    projectImage: '',
    projectHeader: 'Profesional Art Printing Data',
    projectDesc: 'A daily selection of privately personalized reads; no accounts orsign-ups required. has been the industrys standard',
    projectHtml: 'html',
    projectbootstrap: 'bootstrap',
    projectRuby: 'ruby',
    projectButton: 'See Project',
  },
];

const projectsSection = document.querySelector('.my-projects');
function loopdiv() {
  projectsSection.innerHTML = '';
  for (let i = 0; i < projectList.length; i += 1) {
    projectsSection.innerHTML = `${projectsSection.innerHTML}
      <div class="project">
           <div class="projectHeader">
             <h3>${projectList[i].projectHeader}</h3>
           </div>
           <div class="projectBody">
             <p>
             ${projectList[i].projectDesc}
             </p>
             <ul>
               <li class="projectHTML">
                 <ul>
                  <li>${projectList[i].projectHtml}</li>
                 </ul>
               </li>
               <li class="projectBootstrap">
                 <ul>
                   <li>${projectList[i].projectbootstrap}</li>
                 </ul>
               </li>
               <li class="projectRuby">
                 <ul>
                   <li>${projectList[i].projectRuby}</li>
                 </ul>
               </li>
             </ul>
           </div>
           <div class="projectButton openProject">
             <button id=${projectList[i].id} class="testbtn">${projectList[i].projectButton}</button>
           </div>
      </div>`;
  }
}

// const projectBg = () => {
//   const card = document.querySelector('.project');
//   for (let i = 0; i < projectList.length; i += 1) {
//     card.style.backgroundImage = URL(projectList[i].projectImage);
//   }
// };
// projectBg();

window.addEventListener('load', () => {
  loopdiv();
});
