import { html, render } from 'lit-html';
import './vir-page-thumb-link';

class ElectrovirApp extends HTMLElement {
    public thing: string = 'hello person';

    public connectedCallback() {
        console.log('The app has been connected!');

        render(this.render(), this);
    }

    public handleThumbClick() {
        console.log('clicked thing!');
        this.thing = 'I\'ve been clicked!';
        console.log(`${this.thing}`);
    }

    public render() {
        return html`
            yo I heard you like custom elements
            <vir-page-thumb-link .directory=${this.thing} @click=${this.handleThumbClick}>uh?</vir-page-thumb-link>
        `;
    }

}

window.customElements.define('electrovir-app', ElectrovirApp);