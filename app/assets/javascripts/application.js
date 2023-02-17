//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

window.GOVUKPrototypeKit.documentReady(() => {
  // Add JavaScript here
})

function upload_file() {
  var file_div = document.getElementById('uploaded_file');

  file_div.classList.remove('govuk-visually-hidden');
}

function remove_file() {
  var file_div = document.getElementById('uploaded_file');

  file_div.classList.add('govuk-visually-hidden');
}
