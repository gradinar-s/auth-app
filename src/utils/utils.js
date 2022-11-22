export const getInitialFields = (fields) => {
  return fields.reduce((acc, i) => ({ ...acc, [i?.name]: "" }), {});
};
