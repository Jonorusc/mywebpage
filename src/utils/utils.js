export default class utils {
    constructor() {
        this.Prototype()
        console.log('utils')
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
}