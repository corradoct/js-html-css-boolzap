$(document).ready(
  function() {

    var ora = time();

    $('.contactList .active .time span').text(ora);

    $('#contactView').append(contattoAttivo(ora));

    $('.contactList li').on('click',
      function() {
        if (!($(this).hasClass('active'))) {
          $('.contactList li').removeClass('active');
          $(this).addClass('active');
          $(this).find('.time span').text(ora);
          $('#contactView').text('');
          $('#contactView').append(contattoAttivo(ora));
        }
      }
    );

    $('#sent').on('click',
      function() {
        var messaggio = $('#writeMessage').val();
        inviaMessaggio(messaggio);
        $('#contactView .details span').text('Sta scrivendo');
        setTimeout(riceviMessaggio, 3000);
      }
    );

    $('#writeMessage').keypress(
      function(event) {
        if (event.which === 13) {
          var messaggio = $('#writeMessage').val();
          inviaMessaggio(messaggio);
          $('#contactView .details span').text('Sta scrivendo');
          setTimeout(riceviMessaggio, 3000);
        }
      }
    );





  }
);
