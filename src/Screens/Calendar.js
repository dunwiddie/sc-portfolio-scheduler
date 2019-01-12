import { html } from 'lit-html';

function makeEventCard(event) {
    return html`
        <div class="card">${event.id} ${event.name}
        <i class="fas fa-thumbtack"></i>
        <i class="fas fa-lock"></i>
        <i class="fas fa-unlock"></i>
        <i class="fas fa-lock-open"></i>
        </div>
    `;
}

export default function Calendar(state, db) {
    const schedule = db.get('schedule').value();

    return html`
        <p>Calendar Content</p>
        <div class="controls">
            <i class="fas fa-dice"></i>
            <i class="fas fa-ellipsis-v"></i>
            <i class="fas fa-minus"></i>
            <i class="fas fa-plus"></i>
        </div>
        <p>${schedule.map(makeEventCard)}</p>
    `;
}