const validate = (formValues) => {
  const errors = {};
  if (!formValues.name) {
    errors.name = "Enter a name";
  }
  if (!formValues.preparation_time) {
    errors.preparation_time = "Specify preparation time";
  }
  if (!formValues.type) {
    errors.type = "Choose a meal type";
  }

  if (!formValues.no_of_slices) {
    errors.no_of_slices = "Add number of slices";
  }

  if (!formValues.diameter) {
    errors.diameter = "Specify diameter";
  }

  if (!formValues.spiciness_scale) {
    errors.spiciness_scale = "Specify spiciness (1-10)";
  }

  if (!formValues.bread_slices) {
    errors.bread_slices = "Add number of slices";
  }

  return errors;
};

export default validate;
