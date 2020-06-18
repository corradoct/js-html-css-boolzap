$(document).ready(
  function() {
    // Recupero l'ora attuale
    var ora = time();
    // Aggiungo l'ora dell'ultimo accesso ai contatti in lista
    $('.contactList .active .time span').text(ora);
    // Inserisco il contatto attivo in lista nella barra superiore relativa alla sua chat
    $('#contactView').append(contattoAttivo(ora));
    // Assegno l'evento click ai contanti della lista
    $('.contactList li').on('click',
      function() {
        // Se il contatto selezionato non ha la classe attiva, la rimuovo a tutti e la aggiungo solo a quello selezionato
        if (!($(this).hasClass('active'))) {
          $('.contactList li').removeClass('active');
          $(this).addClass('active');
          // Aggiungo l'ora effettiva
          $(this).find('.time span').text(ora);
          // Inserisco il nuovo contatto attivo nella barra della chat al posto di quello vecchio
          $('#contactView').text('');
          $('#contactView').append(contattoAttivo(ora));
          // Recupero l'attributo data-contact dal contatto attivo e lo collego alla rispettiva finestra di chat
          var dataContatto = $(this).attr('data-contact');
          var selettoreChat = '.chat div[data-chat="' + dataContatto + '"]';
          if ($(selettoreChat).hasClass('hidden')) {
            $('.chat').children('div').removeClass('d-flex');
            $('.chat').children('div').addClass('hidden');
            $(selettoreChat).removeClass('hidden');
            $(selettoreChat).addClass('d-flex');
          }
        }
      }
    );

    // Quando c'è il focus sulla barra di scrittura del messaggio diventa visibile l'icona dell'aeroplano
    $('#writeMessage').on('focusin',
      function() {
        $('#microfono').addClass('hidden');
        $('#aeroplano').removeClass('hidden');
      }
    );

    // Quando non c'è il focus sulla barra di scrittura del messaggio diventa visibile l'icona del microfono
    $('#writeMessage').on('focusout',
      function() {
        $('#microfono').removeClass('hidden');
        $('#aeroplano').addClass('hidden');
      }
    );

    // Al click dell'icona aeroplano viene inviato il messaggio e dopo 1 secondo si riceve il messaggio di risposta
    $('#sent').on('click',
      function() {
        var messaggio = $('#writeMessage').val();
        if (messaggio != '') {
          inviaMessaggio(messaggio);
          $('#contactView .details span').text('Sta scrivendo');
          setTimeout(riceviMessaggio, 1000);
        }
      }
    );

    // Alla pressione del tasto invio viene inviato il messaggio e dopo 1 secondo si riceve il messaggio di risposta
    $('#writeMessage').keypress(
      function(event) {
        if (event.which === 13) {
          var messaggio = $('#writeMessage').val();
          if (messaggio != '') {
            inviaMessaggio(messaggio);
            $('#contactView .details span').text('Sta scrivendo');
            setTimeout(riceviMessaggio, 1000);
          }
        }
      }
    );

    // Inserendo le lettere nella barra di ricerca contatto vengono visualizzati i contatti che includono quelle lettere
    $('#searchBar').keyup(
      function() {
        // Seleziono tutti i contatti
        var contatti = $('.contactList li');
        // Memorizzo i dati che ha inserito l'utente e il normalizzo
        var userSearch = $(this).val().toLowerCase();
        // Controllo per ogni contatto se sono presenti le lettere che ha inserito l'utente
        contatti.each(
          function() {
            // Faccio la ricerca normalizzando anche i nomi dei contatti
            var contactName = $(this).find('p').text().toLowerCase();
            // Controllo se le lettere sono incluse
            var search = contactName.includes(userSearch);
            // Se sono incluse rimuovo la classe hidden, altrimenti la aggiungo
            if (!search) {
              $(this).addClass('hidden');
            } else {
              $(this).removeClass('hidden');
            }
          }
        );
      }
    );

    // Aggiungo l'evento click alla freccia della dropdown
    $(document).on( 'click', '.with-dropdown .arrow',
      function() {
        // Faccio in modo che la freccia resti visibile quando la dropdown è aperta
        $(this).toggleClass('hidden');
        // Apro e chiudo la dropdown selezionata
        $(this).siblings('.dropdown').toggleClass('hidden');
        // Chiudo tutte le altre dropdown tranne quella selezionata
        $('.dropdown').not($(this).siblings('.dropdown')).addClass('hidden');
        // Aggiungo l'evento click alla voce cancella messaggio
        $(this).siblings('.dropdown').find('.delete').click(
          function() {
            // Cancello il messaggio relativo alla dropdown selezionata
            $(this).parents('.with-dropdown').remove();
        });
    });
  }
);
