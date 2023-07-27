'use client'
import React from 'react'
import { Textarea } from '@nextui-org/react';
import Link from 'next/link'

export default function page() {
    return (
        <section className='bg-cream py-40 '>
            <div className='container'>
                <div className='grid grid-cols-12 gap-4'>
                    <div className='col-span-12 lg:col-span-4 mb-10'>
                        <h1 className='text-primary max-w-2xl text-xl font-semibold mb-4'>Faça uma cotação para sua empresa</h1>
                        <p className='text-secondary max-w-md text-base mb-10'>Preencha os campos e em breve retornaremos o contato com as melhores soluções. Se preferir, entre em contato:</p>

                        <div className=' flex flex-row justify-between'>
                            <div className='mb-6'>
                                <p className='text-md text-secondary'>Whatsapp</p>
                                <a href='https://wa.me/+5511912016426' className='text-primary hover:text-brite'>
                                    <p className='text-base text-primary hover:text-brite font-bold'>(11) 91201-6426</p>
                                </a>
                            </div>

                            <div className='mb-6'>
                                <p className='text-md text-secondary'>Telefone</p>
                                <a href='tel:+551143280030' className='text-primary hover:text-brite'>
                                    <p className='text-base text-primary hover:text-brite font-bold '>(11) 4328-0030</p>
                                </a>
                            </div>
                        </div>

                        <div className=''>
                            <p className='text-md text-secondary'>Email</p>
                            <a href='mailto:contato@briteinformatica.com.br' className='text-primary hover:text-brite'>
                                <p className='text-base font-bold'>contato@briteinformatica.com.br</p>
                            </a>
                        </div>
                    </div>

                    <div className='col-span-12 lg:col-span-7 lg:col-start-6'>
                        <div className='bg-white shadow-xl w-full rounded-lg'>
                            <div className='p-10'>

                                <div className='flex flex-col lg:flex-row mb-4 lg:items-center'>
                                    <label className='text-md text-primary font-bold lg:w-[50%] pr-4 '>Nome</label>
                                    <input className='text-md text-primary rounded-md border border-secondary h-10 ps-2 w-full' type='name' placeholder='Jhon Doe'></input>
                                </div>

                                <div className='flex flex-col lg:flex-row mb-4 lg:items-center'>
                                    <label className='text-md text-primary font-bold lg:w-[50%] pr-4'>Site da empresa</label>
                                    <input className='text-md text-primary rounded-md border border-secondary h-10 ps-2 w-full' type='text' placeholder='briteinformatica.com.br'></input>
                                </div>

                                <div className='flex flex-col lg:flex-row mb-4 lg:items-center'>
                                    <label className='text-md text-primary font-bold lg:w-[50%] pr-4'>Email</label>
                                    <input className='text-md text-primary rounded-md border border-secondary h-10 ps-2 w-full' type='mail' placeholder='jhon@exemplo.com.br'></input>
                                </div>

                                <div className='flex flex-col lg:flex-row mb-4 lg:items-center'>
                                    <label className='text-md text-primary font-bold lg:w-[50%] pr-4'>Telefone comercial</label>
                                    <input className='text-md text-primary rounded-md border border-secondary h-10 ps-2 w-full' type='phone' placeholder='+55 (11) 91234-5678'></input>
                                </div>

                                <div className='flex flex-col lg:flex-row mb-4'>
                                    <div className='lg:w-[50%] pr-4'>
                                        <label className='text-md text-primary font-bold' for="services">Serviço</label>
                                        <p className='text-xs text-secondary'>Qual tipo de serviço você está procurando?</p>
                                    </div>
                                    <select id="services" name="services" className='rounded-md border border-secondary h-10 ps-2 w-full text-secondary'>
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
                                        <label className='text-md text-primary font-bold' for="services">Quantidade</label>
                                        <p className='text-xs text-secondary'>Quantos computadores você precisa?</p>
                                    </div>
                                    <select id="services" name="services" className='rounded-md border border-secondary h-10 ps-2 w-full text-secondary'>
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
                                            className='text-primary rounded-md border border-secondary ps-2 pt-1 text-md  h-52 mb-4'
                                            name="message"
                                            rows="10"
                                            // value={values.message}
                                            // onChange={handleChange}
                                            required
                                        />
                                        <p className='text-xs text-secondary mb-4'>Ao enviar este formulário, você concorda com a nossa <Link href='/politica' className="text-primary hover:text-brite font-bold">Política de Privacidade.</Link></p>
                                        <Link href='/contact' className='px-5 py-1 ml-auto bg-brite rounded-full w-fit flex justify-center items-center'>
                                            <span className='text-white text-md'>
                                                Solicitar cotação
                                            </span>
                                        </Link>
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
