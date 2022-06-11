const validator = (schema, body) => {
  const validate = schema.validateAsync(body);
  return validate;
};

export default validator;
