export const UPDATE_CONCESSION = 'UPDATE_CONCESSION';

export function updateConcession(concessionArray) {
    return {
        type: UPDATE_CONCESSION,
        payload: concessionArray
    }
}

