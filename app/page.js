'use client'
import * as React from 'react';
import Image from 'next/image'
import Link from 'next/link'

// Components
import { BtnChev } from '@/components/buttons/BtnChev';
import CardProducts from '@/components/CardProducts';
import ContactForm from '@/components/contato/ContactForm';
import Animation from '@/components/structure/Animation';

//Anim
import { useSpring, animated } from '@react-spring/web'
import { BtnFill } from '@/components/buttons/BtnFill';
import { Btn } from '@/components/buttons/Btn';


export default function home() {

  const [activeTab, setActiveTab] = React.useState("tab1")
  const [activePc, setActivePc] = React.useState("pc1")

  //Animation
  const springs = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
    <Animation>
      {/* INTRO */}
      <section className='bg-cream relative'>
        <div className='container'>
          <div className='flex min-h-[812px] h-screen justify-center flex-col max-w-md relative'>
            <h1 className='text-primary text-xl font-semibold mb-4'>Há mais de 30 anos simplificando o aluguel de notebooks.</h1>
            <p className='text-secondary text-base font-regular mb-16'>Aluguel inteligente de computadores, para você focar no que realmente importa: seus negócios.</p>
            <div className='flex sm:flex-row flex-wrap'>
              <BtnChev
                href="/contato"
                color="text-white"
                bg="bg-primary drop-shadow-2xl hover:drop-shadow-lg mr-6 my-2 hover:bg-black "
                text="Solicitar cotação"
              />
              <BtnFill
                href="/computadores"
                color="text-primary hover:text-black"
                bg="md:hover:bg-transparent-white-hover px-4 my-2"
                brightness="brightness-0"
                text="Produtos"
              />
            </div>
            <Image className='absolute bottom-12' src='/assets/icons/certified-lenovo-partner-01.svg' width={164} height={50} alt='Certified Lenovo Partner' />
          </div>
        </div>

        <div className='
        lg:absolute lg:right-0 lg:top-0 lg:w-1/2 lg:h-screen lg:min-h-[812px]
        w-full relative
        '>
          <div className='w-full h-full relative ml-0 lg:w-fit lg:ml-auto'>
            <img src="/assets/home/hero.png" alt='Brite Informática Hero' className='lg:ml-auto lg:h-full lg:w-auto lg:object-cover w-full object-cover object-right-bottom relative' />
            <div className='absolute bottom-4 left-4 sm:bottom-8 sm:left-16'>
              <p className='text-xs text-secondary'>Notebooks</p>
              <Link href="/thinkpad-x1-carbon">
                <h1 className='text-baselg text-white hover:text-brite ease-out transition duration-200'>ThinkPad X1 Carbon</h1>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* OLD HERO IMG BACKUP */}
      {/* <div
          className='lg:absolute lg:right-0 lg:top-0 lg:w-2/5 w-full min-h-[812px] h-screen relative pointer-events-none'>
          <Image
            src="/hero.png"
            alt="Hero Brite"
            fill
            className='object-right-bottom lg:object-cover object-cover w-full'
          />
        </div> */}

      {/* PARTNERS */}
      <section className='py-16 flex flex-row justify-center items-center '
        style={{
          background: 'linear-gradient(180deg, #432AF4 0%, #377CD6 100%)',
        }}
      >
        <div className='container mx-auto'>
          <div className='grid gap-8 md:grid-cols-6 sm:grid-cols-3 grid-cols-2 pb-10'>

            <div className='w-full flex justify-center relative h-[75px]'>
              <Image className="" src="/assets/icons/btg.svg" width={174} height={74} />
            </div>
            <div className='w-full flex justify-center relative h-[75px]'>
              <Image className="" src="/assets/icons/vw.svg" width={174} height={74} />
            </div>

            <div className='w-full flex justify-center relative h-[75px]'>
              <Image className="" src="/assets/icons/eurobike.svg" width={174} height={74} />
            </div>

            <div className='w-full flex justify-center relative h-[75px]'>
              <Image className="" src="/assets/icons/wps.svg" width={174} height={74} />
            </div>

            <div className='w-full flex justify-center relative h-[75px]'>
              <Image className="" src="/assets/icons/bayer.svg" width={174} height={74} />
            </div>

            <div className='w-full flex justify-center relative h-[75px]'>
              <Image className="" src="/assets/icons/bunge.svg" width={174} height={74} />
            </div>
          </div>
          <p className='text-center text-base text-white max-w-[425px] mx-auto'>
            Empresas de todo o Brasil que acreditam na Brite para gestão de seu TI.
          </p>
        </div>
      </section>

      {/* COMPUTERS */}
      <section className='bg-cream py-28'>
        <CardProducts index={3} />
      </section>

      {/* BRITE */}
      <section className='bg-primary py-28'>
        <div className='container'>
          <div className='grid grid-cols-12 gap-4'>

            <div className='flex col-span-12 lg:col-span-5 mb-10 lg:mb-0 '>
              <div className='relative'>
                <Image className='absolute left-4 top-4 sm:left-8 sm:top-8 brightness-0' alt='Brite Sobre' src='/assets/icons/certified-lenovo-partner-03.svg' height={84} width={84} />
                <Image className='rounded-lg' alt='Brite Sobre' src='/assets/home/brite-about.png' height={545} width={444} />
                <div className='absolute bottom-4 mx-4 grid grid-cols-2 gap-4 sm:mx-8 sm:bottom-8'>
                  <p className='text-xs text-secondary leading-3 break-words'>Business Informática LTDA 62.547.484/0001-40</p>
                  <p className='text-xs text-secondary leading-3 break-words'>Rua Doutor Luiz Migliano, 1986 05.711-001 São Paulo/SP</p>
                </div>
              </div>
            </div>

            <div className='flex flex-col justify-center col-span-12 lg:col-span-5 lg:col-start-7'>
              {/* <p className='text-secondary'>Certified <span className='font-bold'>Lenovo</span> partner</p> */}
              <h1 className='text-white text-xl font-semibold  mb-4'>Business informática agora é Brite.</h1>
              <p className='text-base text-secondary pb-6'>
                Há mais de 30 anos no mercado corporativo, a Business Informática atua no segmento de TI, locando e vendendo notebooks, desktops e servidores.
              </p>
              <Btn
                href="/sobre"
                color="text-white group-hover:text-secondary"
                bg="mb-12"
                // brightness="brightness-0"
                text="Nossa história"
              />
              <div className=''>
                <p className='text-sm text-secondary py-2'><span className='text-white'>+15.000</span> computadores alugados nos últimos 12 meses</p>
                <p className='text-sm text-secondary py-2'><span className='text-white'>+100</span> empresas atendidas</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className='bg-cream py-28'>
        <div className='container '>
          <div className='text-center flex flex-col justify-center items-center mb-16'>
            <h1 className='text-primary max-w-2xl text-xl font-semibold mb-4'>Aluguel de computadores de forma limpa e escalável.</h1>
            <p className='text-secondary max-w-2xl text-base'>Nossos serviços incluem diversas soluções e vantagens para sua empresa.</p>
          </div>

          <div className='grid grid-cols-12 gap-4 mb-16'>

            <div className='hover:drop-shadow-xl ease-out transition duration-200 card-bg-rent sm:h-[568px] h-[500px] w-full rounded-2xl col-span-12 lg:col-span-5 lg:col-start-2 sm:px-12 sm:py-12 px-6 py-8 relative bg '>
              <p className='text-secondary text-md'>BRITE RENT SERVICE</p>
              <h1 className='text-primary text-xl font-semibold mb-4'>Benefício fiscal no Imposto.</h1>
              <p className='text-secondary text-md'>Reduza custos e invista no seu negócio. Previsibilidade sem gastos de manutenção , para focar sua equipe de TI na evolução do seu negócio.</p>
            </div>

            <div className='hover:drop-shadow-xl ease-out transition duration-200 card-bg-desk sm:h-[568px] h-[500px] w-full rounded-2xl col-span-12 lg:col-span-5 sm:px-12 sm:py-12 px-6 py-8'>
              <div className='flex flex-col justify-between h-full'>
                <div>
                  <p className='text-secondary text-md'>SERVICE DESK</p>
                  <h1 className='text-white text-xl font-semibold mb-4'>Garantia e suporte.</h1>
                </div>
                <div>
                  <div className='flex flex-row mb-2'>
                    <Image className='mr-4' src="/assets/icons/check.svg" width={16} height={16} />
                    <p className='text-white text-md'>Técnicos licenciados Lenovo</p>
                  </div>
                  <div className='flex flex-row'>
                    <Image className='mr-4' src="/assets/icons/check.svg" width={16} height={16} />
                    <p className='text-white text-md'>Peças originais de fábrica</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='hover:drop-shadow-xl ease-out transition duration-200 card-bg-sustentability min-h-[277px] w-full rounded-2xl col-span-12 lg:col-span-10 lg:col-start-2 sm:px-12 sm:py-12 px-6 py-8'>
              <p className='text-secondary text-md'>ECO-FRIENDLY</p>
              <h1 className='text-white text-xl font-semibold mb-4'>Descarte ecológico.</h1>
              <p className='text-secondary text-md max-w-[492px]'>Retirada das peças obsoletas e descarte correto do e-lixo para evitar despesas com multas e logística.</p>
            </div>

          </div>

          <div className='flex flex-col lg:flex-row justify-center items-center'>
            <p className='text-center text-base text-secondary mr-4 mb-4 lg:mb-0'>Fale sobre seu projeto com um de nossos especialistas.</p>
            <BtnChev
                href="/contato"
                color="text-cream hover:text-white"
                bg="bg-brite drop-shadow-2xl hover:drop-shadow-lg hover:bg-brite-hover"
                text="Solicitar cotação"
              />
          </div>
        </div>

      </section>

      {/* METODOLOGIA */}
      <section className='bg-white py-28'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-12 gap-4'>

            <div className='col-span-12 lg:col-span-6 flex flex-col justify-center'>
              <h1 className='text-primary text-xl font-semibold max-w-xl mb-10'>Nossa metodologia.</h1>
              <div className="flex flex-row items-center relative mb-10">
                <div className="flex flex-row items-center justify-between relative after:content-[''] after:absolute after:h-[1px] after:bg-secondary after:w-full after:bottom-3 w-full">
                  <div className='text-secondary text-base flex flex-row flex-wrap'>
                    <button className={`mb-3 px-2 py-3 w-fit relative after:content-[''] after:absolute after:h-[5px] ${activeTab === "tab1" ? "after:bg-brite sm:bg-[transparent] bg-placeholder rounded-t-lg" : ""} after:w-full after:-bottom-0 after:left-0`} onClick={() => setActiveTab("tab1")}>
                      <p className={`text-base text-start sm:text-center hover:text-primary ease-out transition duration-200 ${activeTab === "tab1" ? "text-primary font-bold" : "text-secondary font-semibold"}`}>01. Definição</p>
                    </button>
                    <button className={`mb-3 px-2 py-3 w-fit relative after:content-[''] after:absolute after:h-[5px] ${activeTab === "tab2" ? "after:bg-brite sm:bg-[transparent] bg-placeholder rounded-t-lg" : ""} after:w-full after:-bottom-0 after:left-0`} onClick={() => setActiveTab("tab2")}>
                      <p className={`text-base text-start sm:text-center hover:text-primary ease-out transition duration-200 ${activeTab === "tab2" ? "text-primary font-bold" : "text-secondary font-semibold"}`}>02. Configuração</p>
                    </button>
                    <button className={`mb-3 px-2 py-3 w-fit relative after:content-[''] after:absolute after:h-[5px] ${activeTab === "tab3" ? "after:bg-brite sm:bg-[transparent] bg-placeholder rounded-t-lg" : ""} after:w-full after:-bottom-0 after:left-0`} onClick={() => setActiveTab("tab3")}>
                      <p className={`text-base text-start sm:text-center hover:text-primary ease-out transition duration-200 ${activeTab === "tab3" ? "text-primary font-bold" : "text-secondary font-semibold"}`}>03. Entrega</p>
                    </button>
                    <button className={`mb-3 px-2 py-3 w-fit relative after:content-[''] after:absolute after:h-[5px] ${activeTab === "tab4" ? "after:bg-brite sm:bg-[transparent] bg-placeholder rounded-t-lg" : ""} after:w-full after:-bottom-0 after:left-0`} onClick={() => setActiveTab("tab4")}>
                      <p className={`text-base text-start sm:text-center hover:text-primary ease-out transition duration-200 ${activeTab === "tab4" ? "text-primary font-bold" : "text-secondary font-semibold"}`}>04. Suporte</p>
                    </button>
                  </div>
                </div>
              </div>
              <div className='lg:min-h-[275px] '>
                {activeTab === "tab1" && (
                  <div className='text-base text-secondary mb-6'>
                    <p className='mb-8 font-semibold'>
                      Dimensionamento estratégico do projeto através das necessidades e objetivos de cada cliente.
                    </p>
                    <div className='text-sm text-primary'>
                      <div className='flex flex-row mb-6'>
                        <Image className='mr-4' src="/assets/icons/check.svg" width={16} height={16} />
                        <p className='font-semibold'>Escolha dos modelos</p>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === "tab2" && (
                  <div className='text-base text-secondary mb-6'>
                    <p className='mb-8 font-semibold'>
                      Instalação e implementação dos novos equipamentos seguindo todas as especificações do projeto.
                    </p>
                    <div className='text-sm text-primary'>
                      <div className='flex flex-row mb-2'>
                        <Image className='mr-4' src="/assets/icons/check.svg" width={16} height={16} />
                        <p className='font-semibold'>Configuração dos computadores</p>
                      </div>
                      <div className='flex flex-row mb-2'>
                        <Image className='mr-4' src="/assets/icons/check.svg" width={16} height={16} />
                        <p className='font-semibold'>Atualização e backup</p>
                      </div>
                      <div className='flex flex-row mb-2'>
                        <Image className='mr-4' src="/assets/icons/check.svg" width={16} height={16} />
                        <p className='font-semibold'>Pré-instalação de imagens</p>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === "tab3" && (
                  <div className='text-base text-secondary mb-6'>
                    <p className='mb-8 font-semibold'>
                      Entrega dos computadores configurados para uso e retirada do equipamento antigo.
                    </p>
                    <div className='text-sm text-primary'>
                      <div className='flex flex-row mb-2'>
                        <Image className='mr-4' src="/assets/icons/check.svg" width={16} height={16} />
                        <p className='font-semibold'>Envio para todo o Brasil</p>
                      </div>
                      <div className='flex flex-row mb-2'>
                        <Image className='mr-4' src="/assets/icons/check.svg" width={16} height={16} />
                        <p className='font-semibold'>Descarte correto do lixo eletrônico</p>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === "tab4" && (
                  <div className='text-base text-secondary mb-6'>
                    <p className='mb-8 font-semibold'>
                      Acompanhamento durante todo o periodo para abertura de chamado e suporte técnico com peças originais de fábrica.
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className='flex justify-center items-center col-span-12 lg:col-span-5 lg:col-start-8'>
              {activeTab === "tab1" && (
                <Image className='' alt='Brite Sobre' src='/assets/home/metodologia-01.png' height={508} width={444} />
              )}
              {activeTab === "tab2" && (
                <Image className='' alt='Brite Sobre' src='/assets/home/metodologia-02.png' height={508} width={444} />
              )}
              {activeTab === "tab3" && (
                <Image className='' alt='Brite Sobre' src='/assets/home/metodologia-03.png' height={508} width={444} />
              )}
              {activeTab === "tab4" && (
                <Image className='' alt='Brite Sobre' src='/assets/home/metodologia-04.png' height={508} width={444} />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <ContactForm />
    </Animation>
  )
}

// export default home;
