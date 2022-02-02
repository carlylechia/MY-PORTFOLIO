/* eslint-disable no-unused-vars */
const logo = document.getElementsByClassName('logo');
const dropDownContainer = document.getElementsByClassName('mobile-dropdown')[0];
// eslint-disable-next-line no-unused-vars
const menuLinks = document.querySelectorAll('drop-option');
const icon = document.querySelector('.menu .fa-bars');

dropDownContainer.style.visibility = 'hidden';

function changeIcon() {
  icon.classList.toggle('fa-times');
  icon.classList.toggle('fa-bars');
  icon.style.position = 'absolute';
  icon.style.right = '0';
  icon.style.marginRight = '24px';

  if (dropDownContainer.style.visibility === 'hidden') {
    dropDownContainer.style.visibility = 'visible';
  } else if (dropDownContainer.style.visibility === 'visible') {
    dropDownContainer.style.visibility = 'hidden';
  }
}

function hideMenu() {
  dropDownContainer.style.visibility = 'hidden';
  icon.classList.toggle('fa-times');
  icon.classList.toggle('fa-bars');
}
