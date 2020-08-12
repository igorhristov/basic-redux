import { FLIP } from './actionsTypes';

const initialState = {
    light: true,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FLIP:
            return {
                ...state,
                light: !state.light,
            };
        default:
            return state;
    }
};

// import { A_OFF, A_ON, B_ON, B_OFF } from './actionsTypes';

// const initialState = {
//     light: false,
//     switchA: false,
//     switchB: false,
// };

// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case A_ON:
//             return {
//                 switchA: true,
//                 swtichB: state.switchB,
//                 light: true,
//             };
//         case A_OFF:
//             return {
//                 switchA: false,
//                 swtichB: state.switchB,
//                 light: state.switchB,
//             };

//         case B_ON:
//             return {
//                 switchA: state.switchA,
//                 swtichB: true,
//                 light: true,
//             };
//         case B_OFF:
//             return {
//                 switchA: state.switchA,
//                 swtichB: false,
//                 light: state.switchA,
//             };

//         default:
//             return state;
//     }
// };

export default reducer;
