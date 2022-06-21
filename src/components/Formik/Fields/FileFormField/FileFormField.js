import { ErrorMessage, Field } from 'formik';

import FormikError from '../../FormikError/FormikError';
import './styles.scss';

const FileFormField = ({
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
  <div className='file-input-container' >
    <Field
        name={name}
        id={id}
        {...(component && { component })}
        {...(type && { type })}
        {...restProps}
        className='file-field text-body nunito'
    />
    <label className="text-body nunito" htmlFor={id}>{label}</label>
    <ErrorMessage component={FormikError} name={name} className={errorCustomClassName} />
  </div>
  );

export default FileFormField;