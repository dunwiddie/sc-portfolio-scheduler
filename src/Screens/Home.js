import { html } from 'lit-html';

export default function Home(state, db) {
    return html`
        <div id="home" class="">
            <h1>So?</h1>
            <p><span>Scheduler</span> is <a href="./about">Derek Dunwiddie's</a> Savvy Coders Portfolio Project</p>
            <div class="card" id="trello">
                <i class="fab fa-trello"></i> 
                <a href="https://trello.com/b/vU0Y6UkU/derek-dunwiddie-savvy-coders-portfolio-project">Trello Board</a>
            </div>
            <div class="card" id="linkedin">
                <i class="fab fa-linkedin"></i> 
                <a href="https://www.linkedin.com/in/derekdunwiddie/">LinkedIn</a>
            </div>
            <div class="card" id="github">
                <i class="fab fa-github-square"></i> 
                <a href="https://github.com/dunwiddie/sc-portfolio-scheduler">GitHub Repo</a>
            </div>
            <div class="card" id="email">
                <i class="fas fa-envelope-square"></i> 
                <a href="mailto:dunwiddie.derek@gmail.com">Email</a>
            </div>
        </div>
    `;
}