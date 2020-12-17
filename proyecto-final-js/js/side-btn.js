$(document).ready(function () {

  //Se trae usuario y puntaje almacenados en Localstorage
  $('#username').text(localStorage.getItem('nombreDeUsuario'));
  $('#points').text(localStorage.getItem('score'));
  var soundOn = JSON.parse(localStorage.getItem('soundOn'));

  if (soundOn === null) {
    soundOn = true;
  }
  
  localStorage.setItem('soundOn', JSON.stringify(soundOn));
  
  if (!soundOn) {
    $('#sound').find($(".fas")).toggleClass('fa-volume-up fa-volume-mute');
  }

  // Activa y desactiva ventana modal del usuario 

  $('#user-trigger').bind('click', function () {
    $('.wrapper').toggleClass('open');
    $('.modal').toggleClass('open');
  });

  //Activar y desactivar audio general, cambia ícono de sonido

  $("#sound").on("click", function () {

    // soundOn = JSON.parse(localStorage.getItem('soundOn')) || true;

    soundOn = !soundOn;

    localStorage.setItem('soundOn', JSON.stringify(soundOn));

    $(this).find($(".fas")).toggleClass('fa-volume-up fa-volume-mute');

    if (!soundOn) {

      $('#sound1, #sound2').trigger('pause');
    }

  });

  // function sounds(audio) {

  //   if (sound) {
  //     $(audio).trigger('play');
  //     setTimeout(function () {
  //       $(audio).trigger('pause');
  //     }, 1000);
  //   }
  // }

}) //ready