// $(document).ready(function(){


    function valForm(){
        console.log("Pagina Funcionando");
        var vNom = $('#nombre').val();
        var vMail = $('#correo').val();
        var vMensaje = $('#mensaje').val();

        //Validar campo nombre

        if(vNom=="" || vNom==null ) {
            Err_color("nombre")
            Err_Contenido("Campo Nombre")
            return false;
        }

        else{
            var expresion = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$/;
            if(!expresion.test(vNom)){
                Err_color("nombre");
                Err_Contenido(" nombre, No se permiten caracteres especiales");
                return false;
            }
        }

        if(vMail=="" || vMail==null ) {
            Err_color("correo")
            Err_Contenido("correo")
            return false;
        }
    
        else{
            var expresion = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
            if(!expresion.test(vMail)){
                Err_color("correo");
                Err_Contenido(" formato de correo no admitido");
                return false;
            }
        }

        if(vMensaje=="" || vMensaje==null ) {
            Err_color("mensaje")
            Err_Contenido("mensaje")
            return false;
        }
    
        else{
            var expresion = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$/;
            if(!expresion.test(vMensaje)){
                Err_color("mensaje");
                Err_Contenido(" mensaje no admitido");
                return false;
            }
        }

        $('form').submit();
        return true;
    }


    function Err_color (dato) {
        $('#' + dato).css({border : '1px solid #dd5144'});
    }

    function Err_Contenido (dato) {
        alert("Error en el ingreso del campo " + dato);

    }

    function ColorDefault (dato){ 
        $('#' + dato).css({border : '1px solid #999'});
        
    }

    $('input').focus(function () { 
       ColorDefault('nombre');
       ColorDefault('correo');
       ColorDefault('mensaje');
        
    })

    $('#mensaje').css({resize : 'none'
    });
    