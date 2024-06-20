class HeaderNotes extends HTMLElement{
    constructor(){
        super();
        this.render();
    }

    render(){
        this.innerHTML=`
        <header>
        <h1>My Notes</h1>
       </header> 
        `;
    }
}

customElements.define('header-notes',HeaderNotes );