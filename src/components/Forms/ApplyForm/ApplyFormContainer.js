import { Formik } from 'formik'
import { useDispatch } from "react-redux";
import ApplyForm from './ApplyForm';
import getValidationSchema from './applyFormValidationSchema';

const ApplyFormContainer = ({
    initialValues = {
        name: '',
        email: '',
        phone: '+380',
        position: 'frontend',
        photo: '',
    },
}) => {
  return (
    <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={getValidationSchema()}
        onSubmit={(form) => console.log(form)}
    >
        {({values}) => <ApplyForm values={values} />}
    </Formik>
  )
}

export default ApplyFormContainer