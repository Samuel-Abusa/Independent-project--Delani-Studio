$ (document).ready(function(){
  $ ('.jPrg1, .jPrg2, .jPrg3').css({'display' : 'none'})
});

$ (document).ready(function(){
  $ ('.jImg1').click(function(){
    $ ('.jPrg1').css({'display' : 'block'})
    $ ('.jImg1').css({'display' : 'none'})
  })
});

$ (document).ready(function(){
  $ ('.jImg2').click(function(){
    $ ('.jPrg2').css({'display' : 'block'})
    $ ('.jImg2').css({'display' : 'none'})
  })
});

$ (document).ready(function(){
  $ ('.jImg3').click(function(){
    $ ('.jPrg3').css({'display' : 'block'})
    $ ('.jImg3').css({'display' : 'none'})
  })
});

$ (document).ready(function(){
  $ ('.jPrg1').click(function(){
    $ ('.jImg1').css({'display' : 'block'})
    $ ('.jPrg1').css({'display' : 'none'})
  })
});

$ (document).ready(function(){
  $ ('.jPrg2').click(function(){
    $ ('.jImg2').css({'display' : 'block'})
    $ ('.jPrg2').css({'display' : 'none'})
  })
});

$ (document).ready(function(){
  $ ('.jPrg3').click(function(){
    $ ('.jImg3').css({'display' : 'block'})
    $ ('.jPrg3').css({'display' : 'none'})
  })
});
$ (document).ready(function(){
  $ ('.button').click(function(){
    alert('We have received your message. Thank you for contacting us!')
  })
});