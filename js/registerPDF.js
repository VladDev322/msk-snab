function updateFileName() {
  let input = document.getElementById('requisites');
  let fileNamePlaceholder = document.getElementById('fileNamePlaceholder');

  if (input.files.length > 0) {
    fileNamePlaceholder.innerText = input.files[0].name;
  } else {
    fileNamePlaceholder.innerText = 'Реквизиты компании';
  }
}

function openFileInput() {
  let input = document.getElementById('requisites');
  input.click();
}
