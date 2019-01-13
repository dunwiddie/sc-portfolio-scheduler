import dateFns from "date-fns";

class Base {
    static allowedProps = ['id']
    constructor(props) {
        for (key, value of props) {
            if (CalEvent.allowedProps.includes(key)) {
                this[key] = value;
            }
        }
    }
}

class CalEvent extends Base {
    static allowedProps = ['id', 'name']
    constructor(props) {
        super(props);
    }
}

export default CalEvent;