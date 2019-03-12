import { html, render } from 'lit-html';

class VirPageThumbLink extends HTMLElement {
    public directory: string = '';

    public connectedCallback() {
        console.log('The page thumb link has been connected!');

        render(this.render(), this);
    }

    public attributeChangedCallback() {
        this.render();
    }

    public render() {
        console.log(`the directory: ${this.directory}`, this.directory)
        return html`
            <img src="${this.directory}/thumbnail.png" />
        `;
    }

}

window.customElements.define('vir-page-thumb-link', VirPageThumbLink);