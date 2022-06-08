const body = document.querySelector('body .intro');
const featuredbtn = document.getElementById('project-btn');

const popUp = document.createElement('div');
popUp.classList.add('popup');

const modalList = [
  {
    id: 'proj1',
    title: '',
    closebtn: '<i id="closeModal" class="fa fa-times" aria-hidden="true"></i>',
    html: 'html',
    bootstrap: 'bootstrap',
    ruby: 'Ruby On Rails',
    projectImage: 'images/Portfolio-modal.png',
    projectDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam amet animi voluptate doloribus at quaerat, vitae dicta sunt possimus voluptatum, facilis vel? Eligendi, harum ipsum excepturi sint at quasi? Repellendus eveniet suscipit quibusdam inventore architecto minus eligendi adipisci. Harum atque voluptate dolore fugiat pariatur eius ullam architecto porro aspernatur nihil.',
    projectbtnlive: 'https://carlylechia.github.io/MY-PORTFOLIO/',
    projectbtnsource: 'https://github.com/carlylechia/MY-PORTFOLIO.git',
  },
  {
    id: 'proj2',
    title: 'The Vision Straight Discovery Project',
    closebtn: '<i id="closeModal" class="fa fa-times" aria-hidden="true"></i>',
    html: 'html',
    bootstrap: 'bootstrap',
    ruby: 'Ruby On Rails',
    projectImage: '../images/vsb-home.png',
    projectDesc: 'This project is based on a fictitious musical talent event named above, organized by the Vision Straight Brothers (VSB) crew in Bamenda, Cameroon. This is to attest that I, Chia Carlyle, have completed the first module of the Microverse curriculum called, The Portal.',
    projectbtnlive: 'https://carlylechia.github.io/Vision-Straight/',
    projectbtnsource: 'https://github.com/carlylechia/Vision-Straight.git',
  },
];

function modalpopup() {
  popUp.style.display = 'block';
  const showing = `
  <div class="popupcont">
      <div class="popupcontheader">
        <h2 class="desktophide">${modalList[0].title}</h2>
        <h2 class="mobilehide">${modalList[0].title}</h2>
        <button id="closeModal" class="closeModal" draggable = "true">${modalList[0].closebtn}</button>
      </div>
      <div class="popupcontlangs">
        <ul>
          <li>${modalList[0].html}</li>
          <li>${modalList[0].bootstrap}</li>
          <li>${modalList[0].ruby}</li>
        </ul>
      </div>
      <div class="popupcontbody">
        <div class="popupcontbodyleft">
          <img src="${modalList[0].projectImage}" alt="image">
        </div>
        <div class="popupcontbodyright">
          <p class="desktophide">${modalList[0].projectDesc}</p>
          <p class="mobilehide">${modalList[0].projectDesc}</p>
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

document.addEventListener('click', (e) => {
  if (e.target.id === 'proj1') {
    modalpopup();
  }
});
featuredbtn.onclick = modalpopup;

// document.addEventListener('click', (e) => {
//   if (e.target.id === 'proj3') {
//     modalpopup3();
//   }
// });
// document.addEventListener('click', (e) => {
//   if (e.target.id === 'proj4') {
//     modalpopup4();
//   }
// });
// document.addEventListener('click', (e) => {
//   if (e.target.id === 'proj5') {
//     modalpopup5();
//   }
// });
// document.addEventListener('click', (e) => {
//   if (e.target.id === 'proj6') {
//     modalpopup6();
//   }
// });
// document.addEventListener('click', (e) => {
//   if (e.target.id === 'proj7') {
//     modalpopup7();
//   }
// });

const popUp2 = document.createElement('div');
popUp2.classList.add('popup');

function modalpopup2() {
  popUp2.style.display = 'block';
  body.appendChild(popUp2);
  const showing = `
  <div class="popupcont">
      <div class="popupcontheader">
        <h2 class="desktophide">${modalList[1].title}</h2>
        <h2 class="mobilehide">${modalList[1].title}</h2>
        <button id="closeModal" class="closeModal" draggable = "true">${modalList[1].closebtn}</button>
      </div>
      <div class="popupcontlangs">
        <ul>
          <li>${modalList[1].html}</li>
          <li>${modalList[1].bootstrap}</li>
          <li>${modalList[1].ruby}</li>
        </ul>
      </div>
      <div class="popupcontbody">
        <div class="popupcontbodyleft">
          <img src="${modalList[1].projectImage}" alt="image">
        </div>
        <div class="popupcontbodyright">
          <p class="desktophide">${modalList[1].projectDesc}</p>
          <p class="mobilehide">${modalList[1].projectDesc}</p>
          <div class="popupcontbodyrightbtns">
          <a href="https://carlylechia.github.io/MY-PORTFOLIO/"><button type="button" id="modalbtns live">See Live <img src="images/viewlive.png" alt="view live"></button></a>
          <a href="https://github.com/carlylechia/MY-PORTFOLIO.git"><button type="button" id="modalbtns live">See Source <img src="images/viewsource.png" alt="view Source"></button></a>
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
