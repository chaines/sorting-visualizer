export const setSorting = (val: boolean) => {
  return { type: 'SET_SORTING', payload: val };
}

export default (state: boolean = false, {type, payload}: {type: string, payload: any}) => {
  switch(type) {
    case 'SET_SORTING':
      return payload;
    default:
      return state;
  }
}