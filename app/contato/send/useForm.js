'use client'
import { useState } from 'react';

const useForm = validate => {
    const [values, setValues] = useState({
        name: '',
        site: '',
        mail: '',
        phone: '',
        service:'',
        computers:'',
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
        console.log("Res", e)
        setLoading(true)

        await fetch(
            '/api/route',
            {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(function (res) {
                if (res.status == 202) {
                    setSubmitting(true);
                    setLoading(false)
                } else {
                    setLoading(false)
                }
            }).catch(function (err) {
                console.error(err)
            })
            .finally(() => {
                setSubmitting(false);
            });
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