// select dom elements
const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");

// action identifier
const INCREMENT = 'increment';
const DECREMENT = 'decrement';

// action creators
const increment = (value) => {
    return {
        type: INCREMENT,
        payload: value, 
    }
}
const decrement = (value) => {
    return {
        type: DECREMENT,
        payload: value, 
    }
}

// initial state
const initialState = {
    value: 0,
};

// create reducer function
function counterReducer(state = initialState, action) {
    // action = {
    //     type: 'increment/decrement'
    // }
    if (action.type === INCREMENT) {
        return {
            ...state,
            value: state.value + action.payload,
        }
    }
    if (action.type === DECREMENT ) {
        return { 
            ...state,
            value: state.value - action.payload,
        }
    }
    else {
        return state;
    }
}

// create store
const store = Redux.createStore(counterReducer);

const render = () => {
    const state = store.getState();
    counterEl.innerText = state.value.toString();
};

// update UI initially
render();


store.subscribe(render);

// button click listeners
incrementEl.addEventListener("click", () => {
    store.dispatch(
    //     {
    //     // type: "increment",  //mandatory
    //     type: INCREMENT,  //mandatory
    //     payload: 5  //payload can be object
    // }

    // replace with function
     increment(5)
    );
});

decrementEl.addEventListener("click", () => {
    store.dispatch(
    //     {
    //     type: DECREMENT,
    //     payload: 2
    // }
    // replace with function
        decrement(2)
    );
});