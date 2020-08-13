import * as actions from './actionTypes';

export const bugAdded = (description) => ({
    type: actions.ADD_BUG,
    payload: {
        description: 'Bubg1 nekoj',
    },
});

export function bugRemoved(id) {
    return {
        type: actions.REMOVE_BUG,
        payload: {
            id: 1,
        },
    };
}
