import { adapter, db } from '../db';

function saveEvent(event) {
    console.log(`Saved ${event} to db`);
};

export default function Edit() {
    return `
        <form action="" method="POST">
            <textarea name="event_name" required autofocus></textarea>
            <input type="submit">
        </form>
    `;
};