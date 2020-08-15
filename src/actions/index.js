export const decision = (nr) => ({
  type: 'SUGGESTION',
  payload: nr,
});

export const removeDecision = (nr) => ({
  type: 'REMOVE_SUGGESTION',
  payload: nr,
});

export const removeAllDecision = () => ({
  type: 'REMOVE_ALL_SUGGESTION',
});
