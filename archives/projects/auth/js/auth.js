(function(window) {
    //I recommend this
    'use strict';

    function define_jauth() {
        var jauth = {};
        var name = "jauth";
        var auth = {}
        jauth.init = function(config) {
            firebase.initializeApp(config);
        }
        auth.login = function(email, password, passwordconfiration, callback) {
            
            // callback
            /* callback ask for (status, data)
             * Data is either(onsuccess) the userdata, or the(on error) Error Object
                status true = success, false = fail
            */
        }
        jauth.auth = auth;
        return jauth;
    }
    //define globally if it doesn't already exist
    if (typeof(jauth) === 'undefined') {
        if (typeof(firebase) === 'undefined') {
            window.jauth = define_jauth();
        } else {
            if (console.error) {
            throw new Error("Firebase is not defined. You need to include firebase before you include jauth.");
        }
        else if (console.warn) {
            console.warn("Firebase is not defined. You need to include firebase before you include jauth.");
        }
        else {
            console.log("Firebase is not defined. You need to include firebase before you include jauth.");
        }
        }
       
    }
    
    else {
        if (console.error) {
            throw new Error("Jeffrey Auth Error: jauth already defined.");
        }
        else if (console.warn) {
            console.warn("Jeffrey Auth Error: jauth already defined.");
        }
        else {
            console.log("Jeffrey Auth Error: jauth already defined.");
        }
    }
})(window);