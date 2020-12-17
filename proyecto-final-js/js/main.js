$(document).ready(function () {

    var playBtn = document.getElementById('play-btn');
    var nicknameOk = document.getElementById('crearUsuario');
    var message = document.getElementById('message');
    var points = 0;

    nicknameOk.addEventListener("click", function () {

        var user = document.getElementById('nickname').value;

        if (user != "") {
            playBtn.style.visibility = "visible";
        } else {
            playBtn.style.visibility = "hidden";
            message.innerHTML = 'Write your nickname to continue';
        }

        localStorage.setItem('nombreDeUsuario', user);

        localStorage.setItem('score', points);

        $('#username').text(localStorage.getItem('nombreDeUsuario'));

        $('#points').text(localStorage.getItem('score'));

      $('.category').each(function () {

        // let categoryDone = JSON.parse(localStorage.getItem(this.id));

        localStorage.setItem(this.id, JSON.stringify(false));
    
        //     // if (categoryDone) {
    
        //     //     $(this).find('.fa-check').css("visibility", "visible");
        //     //     $(this).css("background-color", " #D63D3880").css("cursor", "default");
        //     //     $(this).find('a').css("cursor", "default").removeClass('hover').removeAttr("href");
        //     // }
        })
        
    })

}) //ready