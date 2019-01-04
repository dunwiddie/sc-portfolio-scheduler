import { capitalize } from 'lodash';
import * as Screens from "./Screens";

export default function Content(state) {
    return `
        <section id="content">
            <div class="container">
                <h2>${Screens[capitalize(state.active)](state)}</h2>
            </div>
        </section>
    `;
}