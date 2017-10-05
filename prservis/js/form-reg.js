var form = document.querySelector('.registration-form');
var login = document.querySelector('.form__username');
var pass = document.querySelector('.form__password');
var passRepeat = document.querySelector('.form__password-repeat');
var agree = document.querySelector('.agree');
var action = 'registration';

var qs = '';

qs = qs + 'login' + '=' + encodeURIComponent(login.value) + '&' + 'password' + '=' + encodeURIComponent(pass.value) + '&' + 'action' + '=' + encodeURIComponent(action.value) + '&';

login.focus();
 

  agree.classList.remove('agree');
agree.addEventListener ('click', function() {
  agree.classList.add('agree');
})

form.addEventListener('submit', function(event) {
  if (!login.value || !pass.value) {
    event.preventDefault();
    alert('Необходимо ввести логин и пароль');
  };

  if (login.value.length < 10) {
    login.classList.add('form__username--error');
    event.preventDefault();
  };

  if (pass.value.length < 6) {
    pass.classList.add('form__password--error');
    event.preventDefault();
  };

  if (pass.value != passRepeat.value) {
    passRepeat.classList.add('form__password-repeat--error');
    event.preventDefault();
  }

  if (!(agree.classList.contains('agree'))) {
    event.preventDefault();
  }
});

login.addEventListener ('focus', function() {
  login.classList.remove('form__username--error');
});

pass.addEventListener ('focus', function() {
  pass.classList.remove('form__password--error');
});

passRepeat.addEventListener ('focus', function() {
  passRepeat.classList.remove('form__password-repeat--error');
});


  (function() {
    form.addEventListener ('submit', function(event) {
      event.preventDefault();
    var xhr = new XMLHttpRequest();

    xhr.open('post', '/send');

    xhr.addEventListener('readystatechange', function() {
      if (xhr.readyState == 4) {
        console.log(xhr.responseText);
      }
    });

      xhr.send(qs);

      



});
  })();