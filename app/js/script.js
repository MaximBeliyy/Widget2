$(document).ready(function() {
    $('a#open').click(function(event) {
        event.preventDefault();
        $('#overlay').fadeIn(400, function() {
            $('#unblock__form')
            .css('display', 'block')
            .animate({opacity: 1, top: '50%'}, 200);
        });
    });

    $('.close, #overlay').click(function(){
        $('#unblock__form').animate({opacity: 0, top: '45%'}, 200,
            function(){
                $(this).css('display', 'none');
                $('#overlay').fadeOut(400);
            })
        ;
    });

});


$('[lang="rus"]').hide();
$('[lang="ua"]').hide();

$('#lang-switch').change(function () {
  var lang = $(this).val();
  switch (lang) {
    case 'en': 
      $('[lang]').hide();
      $('[lang="en"]').show();
      break;
    case 'rus':
      $('[lang]').hide();
      $('[lang="rus"]').show();
      break;
    case 'ua':
      $('[lang]').hide();
      $('[lang="ua"]').show();
      break;
    default:
      $('[lang]').hide();
      $('[lang="en"]').show();
  }
});