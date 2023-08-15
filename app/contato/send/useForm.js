'use client'
import { useState } from 'react';

const useForm = validate => {
    const [values, setValues] = useState({
        name: '',
        site: '',
        mail: '',
        phone: '',
        service: '',
        computers: '',
        message: '',
    });

    const [isSubmitting, setSubmitting] = useState(false)
    const [isLoading, setLoading] = useState(false)
    const [errors, setErrors] = useState({});

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
        console.log(value)
    };

    const handlePress = async (e) => {
        e.preventDefault();
        setErrors(validate(values));
        setLoading(true)

        if (values.name, values.site, values.mail, values.phone, values.service, values.computers === null &&
            values.name, values.site, values.mail, values.phone, values.service, values.computers === ""){
            setErrors(validate(values));
            setLoading(false)
        } else {
            await fetch(
                '/api',
                {
                    method: "POST",
                    body: JSON.stringify(values),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(function (res) {
                    console.log(res)
                    setLoading(false)
                }).catch(function (err) {
                    console.error(err)
                })
                .finally(() => {
                    setSubmitting(true)
                });
        }
    };

    return {
        isSubmitting,
        handleChange,
        values,
        handlePress,
        errors,
        setValues,
        isLoading
    };

};

export default useForm;