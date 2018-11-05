'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const config = require('./config.js')

$(() => {
  $('#upload-form').on('submit', function (event) {
    event.preventDefault()
    const data = new FormData(event.target)
    $.ajax({
      method: 'POST',
      url: config.apiUrl + '/uploads',
      processData: false,  // Important!
      contentType: false,
      data: data
    })
      .then((response) => {
        console.log(response)
        $('#new-image').attr('src', response.upload.url)
      })
      .then($('#upload-message').html('Upload Success!'))
      .catch((response) => {
        console.log(response)
      })
  })
})
