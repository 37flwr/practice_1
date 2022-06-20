import { ErrorMessage, Field } from 'formik';

import FormikError from '../../FormikError/FormikError';
import './styles.scss';

const FormField = ({
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
  <div className='input-container is-column align-center' >
    <label className="content-start nunito" htmlFor={id}>{label}</label>
    <Field
        name={name}
        id={id}
        {...(component && { component })}
        {...(type && { type })}
        {...restProps}
        className='field nunito'
    />
    <ErrorMessage component={FormikError} name={name} className={errorCustomClassName} />
  </div>
  );

export default FormField;