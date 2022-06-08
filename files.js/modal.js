const body = document.querySelector('body .intro');
const featuredbtn = document.getElementById('project-btn');

const popUp = document.createElement('div');
popUp.classList.add('popup');

const projectList = [
  {
    id: 'proj2',
    projectHeader: 'The Vision Straight Discovery Project',
    projectDesc: 'This project is about a fictional show based on a real life musical crew of friends in Bamenda, Cameroon. check it out.',
    projectHtml: 'html',
    projectbootstrap: 'bootstrap',
    projectRuby: 'ruby',
    projectButton: 'See Project',
  },
  {
    id: 'proj3',
    projectHeader: 'Which project will be next?',
    projectDesc: 'A daily selection of privately personalized reads; no accounts orsign-ups required. has been the industrys standard',
    projectHtml: 'html',
    projectbootstrap: 'bootstrap',
    projectRuby: 'ruby',
    projectButton: 'See Project',
  },
  {
    id: 'proj4',
    projectHeader: 'Profesional Art Printing Data',
    projectDesc: 'A daily selection of privately personalized reads; no accounts orsign-ups required. has been the industrys standard',
    projectHtml: 'html',
    projectbootstrap: 'bootstrap',
    projectRuby: 'ruby',
    projectButton: 'See Project',
  },
  {
    id: 'proj5',
    projectHeader: 'Profesional Art Printing Data',
    projectDesc: 'A daily selection of privately personalized reads; no accounts orsign-ups required. has been the industrys standard',
    projectHtml: 'html',
    projectbootstrap: 'bootstrap',
    projectRuby: 'ruby',
    projectButton: 'See Project',
  },
  {
    id: 'proj6',
    projectHeader: 'Profesional Art Printing Data',
    projectDesc: 'A daily selection of privately personalized reads; no accounts orsign-ups required. has been the industrys standard',
    projectHtml: 'html',
    projectbootstrap: 'bootstrap',
    projectRuby: 'ruby',
    projectButton: 'See Project',
  },
  {
    id: 'proj7',
    projectHeader: 'Profesional Art Printing Data',
    projectDesc: 'A daily selection of privately personalized reads; no accounts orsign-ups required. has been the industrys standard',
    projectHtml: 'html',
    projectbootstrap: 'bootstrap',
    projectRuby: 'ruby',
    projectButton: 'See Project',
  },
  {
    id: 'proj1',
    title: 'Multi Post Stories',
    closebtn: '<i id="closeModal" class="fa fa-times" aria-hidden="true"></i>',
    html: 'html',
    bootstrap: 'bootstrap',
    ruby: 'Ruby On Rails',
    projectImage: 'images/Snapshoot Portfolio.png',
    projectDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam amet animi voluptate doloribus at quaerat, vitae dicta sunt possimus voluptatum, facilis vel? Eligendi, harum ipsum excepturi sint at quasi? Repellendus eveniet suscipit quibusdam inventore architecto minus eligendi adipisci. Harum atque voluptate dolore fugiat pariatur eius ullam architecto porro aspernatur nihil.',
    projectbtnlive: 'https://carlylechia.github.io/MY-PORTFOLIO/',
    projectbtnsource: 'https://github.com/carlylechia/MY-PORTFOLIO.git',
  },
];

function modalpopup() {
  popUp.style.display = 'block';
  body.appendChild(popUp);
  for (let i = 0; i < projectList.length; i += 1) {
    const showing = `
  <div class="popupcont">
      <div class="popupcontheader">
        <h2 class="desktophide">${projectList[i].title}</h2>
        <h2 class="mobilehide">Keeping track of hundreds  of components website</h2>
        <button id="closeModal" class="closeModal" draggable = "true">${projectList[i].closebtn}</button>
      </div>
      <div class="popupcontlangs">
        <ul>
          <li>${projectList[i].html}</li>
          <li>${projectList[i].bootstrap}</li>
          <li>${projectList[i].ruby}</li>
        </ul>
      </div>
      <div class="popupcontbody">
        <div class="popupcontbodyleft">
          <img src="${projectList[i].projectImage}" alt="image">
        </div>
        <div class="popupcontbodyright">
          <p class="desktophide">${projectList[i].projectDesc}</p>
          <p class="mobilehide">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.</p>
          <div class="popupcontbodyrightbtns">
          <a href="https://carlylechia.github.io/MY-PORTFOLIO/"><button type="button" id="modalbtns live">See Live <img src="images/viewlive.png" alt="view live"></button></a>
          <a href="https://github.com/carlylechia/MY-PORTFOLIO.git"><button type="button" id="modalbtns live">See Source <img src="images/viewsource.png" alt="view Source"></button></a>
          </div>
        </div>
      </div>
    </div>
  `;
    popUp.innerHTML = showing;
    body.appendChild(popUp);
  }
  document.addEventListener('click', (e) => {
    if (e.target.id === 'closeModal') {
      popUp.style.display = 'none';
    }
  });
}

document.addEventListener('click', (e) => {
  if (e.target.id === 'proj1') {
    modalpopup();
  }
});
featuredbtn.onclick = modalpopup;

const popUp2 = document.createElement('div');
popUp2.classList.add('popup');

function modalpopup2() {
  popUp2.style.display = 'block';
  body.appendChild(popUp2);
  const showing = `
  <div class="popupcont">
      <div class="popupcontheader">
        <h2 class="desktophide">Vision-Straight Discovery Project</h2>
        <h2 class="mobilehide">Vision-Straight Discovery Project</h2>
        <button id="closeModal" class="closeModal" draggable = "true">${projectList[projectList.length - 1].closebtn}</button>
      </div>
      <div class="popupcontlangs">
        <ul>
          <li>${projectList[projectList.length - 1].html}</li>
          <li>${projectList[projectList.length - 1].bootstrap}</li>
          <li>${projectList[projectList.length - 1].ruby}</li>
        </ul>
      </div>
      <div class="popupcontbody">
        <div class="popupcontbodyleft">
          <img src="../images/vsb-home.png" alt="image">
        </div>
        <div class="popupcontbodyright">
          <p class="desktophide">${projectList[projectList.length - 1].projectDesc}</p>
          <p class="mobilehide">
          This project is based on a fictitious musical talent event named above, organized by the Vision Straight Brothers (VSB) crew in Bamenda, Cameroon. This is to attest that I, Chia Carlyle, have completed the first module of the Microverse curriculum called, The Portal.
          Click the link in the Live Demo section to check it out.</p>
          <div class="popupcontbodyrightbtns">
          <a href="https://carlylechia.github.io/Vision-Straight/"><button type="button" id="modalbtns live">See Live <img src="images/viewlive.png" alt="view live"></button></a>
          <a href="https://github.com/carlylechia/Vision-Straight.git"><button type="button" id="modalbtns live">See Source <img src="images/viewsource.png" alt="view Source"></button></a>
          </div>
        </div>
      </div>
    </div>
  `;
  popUp2.innerHTML = showing;
  body.appendChild(popUp2);

  document.addEventListener('click', (e) => {
    if (e.target.id === 'closeModal') {
      popUp2.style.display = 'none';
    }
  });
}

document.addEventListener('click', (e) => {
  if (e.target.id === 'proj2') {
    modalpopup2();
  }
});

const projectsSection = document.querySelector('.my-projects');
function loopdiv() {
  projectsSection.innerHTML = '';
  for (let i = 0; i < projectList.length - 1; i += 1) {
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
             <button id=${projectList[i].id} class="testbtnn" onClick="loopdiv()">${projectList[i].projectButton}</button>
           </div>
           <div class="projectButton openProject">
             <button id=${projectList[i].id} class="testbtnn" onClick="loopdiv()">${projectList[i].projectButton}</button>
           </div>
      </div>`;
  }
}

window.addEventListener('load', () => {
  loopdiv();
});