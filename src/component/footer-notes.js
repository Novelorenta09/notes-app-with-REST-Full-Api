class FooterNotes extends HTMLElement{
    constructor(){
        super();
        this.render();
    }

    render(){
        this.innerHTML=`
        <footer>
        <p>&copy;Copyright submission Notes App | NoveLorenta | 2024</p>
        </footer>
        `;
    }
}

customElements.define('footer-notes',FooterNotes );