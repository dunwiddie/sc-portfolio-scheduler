import { html, render } from 'lit-html';
import dateFns from 'date-fns';
import CalEvent from "../CalEvent";
import { db } from '../../index';

// Simple functions pulled and modified from https://jsfiddle.net/typicode/4kd7xxbu/
function addCurrentEvent() {
    db.get('schedule')
        .push(new CalEvent(
            {
                "id": 1,
                "name": "Sample Event",
                "start": new Date(Date.now()),
                "end": new Date(Date.now()),
                "restrictStart": new Date(Date.now()),
                "restrictEnd": new Date(Date.now()),
                "isLocked": false,
                "isHidden": false,
                "minDuration": 0,
                "maxDuration": 0,
                "hasLinked": false,
                "linkedEvents": []
            }))
        .write()
}

function resetCalendar() {
    db.set('calendar', [])
        .write();
}

function renderCalendar() {
    const state = db.getState();
    const str = JSON.stringify(state, null, 2);
    document.getElementById('eventList').innerHTML = str;
}

// Other stuff

function makePseudoCard(event1, event2, db) {
    const gap = dateFns.differenceInMinutes(event1.end, event2.start)
    if (gap >= 15) {
        return html`
            <div class="card">
                <div>Blank</div>
                <p><i class="fas fa-plus"></i> You have a bit of free time here: ${dateFns.distanceInWords(event1.end, event2.start)}<p>
            </div>
        `;
    } else {
        return html``;
    }
}

function makeNewEvent(newEvent) {
    try {
        db.get('schedule').push(newEvent).write();
    } catch (e) {
        console.log(e);
    }
}

function makeEventCard(event) {
    let cardStart = dateFns.format(event.start, 'h:mma ddd, MMM D, YYYY');
    let cardEnd = dateFns.format(event.end, 'h:mma ddd, MMM D, YYYY')

    return html`
        <div class="card">
            <div class="id">${event.id}</div>
            <div class="name">${event.name}</div>
            <div class="start">${cardStart}</div>
            <div class="end">${cardEnd}</div>
            <div class="lock"><i class="fas fa-lock"></i><i class="fas fa-lock-open"></i></div>
        </div>
    `;
}

export default function Calendar(state) {
    const schedule = db.getState();
    // .sortBy(['start', 'end', 'id']).value();

    return html`
        <div id="calendar" class="navOffset">
            <div class="controls">
                <div><button type="button" id="shuffle"><i class="fas fa-dice"></i> Randomize</button></div>
                <div><button type="button" id="options"><i class="fas fa-ellipsis-v"></i> Options</button></div>
                <div><button type="button" id="reset"><i class="fas fa-minus"></i> Remove Event</button></div>
                <div><button type="button" id="newCurrent"><i class="fas fa-plus"></i> Add Event</button></div>
                <div><button type="button" id="today">Focus on Today</button></div>
                <div><button type="button" id="sortAsc">Sort by Date Asc.</button></div>
            </div>
            <div id="eventList">    
                ${schedule.schedule.map(makeEventCard)}
            </div >
        </div >
    `;
}


document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('shuffle').onclick = function () {
        // addCurrentEvent();
        // renderCalendar();
        console.log("Randomizer Clicked!")
    };
    document.getElementById('newCurrent').onclick = function () {
        // addCurrentEvent();
        // renderCalendar();
        console.log("Add Event Clicked!")
    };
    document.getElementById('reset').onclick = function () {
        // resetCalendar();
        // renderCalendar();
        console.log("Reset Clicked!")
    };
    document.getElementById('options').onclick = function () {
        console.log("Options Clicked!")
    }
})