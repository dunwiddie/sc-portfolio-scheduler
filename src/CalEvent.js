import dateFns from "date-fns";

class Base {
    constructor(props) {
        for (let [key, value] of Object.entries(props)) {
            if (CalEvent.allowedProps.includes(key)) {
                this[key] = value;
            }
        }
    }
}

class CalEvent extends Base {
    constructor(props) {
        super(props);
    }
}

Base.allowedProps = ['id'];

CalEvent.allowedProps = ['id', 'name', 'start', 'end', 'restrictStart', 'restrictEnd', 'isLocked', 'isHidden', 'minDuration', 'maxDuration', 'hasLinked', 'linkedEvents'];

export default CalEvent;