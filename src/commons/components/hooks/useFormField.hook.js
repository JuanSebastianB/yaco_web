import { useState } from 'react';

const useFormField = (discriminator, initialState) => {
  const [objectForm, setObjectForm] = useState(initialState);
  const bind = (properties) => {
    return {
      id: `id-field-${discriminator}-${properties.name}`,
      ...properties,
      value: objectForm[properties.value],
      onChange: (event) => setObjectForm({ ...objectForm, [properties.name]: event.target ? event.target.value : event })
    };
  };
  return [objectForm, bind, setObjectForm];
};

export default useFormField;
