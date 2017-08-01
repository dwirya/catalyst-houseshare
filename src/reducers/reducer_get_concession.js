import { UPDATE_CONCESSION } from '../actions/updateConcession';

import { HOUSEKEEPING, CLEANING_DISHES, CLEANING_TOILETS, COOKING } from '../containers/FilterHeaders';

const Concessions = {
    HOUSEKEEPING: 15,
    CLEANING_DISHES: 10,
    CLEANING_TOILETS: 20,
    COOKING: 25
}

export default function(state=0, action) {
    var totalConcession = 0;
    
    switch (action.type) {
        case UPDATE_CONCESSION:

            action.payload.map((chore) => {
                switch (chore){
                    case HOUSEKEEPING:
                        totalConcession += Concessions.HOUSEKEEPING;
                        break;
                    case CLEANING_DISHES:
                        totalConcession += Concessions.CLEANING_DISHES;
                        break;
                    case CLEANING_TOILETS:
                        totalConcession += Concessions.CLEANING_TOILETS;
                        break;
                    case COOKING:
                        totalConcession += Concessions.COOKING;
                        break;
                    default:
                        totalConcession += 0;
                }
                    
            })
            return totalConcession;
    }

    return state;

}