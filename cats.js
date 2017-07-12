document.addEventListener("DOMContentLoaded", function() {

  var summonKitties = document.querySelector('.summon-cats');
  var catNumber = 1;

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
        document.querySelector('#cat'+catNumber).append(catPhoto);
        catNumber++;
      });
    });

});
