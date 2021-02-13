const add = (val: number) => {
  return { type: 'ADD_BAR', payload: val };  
};

const setAll = (val: Array<number>) => {
  return { type: 'SET_BARS', payload: val };
};

export { add, setAll };

export default (state = [], {type, payload}: {type: String, payload: any}) => {
  switch(type) {
    case 'ADD_BAR':
      return state.concat(payload);
    case 'SET_BARS':
      return payload;
    default:
      return state;
  }
}