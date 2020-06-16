// ***********************  FUNZIONI  *********************//
function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function time() {
  var d = new Date();
  var h = addZero(d.getHours());
  var m = addZero(d.getMinutes());
  var completeTime = h + ':' + m;
  return completeTime;
}

function inviaMessaggio(messaggioDigitato) {
  var clonePTemplate = $('.template p').clone();
  clonePTemplate.prepend(messaggioDigitato);
  clonePTemplate.children('span').text(time());
  clonePTemplate.addClass('sent');
  $('.chat').append(clonePTemplate);
  $('#writeMessage').val('');
}

function riceviMessaggio() {
  var clonePTemplate = $('.template p').clone();
  var message = ('Ciao, chi sei?');
  clonePTemplate.prepend(message);
  clonePTemplate.children('span').text(time());
  clonePTemplate.addClass('received');
  $('.chat').append(clonePTemplate);
  $('#contactView .details span').text('Ultimo accesso oggi alle ' + time());
}

function contattoAttivo(ora) {
  var contattoAttivo = $('.contactList li.active').clone();
  contattoAttivo.find('span').text('Ultimo accesso alle ' + ora);
  contattoAttivo.find('.time span').text('');
  return contattoAttivo;
}
