import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('zunda-tab')
export class ZundaTabElement extends LitElement {
  @property({ type: String, reflect: true })
  label = '';

  @property({ type: Boolean, reflect: true })
  active = false;

  static styles = css`
    :root {
      --zunda-tab-active-color: #efefef;
      --zunda-tab-base-color: #ccc;
      --zunda-tab-border-radius: .5rem;
    }

    :host {
      display: inline-block;
      position: relative;
    }

    button {
      background: var(--zunda-tab-base-color);
      border-top-left-radius: var(--zunda-tab-border-radius);
      border-top-right-radius: var(--zunda-tab-border-radius);
      border: 0;
      cursor: pointer;
      margin: 0 var(--zunda-tab-border-radius);
      padding: var(--zunda-tab-border-radius);
    }

    :host([active]) button {
      background: var(--zunda-tab-active-color);
      pointer-events: none;
    }

    button:hover {
      filter: brightness(105%);
    }

    :host([active]) button:hover {
      filter: brightness(100%);
    }

    svg.tab-foot {
      bottom: 0px;
      fill: var(--zunda-tab-base-color);
      height: var(--zunda-border-radius);
      position: absolute;
      width: var(--zunda-border-radius);
    }

    :host([active]) svg.tab-foot {
      fill: var(--zunda-tab-active-color);
    }

    svg.tab-foot--left {
      left: 0;
    }

    svg.tab-foot--right {
      right: 0;
      transform: scaleX(-1);
    }
  `;

  private onTabClicked() {
    this.dispatchEvent(new CustomEvent('select'));
  }

  render() {
    return html`
      <button @click="${this.onTabClicked.bind(this)}">
        ${this.label}
      </button>
      ${['left', 'right'].map(d => html`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10"
           class="tab-foot tab-foot--${d}">
        <path d="M 0 10 A 10 10 0 0 0 10 0 L 10 10 L 0 10">
      </svg>
      `)}
    `;
  }
}

