// Define action types
const ADD = "ADD";
const SUBTRACT = "SUBTRACT";
const RESET = "RESET";

//  Action creators (functions that return action objects)
const add = () => ({ type: ADD });
const subtract = () => ({ type: SUBTRACT });
const reset = () => ({ type: RESET });

//  Reducer function (updates state based on actions)
const tallyReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case ADD:
      return { count: state.count + 1 }; // Increment the count
    case SUBTRACT:
      return { count: state.count - 1 }; // Decrement the count
    case RESET:
      return { count: 0 }; // Reset the count to 0
    default:
      return state; // Default state if action doesn't match
  }
};

//  Store class
class Store {
  constructor(reducer) {
    this.state = reducer(undefined, {}); // Initialize state with the reducer
    this.listeners = []; // Listeners to be notified when state changes
    this.reducer = reducer;
  }

  // Method to subscribe listeners
  subscribe(listener) {
    this.listeners.push(listener); // Add listener to the list
  }

  // Method to dispatch actions
  dispatch(action) {
    this.state = this.reducer(this.state, action); // Update state based on action
    this.listeners.forEach((listener) => listener()); // Notify all listeners about state change
  }

  // Method to get the current state
  getState() {
    return this.state;
  }
}

//  Create the store using the reducer
const store = new Store(tallyReducer);

//  Subscribe to log state changes
store.subscribe(() => {
  console.log("State updated:", store.getState()); // Log the updated state to console
});

// Initial State
console.log("Initial State (before any actions):", store.getState());

// Incrementing the Counter
store.dispatch(add());
store.dispatch(add());
console.log("After ADD:", store.getState());

// Decrementing the Counter
store.dispatch(subtract());
console.log("After SUBTRACT:", store.getState());

// Resetting the Counter
store.dispatch(reset());
console.log("After Rest", store.getState());
