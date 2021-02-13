export const addSortedElement = (data: number | ReadonlyArray<number>) => {
  if (typeof data === 'number') {
    return {type: 'ADD_TO_SORTED', payload: data};
  } else {
    return {type: 'ADD_MULTIPLE_TO_SORTED', payload: data};
  }
}

export const setSorted = (arr: ReadonlyArray<number>) => {
  return {type: 'SET_SORTED', payload: arr};
}

export const clearSorted = () => {
  return {type: 'CLEAR_SORTED'};
}

export default (state: ReadonlyArray<number> = [], {type, payload}: {type: string, payload: any}) => {
  switch(type) {
    case 'ADD_TO_SORTED':
      return [...state, payload];
    case 'ADD_MULTIPLE_TO_SORTED': 
      return [...state, ...payload];
    case 'SET_SORTED':
      return [...payload];
    case 'CLEAR_SORTED':
      return [];
    default:
      return state;
  }
}