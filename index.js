import Content from './src/Content';
import Footer from './src/Footer';
import Header from './src/Header';
import low from 'lowdb';
import LocalStorage from 'lowdb/adapters/LocalStorage'
import Navigation from './src/Navigation';
import Navigo from 'navigo';
import Store from './src/Store';
import CalEvent from './src/CalEvent';
import { html, render } from 'lit-html';

// setup navigo
const router = new Navigo(window.location.origin);
const root = document.querySelector('#root');

// set up lowdb to store into 'db' at localStorage
const adapter = new LocalStorage('db')
const db = low(adapter)

db.defaults({ schedule: [] }, { log: [] })
    .write()

const State = {
    'schedule': [],
    'active': 'home',
    'home': {
        'title': 'Home',
        'links': ['about', 'calendar', 'edit'],
        'image': {
            'id': 'homeImage',
            'src': 'http://placekitten.com/300/200',
            'alt': 'home page image',
        },
    },
    'about': {
        'title': 'About',
        'links': ['home', 'calendar', 'edit'],
        'image': {
            'id': 'aboutImage',
            'src': 'http://placekitten.com/200/150',
            'alt': 'about page image'
        }
    },
    'calendar': {
        'title': 'Calendar',
        'links': ['home', 'about', 'edit'],
        'image': {
            'id': 'calendarImage',
            'src': 'http://placekitten.com/500/150',
            'alt': 'calendar page image'
        }
    },
    'edit': {
        'title': 'Edit',
        'links': ['home', 'about', 'calendar'],
        'image': {
            'id': 'editImage',
            'src': 'http://placekitten.com/50/50',
            'alt': 'edit page image'
        }
    }
};

let newEvent = {
    'id': 0,
    'name': 'New Event',
    'start': Date.now()
};

db.get('schedule').push(newEvent).write();

const store = new Store(State);

function handleNavigation(params) {
    store.dispatch((state) => {
        state.active = params.page;
        return state;
    });
}

function App(state) {
    return html`
        ${Navigation(state)}
        ${Header(state)}
        ${Content(state, db)}
        ${Footer(state)}
    `;
}

function start(state) {
    render(App(state), root);
}

store.addListener(start);
store.addListener(() => router.updatePageLinks());

router
    .on('/:page', handleNavigation)
    .on('/', () => handleNavigation({ 'page': 'home' }))
    .resolve();