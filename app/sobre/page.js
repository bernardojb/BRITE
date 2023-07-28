'use client'
import * as React from 'react';

import Image from 'next/image'
import Link from 'next/link'
import { BtnChev } from '@/components/BtnChev';

const AboutCard = (props) => {
    return (
        <div className='flex flex-col col-span-12 sm:col-span-6 lg:col-span-3'>
            <div className='w-[24px] h-[24px] bg-placeholder mb-4'></div>
            <p className='text-xs text-secondary'>{props.title}</p>
            <p className='text-sm text-primary pr-2'>{props.text}</p>
        </div>
    )
}

export default function page() {
    return (
        <>
            {/* HERO */}
            <section>
                <div className='bg-placeholder w-full h-96'></div>
            </section>

            {/* BRITE */}
            <section className='bg-cream py-28'>
                <div className='container'>

                    <div className='mb-28'>
                        <h1 className='text-xl text-primary font-semibold mb-4'>Business Informática agora é Brite.</h1>
                        <p className='text-secondary max-w-[812px] text-lg font-semibold'>Nosso novo nome simboliza uma nova era de inovação e crescimento, mas não se engane: continuaremos a fornecer o mesmo nível de experiência e seriedade que você já está acostumado.</p>
                    </div>

                    <div className='grid gap-4 grid-cols-12 mb-28'>
                        <div className='flex flex-col lg:col-start-3 lg:col-span-3 md:col-span-3 col-span-12 justify-center items-start'>
                            <h1 className='text-xl text-primary font-semibold'>30+</h1>
                            <p className='text-base text-secondary'>anos de história</p>
                        </div>
                        <div className='flex flex-col lg:col-span-3 md:col-span-3 col-span-12 justify-center items-start'>
                            <h1 className='text-xl text-primary font-semibold'>120+</h1>
                            <p className='text-base text-secondary'>empresas atendidas</p>
                        </div>
                        <div className='flex flex-col lg:col-span-4 md:col-span-5 col-span-12 justify-center items-start'>
                            <h1 className='text-xl text-primary font-semibold'>40.000+</h1>
                            <p className='text-base text-secondary'>computadores alugados até hoje</p>
                        </div>
                    </div>

                    <div className='mb-28'>
                        <p className='text-secondary max-w-[812px] text-lg font-semibold'>Há mais de 30 anos no mercado corporativo, a Brite atua no segmento de TI, locando e vendendo notebooks, desktops e servidores para empresas.</p>
                    </div>

                    <div className='grid xl:grid-cols-6 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 pb-10 gap-3 '>
                        <div className='w-full flex justify-center relative h-[75px]'>
                            <Image className='brightness-[80%] ' src="./assets/icons/btg.svg" fill />
                        </div>

                        <div className='w-full flex justify-center relative h-[75px]'>
                            <Image className='brightness-[80%] ' src="./assets/icons/vw.svg" fill />
                        </div>

                        <div className='w-full flex justify-center relative h-[75px]'>
                            <Image className='brightness-[80%]' src="./assets/icons/eurobike.svg" fill />
                        </div>

                        <div className='w-full flex justify-center relative h-[75px]'>
                            <Image className='brightness-[80%] ' src="./assets/icons/wps.svg" fill />
                        </div>

                        <div className='w-full flex justify-center relative h-[75px]'>
                            <Image className='brightness-[80%] ' src="./assets/icons/bayer.svg" fill />
                        </div>

                        <div className='w-full flex justify-center relative h-[75px]'>
                            <Image className='brightness-[80%] ' src="./assets/icons/bunge.svg" fill />
                        </div>
                    </div>
                </div>
            </section>

            {/* TIMELINE */}
            <section className='bg-primary py-28'>
                <div className='container'>
                    <div className='grid grid-cols-12 gap-4 pb-28'>
                        <div className='lg:col-span-4 col-span-12 '>
                        <Image className='brightness-[80%] ' src="./assets/icons/certified-lenovo-partner-02.svg" height={14} width={164} />
                            <h1 className='text-white text-xl text-semibold mb-6'>Parceiro oficial Lenovo no Brasil.</h1>
                            
                            <BtnChev
                                href="/computadores"
                                color="text-white"
                                bg="bg-[transparent] pl-0 mr-6"
                                text="Nossos produtos"
                            />
                        </div>
                        <div className='lg:col-span-7 lg:col-start-6 col-span-12'>
                            <div className='h-[140px] bg-placeholder mb-6'>

                            </div>
                            <p className='text-secondary text-base'>
                                A Lenovo, uma potência multinacional de tecnologia com sede em Pequim, China, tem uma história fascinante que ressoa em suas conquistas atuais. Fundada em 1984, com uma equipe de 11 engenheiros que através de uma filosofia empresarial persistente e um espírito inovador, a Lenovo tornou-se a maior fabricante de computadores do mundo, presente em mais de 160 países.
                            </p>
                        </div>
                    </div>

                    <div className='pb-28'>
                        <h1 className='text-lg text-white font-semibold max-w-[720px] text-right ml-auto'>Atuamos há mais de 30 anos no mercado corporativo no segmento de TI, locando e vendendo notebooks, desktops e servidores para empresas.</h1>
                    </div>

                    <div className='grid grid-cols-12'>

                        <div className='sm:col-span-9 col-span-12 lg:col-start-1 flex md:flex-row flex-col mb-20'>
                            <h1 className='text-secondary text-lg mr-4 font-semibold'>1990</h1>
                            <div className='flex flex-col'>
                                <p className='text-baselg text-white mb-4 font-semibold'>Responsáveis pelo maior numero de vendas de computadores Toshiba no Brasil, além do pioneirismo em alugueis de computadores.</p>
                                <div className=' w-[80px] h-[12px]'>
                                    <Image className='brightness-[80%]' src="./assets/icons/toshiba.svg" width={80} height={12} />
                                </div>
                            </div>
                        </div>

                        <div className='sm:col-span-9 col-span-12 lg:col-start-2 flex md:flex-row flex-col mb-20'>
                            <h1 className='text-secondary text-lg mr-4 font-semibold'>2004</h1>
                            <div className='flex flex-col'>
                                <p className='text-baselg text-white mb-4 font-semibold'>Entre 2003 e 2004 introduzimos em território nacional um conceito completo de locação de computadores.</p>
                                <div className=' w-[80px] h-[12px]'>
                                    <Image className='brightness-[80%]' src="./assets/icons/itautec.svg" width={80} height={12} />
                                </div>
                            </div>
                        </div>

                        <div className='sm:col-span-9 col-span-12 lg:col-start-3 flex md:flex-row flex-col mb-20'>
                            <h1 className='text-secondary text-lg mr-4 font-semibold'>2014</h1>
                            <div className='flex flex-col'>
                                <p className='text-baselg text-white mb-4 font-semibold'>Iniciamos uma parceria única com a maior fabricante de computadores do mundo, a Lenovo. Desde então fazemos parte do seleto grupo de integradores Lenovo, responsáveis por oferecer os serviços de locação para clientes Lenovo.</p>
                                <div className=' w-[80px] h-[12px]'>
                                    <Image className='brightness-[80%]' src="./assets/icons/lenovo.svg" width={80} height={12} />
                                </div>
                            </div>
                        </div>

                        <div className='sm:col-span-9 col-span-12 lg:col-start-4 flex md:flex-row flex-col'>
                            <h1 className='text-secondary text-lg mr-4 font-semibold'>2023</h1>
                            <div className='flex flex-col'>
                                <p className='text-baselg text-white mb-4 font-semibold'>Nossa nova identidade simboliza uma era de inovação e crescimento, mas não se engane: continuaremos a fornecer o mesmo nível de experiência e seriedade que você já está acostumado. Este rebranding reflete nossa evolução, nossos valores e, acima de tudo, nosso compromisso contínuo com nossos clientes.</p>
                                <div className=' w-[80px] h-[12px]'>
                                    <Image className='brightness-[800%] grayscale opacity-20 ' src="./assets/icons/logo-brite.svg" width={80} height={12} />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className='py-28 bg-white'>
                <div className='container'>
                    <h1 className='text-primary text-xl font-semibold mb-28'>Soluções de TI que vão além.</h1>
                    <div className='grid grid-cols-12 gap-x-4 md:gap-y-28 gap-y-16 '>
                        <AboutCard
                            title="ALUGUEL"
                            text="Computadores, notebooks e servidores para demandas personalizadas."
                        />
                        <AboutCard
                            title="VENDA"
                            text="Aquisição de computadores para obtenção própria."
                        />
                        <AboutCard
                            title="ALUGUEL + VENDA"
                            text="Modelo personalizável para empresas em expansão."
                        />
                        <AboutCard
                            title="DESK SERVICE"
                            text="Suporte técnico Brite em horário comercial por telefone ou WhatsApp."
                        />

                        <AboutCard
                            title="SETUP"
                            text="Instalação e troca de máquinas com todas especificações do projeto"
                        />
                        <AboutCard
                            title="SUPORTE"
                            text="Suporte técnico dos computadores e softwares."
                        />
                        <AboutCard
                            title="MANUTENÇÃO"
                            text="Técnicos licenciados Lenovo e peças originais de fábrica."
                        />
                        <AboutCard
                            title="DESCARTE ECOLÓGICO"
                            text="Retirada das peças obsoletas para evitar despesas com multas ambientais e logística."
                        />
                    </div>
                </div>
            </section>

        </>
    )
}
