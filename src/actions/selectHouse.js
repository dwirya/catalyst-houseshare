export const HOUSE_SELECTED = 'HOUSE_SELECTED';

export function selectHouse(house) {
    return {
        type: HOUSE_SELECTED,
        payload: house
    }
}


