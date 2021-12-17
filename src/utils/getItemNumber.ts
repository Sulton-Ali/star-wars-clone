export const getItemNumber = (value: string): string => {
  const valueArray = value.split("/");
  return valueArray[valueArray.length - 2];
};
