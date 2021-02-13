export const setActiveBars = (arr: ReadonlyArray<number>) => {
  return { type: 'SET_ACTIVE_BARS', payload: arr }
}

export const addActiveBar = (index: number) => {
  return { type: 'ADD_ACTIVE_BAR', payload: index};
}

export const clearActiveBars = () => {
  return { type: 'CLEAR_ACTIVE_BARS' };
}

export default (state: Array<number> = [], {type, payload}: {type: string, payload: any}) => {
  switch(type) {
    case 'SET_ACTIVE_BARS':
      return payload;
    case 'ADD_ACTIVE_BAR':
      return [...state, payload];
    case 'CLEAR_ACTIVE_BARS':
      return [];
    default:
      return state;
  }
}