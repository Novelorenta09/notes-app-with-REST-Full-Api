class ImgButtonNotes extends HTMLElement{
    static get observedAttributes(){
        return ['src', 'id','alt'];
    }

    constructor(){
        super();
        this._style=document.createElement('style');
    }
    connectedCallback() {
        this.updateStyle();
        this.render();
    }

    set id(value) {
        this.setAttribute('id', value);
    }

    get id() {
        return this.getAttribute('id');
    }
    set src(value) {
        this.setAttribute('src', value);
    }

    get src() {
        return this.getAttribute('src');
    }
    set alt(value) {
        this.setAttribute('alt', value);
    }

    get alt() {
        return this.getAttribute('alt');
    }

    
    updateStyle() {
        this._style.textContent = `
            ${this.localName} {
                display: block;
            }
    
            img {
                width: 60px;
                cursor: pointer;
            }
        `;
    }

    
    render() {
        this.innerHTML = `
            <img src="${this.src}" id="${this.id}" alt="${this.alt}">
                         
            </img>
        `;
        this.appendChild(this._style);
    }
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'src') {
            this.updateStyle();
            this.render();
        }
    }
}
customElements.define('img-button-notes', ImgButtonNotes);
