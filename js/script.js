$(document).ready(
  function() {
    $('#sent').on('click',
      function() {
        var messaggio = $('#writeMessage').val();
        inviaMessaggio(messaggio);
        setTimeout(riceviMessaggio, 3000);
      }
    );

    $('#writeMessage').keypress(
      function(event) {
        if (event.which === 13) {
          var messaggio = $('#writeMessage').val();
          inviaMessaggio(messaggio);
          setTimeout(riceviMessaggio, 3000);
        }
      }
    );


    // ***********************  FUNZIONI  *********************//
    function inviaMessaggio(messaggioDigitato) {
      var clonePTemplate = $('.template p').clone();
      clonePTemplate.prepend(messaggioDigitato);
      clonePTemplate.addClass('sent');
      $('.chat').append(clonePTemplate);
      $('#writeMessage').val('');
    }

    function riceviMessaggio() {
      var clonePTemplate = $('.template p').clone();
      clonePTemplate.prepend('Ciao, chi sei?');
      clonePTemplate.addClass('received');
      $('.chat').append(clonePTemplate);
    }


  }
);
