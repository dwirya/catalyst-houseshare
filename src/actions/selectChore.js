const CHORE_SELECTED = 'CHORE_SELECTED';

export function selectChore(chore) {
    return {
        type: CHORE_SELECTED,
        payload: chore
    }
}

