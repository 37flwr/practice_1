import { ErrorMessage } from 'formik';
import { useState } from 'react';
import { useFormikContext } from 'formik';

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
}) => {
  const formikProps = useFormikContext()
  const [fileName, setFileName] = useState(null)

  return (
  <div className='file-input' >
    <div className="file-input-container">
      <label className='file-input-button nunito b-87' htmlFor={id}>
        Upload
      </label>
      {fileName?
        <div className='file-input-data nunito b-87'>
          {fileName}
        </div>
        :
        <div className='file-input-data nunito'>
          Upload your photo
        </div>
      }
      <input 
        name={name}
        id={id}
        {...(component && { component })}
        {...(type && { type })}
        {...restProps}
        onChange={(event) => {
          setFileName(event.target.files[0].name);
          formikProps.setFieldValue('photo', event.target)}}
        className='file-field text-body nunito'
        accept="image/*"
      />
    </div>
    <ErrorMessage component={FormikError} name={name} className={errorCustomClassName} />
  </div>
  )};

export default FileFormField;