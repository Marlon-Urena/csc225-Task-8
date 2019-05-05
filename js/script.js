$(document).ready(function(){
    $('.btn').on('click', function(){
        var apiBase = "https://jsonplaceholder.typicode.com/photos";
    axios.get(apiBase)
        .then(function(response){
            var photoHTML = response.data.map(function(photo){
                return $('<div>').addClass('task').data('id', photo.id).html("<img src=\"" + photo.url + "\" alt=\"" + photo.title + "\">"
                + "<p>" + photo.title + "</p>");
            });
            $('#tasks').html(photoHTML);
        });
    });
});