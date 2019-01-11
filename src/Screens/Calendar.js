function makeEventCard(event) {
    return `
        <div class="card">${event.id} ${event.name}</div>
    `;
}

export default function Calendar(state, db) {
    const schedule = db.__wrapped__.schedule;
    console.log(schedule);
    console.log(schedule[0].name)
    return `
        <p>Calendar Content</p>
        <p>${schedule.map(makeEventCard).join('')}</p>
    `;
}