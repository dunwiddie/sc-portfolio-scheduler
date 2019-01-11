function makeEventCard(event) {
    return `
        <div class="card">${event.id} ${event.name}</div>
    `;
}

export default function Calendar(state, db) {
    const localStorage = db.get('schedule').value();
    console.log(localStorage);

    return `
        <p>Calendar Content</p>
        <p>${schedule.map(makeEventCard).join('')}</p>
    `;
}