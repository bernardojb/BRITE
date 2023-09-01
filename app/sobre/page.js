'use client'
import * as React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { BtnChev } from '@/components/buttons/BtnChev';
import { Btn } from '@/components/buttons/Btn';
import { BtnFill } from '@/components/buttons/BtnFill';
import { SquaresPlusIcon, ArrowDownOnSquareIcon, ArrowDownOnSquareStackIcon, ShieldCheckIcon, Cog8ToothIcon, ComputerDesktopIcon, CheckBadgeIcon, GlobeAmericasIcon } from '@heroicons/react/20/solid'
import Animation from '@/components/structure/Animation';

const AboutCard = (props) => {
    return (
        <div className='flex flex-col col-span-12 sm:col-span-6 lg:col-span-3'>
            <div className='w-[24px] h-[24px] bg-[#EFEFEF] mb-4 rounded'>
                {props.icon}
            </div>
            <p className='text-xs text-secondary'>{props.title}</p>
            <p className='text-sm text-primary pr-2'>{props.text}</p>
        </div>
    )
}

export default function page() {
    return (
        <Animation>

            {/* HERO */}
            <section>
                <div className='bg-placeholder w-full'>
                    <img className='w-full h-auto min-h-[350px] object-cover ' src="/assets/about/intro-about.png" style={{ objectPosition: 'center' }} />
                </div>
            </section>

            {/* BRITE */}
            <section className='bg-cream py-28' id='sobre-origem'>
                <div className='container'>
                    <div className='mb-28'>
                        <h1 className='text-xl text-primary font-semibold mb-4'>Business Informática agora é Brite.</h1>
                        <p className='text-secondary max-w-[812px] text-lg font-semibold'>Há mais de três décadas, a Brite Informática tem sido pioneira no mercado de locação de TI, estabelecendo padrões elevados de qualidade, confiabilidade e atendimento ao cliente.</p>
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
                        <p className='text-secondary max-w-[812px] text-lg font-semibold'>Iniciamos nossa jornada como Business Informática em 1990, mas a evolução é uma constante em nosso DNA. Por isso, recentemente passamos por um empolgante processo de rebranding, emergindo como Brite Informática - um nome que reflete nossa visão moderna e compromisso renovado com a excelência.</p>
                    </div>

                    <div className='grid gap-8 md:grid-cols-5 grid-cols-2 pb-10 opacity-50'>
                        <div className='w-full flex justify-center relative h-[75px]'>
                            <Image className='brightness-[80%] grayscale' src="/assets/icons/btg.svg" fill />
                        </div>

                        <div className='w-full flex justify-center relative h-[75px]'>
                            <Image className='brightness-[80%] grayscale' src="/assets/icons/vw.svg" fill />
                        </div>

                        <div className='w-full flex justify-center relative h-[75px]'>
                            <Image className='brightness-[80%] grayscale' src="/assets/icons/eurobike.svg" fill />
                        </div>

                        <div className='w-full flex justify-center relative h-[75px]'>
                            <Image className='brightness-[80%] grayscale' src="/assets/icons/wps.svg" fill />
                        </div>

                        <div className='w-full flex justify-center relative h-[75px]'>
                            <Image className='brightness-[80%] grayscale' src="/assets/icons/bayer.svg" fill />
                        </div>

                        <div className='w-full flex justify-center relative h-[75px]'>
                            <Image className='brightness-[80%] grayscale' src="/assets/icons/bunge.svg" fill />
                        </div>

                        <div className='w-full flex justify-center relative h-[75px]'>
                            <Image className='brightness-[80%] grayscale' src="/assets/icons/apodi.svg" fill />
                        </div>

                        <div className='w-full flex justify-center relative h-[75px]'>
                            <Image className='brightness-[80%] grayscale' src="/assets/icons/lourençocastanho.svg" fill />
                        </div>

                        <div className='w-full flex justify-center relative h-[75px]'>
                            <Image className='brightness-[80%] grayscale' src="/assets/icons/mdiasbranco.svg" fill />
                        </div>

                        <div className='w-full flex justify-center relative h-[75px]'>
                            <Image className='brightness-[80%] grayscale' src="/assets/icons/usj.svg" fill />
                        </div>
                    </div>
                </div>
            </section>

            {/* TIMELINE */}
            <section className='bg-primary py-28' id="sobre-lenovo">
                <div className='container'>
                    <div className='grid grid-cols-12 gap-4'>
                        <div className='lg:col-span-4 col-span-12 lg:mb-0 mb-12'>
                            <Image className='brightness-[80%] ' src="/assets/icons/certified-lenovo-partner-02.svg" height={14} width={164} />
                            <h1 className='text-white text-xl text-semibold mb-6'>Parceiro oficial Lenovo no Brasil.</h1>
                            <Btn
                                href="/computadores"
                                color="text-white"
                                bg="mb-12"
                                text="Nossos produtos"
                            />
                        </div>
                        <div className='lg:col-span-7 lg:col-start-6 col-span-12'>
                            <div className='h-[140px] relative mb-6 rounded-2xl'>
                                <Image className='mb-6 rounded-2xl object-cover' src="/assets/about/lenovo-about.png" fill />
                            </div>
                            <p className='text-secondary text-base'>
                                Hoje somos um parceiro oficial Lenovo, licenciados para prestar o serviço de locação para empresas. A Lenovo é a maior fabricante de computadores do mundo, e faz parte das 200 maiores empresas do planeta. Hoje está presente em mais de 160 paises, sendo um dos pricipais, o Brasil, onde já atuam há mais de 10 anos no nicho corporativo. A Brite possuí uma parceria exclusiva com a Lenovo, que garante os melhores serviços e atendimentos dentro da empresa.
                            </p>
                        </div>
                    </div>

                    <div className='py-28' id="sobre-history">
                        <h1 className='text-lg text-white font-semibold max-w-[720px] text-right ml-auto'>Atuamos há mais de 30 anos no mercado corporativo no segmento de TI, locando e vendendo notebooks, desktops e servidores para empresas.</h1>
                    </div>

                    <div className='grid grid-cols-12'>

                        <div className='sm:col-span-9 col-span-12 lg:col-start-1 flex md:flex-row flex-col mb-20'>
                            <h1 className='text-secondary text-lg mr-4 font-semibold'>1990</h1>
                            <div className='flex flex-col'>
                                <p className='text-baselg text-white mb-4 font-semibold'>Responsáveis pelo maior numero de vendas de computadores Toshiba no Brasil, além do pioneirismo em alugueis de computadores.</p>
                                <div className=' w-[80px] h-[12px]'>
                                    <Image className='brightness-[80%]' src="/assets/icons/toshiba.svg" width={80} height={12} />
                                </div>
                            </div>
                        </div>

                        <div className='sm:col-span-9 col-span-12 lg:col-start-2 flex md:flex-row flex-col mb-20'>
                            <h1 className='text-secondary text-lg mr-4 font-semibold'>2004</h1>
                            <div className='flex flex-col'>
                                <p className='text-baselg text-white mb-4 font-semibold'>Entre 2003 e 2004 introduzimos em território nacional um conceito completo de locação de computadores.</p>
                                <div className=' w-[80px] h-[12px]'>
                                    <Image className='brightness-[80%]' src="/assets/icons/itautec.svg" width={80} height={12} />
                                </div>
                            </div>
                        </div>

                        <div className='sm:col-span-9 col-span-12 lg:col-start-3 flex md:flex-row flex-col mb-20'>
                            <h1 className='text-secondary text-lg mr-4 font-semibold'>2014</h1>
                            <div className='flex flex-col'>
                                <p className='text-baselg text-white mb-4 font-semibold'>Iniciamos uma parceria única com a maior fabricante de computadores do mundo, a Lenovo. Desde então fazemos parte do seleto grupo de integradores Lenovo, responsáveis por oferecer os serviços de locação para clientes Lenovo.</p>
                                <div className=' w-[80px] h-[12px]'>
                                    <Image className='brightness-[80%]' src="/assets/icons/lenovo.svg" width={80} height={12} />
                                </div>
                            </div>
                        </div>

                        <div className='sm:col-span-9 col-span-12 lg:col-start-4 flex md:flex-row flex-col'>
                            <h1 className='text-secondary text-lg mr-4 font-semibold'>2023</h1>
                            <div className='flex flex-col'>
                                <p className='text-baselg text-white mb-4 font-semibold'>Nossa nova identidade simboliza uma era de inovação e crescimento, mas não se engane: continuaremos a fornecer o mesmo nível de experiência e seriedade que você já está acostumado. Este rebranding reflete nossa evolução, nossos valores e, acima de tudo, nosso compromisso contínuo com nossos clientes.</p>
                                <div className=' w-[80px] h-[12px]'>
                                    <Image className='brightness-[800%] grayscale opacity-20 ' src="/assets/icons/logo-brite.svg" width={80} height={12} />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* SOLUÇÕES */}
            <section className='py-28 bg-white' id='sobre-solutions'>
                <div className='container'>
                    <div className='flex lg:flex-row w-full flex-col lg:items-end mb-28'>
                        <h1 className='text-primary text-xl max-w-2xl font-semibold mb-4 lg:mb-0'>Soluções de TI que vão além.</h1>
                        <div className='flex flex-row w-fit lg:ml-auto'>
                            {/* <BtnChev
                                href="/contato"
                                color="text-primary"
                                bg="pr-0 pl-0"
                                brightness="brightness-0 my-2"
                                text="Solicitar cotação"
                            /> */}
                            {/* <Btn
                                href="/contato"
                                color="text-primary"
                                bg=""
                                brightness="brightness-0"
                                text="Solicitar cotação"
                            /> */}
                            <BtnFill
                                href="/contato"
                                color="text-primary hover:text-black"
                                bg="md:hover:bg-transparent-white-hover"
                                brightness="brightness-0"
                                text="Solicitar cotação"
                            />
                        </div>
                    </div>
                    <div className='grid grid-cols-12 gap-x-4 md:gap-y-28 gap-y-16 '>
                        <AboutCard
                            title="ALUGUEL"
                            text="Desktops, notebooks e servidores."
                            icon={<SquaresPlusIcon color='#9A9AA0' />}
                        />
                        <AboutCard
                            title="VENDA"
                            text="Venda padrão de desktops, notebooks e servidores."
                            icon={<ArrowDownOnSquareIcon color='#9A9AA0' />}
                        />
                        <AboutCard
                            title="VENDA SMART"
                            text="Locação de curto prazo + venda do ativo no fim do contrato"
                            icon={<ArrowDownOnSquareStackIcon color='#9A9AA0' />}
                        />
                        <AboutCard
                            title="DESK SERVICE"
                            text="Suporte técnico Brite em horário comercial por telefone ou WhatsApp."
                            icon={<ShieldCheckIcon color='#9A9AA0' />}
                        />
                        <AboutCard
                            title="SETUP"
                            text="Instalação e troca de máquinas com todas especificações do projeto"
                            icon={<Cog8ToothIcon color='#9A9AA0' />}
                        />
                        <AboutCard
                            title="SUPORTE TÉCNICO"
                            text="Suporte técnico de todos os equipamentos da Brite."
                            icon={<ComputerDesktopIcon color='#9A9AA0' />}
                        />
                        <AboutCard
                            title="MANUTENÇÃO"
                            text="Técnicos licenciados Lenovo e peças originais de fábrica."
                            icon={<CheckBadgeIcon color='#9A9AA0' />}
                        />
                        <AboutCard
                            title="DESCARTE ECOLÓGICO"
                            text="Retirada das peças obsoletas para evitar despesas com multas ambientais e logística."
                            icon={<GlobeAmericasIcon color='#9A9AA0' />}
                        />
                    </div>
                </div>
            </section>

        </Animation>
    )
}
