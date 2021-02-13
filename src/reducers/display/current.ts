export const setCurrentArray = (arr: ReadonlyArray<number>): { type: string, payload: ReadonlyArray<number> } => {
  return { type: 'SET_CURRENT', payload: arr };
}

export const clearCurrentArray = (): {type: string} => {
  return { type: 'CLEAR_CURRENT' };
}

export default (state: ReadonlyArray<number> = [], {type, payload}: {type: string, payload: any}) => {
  switch(type) {
    case 'SET_CURRENT':
      return [...payload];
    case 'CLEAR_CURRENT':
      return [];
    default:
      return state;
  }
}