'use client'

export default function validadeInfo(values) {
    let errors = {};

    //Name
    if (!values.name.trim()) {
        errors.name = "focus:";
    }

    //Site
    if (!values.site.trim()) {
        errors.site = "focus:";
    }

    //Email
    if (!values.mail) {
        errors.mail = 'digite o seu email!';
    } else if (!/\S+@\S+\.\S+/.test(values.mail)) {
        errors.mail = 'email inválido.';
    }

    //Phone
    if (!values.phone) {
        errors.phone = 'digite seu telefone?';
    }

    if (!values.service) {
        errors.service = 'digite seu telefone?';
    }

    if (!values.computers) {
        errors.computers = 'digite seu telefone?';
    }

    //Message
    if (!values.message) {
        errors.message = 'nos conte um pouco sobre seu projeto!';
    }

    //Solução
    // if (!values.app & !values.website & !values.branding & !values.uiux) {
    //     errors.solucao = '*qual serviço você precisa?';
    // }

    //Orçamento
    // if (!values.orcamento) {
    //     errors.orcamento = '*qual o seu orçamento?';
    // }



    return errors;
}

