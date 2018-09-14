$(() => {
  $('#ttt').hide()
  $('#yo').hide()
  $('.message').hide()
  $('.skill').hide()
  $('.tic-tac-toe').on('mouseenter', () => {
    $('#ttt').show()
    $('.message').hide()
    $('.skill').hide()
  })
  $('.tic-tac-toe').on('mouseleave', () => $('#ttt').hide())
  $('.your-opinion').on('mouseenter', () => {
    $('#yo').show()
    $('.message').hide()
    $('.skill').hide()
  })
  $('.your-opinion').on('mouseleave', () => $('#yo').hide())
  $('#about-me').on('click', () => {
    $('.message').show()
    $('.skill').hide()
  })
  $('#skills').on('click', () => {
    $('.skill').show()
    $('.message').hide()
  })
}).foundation()
