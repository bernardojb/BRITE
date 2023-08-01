'use client'
import { useState, useEffect } from 'react';

const useForm = validate => {
    const [values, setValues] = useState({
        name: '',
        site: '',
        mail: '',
        phone: '',
        service:'',
        computers:'',
        message: '',
        // where: ''
    });

    // const { t } = useTranslation();

    const [isSubmitting, setSubmitting] = useState(false)
    const [isLoading, setLoading] = useState(false)
    const [errors, setErrors] = useState({});

    //MODAL
    // const [modalSuccess, setModalSuccess] = useState(false);
    // const [modalFail, setModalFail] = useState(false);

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
        // setSubmitting(true);

        console.log("RESPONSEEEEE", e)

        // if (values.name, values.mail, values.site, values.phone, values.message === null &&
        //     values.name, values.mail, values.site, values.phone, values.message === "") {
        //     console.log('TESTEEEEE', validate(values))
        // } else {
        // setSubmitting(true);
        setLoading(true)
        // console.log("RESPONSEEEEE", e )

        await fetch(
            './send-email',
            {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(function (res) {
                if (res.status == 202) {
                    console.log("then 1", res)
                    // toast.success("Mensagem enviada com sucesso!", {
                    //     autoClose: 5000,
                    // })
                    // setTimeout(() => {
                    //     // window.location.reload()
                    // }, "5000")
                    setSubmitting(true);
                    setLoading(false)
                } else {
                    // toast.error(`${t('contato.feedback.toast_1')}`, {
                    //     autoClose: 5000,
                    // })
                    setLoading(false)
                    // setTimeout(() => {
                    //     window.location.reload()
                    //   }, "5000")
                    console.log("else 1", res)
                }

            }).catch(function (err) {
                console.error("ERROOOOOORR >>>>", err)
            })
            .finally(() => {
                // setSubmitting(false);
            });
        // }
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