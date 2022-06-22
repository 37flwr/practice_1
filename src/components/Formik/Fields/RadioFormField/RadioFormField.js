import { ErrorMessage, Field } from 'formik';

import FormikError from '../../FormikError/FormikError';
import './styles.scss';

const RadioFormField = ({
  component,
  name,
  id,
}) => (
  <div className='radio-input-container' >
    <Field
        name='position'
        id={id}
        {...(component && { component })}
        value={name}
        type='radio'
        className='radio-field text-body nunito'
    />
    <label htmlFor={id} className='checkmark'/>
    <label className="b-87 text-body nunito radio-label" htmlFor={id}>{name}</label>
  </div>
  );

export default RadioFormField;