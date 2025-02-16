/**
 * @typedef {object} createStore
 * @prop {Update} update
 * @prop {Subscribe} subscribe
 */

/**
 * @callback Update
 * @param {Action}
 */

/**
 * @callback Action
 * @param {state}
 * @returns {state}
 */

/**
 * @callback Subscribe
 */




// initial state of counter

const initial = {
    count: 0
}


const createStore = (initial) => {
 let state = initial
//added update function with a paramator of action and an if Statement
const update = (action) => {
if (typeof action !== 'function'){
    throw new Error("action is required to be function")
}
}

   return {
    update:

   }
}

