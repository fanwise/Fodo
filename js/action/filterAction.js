export const SET_FILTER = 'SET_FILTER';

export const filters = {
  ALL: 'ALL',
  COMPLETED: 'COMPLETED',
  ACTIVED: 'ACTIVED'
}

export const setFilter = (filter) => {
  return { type: SET_FILTER, filter };
}
