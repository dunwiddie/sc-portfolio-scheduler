class Store {
    constructor(state) {
        this.listener = () => { };
        this.state = state;
    }

    dispatch(reducer) {
        this.state = reducer(this.state);
        this.listener(this.state);
    }

    addListener(listener) {
        this.listener = listener;
    }
}

export default Store;