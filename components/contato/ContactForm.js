'use client'
import * as React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { BtnChev } from '@/components/BtnChev';
import CardProducts from '@/components/CardProducts';
import validate from '@/app/contato/api/validateInfo';
import useForm from '@/app/contato/api/useForm';

const ContactForm = () => {

    const { isSubmitting, handleChange, values, handlePress, errors, setValues, isLoading } =
        useForm(validate);

    return (
        <section className='bg-cream py-28'>
            <div className='container'>
                <div className='grid grid-cols-12 gap-4'>
                    <div className='col-span-12 lg:col-span-4 mb-10'>
                        <h1 className='text-primary max-w-2xl text-xl font-semibold mb-4'>Faça uma cotação para sua empresa</h1>
                        <p className='text-secondary max-w-md text-base mb-10'>Preencha os campos e em breve retornaremos o contato com as melhores soluções. Se preferir, entre em contato:</p>

                        <div className=' flex flex-row justify-between'>
                            <div className='mb-6'>
                                <p className='text-md text-secondary'>Whatsapp</p>
                                <a href='https://wa.me/+5511912016426?text=Ol%C3%A1%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20computadores%20dispon%C3%ADveis' target='_blank' className='text-primary hover:text-brite'>
                                    <p className='text-base text-primary hover:text-brite font-bold'>(11) 91201-6426</p>
                                </a>
                            </div>

                            <div className='mb-6'>
                                <p className='text-md text-secondary'>Telefone</p>
                                <a href='tel:+551143280030' className='text-primary hover:text-brite w-fit'>
                                    <p className='text-base text-primary hover:text-brite font-bold '>(11) 4328-0030</p>
                                </a>
                            </div>
                        </div>

                        <div className=''>
                            <p className='text-md text-secondary'>Email</p>
                            <div className='w-fit'>
                            <a href='mailto:contato@briteinformatica.com.br' className='text-primary hover:text-brite w-fit'>
                                <p className='text-base font-bold w-fit'>contato@briteinformatica.com.br</p>
                            </a>
                            </div>
                        </div>
                    </div>

                    <div className='col-span-12 lg:col-span-7 lg:col-start-6'>
                        <div className='bg-white shadow-xl w-full rounded-lg'>
                            <div className='md:p-10 p-6'>
                                <div className='flex flex-col lg:flex-row mb-4 lg:items-center relative'>
                                    <label className='text-md text-primary font-bold lg:w-[50%] pr-4'>Nome</label>
                                    <input
                                        className={`text-md text-primary rounded-md border bg-cream border-secondary h-10 ps-2 w-full ${errors.name && "border-validator"}`}
                                        type='text'
                                        name='name'
                                        id='name'
                                        value={values.name}
                                        onChange={handleChange}
                                        placeholder='Jhon Doe'
                                    >
                                    </input>
                                    {errors.name && <div className='absolute right-3'><Image src="/assets/icons/warning.svg" width={16} height={16} alt='Error'/> </div>}
                                </div>

                                <div className='flex flex-col lg:flex-row mb-4 lg:items-center relative'>
                                    <label className='text-md text-primary font-bold lg:w-[50%] pr-4'>Site da empresa</label>
                                    <input
                                        className={`text-md text-primary rounded-md border bg-cream border-secondary h-10 ps-2 w-full ${errors.site && "border-validator"}`}
                                        type='text'
                                        placeholder='briteinformatica.com.br'
                                        name='site'
                                        id='site'
                                        value={values.site}
                                        onChange={handleChange}
                                    >
                                    </input>
                                    {errors.site && <div className='absolute right-3'><Image src="/assets/icons/warning.svg" width={16} height={16} alt='Error'/> </div>}
                                </div>

                                <div className='flex flex-col lg:flex-row mb-4 lg:items-center relative'>
                                    <label className='text-md text-primary font-bold lg:w-[50%] pr-4'>Email</label>
                                    <input
                                        className={`text-md text-primary rounded-md border bg-cream border-secondary h-10 ps-2 w-full ${errors.mail && "border-validator"}`}
                                        type='mail'
                                        placeholder='jhon@exemplo.com.br'
                                        name='mail'
                                        id='mail'
                                        value={values.mail}
                                        onChange={handleChange}
                                    ></input>
                                    {errors.mail && <div className='absolute right-3'><Image src="/assets/icons/warning.svg" width={16} height={16} alt='Error'/> </div>}
                                </div>

                                <div className='flex flex-col lg:flex-row mb-4 lg:items-center relative'>
                                    <label className='text-md text-primary font-bold lg:w-[50%] pr-4'>Telefone comercial</label>
                                    <input
                                        className={`text-md text-primary rounded-md border bg-cream border-secondary h-10 ps-2 w-full ${errors.phone && "border-validator"}`}
                                        type='phone'
                                        placeholder='+55 (11) 91234-5678'
                                        name='phone'
                                        id='phone'
                                        value={values.phone}
                                        onChange={handleChange}
                                    ></input>
                                    {errors.phone && <div className='absolute right-3'><Image src="/assets/icons/warning.svg" width={16} height={16} alt='Error'/> </div>}
                                </div>

                                {/* <div className='flex flex-col lg:flex-row mb-4'>
                                    <div className='lg:w-[50%] pr-4'>
                                        <label className='text-md text-primary font-bold' for="services">Serviço</label>
                                        <p className='text-xs text-secondary'>Qual tipo de serviço você está procurando?</p>
                                    </div>
                                    <select
                                        id="services"
                                        name="services"
                                        value={values.service}
                                        onChange={handleChange}
                                        className=' bg-cream rounded-md border border-secondary h-10 ps-2 w-full text-secondary'>
                                        <option value="" disabled selected hidden>Selecione o tipo do serviço</option>
                                        <option className='text-md text-secondary hover:text-primary' value="24 meses">Locação 24 meses</option>
                                        <option className='text-md text-secondary hover:text-primary' value="36 meses">Locação 36 meses</option>
                                        <option className='text-md text-secondary hover:text-primary' value="48 meses">Locação 48 meses</option>
                                        <option className='text-md text-secondary hover:text-primary' value="60 meses">Locação 60 meses</option>
                                        <option className='text-md text-secondary hover:text-primary' value="compra">Compra de computadores</option>
                                        <option className='text-md text-secondary hover:text-primary' value="locação + compra">Locação + Compra</option>
                                    </select>
                                </div> */}

                                <div className='flex flex-col lg:flex-row mb-4'>
                                    <div className='lg:w-[50%] pr-4'>
                                        <label className='text-md text-primary font-bold' for="services">Serviço</label>
                                        <p className='text-xs text-secondary'>Qual tipo de serviço você está procurando?</p>
                                    </div>
                                    <select
                                        id="service"
                                        name="service"
                                        value={values.service}
                                        onChange={handleChange}
                                        className={`bg-cream rounded-md border border-secondary h-10 ps-2 w-full text-secondary ${errors.service && "border-validator"}`}>
                                        <option value="" disabled selected hidden>Selecione o tipo do serviço</option>
                                        <option className='text-md text-secondary hover:text-primary' value="24 meses">Locação 24 meses</option>
                                        <option className='text-md text-secondary hover:text-primary' value="36 meses">Locação 36 meses</option>
                                        <option className='text-md text-secondary hover:text-primary' value="48 meses">Locação 48 meses</option>
                                        <option className='text-md text-secondary hover:text-primary' value="60 meses">Locação 60 meses</option>
                                        <option className='text-md text-secondary hover:text-primary' value="compra">Compra de computadores</option>
                                        <option className='text-md text-secondary hover:text-primary' value="locação + compra">Locação + Compra</option>
                                    </select>
                                </div>

                                <div className='flex flex-col lg:flex-row mb-4'>
                                    <div className='lg:w-[50%] pr-4'>
                                        <label className='text-md text-primary font-bold' for="computer">Quantidade</label>
                                        <p className='text-xs text-secondary'>Quantos computadores você precisa?</p>
                                    </div>
                                    <select
                                        id="computers"
                                        name="computers"
                                        value={values.computers}
                                        onChange={handleChange}
                                        className={`bg-cream rounded-md border border-secondary h-10 ps-2 w-full text-secondary ${errors.computers && "border-validator"}`}>
                                        <option value="" disabled selected hidden>Número de computadores:</option>
                                        <option className='text-md text-secondary hover:text-primary' value="10 - 50">10 - 50</option>
                                        <option className='text-md text-secondary hover:text-primary' value="50-150">50-150</option>
                                        <option className='text-md text-secondary hover:text-primary' value="150 - 500">150 - 500</option>
                                        <option className='text-md text-secondary hover:text-primary' value="+500">+500</option>
                                    </select>
                                </div>

                                <div className='flex flex-col lg:flex-row mb-4'>
                                    <div className='lg:w-[50%]'>
                                        <label className='text-md text-primary font-bold '>Mais alguma coisa?</label>
                                        <p className='text-xs text-secondary w-fit'>Opcional</p>
                                    </div>
                                    <div className='flex flex-col w-full'>
                                        <textarea
                                            id="message"
                                            placeholder='Fale mais sobre os programas que usam na sua empresa, suas necessidades e seu cronograma.'
                                            className={`text-md bg-cream text-primary rounded-md border border-secondary ps-2 pt-1 h-52 mb-4 ${errors.message && "border-validator"}`}
                                            name="message"
                                            rows="10"
                                            value={values.message}
                                            onChange={handleChange}
                                        />
                                        <p className='text-xs text-secondary mb-4'>Ao enviar este formulário, você concorda com a nossa <Link href='/politica-de-privacidade' className="text-primary hover:text-brite font-bold">Política de Privacidade.</Link></p>
                                        <button
                                            onClick={handlePress}
                                            className='px-5 py-1 ml-auto bg-brite rounded-full w-fit flex justify-center items-center'>
                                            <span className='text-white text-md'>
                                                Solicitar cotação
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactForm