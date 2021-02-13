import store from '../store';

export const timeout = (ms: number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(null);
    }, ms);
  })
}

export const range = (start: number, stop: number): ReadonlyArray<number> => {
  return [...Array(stop).keys()].slice(start);
}

export class Time {
  time: number;
  unsubscribe: ()=>(any);

  constructor() {
    this.time = 0;
    this.unsubscribe = store.subscribe(this.handleChange.bind(this));
  }

  handleChange(): void {
    this.time = store.getState().speed;
  }


}

