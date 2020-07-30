import React from 'react';
import PropTypes from 'prop-types';
import { InputField } from './styles';

function FormField({
  label, type, name, value, onChange,
}) {
  let input;
  type === 'textarea' ? input = <textarea name={name} value={value} onChange={onChange} /> : input = <input type={type} name={name} value={value} onChange={onChange} />;
    
  return (
    <InputField>
      <label>
        {label}:
        {input}
      </label>
    </InputField>

  );
}

FormField.defaultProps = {
    type: 'text',
    value: '',
    onChange: () => {},
}

FormField.propTypes = {
    label: PropTypes.string.isRequired, 
    type: PropTypes.string, 
    name: PropTypes.string.isRequired, 
    value: PropTypes.string, 
    onChange: PropTypes.func,
}

export default FormField;
