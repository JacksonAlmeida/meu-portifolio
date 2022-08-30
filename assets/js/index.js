<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js"></script>
<script type="text/javascript">
      $('nav a').click(function(e)){
      e.preventDefault();
      var id = $(this).attr('href');
        targetOffset = $(id).offset().top;
      $('html, body').animate({
        scrollTop:targetOffset
      },500)

      }
      </script>