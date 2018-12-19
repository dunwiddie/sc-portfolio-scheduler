function buildLink(link){
    var href = '';

    if(link !== 'home'){
        href = link;
    }

    return `
        <li>
            <a href="/${href}" data-navigo>${link}</a>
        </li>
    `;
}

export default function Navigation(state){
    return `
        <nav id="pushMenu">
            <ul class="container">
                ${state[state.active].links.map(buildLink).join('')}
            </ul>
        </nav>        
    `;
}