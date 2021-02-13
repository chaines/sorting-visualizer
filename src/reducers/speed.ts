const setSpeed = (speed: number) => {
  return { type: 'SET_SPEED', payload: speed}
};

export { setSpeed };

export default (state: number = 0, {type, payload}: {type: String, payload: any}) => {
  switch(type) {
    case 'SET_SPEED':
      return payload;
    default:
      return state;
  }
};