// Créez une classe pour le Web Component
class SimpleButton extends HTMLElement {
  constructor() {
    super(); // Appelle le constructeur HTMLElement

    // Ajout d'une propriété Shadow DOM
    this.attachShadow({ mode: 'open' }); // Le mode 'open' permet d'accéder au Shadow DOM depuis l'extérieur si besoin.
  }

  // Exécuté lorsque le composant est ajouté au DOM
  connectedCallback() {
    const buttonLabel = this.getAttribute('label') || 'Cliquez ici'; // Récupère l'attribut 'label'

    // Style propre au composant encapsulé via le Shadow DOM
    const styles = `
      <style>
        button {
          background-color: #6200ea;
          border: none;
          color: white;
          padding: 10px 20px;
          font-size: 16px;
          cursor: pointer;
          border-radius: 5px;
        }

        button:hover {
          background-color: #3700b3;
        }
      </style>
    `;

    // Structure HTML du composant
    const template = `
      ${styles}
      <button>${buttonLabel}</button>
    `;

    // Ajoute le contenu dans le Shadow DOM
    this.shadowRoot.innerHTML = template;
  }
}

// Enregistrez le composant sous un nom de balise HTML personnalisé
customElements.define('simple-button', SimpleButton);
