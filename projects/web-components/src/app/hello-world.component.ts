// hello-world.component.ts
export class HelloWorldComponent extends HTMLElement {
  constructor() {
    super(); // Appelle le constructeur parent (HTMLElement)
    const shadow = this.attachShadow({ mode: 'open' }); // Ajoute un Shadow DOM

    const container = document.createElement('div');
    container.textContent = 'Hello World!';

    // Style de base du Web Component
    const style = document.createElement('style');
    style.textContent = `
      div {
        font-family: Arial, sans-serif;
        color: blue;
        font-size: 12px;
        text-align: center;
      }
    `;

    shadow.appendChild(style);
    shadow.appendChild(container);
  }
}

// Déclare votre composant comme un élément personnalisé
customElements.define('hello-world', HelloWorldComponent);
