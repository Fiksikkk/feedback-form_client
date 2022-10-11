// import React from 'react';
import * as Yup from 'yup'

export const RequestSchema = Yup.object().shape({
    name: Yup.string()
    .min(2, "Too short!")
    .max(50, "Too Long!")
    .required('Required'),
    email: Yup.string().email("Invalid email").required('Required'),
    message: Yup.string().required('Required')
})
