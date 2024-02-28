function changeImageOpacity(){
    var images = document.getElementsByTagName('img');
    for (var i =0; i<images.length; i++){
        images[i].style.opacity = 0.5;
    }
}

function loadHTMLFile(filePath){
    var xhr = new XMLHttpRequest();
    xhr.onload = function(){
        if(xhr.status === 200){
            document.getElementById('details').innerHTML = xhr.responseText;

        }
    }
    xhr.open('GET', filePath, true);
    xhr.send();
}

var donQuixoteImage = document.getElementById('don-quixote-img');
donQuixoteImage.addEventListener('click', function(){
    changeImageOpacity();
    loadHTMLFile('data/cervantes_data.html');
    donQuixoteImage.style.opacity = 1;
});

var taleOfTwoCitiesImage = document.getElementById('two-cities-img');
taleOfTwoCitiesImage.addEventListener('click', function(){
    changeImageOpacity();
    loadHTMLFile('data/dickens_data.html');
    taleOfTwoCitiesImage.style.opacity = 1;
});

var lordOfTheRingsImage = document.getElementById('lotr-img');
lordOfTheRingsImage.addEventListener('click', function(){
    changeImageOpacity();
    loadHTMLFile('data/tolkien_data.html');
    lordOfTheRingsImage.style.opacity = 1;
});

