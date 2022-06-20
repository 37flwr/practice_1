import React from 'react'
import { Form } from 'formik';
import { FormField } from '../../Formik/Fields'
import { RadioFormField } from '../../Formik/Fields'

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
        type: 'radio',
        placeholder: 'Frontend developer',
        show: true
    },
    {
        id: 'backend',
        name: 'position',
        type: 'radio',
        placeholder: 'Backend developer',
        show: true
    },
    {
        id: 'designer',
        name: 'position',
        type: 'radio',
        placeholder: 'Designer',
        show: true
    },
    {
        id: 'qa',
        name: 'position',
        type: 'radio',
        placeholder: 'QA',
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

const ApplyForm = ({initialValues}) => {
  return (
    <Form>
        {formFields({initialValues}).map(renderFormField)}
        <span>Select your position</span>
        {radioFormFields({initialValues}).map(renderRadioFormField)}
        {uploadFormFields({initialValues}).map(renderUploadFormField)}
    </Form>
  )
}

export default ApplyForm