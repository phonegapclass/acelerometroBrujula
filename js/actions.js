//actions
var jQT = new $.jQTouch({
	themeSelectionSelector: '#jqt'
});

var fn = {
    davice: function(){
        document.addEventListener('deviceready',fn.init,false);
    },
    init: function(){
        //Iniciar Acelerómetro
        $('#acelerometro .individual li').eq(0).tap(ace.start);
        //Detener Acelerómetro
        $('#acelerometro .individual li').eq(1).tap(ace.stop);
    }
};

var ace = {
    start: function(){
        if(ace.wathID == null)
            ace.wathID = navigator.accelerometer.watchAcceleration(ace.success,ace.error,{frequency:800});
    },
    stop: function(){
        if(ace.wathID){
            navigator.accelerometer.clearWatch(ace.wathID);
            ace.wathID = null;
        }
    },
    wathID: null,
    success: function(a){
        var text = 'X: <b>'+a.x+'</b><br>'+
                   'Y: <b>'+a.y+'</b><br>'+
                   'Z: <b>'+a.z+'</b><br>';
        $('#acelerometro h2').html(text);
    },
    error: function(){
        alert('Error en el Acelerómetro');
    }
};

$(fn.davice);