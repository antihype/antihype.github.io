var form = document.querySelector('.form-sign');
var login = document.querySelector('.form__username');
var pass = document.querySelector('.form__password');
var action = 'signin';
var qs = '';

qs = qs + 'login' + '=' + encodeURIComponent(login.value) + '&' + 'password' + '=' + encodeURIComponent(pass.value) + '&' + 'action' + '=' + encodeURIComponent(action.value) + '&';

login.focus();

form.addEventListener('submit', function(event) {
  if (!login.value || !pass.value) {
    event.preventDefault();
    alert('Необходимо ввести логин и пароль');
  };
});

(function() {
    form.addEventListener ('submit', function(event) {
      event.preventDefault();
    var xhr = new XMLHttpRequest();

    xhr.open('post', 'text.txt');

    xhr.addEventListener('readystatechange', function() {
      if (xhr.readyState == 4) {
        console.log(xhr.responseText);
      }
    });

      xhr.send(qs);

});
  })();