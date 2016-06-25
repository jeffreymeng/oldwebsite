(function(window) {
    //I recommend this
    'use strict';
    var pen = {};
    var defualt = {};
    var getSetDescendantProp = function(obj, desc, value) {
        var arr = desc ? desc.split(".") : [];

        while (arr.length && obj) {
            var comp = arr.shift();
            var match = new RegExp("(.+)\\[([0-9]*)\\]").exec(comp);

            // handle arrays
            if ((match !== null) && (match.length == 3)) {
                var arrayData = {
                    arrName: match[1],
                    arrIndex: match[2]
                };
                if (obj[arrayData.arrName] !== undefined) {
                    if (typeof value !== 'undefined' && arr.length === 0) {
                        obj[arrayData.arrName][arrayData.arrIndex] = value;
                    }
                    obj = obj[arrayData.arrName][arrayData.arrIndex];
                }
                else {
                    obj = undefined;
                }

                continue;
            }

            // handle regular things
            if (typeof value !== 'undefined') {
                if (obj[comp] === undefined) {
                    obj[comp] = {};
                }

                if (arr.length === 0) {
                    obj[comp] = value;
                }
            }

            obj = obj[comp];
        }

        return obj;
    };
    pen.info = {
        name: "penJS",
        version: "Private Beta 1.0.0"
    };
    pen.canvas = function(id) {
        var ctx = document.getElementById(id).getContext("2d");
        ctx.defualt = {};
        ctx.getDefualt = function(item) {
            if (item) {
                if (item.indexOf(".") === -1) {
                    return this.defualt[item];
                }
                else {
                    return getSetDescendantProp(this.defualt, item);
                }
            }
            else {
                return this.defualt;
            }
        };
        ctx.setDefualt = function(item, value) {
            if (item.indexOf(".") === -1) {
                this.defualt[item] = value;
            }
            else {
                getSetDescendantProp(this.defualt, item, value);
            }

        };
        ctx.rectangle = function(x, y, width, height, color) {
            if (!color && width) {
                color = this.defualt.rectangle.color || this.defualt.color || pen.getDefualt("color") || "black";
            }
            if (!height) {
                height = this.defualt.rectangle.height || this.defualt.height || pen.getDefualt("height");
            }
            if (!width) {
                width = this.defualt.rectangle.width || this.defualt.width || pen.getDefualt("width");
                color = color || this.defualt.rectangle.color || this.defualt.color || pen.getDefualt("color") || "black";
            }
            
            this.fillStyle = color;
            this.fillRect(x,y,width,height);

        };
        ctx.circle = function(startx, starty, endx, endy) {
            this.moveTo(startx,starty);
            this.lineTo(endx,endy);
            this.stroke();
        };
        return ctx;
    };
    
    pen.getDefualt = function(name) {
        if (name.indexOf("." > -1)) {
            return getSetDescendantProp(defualt, name);
        } else if (name) {
            return defualt[name];
        } else {
            return defualt;
        }
    };
    pen.setDefualt = function(name, value) {
        if (name.indexOf("." > -1)) {
            getSetDescendantProp(defualt, name, value);
        } else {
            defualt[name] = value;
        }
    };
    window.pen = pen;

})(window);