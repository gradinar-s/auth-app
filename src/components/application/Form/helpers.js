export const validateRequiredField = (value) => {
  if (!value.trim()) return "This is a required field";

  if (value) return "";
};
