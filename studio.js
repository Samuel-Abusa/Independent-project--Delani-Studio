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