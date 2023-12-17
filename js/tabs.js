let tabs = document.querySelectorAll('.product__tab');
let datas = document.querySelectorAll('.product__data');

tabs.forEach(tab => {
  tab.addEventListener('click', function(element) {

    // active necessary tab
    tabs.forEach(tab => tab.classList.remove('product__tab--active'));
    element.target.classList.add('product__tab--active');

    // show necessary data
    let btn = element.target.getAttribute('data-tab');
    datas.forEach(data => data.classList.remove('product__data--active'));
    document.querySelector(`[data-data="${btn}"]`).classList.add('product__data--active');
  })
})
