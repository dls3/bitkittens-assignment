document.addEventListener("DOMContentLoaded", function() {

  var summonKitties = document.querySelector('.summon-cats');
  console.log(summonKitties)

  summonKitties.addEventListener('click', function(event) {
    console.log('CLICK')
    $.ajax( {
      url: 'http://bitkittens.herokuapp.com/cats.json',
      method: 'GET',
      dataType: 'JSON'
    }).done(function(responseData) {
        console.log( responseData);
        var catPhoto = document.createElement('img');
        var catPhotoSrc = responseData.cats[0].photo;
        catPhoto.src = catPhotoSrc;
        document.querySelector('.cat-box').append(catPhoto);
      });
    });

});

// document.querySelector('#step3456').append(response);

// Creates a new <img> tag
// Sets the src attribute of the <img> to the cat's photo
// Sets the alt attribute of the <img> to "Photo of (insert cat name here)"
// Inserts that <img> into one of the empty .cat-box divs
