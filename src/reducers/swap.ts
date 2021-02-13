export const setSwappers = (arr: Array<number>) => {
  return { type: 'SET_SWAP', payload: arr };
}

export const clearSwappers = () => {
  return { type: 'CLEAR_SWAP' };
}

export default (state: Array<number> = [], {type, payload}: {type: string, payload: any}) => {
  switch(type) {
    case 'SET_SWAP':
      return payload;
    case 'CLEAR_SWAP':
      return [];
    default:
      return state;
  }
}