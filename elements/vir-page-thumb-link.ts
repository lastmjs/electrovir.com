import { html, render } from 'lit-html';

class VirPageThumbLink extends HTMLElement {
    public _directory: string = '';

    public connectedCallback() {
        console.log('The page thumb link has been connected!');

        render(this.render(), this);
    }

    public set directory(value: string) {
        console.log('setting property!', value);
        this._directory = value;
        render(this.render(), this);
    }

    public get directory() {
        return this._directory;
    }

    public attributeChangedCallback() {
        console.log('changed?', arguments);
        render(this.render(), this);
    }

    public render() {
        console.log(`the directory: ${this.directory}`, this.directory)
        return html`
            <img src="${this.directory}/thumbnail.png" />
        `;
    }

}

window.customElements.define('vir-page-thumb-link', VirPageThumbLink);