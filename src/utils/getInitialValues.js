export function getInitialClassNames(initialNewest, initialOldest) {
  const data = window.localStorage.getItem("classNames");
  return (
    JSON.parse(data) || {
      class1: initialNewest,
      class2: initialOldest,
    }
  );
}

export function getInitialBlogs(initialArray) {
  const data = window.localStorage.getItem("blogs");
  return JSON.parse(data) || initialArray;
}
