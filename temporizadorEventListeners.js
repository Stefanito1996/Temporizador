const musica = new Audio ("mario-bros-mamma-mia.mp3");
const musica2 = new Audio ("mario-bros-woo-hoo.mp3")
const musica3 = new Audio ("mario-bros-die.mp3");

segundosInput.addEventListener("input", () => {
     if (Number(segundosInput.value) > 59 || (Number(segundosInput.value) < 0))  //en esta forma de validacion, no queda el 0 puesto en el input.
     {
          segundosInput.value = "";
     }
})

minutosInput.addEventListener ("input", () => {
     if (Number(minutosInput.value) > 59 || (Number(minutosInput.value) < 0))
      {
          minutosInput.value = "";
      }
})

horasInput.addEventListener ("input", () => {
     if (Number(horasInput.value) > 24 || (Number(horasInput.value) < 0))
     {
          horasInput.value = "";
     }
})

const setIntervalWithMs = (timeInMs) => {
const timeInterval = 1000;
var intervalId = setInterval(() => {   // debes asignar una variable al set Interval para luego poder limpiarlo.
          let elapsedTime = timeInMs -= timeInterval
          const horasDisplay = Math.trunc(elapsedTime / 3600000);
          const minutesDisplay = Math.trunc(elapsedTime / 60000 % 60)
          const secondsDisplay = elapsedTime % 60000 / 1000

          horasInput.value = horasDisplay
          minutosInput.value = minutesDisplay
          segundosInput.value = secondsDisplay

          tiempoRestante.innerHTML = `${horasDisplay} : ${minutesDisplay} : ${secondsDisplay}`;
          
          if (horasDisplay == 0 && minutesDisplay == 0 && secondsDisplay <= 0) 
          {
               musica3.play()
               horasInput.value = "";  //borra numeros del input al detener
               minutosInput.value = "";
               segundosInput.value = "";
               mostrarInputs();
               tiempoRestante.innerHTML = `00:00:00`;
               clearInterval(intervalId);  
          }
          if (horasDisplay <= 0 && minutesDisplay <= 0 && secondsDisplay <= 0)
          {
                clearInterval(intervalId)
          }
          else 
          {
               return
          }
          if (horasDisplay <= 10 || minutesDisplay <= 10 || secondsDisplay <= 10) 
          {
               tiempoRestante.innerHTML = `0${horasDisplay} : 0${minutesDisplay} : 0${secondsDisplay}` 
          }
          }, timeInterval)

btnDetener.addEventListener ("click", () => 
     {
          horasInput.value = "";  //borra numeros del input al detener
          minutosInput.value = "";
          segundosInput.value = "";
          tiempoRestante.innerHTML = `00:00:00`;  //devuelve valor a 0 en pantalla
          clearInterval(intervalId);
     })

btnPausar.addEventListener ("click", () => 
{
     clearInterval(intervalId); 
})
} 

const verBotonIniciar = () => 
{
     btnIniciar.style.display = "inline"
}
const ocultarInputs = () => 
{
     document.getElementById ("contenedorInputs").style.display = "none"; //oculta inputs para que el usuario no pueda reescribir.
     btnIniciar.style.display = "none";
}

btnIniciar.addEventListener ("click", () => {
     let time = 0;
     time += Number(horasInput.value) * 3600000;
     time += Number(minutosInput.value) * 60000;
     time += Number(segundosInput.value) * 1000;
     
     if (horasInput.value == "" && minutosInput.value == "" && segundosInput.value == "") 
     {
          clearInterval (intervalId)
     } 
     if (horasInput.value != " " && minutosInput.value != " " && segundosInput.value != " ") 
     {
          setIntervalWithMs(time);
     }

})


musica.play();
musica2.play();
musica3.play();
const mostrarInputs = () => 
{
     document.getElementById ("contenedorInputs").style.display = "block";
     btnIniciar.style.display = "inline";
}




