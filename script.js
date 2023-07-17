function borrarInputs() {
  var respuesta = document.querySelector('input[id="no"]:checked').value; {
    document.getElementById("boucher").value = "";
    document.getElementById("hora").value = "";
    document.getElementById("minuto").value = "";
    document.getElementById("lugar").value = "";
  }
}

const checkboxMoto = document.getElementById('vehiculono');
checkboxMoto.addEventListener('click', () => {
  // Si el checkbox de moto está seleccionado
  if (checkboxMoto.checked) {
    // Deseleccionar todos los otros checkboxes de la tabla
    const checkboxes = document.querySelectorAll('#verificar input[type="checkbox"]:not(#opcion3)');
    checkboxes.forEach(checkbox => {
      checkbox.checked = false;
    });
  }
});

const checkboxMoto2 = document.getElementById('vehiculosi');
checkboxMoto2.addEventListener('click', () => {
  // Si el checkbox de moto está seleccionado
  if (checkboxMoto2.checked) {
    // Deseleccionar todos los otros checkboxes de la tabla
    const checkboxes2 = document.querySelectorAll('#verificar input[type="checkbox"]:not(#opcion3)');
    checkboxes2.forEach(checkbox => {
      checkbox.checked = false;
    });
  }
});
$(document).on('click', 'input:checkbox', getCheckedBox);

getCheckedBox();

function getCheckedBox() {
  
  var checkedBox = $.map($('input:checkbox:checked'), 
                         function(val, i) {
                            return val.value;
                         });
  console.clear();
  console.log(checkedBox);
}



function isMobile() {
    if (sessionStorage.desktop)
        return false;
    else if (localStorage.mobile)
        return true;
    var mobile = ['iphone', 'ipad', 'android', 'blackberry', 'nokia', 'opera mini', 'windows mobile', 'windows phone', 'iemobile'];
    for (var i in mobile)
        if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0) return true;
    return false;
}

const formulario = document.querySelector('#formulario');
const buttonSubmit = document.querySelector('#submit');
const urlDesktop = 'https://web.whatsapp.com/';
const urlMobile = 'https://api.whatsapp.com/';
const telefono = '';

formulario.addEventListener('submit', (event) => {
    event.preventDefault()
    buttonSubmit.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i>'
    buttonSubmit.disabled = true
    setTimeout(() => {
        let codigo = document.querySelector('#codigo').value
        let vehiculo = document.querySelector('#vehiculo').value
        let ppu = document.querySelector('#ppu').value
        //let todoscheckbox = document.querySelector('#todos');
        //let todos = "todos los elementos" + (todoscheckbox.checked ? "✅" : "❌");
        let aseocheckbox = document.querySelector('#aseo');
        let aseo = (aseocheckbox.checked ? "✅" : "❌") + " _Aseo_"; 
        let tarjetacheckbox = document.querySelector('#tarjeta');
        let tarjeta = (tarjetacheckbox.checked ? "✅" : "❌") + " _Tarjeta de Combustible_";
        let doccheckbox = document.querySelector('#doc');
        let doc = (doccheckbox.checked ? "✅" : "❌") + " _Documentos Vehículo_";
        let bitacoracheckbox = document.querySelector('#bitacora');
        let bitacora = (bitacoracheckbox.checked ? "✅" : "❌") + " _Bitácora_";
        let llavecheckbox = document.querySelector('#llave');
        let llave = (llavecheckbox.checked ? "✅" : "❌") + " _Llave Rueda_";
        let gatacheckbox = document.querySelector('#gata');
        let gata = (gatacheckbox.checked ? "✅" : "❌") + " _Gata_";
        let ruedacheckbox = document.querySelector('#rueda');
        let rueda = (ruedacheckbox.checked ? "✅" : "❌") + " _Rueda Repuesto_";
        let extintorcheckbox = document.querySelector('#extintor');
        let extintor = (extintorcheckbox.checked ? "✅" : "❌") + " _Extintor_";
        let escudocheckbox = document.querySelector('#escudo');
        let escudo = (escudocheckbox.checked ? "✅" : "❌") + " _Escudo_";
        //let botiquincheckbox = document.querySelector('#botiquin');
        //let botiquin = "Botiquin " + (botiquincheckbox.checked ? "✅" : "❌");
        //let chalecocheckbox = document.querySelector('#chaleco');
        //let chaleco = "Chaleco Reflectante " + (chalecocheckbox.checked ? "✅" : "❌");


        
        let conos = document.querySelector('#conos').value
        //let cargosfaltantes = document.querySelector('#cargosfaltantes').value
        let lugar = document.querySelector('#lugar').value

        let hora = document.querySelector('#hora').value
        let hrsinput = document.querySelector('#hora');
        let hrs = (hrsinput.value ? "_ _hrs_" : "");

        let dospuntosinput = document.querySelector('#hora');
        let dospuntos = (dospuntosinput.value ? " _" + hora + "_ _*:*_ _" : "");

        let minuto = document.querySelector('#minuto').value

        let boucher = document.querySelector('#boucher').value
        let boucherinput = document.querySelector('#boucher');
        let bou = (boucherinput.value ? " _" + boucher + "_ " : "");

        let estanque = document.querySelector('#estanque').value

        let novedadesvehiculo = document.querySelector('#novedadesvehiculo').value
        let novedadesvehiculoinput = document.querySelector('#novedadesvehiculo');
        let novedades = (novedadesvehiculoinput.value ? novedadesvehiculo : "Vehículo Sin Novedades");

        let sionocheckbox = document.querySelector('#si');
        let siono = (sionocheckbox.checked ? "" : "_*NO SE CARGA COMBUSTIBLE*_ "  + "%0a");

        let siboucher = document.querySelector('#si');
        let sibouche = (siboucher.checked ? '*Boucher :*' + bou + "%0a" : "");

        let silugar = document.querySelector('#si');
        let siluga = (silugar.checked ? '*Lugar :*' + " _" + lugar + "_" + "%0a" : "");        

        let sihora = document.querySelector('#si');
        let sihour = (sihora.checked ? '*Hora :*' + dospuntos + minuto + hrs + "%0a" : "");


        let simoto = document.querySelector('#vehiculosi');
        let simoto2 = (simoto.checked ? "" : "00");
        //if (vehiculo1 == 2) {
          // código para la opción de moto
        //} else if (vehiculo1 == 1) {
        //  let nomoto = document.querySelector('#vehiculono');
        //  let nomoto2 = (nomoto.checked ? "3" : "4");
          // código para la opción de auto
        //}

        let mensaje = 'send?=' + telefono 
        + '&text= ' + " _*" + codigo + "*_" + "%0a"
        + '*Móvil :*' + " _" + vehiculo + "-" + ppu + "_" +"%0a"
        + '*Conos :*' + " _" + conos + simoto2 + "_" +"%0a"
        + '*Cargos :*'
        + "%0a" + aseo + ", "
        + "%0a" + tarjeta + ", " 
        + "%0a" + doc + ", "
        + "%0a" + bitacora + ", " 
        + "%0a" + llave + ", " 
        + "%0a" + gata + ", " 
        + "%0a" + rueda + ", " 
        + "%0a" + extintor + "." 
        + "%0a" + escudo + "." 
        + "%0a"
        + siono
        + siluga
        + sihour
        + sibouche
        + '*Estanque :*' + " _" + estanque + "_" + "%0a"
        + '*Novedades Vehículo :*' 
        + "%0a" + "_" + novedades + "._" + ''

        if(isMobile()) {
            window.open(urlMobile + mensaje, '_blank')
        }else{
            window.open(urlDesktop + mensaje, '_blank')
        }
        buttonSubmit.innerHTML = '<i class="fab fa-whatsapp"></i> Enviar WhatsApp'
        buttonSubmit.disabled = false
    }, 1000);
});

$(function() {

    $("#todos").on("change", function () {
        $("#verificar tbody input[type='checkbox']").prop("checked", this.checked);
    });
    
    $("#verificar tbody").on("change", "input[type='checkbox']", function () {
      if ($("#verificar tbody input[type='checkbox']").length == $("#verificar tbody input[type='checkbox']:checked").length) {
          $("#todos").prop("checked", true);
      } else {
          $("#todos").prop("checked", false);
      }
     });
     
  });

  document.getElementById("todosmoto").addEventListener("click", function(){
    if (this.checked) {
      document.getElementById("aseo").checked = true;
      document.getElementById("tarjeta").checked = true;
      document.getElementById("bitacora").checked = true;
      document.getElementById("doc").checked = true;
    } else {
      document.getElementById("aseo").checked = false;
      document.getElementById("tarjeta").checked = false;
      document.getElementById("bitacora").checked = false;
      document.getElementById("doc").checked = false;
    }
  });
  
    //$(document).ready(function() {

    // Capturas el cambio de algun input radio
    //$("input[type='checkbox']").change(function(1){
    
      //Ocultas todo    
    //  $("#delta").show();

    
      //obtenes el valor de los dos sets de Radios
      //var alfa = $("input[name='alfa']:checked").val();
      //var opc2 = $("input[name='opc2']:checked").val(); para colocar otro valor
      
      //tomas la decisión que queres en base a los dos valores
      //en este caso si selecciona "nombre" y "ciudad" mostras el input text para el Nombre
     // if(alfa == 1) // && opc == 1)
      //  $("#delta").hide()
        
    //});
// });


// $( document ).ready(function() {

    //Capturas el cambio de algun input radio
    //$("input[type='checkbox']").change(function(){
    
      //Ocultas todo    
     // $("#list").show();

    
      //obtenes el valor de los dos sets de Radios
      //var opc = $("input[name='opc']:checked").val();
      //var opc2 = $("input[name='opc2']:checked").val(); para colocar otro valor
      
      //tomas la decisión que queres en base a los dos valores
      //en este caso si selecciona "nombre" y "ciudad" mostras el input text para el Nombre
     // if(opc == 1) // && opc == 1)
      //  $("#list").hide()
        
    ///});
  //);

$( document ).ready(function() {

    //Capturas el cambio de algun input radio
    $("input[type='radio']").change(function(){
    
      //Ocultas todo 
      $("#carga").hide();
    
      //obtenes el valor de los dos sets de Radios
      var opc1 = $("input[name='opc1']:checked").val();
      
      //tomas la decisión que queres en base a los dos valores
      //en este caso si selecciona "nombre" y "ciudad" mostras el input text para el Nombre
      if(opc1 == 1)
        $("#carga").show()
        
    });
  });
  $( document ).ready(function() {

    //Capturas el cambio de algun input radio
    $("input[type='radio']").change(function(){
    
      //Ocultas todo 

      //obtenes el valor de los dos sets de Radios
      var vehiculo1 = $("input[name='vehiculo1']:checked").val();
      
      //tomas la decisión que queres en base a los dos valores
      //en este caso si selecciona "nombre" y "ciudad" mostras el input text para el Nombre
      if(vehiculo1 == 2){

        $("#plantilla,#verificar,#todosmoto,#opciones3,#conos,#carga2,#carga3,#carga4,#carga5,#carga6,label[for='conos']").show();
        $("#opciones2,#conos,#carga2,#carga3,#carga4,#carga5,#carga6,label[for='conos']").hide();

      } if (vehiculo1 == 1){

      $("#plantilla,#verificar,#opciones2,#conos,#carga2,#carga3,#carga4,#carga5,#carga6,label[for='conos']").show();
      $("#opciones3").hide();
    }
      
  });
});