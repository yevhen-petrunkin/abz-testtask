function checkTextLength(str, limit = 40) {
  if (str === undefined) {
    return { doesFit: false, text: '' };
  }

  if (limit >= str.length) {
    return { doesFit: true, text: str };
  }

  return { doesFit: false, text: str.slice(0, limit - 4) + '...' };
}

export default checkTextLength;
