import React from 'react';

import { Field, reduxForm, FieldArray } from 'redux-form';

export const renderField = ({
    input,
    label,
    type,
    meta: { touched, error }
}) => (
        <div>
            <label>{label}</label>
            <div>
                {error && touched
                    ? <input {...input} placeholder={label} type={type}  placeholder={error} />
                    : <input {...input} placeholder={label} type={type} />
                }
            </div>
        </div>
    )

