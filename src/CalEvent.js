class CalEvent {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.start = Date.now();
    }
}

export default CalEvent;