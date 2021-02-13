export const addSortedElement = (index: number) => {
  return {type: 'ADD_TO_SORTED', payload: index};
}

export const setSorted = (arr: Array<number>) => {
  return {type: 'SET_SORTED', payload: arr};
}

export const clearSorted = () => {
  return {type: 'CLEAR_SORTED'};
}

export default (state: Array<number> = [], {type, payload}: {type: string, payload: any}) => {
  switch(type) {
    case 'ADD_TO_SORTED':
      return [...state, payload];
    case 'SET_SORTED':
      return [...payload];
    case 'CLEAR_SORTED':
      return [];
    default:
      return state;
  }
}