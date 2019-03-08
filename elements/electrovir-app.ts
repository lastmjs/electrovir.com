class ElectrovirApp extends HTMLElement {
    connectedCallback() {
        console.log('The app has been connected!');
    }

    render() {
        return html`
            yo I heard you like custom elements
        `;
    }

}

window.customElements.define('electrovir-app', ElectrovirApp);