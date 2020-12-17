$(document).ready(function () {

  var level = 1;
  var input1 = document.getElementById("input1");
  var imagen1 = document.getElementById("imagen1");
  var pointsHtml = document.getElementById("points");
  var answerOk = document.getElementById("answerOk");
  var answerWrong = document.getElementById("answerWrong");
  var firstTry = true;
  var points = parseInt(localStorage.getItem('score'));
  var playAnother = document.getElementById("playAnother");

  imagen1.src = gameList[level - 1].imgUrl;

  function resultado() {

    let inputRespuestaUsuario = input1.value.toLowerCase();

    //Inicializo puntaje

    arrowGo.style.visibility = "visible";

    function EvaluarResultado(respuestaCorrecta, respuestaUsuario, imagenACambiar) {

      firstTry = false;

      if (respuestaCorrecta === respuestaUsuario) {

        points += 100;

        pointsHtml.innerHTML = points;

        $('#input1').css("background-color", "  #87d67f");
        answerOk.style.visibility = "visible";
        answerWrong.style.visibility = "hidden";

        //funcion audio 
        sounds('#sound1');

      } else {

        $('#input1').css("background-color", "#d3635f");
        answerWrong.style.visibility = "visible";
        answerOk.style.visibility = "hidden";

        //funcion audio 
        sounds('#sound2');
      }
    }

    if (firstTry) {
      EvaluarResultado(gameList[level - 1].name, inputRespuestaUsuario, imagen1);
    }

  }; //resultado

  var boton = document.getElementById("boton");

  boton.addEventListener("click", resultado);

  var arrowGo = document.getElementById("go");
  arrowGo.addEventListener("click", nextLevel);

  //Pasar por parámetro la imagen
  function nextLevel(e) {

    var close = document.querySelectorAll(".close")[0];
    var open = document.getElementById('cta');
    var modal = document.querySelectorAll(".modal")[0];
    var modalC = document.querySelectorAll(".modal-container")[0];

    firstTry = true;

    level++;

    $('#input1').css("background-color", "white");
    answerWrong.style.visibility = "hidden";
    answerOk.style.visibility = "hidden";

    if (level > gameList.length) {

      localStorage.setItem(currentCategory, JSON.stringify(true));

      modalC.style.opacity = "1";
      modalC.style.visibility = "visible";
      modal.classList.toggle = ("modal-close");

      close.addEventListener("click", function () {

        modal.classList.toggle = ("modal-close");
        setTimeout(function () {
          modalC.style.opacity = "0";
          modalC.style.visibility = "hidden";
        }, 300)
      })

      window.addEventListener("click", function (e) {
        console.log(e.target)
        if (e.target == modalC) {
          modal.classList.toggle = ("modal-close");

          setTimeout(function () {
            modalC.style.opacity = "0";
            modalC.style.visibility = "hidden";
          }, 300)
        }
      })

    } else {
      arrowGo.style.visibility = "hidden";
      input1.value = "";
      imagen1.src = gameList[level - 1].imgUrl;
      $("#level").text(level);
      animacion();
    }
  }

  //Cambia color cuando me paro sobre el input correspondiente

  $("#input1").focus(function () {
    $(this).css("background-color", "#EBAD80");
  });

  //Quita el color del input cuando me salgo del mismo

  $("#input1").blur(function () {
    $(this).css("background-color", "white");
  });

  // Cambia el color del botón al pasar el mouse por encima
  // Retorna el color anterior cuando me salgo

  $("#boton").hover(function () {
      $(this).css("background-color", "#009975");
    },
    function () {
      $(this).css("background-color", "#3f61cf");
    });

  // Al presionar ENTER activa la misma función que haría si hiciera click en el botón

  $(document).on('keypress', function (tecla) {
    if (tecla.which == 13) {
      resultado();
    }
  });

  setInterval(animacion, 1000);

  function animacion() {
    $("#go").fadeTo(500, .1)
      .fadeTo(500, 1);
  }

  function sounds(audio) {

    $('#username').text(localStorage.getItem('nombreDeUsuario'));

    let soundOn = JSON.parse(localStorage.getItem('soundOn')); 

    if (soundOn) {
      $(audio).trigger('play');
      setTimeout(function () {
        $(audio).trigger('pause');
      }, 1000);
    }
  }

  playAnother.addEventListener('click', function() {
    localStorage.setItem('score', points);
  })

}) // document.ready