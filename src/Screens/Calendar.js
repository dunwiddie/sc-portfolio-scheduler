function makeEventCard(event) {
    return `
        <div class="card">${event.id} ${event.name}</div>
    `;
}

export default function Calendar(state, db) {
    const schedule = db.get('schedule').value();

    return `
        <p>Calendar Content</p>
        <p>${schedule.map(makeEventCard).join('')}</p>
    `;
}