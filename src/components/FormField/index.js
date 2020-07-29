import React from 'react';
import { InputField } from './styles'


function FormField({ label, type, name, value, onChange }) {

    let input;
    if (type === 'textarea') {
        input = <textarea name={name} value={value.nome} onChange={onChange}/>;
    } else {
        input = <input type={type} name={name} value={value.nome} onChange={onChange}/>;
    }

    return (
        <InputField>
            <label>
                {label}:
                {input}
            </label>
        </InputField>

    );
}

export default FormField;
