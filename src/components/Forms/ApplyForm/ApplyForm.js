import { Form } from 'formik';
import { FileFormField, FormField } from '../../Formik/Fields'
import { RadioFormField } from '../../Formik/Fields'
import Button from '../../../components/Button'
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

const radioFormFields = () => [
    {
        id: 'frontend',
        name: 'position',
        value: 'frontend',
        type: 'radio',
        label: 'Frontend developer',
        show: true
    },
    {
        id: 'backend',
        name: 'position',
        value: 'backend',
        type: 'radio',
        label: 'Backend developer',
        show: true
    },
    {
        id: 'designer',
        name: 'position',
        value: 'designer',
        type: 'radio',
        label: 'Designer',
        show: true
    },
    {
        id: 'qa',
        name: 'position',
        value: 'qa',
        type: 'radio',
        label: 'QA',
        show: true
    },
]

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
    console.log(positions);
  return (
    <Form className="apply-form" >
        {formFields({values}).map(renderFormField)}

        <div className='nunito text-body b-87 group-heading'>Select your position</div>
        {positions.map(renderRadioFormField)}

        {fileFormFields({values}).map(renderFileFormField)}

        {checkIfValid(values) ?
            <Button width='standard' customClass="apply-form-button">
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