export default function Header(state) {
    return `
        <header>
            <div class="container"
                <h1>${state[state.active].title}</h1>
                <h1>Scheduler</h1>
                <img id="${state[state.active].image.id}" src="${state[state.active].image.src}" alt="${state[state.active].image.alt}">
            </div>
        </header>
        `;
}