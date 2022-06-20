import * as Yup from 'yup'

const getValidationSchema = () => {
    const phoneRegExp = /^\+?3?8?(0\d{9})$/


    return Yup.object().shape({
        name: Yup.string()
            .required('Name is required')
            .min(2, 'Must be at least 2 characters long')
            .max(60, 'Cannot exceed the length of 60 characters'),
        email: Yup.string()
            .required('Email is required')
            .email('Must be a valid email'),
        phone: Yup.string()
            .required('Phone number is required')
            .matches(phoneRegExp, 'Not a valid phone number'),
        photo: Yup.string()
            .required('Image is required')
    })
}

export default getValidationSchema