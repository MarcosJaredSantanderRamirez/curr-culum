document.addEventListener('DOMContentLoaded', function() {


    var instructions = document.getElementById('instructions');
    instructions.style.display = 'flex';
    instructions.style.textAlign = 'center';
    instructions.style.justifyContent = 'center';
    instructions.style.width = '100%';

    setTimeout(function(){
      instructions.style.display = 'none';
      }, 5000);
    })

    var calificaciones = [
      10, 10, 10, 10, 10, 9, 10, 9, 10, 9, 9, 10, 9, 9, 
      9, 10, 9, 10, 10, 8, 9, 10, 10, 9, 9, 10, 9, 10,
      10, 10, 10, 9, 9, 8, 10,
      10, 10, 9, 9, 10, 8, 10,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ];
    
    function cambiarTextoYFondo(event) {
      var div = event.target;
      var index = parseInt(div.id.substring(1)) - 1; 
      var calificacion = calificaciones[index]; 

      if (!div.originalHTML) {
        div.originalHTML = div.innerHTML;
      }
      
      if (calificacion === undefined) {
        console.error('Calificación no encontrada para:', div.id);
        return; 
      }
  
      // Cambiar el texto
      div.innerHTML = `
        <div class="subject-title">Calificación:</div>
        <div class="subject-code">${calificacion}</div>
      `;
  
      // Cambiar el fondo según la calificación
      if (calificacion === 0) {
        div.style.background = 'white'
        div.style.color = 'black';
        div.innerHTML = `
        <div class="subject-title">Calificación:</div>
        <div class="subject-code">n/a</div>
      `;
         // 0
      } else if (calificacion >= 0 && calificacion <= 6) {
        div.style.background = 'red';
      } else if (calificacion >= 7 && calificacion <= 8) {
        div.style.background = 'gold';
      } else if (calificacion >= 9) {
        div.style.background = 'green';
      }

      // Regresar a la normalidad después de 2 segundos
      setTimeout(normalizarDiv, 1500, div);
    }
  
    function normalizarDiv(div) {
        if (div.originalHTML) {
            div.innerHTML = div.originalHTML;
            delete div.originalHTML;
        }
        div.style.background = '';
        div.style.color = '';
    }

    // Agregar el evento mouseover a los divs
    for (var i = 1; i <= 64; i++) {
      var div = document.getElementById('a' + i);
      if (div) {
        div.addEventListener('mouseenter', cambiarTextoYFondo);
      } else {
        console.error('Div no encontrado: a' + i);
      }
    }
