import { Form } from 'formik';
import { useSelector } from 'react-redux';
import { FileFormField, FormField } from '../../Formik/Fields'
import { RadioFormField } from '../../Formik/Fields'
import Button from '../../../components/Buttons/Button'
import './styles.scss'

const formFields = () => [
    {
        id: 'name',
        name: 'name',
        type: 'text',
        placeholder: 'Name',
        show: true
    },
    {
        id: 'email',
        name: 'email',
        type: 'email',
        placeholder: 'Email',
        show: true
    },
    {
        id: 'phone',
        name: 'phone',
        type: 'text',
        placeholder: 'Phone',
        legend: '+38 (XXX) XXX - XX - XX',
        show: true
    },
].filter(({show}) => show)

const fileFormFields = () => [
    {
        id: 'photo',
        name: 'photo',
        type: 'file',
        placeholder: 'Upload your photo',
        show: true
    },
].filter(({show}) => show)

const renderFormField = ({ show, ...fieldProps }) => (
    <FormField key={fieldProps.id} {...fieldProps} />
)

const renderRadioFormField = ({ show, ...fieldProps }) => (
    <RadioFormField key={fieldProps.id} {...fieldProps} />
)

const renderFileFormField = ({ show, ...fieldProps }) => (
    <FileFormField key={fieldProps.id} {...fieldProps} />
)

const ApplyForm = ({values, positions}) => {
    const { loading } = useSelector((state) => state.Apply)

    const checkIfValid = (values) => {
        if (values.name.length > 2 && 
            values.email.length > 2 && 
            values.email.includes('@') && 
            values.email.includes('.') && 
            values.phone.length === 13 && 
            values.position !== '' &&
            values.photo !== '' ) {
            return true
        }
        return false
    }
  return (
    <Form className="apply-form" id='apply-form'>
        {formFields({values}).map(renderFormField)}

        <div className='nunito text-body b-87 group-heading'>Select your position</div>
        {positions.map(renderRadioFormField)}

        {fileFormFields({values}).map(renderFileFormField)}

        {checkIfValid(values) ?
            <Button width='standard' customClass="apply-form-button" loading={loading}>
                Sign up
            </Button>
        :
            <Button width='standard' disabled customClass="apply-form-button">
                Sign up
            </Button>
        }
    </Form>
  )
}

export default ApplyForm