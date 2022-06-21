import { ErrorMessage, Field } from 'formik';

import FormikError from '../../FormikError/FormikError';
import './styles.scss';

const RadioFormField = ({
  component,
  name,
  label,
  type,
  id,
  customClassName,
  divCustomClassName,
  errorCustomClassName,
  ...restProps
}) => (
  <div className='radio-input-container' >
    <Field
        name={name}
        id={id}
        {...(component && { component })}
        {...(type && { type })}
        {...restProps}
        className='radio-field text-body nunito'
    />
    <label htmlFor={id} className='checkmark'/>
    <label className="b-87 text-body nunito" htmlFor={id}>{label}</label>
  </div>
  );

export default RadioFormField;