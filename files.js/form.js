const email = document.getElementById('email');
const error = document.getElementById('warning');
const form = document.getElementById('formawesome');

function formValidate() {
  if (email.value !== email.value.toLowerCase()) {
    error.innerHTML = `Your email is not in lowercase. Consider using ${email.value.toLowerCase()} instead`;
    return false;
  }
  return true;
}

form.addEventListener('submit', (postIt) => {
  if (!formValidate()) {
    postIt.preventDefault();
  }
});

let localStore = {
  fullName: '',
  email: '',
  message: '',
};

if (localStorage.getItem('localStore') != null) {
  localStore = JSON.parse(localStorage.getItem('localStore'));
  form.username.value = localStore.fullName;
  form.email.value = localStore.email;
  form.msg.value = localStore.message;
}

form.addEventListener('change', () => {
  localStore.fullName = form.username.value;
  localStore.email = form.email.value;
  localStore.message = form.msg.value;
  localStorage.setItem('localStore', JSON.stringify(localStore));
});
