$(document).ready(() => {
    console.log("READY!");
    console.log(animalsList);
    const palabra = "apple";
  
    $.ajax({
      type: "GET",
      url:
        "https://api.unsplash.com/photos/random/?client_id=iirmvxCJ9YwZC4X-QCmmXOiZc5ZGD5fnRvSWGPsn0cg" ,
      dataType: "json",
      success: function (response) {
        //$("#JsonResponse").html(JSON.stringify(response))
        console.log(response);
        var img = document.getElementById("imagen");
        img.src = response.urls.raw;
      },
      error: function (error) {
        console.log(error)
      }
    });
  });