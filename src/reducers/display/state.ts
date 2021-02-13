export const visualizerSorting = (): {type: string} => {
  return {type: 'SET_STATE_SORTING'};
}

export const visualizerUnsorted = (): {type: string} => {
  return {type: 'SET_STATE_UNSORTED'};
}

export const visualizerSorted = (): {type: string} => {
  return {type: 'SET_STATE_SORTED'};
}

export default (state: string = 'unsorted', {type}: {type:string}) => {
  switch(type) {
    case 'SET_STATE_UNSORTED':
      return 'unsorted';
    case 'SET_STATE_SORTING':
      return 'sorting';
    case 'SET_STATE_SORTED':
      return 'sorted';
    default:
      return state;
  }
}