import { html } from 'lit-html';

export default function Home(state, db) {
    return html`
        <div id="home" class="navOffset">
            <h1>So?</h1>
            <p><span>Scheduler</span> is <a href="#">Derek Dunwiddie's</a> Savvy Coders Portfolio Project</p>
        </div>
    `;
}