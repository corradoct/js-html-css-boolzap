// ***********************  FUNZIONI  *********************//

// Funzione per aggiungere uno zero davanti ai minuti se sono inferiori a 10.

function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

// Funzione per ottenere l'orario attuale.
// Ritorna l'orario formato da ora e minuti.

function time() {
  var d = new Date();
  var h = addZero(d.getHours());
  var m = addZero(d.getMinutes());
  var completeTime = h + ':' + m;
  return completeTime;
}

// Funzione per inviare un messaggio.
// Richiede come argomento il messaggio digitato dall'utente nel campo input.

function inviaMessaggio(messaggioDigitato) {
  // Clono il template del messaggio
  var clonePTemplate = $('.template .with-dropdown').clone();
  // Aggiungo il messaggio digitato dall'utente al template
  clonePTemplate.prepend(messaggioDigitato);
  // Aggiungo l'ora attuale al messaggio
  clonePTemplate.children('.time').text(time());
  // Aggiungo la classe per la formattazione stilistica al messaggio
  clonePTemplate.addClass('sent');
  // Inserisco il messaggio completo nella finestra di chat attiva
  $('.chat .d-flex').append(clonePTemplate);
  // Imposto lo scroll automatico della finestra attiva per avere il focus sempre sull'ultimo messaggio inviato
  $('.chat .d-flex').scrollTop($('.chat .d-flex').prop('scrollHeight'));
  // Resetto la barra dell'input
  $('#writeMessage').val('');
}

// Funzione per inviare un messaggio.
// Richiede come argomento il messaggio digitato dall'utente nel campo input.

function riceviMessaggio() {
  // Clono il template del messaggio
  var clonePTemplate = $('.template .with-dropdown').clone();
  // Creo il messaggio di risposta
  var message = ('Ok');
  // Aggiungo il messaggio al template
  clonePTemplate.prepend(message);
  // Aggiungo l'ora attuale al messaggio
  clonePTemplate.children('.time').text(time());
  // Aggiungo la classe per la formattazione stilistica al messaggio
  clonePTemplate.addClass('received');
  // Inserisco il messaggio completo nella finestra di chat attiva
  $('.chat .d-flex').append(clonePTemplate);
  // Imposto lo scroll automatico della finestra attiva per avere il focus sempre sull'ultimo messaggio ricevuto
  $('.chat .d-flex').scrollTop($('.chat .d-flex').prop('scrollHeight'));
  // Cambio l'orario dell'ultimo accesso nella barra account
  $('#contactView .details span').text('Ultimo accesso oggi alle ' + time());
}

// Funzione per clonare il contatto con cui si sta chattando e modificarne i dettagli
// Richiede come argomenti l'ora attuale
// Ritorna l'ggetto contatto attivo con tutti i dettagli sul contatto con cui si sta chattando

function contattoAttivo(ora) {
  // Clono il contatto attivo in chat
  var contattoAttivo = $('.contactList li.active').clone();
  // Inserisco l'ultimo accesso con l'orario
  contattoAttivo.find('span').text('Ultimo accesso alle ' + ora);
  // Elimino l'orario vecchio
  contattoAttivo.find('.time span').text('');
  // Ritorno il contatto attivo con i nuovi dettagli
  return contattoAttivo;
}
