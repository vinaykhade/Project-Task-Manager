export const INCREMENT_VALUE = 'INCREMENT_VALUE';
export const DECREMENT_VALUE = 'DECREMENT_VALUE';
export const UPDATE_VALUE = 'UPDATE_VALUE';

export const incrementValue = payload => ({
  type: INCREMENT_VALUE,
  payload,
});

export const decrementValue = payload => ({
  type: DECREMENT_VALUE,
  payload,
});

export const updateValue = payload => ({
  type: UPDATE_VALUE,
  payload,
});
