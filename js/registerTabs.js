let tabs = document.querySelectorAll('.register__menu-link');
let datas = document.querySelectorAll('.auth__form');

tabs.forEach(tab => {
  tab.addEventListener('click', function(element) {

    // active necessary tab
    tabs.forEach(tab => tab.classList.remove('register__menu-link--active'));
    element.target.classList.add('register__menu-link--active');

    // show necessary data
    let btn = element.target.getAttribute('data-face');
    datas.forEach(data => data.classList.remove('auth__form--active'));
    document.querySelector(`[data-data="${btn}"]`).classList.add('auth__form--active');
  })
})