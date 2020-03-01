function openSM() {
  document.querySelector('#sideMenu-id').style.width = '450px';
  document.querySelector('#page-content').style.marginLeft = '450px';
}

function closeSM() {
  document.querySelector('#sideMenu-id').style.width = '0px';
  document.querySelector('#page-content').style.marginLeft = '0px';
}