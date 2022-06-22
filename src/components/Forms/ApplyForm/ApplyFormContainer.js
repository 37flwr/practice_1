import { Formik } from 'formik'
import { useDispatch } from "react-redux";
import ApplyForm from './ApplyForm';
import { sendApply } from '../../../store/apply/actions'
import getValidationSchema from './applyFormValidationSchema';

const ApplyFormContainer = ({
    initialValues = {
        name: '',
        email: '',
        phone: '+380',
        position: '',
        photo: '',
    },
    setFormStatus,
    positions,
}) => {
  const dispatch = useDispatch()

  return (
    <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={getValidationSchema()}
        onSubmit={(form) => {
          dispatch(sendApply(form))
          setFormStatus(true)}
        }
    >
        {({values}) => <ApplyForm values={values} positions={positions}/>}
    </Formik>
  )
}

export default ApplyFormContainer