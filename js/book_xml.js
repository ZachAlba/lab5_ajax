function changeImageOpacity(){
    var images = document.getElementsByTagName('img');
    for (var i =0; i<images.length; i++){
        images[i].style.opacity = 0.5;
    }
}

function getNodeValue(obj, tag) {
    return obj.getElementsByTagName(tag)[0].firstChild.nodeValue;
}

function loadXML(filePath, index) {
    var xhr = new XMLHttpRequest();
    var detailsDiv = document.getElementById("details");
    detailsDiv.innerHTML = "";

    xhr.onload = function() {
        if (xhr.status === 200) {
            var xml = xhr.responseXML;          
            var books = xml.getElementsByTagName("book");
            var book = books[index];

            for(var i =0; i<book.length; i++){
                var author, title, sold, description;
                author = document.createElement("h2");
                author.appendChild(document.createTextNode(getNodeValue(book, "author")));
                detailsDiv.appendChild(author);
                title = document.createElement("h3");
                title.appendChild(document.createTextNode(getNodeValue(book, "title")));
                detailsDiv.appendChild(title);
                sold = document.createElement("p");
                sold.appendChild(document.createTextNode(getNodeValue(book, "sold")));
                detailsDiv.appendChild(sold);
                description = document.createElement("p");
                description.appendChild(document.createTextNode(getNodeValue(book, "description")));
                detailsDiv.appendChild(description);
                console.log(getNodeValue(book, "author"));
            }
            
        }
    };

    xhr.open("GET", filePath, true);
    xhr.send();
}

var donQuixoteImage = document.getElementById('don-quixote-img');
donQuixoteImage.addEventListener('click', function(){
    changeImageOpacity();
    loadXML('data/book_data.xml', 0);
    donQuixoteImage.style.opacity = 1;
});

var taleOfTwoCitiesImage = document.getElementById('two-cities-img');
taleOfTwoCitiesImage.addEventListener('click', function(){
    changeImageOpacity();
    loadXML('data/book_data.xml', 1);
    taleOfTwoCitiesImage.style.opacity = 1;
});

var lordOfTheRingsImage = document.getElementById('lotr-img');
lordOfTheRingsImage.addEventListener('click', function(){
    changeImageOpacity();
    loadXML('data/book_data.xml', 2);
    lordOfTheRingsImage.style.opacity = 1;
});