import { ErrorMessage, Field } from 'formik';

import FormikError from '../../FormikError/FormikError';
import './styles.scss';

const FormField = ({
  component,
  name,
  label,
  legend,
  type,
  id,
  customClassName,
  divCustomClassName,
  errorCustomClassName,
  ...restProps
}) => (
  <div className='input-container' >
    <label className="nunito" htmlFor={id}>{label}</label>
    <Field
        name={name}
        id={id}
        {...(component && { component })}
        {...(type && { type })}
        {...restProps}
        className='field nunito'
    />
    <span className='legend nunito'>{legend}</span>
    <ErrorMessage component={FormikError} name={name} className={errorCustomClassName} />
  </div>
  );

export default FormField;