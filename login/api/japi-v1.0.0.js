(function(window){
    'use strict';
    function define_library(){
        var jauth = {};
        
        var apikey = null;
        var warnMessage = function(message) {
            if (console.warn) {
                console.warn("Jauth Warning: " + message);
            } else {
                console.log("Jauth Warning: " + message)
            }
        }
        var checkApiKey = function() {
            
        }
        jauth.info = {
            version:"1.0.0"
        }
        jauth.key = function(apik) {
            apikey = apik
        }
        jauth.auth = function() {
            if (!checkApiKey()) {
                warnMessage(checkApiKey())
            }
            
        }
        return jauth;
    }
    //define globally if it doesn't already exist
    if(typeof(jauth) === 'undefined'){
        window.jauth = define_library();
    }
    else{
        console.log("Library already defined.");
    }
})(window);