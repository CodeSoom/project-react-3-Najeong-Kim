export function selectChoice(choiceId) {
  return {
    type: 'selectChoice',
    payload: { choiceId },
  };
}

export function selectResult(id) {
  return {
    type: 'selectResult',
    payload: { id },
  };
}

export function clearSelects() {
  return {
    type: 'clearSelects',
  }
}
