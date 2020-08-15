export const decision = (nr) => {
  return {
    type: 'SUGGESTION',
    payload: nr
  }
}

export const removeDecision = ({ field, index }) => {
  return {
    type: 'REMOVE_SUGGESTION',
    field,
    index,
    // payload: nr
  }
}