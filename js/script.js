$(document).ready(function(){
    $('.btn').on('click', function(){
        var apiBase = "https://jsonplaceholder.typicode.com/photos";
    axios.get(apiBase)
        .then(function(response){
            console.log(response);
            var photoHTML = response.data.map(function(photo){
                return $('<div>').addClass('task').data('id', photo.id).html("<img src=\"" + photo.url + "\" alt=\"" + photo.title + "\">"
                + "<p>" + photo.title + "</p>");
            });
            $('#tasks').html(photoHTML);
        });
    });
});


//GET request to url
//loop over response
//for each item in loop output a div with an <img> with the URL as its source and the title as its alt tag
//Below <img> , a <p> tag with response title
//title
//url