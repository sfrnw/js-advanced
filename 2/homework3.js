var button = document.getElementById('send');

 button.addEventListener('click', function() {
  var xhr = new XMLHttpRequest();

  // настройка запроса
  xhr.open('GET', 'http://127.0.0.1:8080/homework3.json');
  // отправка запроса
  xhr.send();

  xhr.onreadystatechange = function() {
    if(xhr.readyState === XMLHttpRequest.DONE) {
      try {
        var users = JSON.parse(xhr.responseText);

        var ul = document.createElement('ul');
        users.forEach(function(user) {
          var li = document.createElement('li');
          li.textContent = "click for big: ";
          ul.appendChild(li);
          var img = document.createElement("IMG");
          img.src = user.imageSmall;
          li.appendChild(img);
          var img2 = document.createElement("img");
          img2.src = user.imageBig;
          img.onclick = function(){
              li.removeChild(img);
              li.appendChild(img2);
          }
        });

        document.body.appendChild(ul);
      } catch {
        console.log('Error');
      }
    }
  }
});

