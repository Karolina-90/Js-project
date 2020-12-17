$(document).ready(function () {

    $('.category').each(function () {

        let categoryDone = JSON.parse(localStorage.getItem(this.id));

        if (categoryDone) {

            $(this).find('.fa-check').css("visibility", "visible");
            $(this).css("background-color", " #D63D3880").css("cursor", "default");
            $(this).find('a').css("cursor", "default").removeClass('hover').removeAttr("href");
        }
    })

}) //ready