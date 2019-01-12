import { html } from 'lit-html';

export default function Home(state, db) {
    return html`
        <p>Home content</p>
        ${state}
    `;
}