import { html } from 'lit-html';

export default function About(state, db) {
    return html`
        <div id="about" class="">
            <div id="bg1">
            </div>
            <div class="navOffset">
                <h2>What?</h2>
                <p>A simple scheduling site that helps visualize gaps of open time and fill those spaces dynamically with activities that help you achieve your goals and stay sane.</p>
            </div>
            <div id="bg2">
            </div>
            <div class="navOffset">
                <h2>Why?</h2>
                <p>All the scheduling and planning tools I’ve encountered (Google Calendar, Trello, MS Project, MS Outlook) are great at keeping a schedule, but have no clear way to make a schedule, evaluate whether it works for a person’s needs, and adjust to taste. I hit shuffle on my music whenever I don’t know what I want to listen to. Shouldn’t I be able to hit shuffle on my schedule whenever I don’t know what to do next? More generally, I picked this project because I would use it. I have a wishlist of features that is pages long, each one requiring a new and different skill to fully implement. And if the idea isn’t completely new and the road to adding those features is tough, then that’s the whole point of doing it.</p>
            </div>
            <div id="bg3">
                
            </div>
            <div class="navOffset">
                <h2>What?</h2>
                <p>JavaScript, HTML5, and CSS3. The back-end is json, held in localStorage and managed by <a href="https://github.com/typicode/lowdb">lowdb</a>.</p>
            </div>
            <div id="bg4">
                
            </div>
            <div class="navOffset">
                <h2>Who?</h2>
                <p>My name is Derek Dunwiddie, and I am an avid geek and aspiring web developer.<p>
                <p></p>
                <ul>
                    <li><a href="https://github.com/dunwiddie"><i class="fab fa-github-square"></i> github.com/dunwiddie</a></li>
                    <li><a href="https://www.linkedin.com/in/derekdunwiddie/"><i class="fab fa-linkedin"></i> linkedin.com/li/derekdunwiddie</a></li>
                    <li><a href="mailto:dunwiddie.derek@gmail.com"><i class="fas fa-envelope-square"></i> dunwiddie.derek@gmail.com</a></li>
                </ul>
            </div>
        </div>
    `;
}