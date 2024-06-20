class LoaderNotes extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        // this.render();
    }

    connectedCallback(){
      
        this.shadowRoot.innerHTML= `
        <style>
    
        body {
            background:black;
        }
        .loader {
            display: inline;
            position: relative;
            width: 80px;
            height: 80px;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 999;
          }

          .loader div {
            position: absolute;
            top: 33px;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: #3498db;
            animation-timing-function: cubic-bezier(0, 1, 1, 0);
          }

          .loader div:nth-child(1) {
            left: 8px;
            animation: lds-ellipsis1 0.6s infinite;
          }

          .loader div:nth-child(2) {
            left: 8px;
            animation: lds-ellipsis2 0.6s infinite;
          }

          .loader div:nth-child(3) {
            left: 32px;
            animation: lds-ellipsis2 0.6s infinite;
          }

          .loader div:nth-child(4) {
            left: 56px;
            animation: lds-ellipsis3 0.6s infinite;
          }

          @keyframes lds-ellipsis1 {
            0% {
              transform: scale(0);
            }
            100% {
              transform: scale(1);
            }
          }

          @keyframes lds-ellipsis3 {
            0% {
              transform: scale(1);
            }
            100% {
              transform: scale(0);
            }
          }

          @keyframes lds-ellipsis2 {
            0% {
              transform: translate(0, 0);
            }
            100% {
              transform: translate(24px, 0);
            }
          }      
         </style>
         <div class="loader">
         <div></div>
         <div></div>
         <div></div>
         <div></div>
         </div> 
        `;
    }

   
}



customElements.define('loader-notes',LoaderNotes );