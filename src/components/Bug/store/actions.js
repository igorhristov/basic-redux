import * as actions from './actionTypes';
import { act } from 'react-dom/test-utils';

export const bugAdded = (description) => ({
    type: actions.ADD_BUG,
    payload: {
        description,
    },
});

export function bugRemoved(id) {
    return {
        type: actions.REMOVE_BUG,
        payload: {
            id,
        },
    };
}

export const bugResolved = (id) => ({
    type: actions.BUG_RESOLVED,
    payload: {
        id,
    },
});
