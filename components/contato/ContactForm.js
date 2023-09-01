'use client'
import * as React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { BtnChev } from '@/components/buttons/BtnChev';
import CardProducts from '@/components/CardProducts';
import validate from '@/app/contato/send/validateInfo';
import useForm from '@/app/contato/send/useForm';
import Animation from '../structure/Animation';

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
                                    <p className='text-base text-primary hover:text-brite font-bold ease-out transition duration-200'>(11) 91201-6426</p>
                                </a>
                            </div>

                            <div className='mb-6'>
                                <p className='text-md text-secondary'>Telefone</p>
                                <a href='tel:+551143280030' className='text-primary hover:text-brite w-fit'>
                                    <p className='text-base text-primary hover:text-brite font-bold ease-out transition duration-200'>(11) 4328-0030</p>
                                </a>
                            </div>
                        </div>

                        <div className=''>
                            <p className='text-md text-secondary'>Email</p>
                            <div className='w-fit'>
                                <a href='mailto:contato@briteinformatica.com.br' className='text-primary hover:text-brite w-fit'>
                                    <p className='text-base font-bold w-fit ease-out transition duration-200'>contato@briteinformatica.com.br</p>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className='col-span-12 lg:col-span-7 lg:col-start-6'>
                        <div className='bg-white shadow-xl w-full rounded-lg h-full'>
                            {isSubmitting ? (
                                <div className='h-full flex justify-center items-center text-center'>
                                    <Animation>
                                        <div className='md:p-10 p-6 flex flex-col justify-center items-center text-center'>
                                            <h1 className='text-primary max-w-2xl text-xl font-semibold mb-4'>Obrigado!</h1>
                                            <p className='text-secondary max-w-md text-base mb-10'>Seu email foi enviado com sucesso! Entraremos em contato em breve.</p>
                                            <BtnChev
                                                href="/"
                                                color="text-white"
                                                bg="bg-brite"
                                                text="Voltar para home"
                                            />
                                        </div>
                                    </Animation>
                                </div>
                            ) : (
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
                                        {errors.name && <div className='absolute right-3'><Image src="/assets/icons/warning.svg" width={16} height={16} alt='Error' /> </div>}
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
                                        {errors.site && <div className='absolute right-3'><Image src="/assets/icons/warning.svg" width={16} height={16} alt='Error' /> </div>}
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
                                        {errors.mail && <div className='absolute right-3'><Image src="/assets/icons/warning.svg" width={16} height={16} alt='Error' /> </div>}
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
                                        {errors.phone && <div className='absolute right-3'><Image src="/assets/icons/warning.svg" width={16} height={16} alt='Error' /> </div>}
                                    </div>

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
                                            <option className='text-md text-secondary hover:text-primary' value="Venda de computadores">Venda de computadores</option>
                                            <option className='text-md text-secondary hover:text-primary' value="Venda Smart">Venda Smart</option>
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
                                                className={`text-md bg-cream text-primary rounded-md border border-secondary ps-2 pt-1 h-52 mb-4`}
                                                name="message"
                                                rows="10"
                                                value={values.message}
                                                onChange={handleChange}
                                            />
                                            <p className='text-xs text-secondary mb-4 '>Ao enviar este formulário, você concorda com a nossa <Link href='/politica-de-privacidade' className="text-primary hover:text-brite font-bold ease-out transition duration-200">Política de Privacidade.</Link></p>
                                            <button
                                                disabled={isLoading ? true : false}
                                                onClick={handlePress}
                                                className='px-5 py-1 ml-auto bg-brite rounded-full w-[180px] flex justify-center items-center hover:drop-shadow-lg hover:bg-brite-hover ease-out transition duration-200'>
                                                {isLoading && (
                                                    <div className='h-8 flex justify-center items-center'>
                                                        <svg aria-hidden="true" role="status" class="inline w-6 h-6 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                                                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                                                        </svg>
                                                    </div>
                                                )
                                                }
                                                {!isLoading && (
                                                    <div className='flex flex-row items-center justify-center'>
                                                        <p className='text-white text-md mr-4 w-full'>Solicitar cotação</p>
                                                        <div className={`w-[8px] h-[16px] relative font-semibold`}>
                                                            <Image src="/assets/icons/chevron.svg" fill />
                                                        </div>
                                                    </div>
                                                )
                                                }
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactForm