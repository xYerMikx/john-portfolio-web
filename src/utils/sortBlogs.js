export const sortDescending = (arr) => {
  return arr.sort((objA, objB) => {
    return Date.parse(objB.date) - Date.parse(objA.date);
  });
}

export const sortAscending = (arr) => {
  return arr.sort((objA, objB) => {
    return Date.parse(objA.date) - Date.parse(objB.date);
  });
}
