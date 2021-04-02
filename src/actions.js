export function selectChoice(id) {
  return {
    type: 'selectChoice',
    payload: { id },
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
  };
}
