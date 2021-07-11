
let red = $("red").css("background-color");
let green = $("green").css("background-color");
let blue = $("blue").css("background-color");
let yellow = $("yellow").css("background-color");

// Convesor do código de cada div colorida em seu id

ids = ['#red', '#green', '#blue', '#yellow'];


document.addEventListener("DOMContentLoaded", function(event) {

    let sequencia = [0,0,0,0];
    let user_sequencia = [0, 0 ,0 ,0 ]
    let intervalo;
    let passando2 = 0;    
    let horadedigitar = false;





function mensagem(mensagem){

document.getElementById('mensagem').innerHTML =  mensagem;


}



//Função para iniciar o programa

$('#iniciar').click( function () {

    mensagem("Memorize a sequência");

    for(var i =1; i<=4; i++)
    {
        sequencia[i-1] = (Math.floor(Math.random()*(5-1)))

          while( sequencia[i-1]== sequencia[i-2])
             sequencia[i-1] = (Math.floor(Math.random()*(5-1))); // Gerar número diferente caso for igual ao anterior

    }   

    var passando = 0;

    console.info('seq is',sequencia)

    intervalo = setInterval(
        function () {
            

        
         if(passando<=3) 
             mudar_cor(ids[sequencia[passando]], true);
             //Sequencia representa a sequência de ids que seram reproduzidas, ele usa um código numerico para cada 0 == red, 1 ==  green
             //Assim ids conveter esse código numerico para ids que o jquery entende
 
             if(passando == 4)    
             {
                
                mudar_cor("backtonormal", false);
                mensagem("Digite a sequência");
                digitando(); 
                 
             }
         
         passando++;    
         
     }, 2000)



     

     

    
    

});


    function mudar_cor(id, mudar){

        
        
        $("#red").css("background-color", 'brown');
        $("#green").css("background-color", 'chartreuse');
        $("#blue").css("background-color", 'darkcyan');
        $("#yellow").css("background-color", 'darkgoldenrod');
        
        
       if(mudar == true) 
          $(id).css("background-color", "DeepPink");
       









    }



    function digitando(){



    
        
    window.clearInterval(intervalo);
    intervalo = null;

    horadedigitar = true;

    // veja o click das divs logo abaixo
   
        
  
    }


    function exibir_resultado()
    {
        console.log('user', user_sequencia);
      

        var now = ArraysSame();
        if( ( now) & (passando2 == 3))
          mensagem("Parabéns, você acertou!!!");

        if( !(now ) & (passando2 == 3))
            mensagem("Você errou, reinicie o jogo!");
            
        if(passando2 == 3)
        {
            passando2=0;    
            
        }   
      
      passando2++;     
    
    }



    $("#red").click(function(){
            
           clicke(0); 
           exibir_resultado();
           
           
    })


    $("#green").click(function(){
        
         
        clicke(1); 
        exibir_resultado();
           
    })

    $("#blue").click(function(){
        
        
        clicke(2); 
        exibir_resultado();
           
    })

    $("#yellow").click(function(){
        
      
        clicke(3); 
        exibir_resultado();
    })


    function clicke(a1){
        
        if((passando2 <=3) & (horadedigitar))
        {
            user_sequencia[passando2] = a1;
            
        }   
    }

    function ArraysSame(){

        for(var i=0; i< 4; i++)
            {
                if(!(user_sequencia[i] == sequencia[i]))
                   return false;

            }   

        return true;
    }


    $('.botao').mouseover(function() {
        mudar_cor('', false);
        $(this).css('background-color','red');
     })

    $('.botao').mouseout(function() {
       
        mudar_cor('', false);
       
    }) 

  

});