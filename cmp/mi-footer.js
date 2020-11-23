class MiFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `Copyright &copy; Jonathan Adolfo Pérez Isidro IC-51M`;
  }
}
customElements.define("mi-footer", MiFooter);
