import { html } from 'lit-html';

function saveEvent(event) {
    console.log(`Saved ${event} to db`);
};

export default function Edit() {
    return html`
        <form action="" method="POST">
            <textarea name="event_name" required autofocus></textarea>
            <input type="submit">
        </form>
    `;
};