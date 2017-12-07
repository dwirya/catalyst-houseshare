import { UPDATE_CONCESSION } from '../actions/updateConcession';

import {
    HOUSEKEEPING,
    WASHINGDISHES,
    WASHINGCLOTHES,
    WASHINGTOILET,
    COOKING,
    GROCERY,
    GARDENING
  } from '../reducers/reducer_all_houses';

const Concessions = {
    Housekeeping: 15,
    WashingDishes: 10,
    WashingClothes: 20,
    WashingToilet: 25,
    Cooking: 15,
    Grocery: 10,
    Gardening: 20
}

export function getWeeklyRate(originalHousePrice, houseChores, selectedChores){
    let concession = 0;
    selectedChores.map((selectedChore) => {
      houseChores.map((houseChore) => {
        if (houseChore === selectedChore) {
          concession += getChoreConcessionValue(selectedChore)
        }
      })
    })
    return originalHousePrice - concession;
}

export function getChoreConcessionValue(chore) {
    switch (chore){
        case HOUSEKEEPING:
            return Concessions.HOUSEKEEPING;
        case WASHINGDISHES:
            return Concessions.WashingDishes;
        case WASHINGCLOTHES:
            return Concessions.WashingClothes;
        case WASHINGTOILET:
            return Concessions.WashingToilet;
        case COOKING:
            return Concessions.Cooking;
        case GROCERY:
            return Concessions.Grocery;
        case GARDENING:
            return Concessions.Gardening;
        default:
            return 0;
    }   
}

export default function(state=[], action) {
    // var totalConcession = 0;
    switch (action.type) {
        case UPDATE_CONCESSION:
            return action.payload;
    }
    
    // switch (action.type) {
    //     case UPDATE_CONCESSION:

    //         action.payload.map((chore) => {
                // switch (chore){
                //     case HOUSEKEEPING:
                //         totalConcession += Concessions.HOUSEKEEPING;
                //         break;
                //     case CLEANING_DISHES:
                //         totalConcession += Concessions.CLEANING_DISHES;
                //         break;
                //     case CLEANING_TOILETS:
                //         totalConcession += Concessions.CLEANING_TOILETS;
                //         break;
                //     case COOKING:
                //         totalConcession += Concessions.COOKING;
                //         break;
                //     default:
                //         totalConcession += 0;
                // }   
    //         })
        
    //         return totalConcession;

    //     default:
    //         /*Do nothing*/
    // }

    return state;

}