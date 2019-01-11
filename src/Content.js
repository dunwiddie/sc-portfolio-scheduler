import { capitalize } from 'lodash';
import * as Screens from "./Screens";

export default function Content(state, db) {
    return `
        <section id="content">
            ${Screens[capitalize(state.active)](state, db)}
        </section>
    `;
}