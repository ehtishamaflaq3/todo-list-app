const todoskey = "reacttodo";
export const getDataFromLocalStorage = () => {
  const rawtodoss = localStorage.getItem(todoskey);
  if (!rawtodoss) return [];
  return JSON.parse(rawtodoss);
};
export const setDataFromLocalStorage = () => {
  localStorage.setItem(todoskey, JSON.stringify(tasks));
};
