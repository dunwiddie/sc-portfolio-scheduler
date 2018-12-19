import Content from './src/Content';
import Footer from './src/Footer';
import Header from './src/Header';
import Navigation from './src/Navigation';
import Navigo from 'navigo';
import Store from './src/Store';

var router = new Navigo(window.location.origin);
var root = document.querySelector('#root');

var State = {
    'schedule': [],
    'active': 'home',
    'home': {
        'title': 'Home',
        'links': ['about'],
        'image': {
            'id': 'homeImage',
            'src': 'http://placekitten.com/300/200',
            'alt': 'home page image',
        },
    },
    'about': {
        'title': 'About',
        'links': ['home'],
        'image': {
            'id': 'aboutImage',
            'src': 'http://placekitten.com/200/150',
            'alt': 'about page image'
        }
    }
};

var store = new Store(State);

function handleNavigation(params) {
    store.dispatch((state) => {
        state.active = params.page;

        return state;
    });
}

function render(state) {
    root.innerHTML = `
        ${Navigation(state)}
        ${Header(state)}
        ${Content(state)}
        ${Footer(state)}
    `;
    router.updatePageLinks();

    console.log(`Active Page: ${state.active}`);
    console.log(`Schedule: ${state.schedule}`);
}

store.addListener(render);

router
    .on('/:page', handleNavigation)
    .on('/', () => handleNavigation({ 'page': 'home' }))
    .resolve();