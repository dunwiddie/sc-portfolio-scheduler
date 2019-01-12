import { capitalize } from 'lodash';
import { html } from 'lit-html';
import * as Screens from "./Screens";

export default function Content(state, db) {
    return html`
        <section id="content">
            ${Screens[capitalize(state.active)](state, db)}
        </section>
    `;
}