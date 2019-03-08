import { html, render } from 'lit-html';

class ElectrovirApp extends HTMLElement {
    connectedCallback() {
        console.log('The app has been connected!');

        render(this.render(), this);
    }

    render() {
        return html`
            yo I heard you like custom elements
        `;
    }

}

window.customElements.define('electrovir-app', ElectrovirApp);