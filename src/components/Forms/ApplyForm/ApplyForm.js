import React from 'react'
import { Form } from 'formik';
import { FormField } from '../../Formik/Fields'
import { RadioFormField } from '../../Formik/Fields'
import Button from '../../../components/Button'

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

const uploadFormFields = () => [
    {
        id: 'photo',
        name: 'photo',
        type: 'text',
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

const renderUploadFormField = ({ show, ...fieldProps }) => (
    <div key={fieldProps.id}>1</div>
)

const ApplyForm = ({values}) => {
  return (
    <Form>
        {formFields({values}).map(renderFormField)}
        <span>Select your position</span>
        {radioFormFields({values}).map(renderRadioFormField)}
        {uploadFormFields({values}).map(renderUploadFormField)}

        <Button width='standard'>
            Sign up
        </Button>
    </Form>
  )
}

export default ApplyForm