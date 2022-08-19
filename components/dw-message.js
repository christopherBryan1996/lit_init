import {LitElement,html,css}  from 'lit'

class DwMessage extends LitElement{
    static styles = css`
        div{
            background-color: #fcc;
        }
    `
    render(){
        return html`<div> hola Lit<div>`
    }
}

customElements.define('dw-message', DwMessage)