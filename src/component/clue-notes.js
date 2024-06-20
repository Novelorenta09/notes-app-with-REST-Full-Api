class ClueNotes extends HTMLElement {
    static get observedAttributes() {
        return ['id'];
    }

    constructor() {
        super();
        this._style = document.createElement('style');
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

    updateStyle() {
        this._style.textContent = `
            ${this.localName} {
                display: block;
            }
    
            h4 {
                color: salmon;
                font-weight: 600;
            }
        `;
    }

    render() {
        this.innerHTML = `
            <h4 id="${this.id}">
                Klik tanda "+" untuk membuat catatan           
            </h4>
        `;
        this.appendChild(this._style);
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'id') {
            this.updateStyle();
            this.render();
        }
    }
}

customElements.define('clue-notes', ClueNotes);
