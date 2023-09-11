const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');
CALCULAR.addEventListener('click', ()=>{
    const DATO = document.getElementById('peso').value
}
     if (DATO > 0 && DATO <=30 ) {
        ERROR.style.display = 'none'
        let flujo = calcFlujo(DATO);
        let mantenimiento = flujo*1.5;
        FLU.innerHTML = flujo + ' cc/hr';
        MAN.innerHTML = 'm+m/2 ' + mantenimiento + ' cc/hr';
        FLU.style.display = 'block';
        MAN.style.display = 'block';
        ERROR.style.display = 'block';
        FLU.style.display = 'none';
    } else if(DATO>30){
        ERROR.style.display = 'none'
        let flujo =  ( (DATO * 4) + 7) / (DATO + 90);
        FLU.innerHTML = flujo*1500 + ' cc/hr';
        MAN.innerHTML = flujo*2000 + ' cc/hr';
        FLU.style.display = 'block';
        MAN.style.display = 'block';
        ERROR.style.display = 'block';
        FLU.style.display = 'none';
    }else {
        MAN.style.display = 'none';
    }
//})
//function calcFlujo(peso){
    //let resto = peso;
    //let flujo = 0;
    //if (resto>=20){
      //  let aux = resto-20;
       // flujo += aux;
       // resto -= aux;
    // } 
    //if (resto>=10){
      //  let aux = resto-10;
       // flujo += aux*2;
        //esto -= aux;
    //}
   // flujo += resto*4.1;
    //return flujo;
//}
 
const A= 1000
const B= 500
const C= 90 
function calcFlujo(peso){
    let valor= peso
if(valor>30){
 let resto=(valor)-(-(90));
 let Mult= valor*4;
 let suma= Mult+7; 
 let Div= (suma/resto)*1500
 let resultado= Div/24
   return resultado;
}
else if (valor>20){
  let Cadakg=(valor-20)*20
  let suma= A+B;
  suma+=Cadakg;
  let resultado= suma/24;
  return resultado;
}
else if (valor<=10){
 let Cadakg= valor*100
 let suma=Cadakg;
 let resultado = suma/24;
 return resultado;
}
}


