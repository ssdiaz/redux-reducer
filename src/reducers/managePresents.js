export function managePresents(state, action){

    switch (action.type) {
        case "INCREASE":
            // THIS mutates state:
            // return { numberOfPresents: state.numberOfPresents + 1 };

            //return Object.assign({}, state, {numberOfPresents: state.numberOfPresents + 1})

            //easier to read with spread operator:
            return Object.assign({...state, numberOfPresents: state.numberOfPresents + 1})

        default:
            return state;
    }

}
