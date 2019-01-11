class Store {
    constructor(state) {
        this.listeners = [];
        this.state = state;
    }

    dispatch(reducer) {
        this.state = reducer(this.state);
        this.listeners.forEach(
            (listener) => listener(this.state)
        );
    }

    addListener(listener) {
        this.listeners.push(listener);
    }
}

export default Store;