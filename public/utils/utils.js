class Utils {
    constructor() {
        this.Prototype()
    }

    Prototype() {
        Element.prototype.on = function(events, fn) {
            events.split(' ').forEach(event => {
                this.addEventListener(event, fn)
            })
            return this
        }

        Element.prototype.css = function(styles) {
            for(let name in styles) {
                this.style[name] = styles[name]
            }
            return this
        }
        
        Element.prototype.addClass = function(name) {
            this.classList.add(name)
            return this
        }
        
        Element.prototype.removeClass = function(name) {
            this.classList.remove(name)
            return this
        }

        Element.prototype.toggleClass = function(name) {
            this.classList.toggle(name)
            return this
        }

        
        Element.prototype.hasClass = function(name) {
            return this.classList.contains(name)
        }
    }

    getCamelcase(text) {
        let div = document.createElement('div')
        div.innerHTML = `<div data-${text}="id"></div>`
        return Object.keys(div.firstChild.dataset)[0]

    }

    clickOutSide(el, fn) {
        const listener = (e) => {
            if (!el || el.contains(e.target)) return
            fn()
        }
        // listening
        document.addEventListener('click', listener)

        return () => {
            document.removeEventListener('click', listener)
        }
    }

    setCookie(name,value,days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days*24*60*60*1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "")  + expires + "; path=/";
    }
    
    getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    }

    eraseCookie(name) {   
        document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }
}