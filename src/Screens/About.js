import { html } from 'lit-html';

export default function About(state, db) {
    return html`
        <div id="about">
            <img src="https://images.unsplash.com/photo-1502570149819-b2260483d302" alt="about scheduler">
            <h2>What?</h2>
            <p>A simple scheduling site that helps visualize gaps of open time and fill those spaces dynamically with activities that help you achieve your goals and stay sane.</p>
            <img src="https://images.unsplash.com/photo-1414919823178-e9d9d0afd0ac" alt="about journal">
            <h2>Why?</h2>
            <p>All the scheduling and planning tools I’ve encountered (Google Calendar, Trello, MS Project, MS Outlook) are great at keeping a schedule, but have no clear way to make a schedule, evaluate whether it works for a person’s needs, and adjust to taste. I hit shuffle on my music whenever I don’t know what I want to listen to. Shouldn’t I be able to hit shuffle on my schedule whenever I don’t know what to do next? More generally, I picked this project because I would use it. I have a wishlist of features that is pages long, each one requiring a new and different skill to fully implement. And if the idea isn’t completely new and the road to adding those features is tough, then that’s the whole point of doing it.</p>
            <img src="https://images.unsplash.com/photo-1517148815978-75f6acaaf32c" alt="about computer">
            <h2>What?</h2>
            <p>JavaScript, HTML5, and CSS3. The “backend” is json, held in localStorage and managed by <a href="https://github.com/typicode/lowdb">lowdb</a>. Dependencies: Navigo, Parcel, ESLint, Prettier, Lodash, lowdb.</p>
            <h2>Who?</h2>
            <p>
                <ul>
                    <li><i class="fab fa-github-square"></i></li>
                    <li><i class="fab fa-js-square"></i></li>
                    <li><i class="fab fa-linkedin"></i></li>
                </ul>
            </p>
        </div>
    `;
}