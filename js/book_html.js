function opacity() {
    $('img').css('opacity', '0.5');
}
function trigger(path){
    function makeRequest() {
        var xhr = new XMLHttpRequest();
        xhr.onload = function() {
            if(xhr.status === 200) {
                $('#details').html(xhr.responseText);
            }   
        };

    }
    makeRequest();
    xhr.open('GET', path, true);
    xhr.send(null);
}

$('#don-quixote-img').on('click', function() {
    trigger('data/cervantes_data.html');
    opacity();
    this.css('opacity', '1.0');
});