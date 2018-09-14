$(() => {
  $('#ttt').hide()
  $('#yo').hide()
  $('.message').hide()
  $('.tic-tac-toe').on('mouseenter', () => {
    $('#ttt').show()
    $('.message').hide()
  })
  $('.tic-tac-toe').on('mouseleave', () => $('#ttt').hide())
  $('.your-opinion').on('mouseenter', () => {
    $('#yo').show()
    $('.message').hide()
  })
  $('.your-opinion').on('mouseleave', () => $('#yo').hide())
  $('#about-me').on('click', () => $('.message').show())
  $('#skills').on('click', () => $('.skill').show())
}).foundation()
