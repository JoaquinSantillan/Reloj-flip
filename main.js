

var hora = document.getElementById('hora')
var hora2 = document.getElementById('hora2')
var hora3 = document.getElementById('hora3')
var hora3Content = document.getElementById('hora3-content')
var segundos3 = document.getElementById('segundos3')
var minutos = document.getElementById('minutos')
var minutos2 = document.getElementById('minutos2')
var minutos3 = document.getElementById('minutos3')
var minutos3Content = document.getElementById('minutos3-content')
var segundos = document.getElementById('segundos')
var segundos2 = document.getElementById('segundos2')
var ampm = document.getElementById('ampm')

    
setInterval(() => {

        let reloj = new Date();
    
        let horaJ = reloj.getHours();
        let horaJ2 = reloj.getHours();
        let horaJ3 = reloj.getHours();
        let minutosJ = reloj.getMinutes();
        let minutosJ2 = reloj.getMinutes();
        let minutosJ3 = reloj.getMinutes();
        let segundosJ = reloj.getSeconds();
        let segundosJ2 = reloj.getSeconds();
        let segundosJ3 = reloj.getSeconds();
    
        if (hora >= 12 && hora2 >= 12  && hora3 >= 12) {
            hora = horaJ - 12;
            hora2 = horaJ2 - 12
        }

        if (hora == 0 && hora2 == 0 && hora3 == 0  ) {
            hora = 12
            hora2 = 12
            hora3 = 12
        }

        if( minutosJ < 10 && minutosJ2 < 10 && minutosJ3 < 10){
            minutosJ = "0" + minutosJ
            minutosJ2 = "0" + minutosJ2
            minutosJ3 = "0" + minutosJ3
        }

        if( segundosJ < 10 && segundosJ < 10 && segundosJ3 < 10){
            segundosJ = "0" + segundosJ
            segundosJ2 = "0" + segundosJ2
            segundosJ3 = "0" + segundosJ3
        }

        if( horaJ < 10 && horaJ2 < 10  && horaJ3 < 10 ){
            horaJ = "0" + horaJ
            horaJ2 = "0" + horaJ2 
            horaJ3 = "0" + horaJ3  
        }

        if( segundosJ == 59){
            setInterval(() => {
                minutos3Content.classList.toggle('active') 
            }, 59000);
        }

        if( minutosJ == 59){
            setInterval(() => {
                hora3Content.classList.toggle('active2') 
            }, 3600000);
        }

        hora.textContent = horaJ
        hora2.textContent = horaJ2
        hora3.textContent = horaJ3
        minutos.textContent = minutosJ;
        minutos2.textContent = minutosJ2;
        minutos3.textContent = minutosJ3;
        segundos.textContent = segundosJ;
        segundos2.textContent = segundosJ2;
        segundos3.textContent = segundosJ3;
    

}, 1000);





