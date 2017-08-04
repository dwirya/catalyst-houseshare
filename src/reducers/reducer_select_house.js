import { HOUSE_SELECTED } from '../actions/selectHouse';

export default function(state=null, action) {

    switch (action.type) {
        case HOUSE_SELECTED:
            return action.payload
    }

    return state;
}