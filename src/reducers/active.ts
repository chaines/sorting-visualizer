export const setActiveBars = (arr: Array<number>) => {
  return { type: 'SET_ACTIVE_BARS', payload: arr }
}

export const clearActiveBars = () => {
  return { type: 'CLEAR_ACTIVE_BARS' };
}

export default (state: Array<number> = [], {type, payload}: {type: string, payload: any}) => {
  switch(type) {
    case 'SET_ACTIVE_BARS':
      return payload;
    case 'CLEAR_ACTIVE_BARS':
      return [];
    default:
      return state;
  }
}