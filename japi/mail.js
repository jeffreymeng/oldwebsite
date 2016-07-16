(function(window) {
    //I recommend this
    'use strict';

    function libcontent() {
        var mail = {};

        mail.mail = function(content, recipents, subject, from, reply, name) {
            this.use = function() {
                console.log("japi.mail.mail.use(): The use of japi.mail.mail(content, recipents, subject, from, reply, name) can be found at www.jeffreyserver.tk/mail.php. ");
            };
            return $.ajax({
                type: "POST",
                url: "http://jeffreyserver.tk/mail.php",
                data: {
                    "recipents": recipents,
                    "subject": subject,
                    "content": content,
                    "from": from,
                    "reply": reply,
                    "name": name
                },
                success: function(json) {
                    return json;
                },
                dataType: "json"
            });
        };
        return mail;
    }

    function japiLibFormatter(optid) {
        var japi = {};

        japi.defineApiKey = function(content, recipents, subject, from, reply, name) {
            this.use = function() {
                console.log("japi.mail.mail.use(): The use of japi.mail.mail(content, recipents, subject, from, reply, name) can be found at www.jeffreyserver.tk/mail.php. ");
            };
            $.ajax({
                type: "POST",
                url: "http://jeffreyserver.tk/mail.php",
                data: {
                    "recipents": recipents,
                    "subject": subject,
                    "content": content,
                    "from": from,
                    "reply": reply,
                    "name": name
                }
            });
        };
        return japi;
    }

    if (typeof(window.japi) === 'undefined') {
        window.japi = japiLibFormatter("mail");
    }
    window.japi.mail = libcontent();


})(window);