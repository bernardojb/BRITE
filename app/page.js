'use client'
import * as React from 'react';

import Image from 'next/image'
import Link from 'next/link'
import { BtnChev } from '@/components/BtnChev';
import CardProducts from '@/components/CardProducts';
import ContactForm from '@/components/contato/ContactForm';

const Home = () => {

  const [activeTab, setActiveTab] = React.useState("tab1")
  const [activePc, setActivePc] = React.useState("pc1")

  return (
    <>
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
                bg="bg-primary mr-6 my-2"
                text="Solicitar cotação"
              />

              <BtnChev
                href="/computadores"
                color="text-primary"
                bg=""
                brightness="brightness-0 my-2"
                text="Produtos"
              />
            </div>
            <Image className='absolute bottom-12' src='./assets/lenovo_partner.svg' width={164} height={50} alt='Certified Lenovo Partner' />
          </div>
        </div>

        <div
          className='lg:absolute lg:right-0 lg:top-0 lg:w-2/5 w-full min-h-[812px] h-screen relative pointer-events-none'>
          <Image
            src="/hero.png"
            alt="Hero hokup"
            fill
            className='object-right-bottom lg:object-cover object-cover w-full'
          />
        </div>
      </section>

      {/* PARTNERS */}
      <section className='py-16 flex flex-row justify-center items-center '
        style={{
          background: 'linear-gradient(180deg, #432AF4 0%, #377CD6 100%)',
        }}
      >
        <div className='container mx-auto'>
          <div className='grid gap-8 md:grid-cols-6 sm:grid-cols-3  grid-cols-2 pb-10'>
            <div className='w-full flex justify-center relative h-[75px]'>
              <Image className="mix-blend-overlay" src="./assets/icons/btg.svg" width={174} height={74} />
            </div>

            <div className='w-full flex justify-center relative h-[75px]'>
              <Image className="mix-blend-overlay" src="./assets/icons/vw.svg" width={174} height={74} />
            </div>

            <div className='w-full flex justify-center relative h-[75px]'>
              <Image className="mix-blend-overlay" src="./assets/icons/eurobike.svg" width={174} height={74} />
            </div>

            <div className='w-full flex justify-center relative h-[75px]'>
              <Image className="mix-blend-overlay" src="./assets/icons/wps.svg" width={174} height={74} />
            </div>

            <div className='w-full flex justify-center relative h-[75px]'>
              <Image className="mix-blend-overlay" src="./assets/icons/bayer.svg" width={174} height={74} />
            </div>

            <div className='w-full flex justify-center relative h-[75px]'>
              <Image className="mix-blend-overlay" src="./assets/icons/bunge.svg" width={174} height={74} />
            </div>
          </div>
          <p
            className=' text-center text-base max-w-[425px] mx-auto'
          >
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

            <div className='flex col-span-12 lg:col-span-5 mb-10 lg:mb-0'>
              <Image className='rounded-lg' alt='Brite Sobre' src='/assets/home/brite-about.png' height={545} width={444} />
            </div>

            <div className='flex flex-col justify-center col-span-12 lg:col-span-5 lg:col-start-7'>
              {/* <p className='text-secondary'>Certified <span className='font-bold'>Lenovo</span> partner</p> */}
              <h1 className='text-white text-xl font-semibold mb-4'>Business informática agora é Brite.</h1>
              <p className='text-base text-secondary pb-6'>
                Há mais de 30 anos no mercado corporativo, a Business Informática atua no segmento de TI, locando e vendendo notebooks, desktops e servidores.
              </p>
              <BtnChev
                href="/sobre"
                color="text-white"
                bg="bg-[transparent] pl-0 mb-12"
                // brightness="brightness-0"
                text="Nossa história"
              />
              <div>
                <p className='text-sm text-secondary py-2'><span className='font-bold text-white'>+15.000</span> computadores alugados nos últimos 12 meses</p>
                <p className='text-sm text-secondary py-2'><span className='font-bold text-white'>+100</span> empresas atendidas</p>
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
            <div className='card-bg-rent h-[568px] w-full rounded-2xl col-span-12 lg:col-span-5 lg:col-start-2 sm:px-12 sm:py-12 px-6 py-8 relative bg '>
                <p className='text-secondary text-md'>BRITE RENT SERVICE</p>
                <h1 className='text-primary text-xl font-semibold mb-4'>Benefício fiscal no Imposto.</h1>
                <p className='text-secondary text-md'>Reduza custos e invista no seu negócio. Previsibilidade sem gastos de manutenção , para focar sua equipe de TI na evolução do seu negócio.</p>
            </div>

            <div className='card-bg-desk h-[568px] w-full rounded-2xl col-span-12 lg:col-span-5 sm:px-12 sm:py-12 px-6 py-8'>
              <div className='flex flex-col justify-between h-full'>
                <div>
                  <p className='text-secondary text-md'>SERVICE DESK</p>
                  <h1 className='text-white text-xl font-semibold mb-4'>Garantia e suporte.</h1>
                </div>
                <div>
                  <p className='text-secondary text-md mb-2'>Técnicos licenciados Lenovo</p>
                  <p className='text-secondary text-md'>Peças originais de fábrica</p>
                </div>
              </div>
            </div>

            <div className='card-bg-sustentability min-h-[277px] w-full rounded-2xl col-span-12 lg:col-span-10 lg:col-start-2 sm:px-12 sm:py-12 px-6 py-8'>
              <p className='text-secondary text-md'>ECO-FRIENDLY</p>
              <h1 className='text-white text-xl font-semibold mb-4'>Descarte ecológico.</h1>
              <p className='text-secondary text-md max-w-[492px]'>Retirada das peças obsoletas e descarte correto do e-lixo para evitar despesas com multas e logística.</p>
            </div>

          </div>
          <div className='flex flex-col lg:flex-row justify-center items-center'>
            <p className='text-center text-base text-secondary mr-4 mb-4 lg:mb-0'>Fale sobre seu projeto com um de nossos especialistas.</p>
            <BtnChev
              href="/contato"
              color="text-white"
              bg="bg-brite"
              // brightness="brightness-0"
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
                <div className="text-primary w-full text-base flex flex-col sm:flex-row sm:justify-between items-start relative sm:after:content-[''] sm:after:absolute sm:after:h-[1px] sm:after:bg-secondary sm:after:w-full sm:after:-bottom-3">
                  <button className={`my-2 sm:my-0 relative after:content-[''] after:absolute after:h-[5px] ${activeTab === "tab1" ? "after:bg-brite" : ""} after:w-full sm:after:-bottom-2 -bottom-1 after:left-0`} onClick={() => setActiveTab("tab1")}>
                    <p className={`text-base hover:text-primary hover:font-bold ${activeTab === "tab1" ? "text-black font-bold" : "text-secondary font-normal"}`}>01. Definição</p>
                  </button>
                  <button className={`my-2 sm:my-0 relative after:content-[''] after:absolute after:h-[5px] ${activeTab === "tab2" ? "after:bg-brite" : ""} after:w-full sm:after:-bottom-2 -bottom-1 after:left-0`} onClick={() => setActiveTab("tab2")}>
                    <p className={`text-base hover:text-primary hover:font-bold ${activeTab === "tab2" ? "text-black font-bold" : "text-secondary font-normal"}`}>02. Configuração</p>
                  </button>
                  <button className={`my-2 sm:my-0 relative after:content-[''] after:absolute after:h-[5px] ${activeTab === "tab3" ? "after:bg-brite" : ""} after:w-full sm:after:-bottom-2 -bottom-1 after:left-0`} onClick={() => setActiveTab("tab3")}>
                    <p className={`text-base hover:text-primary hover:font-bold ${activeTab === "tab3" ? "text-black font-bold" : "text-secondary font-normal"}`}>03. Entrega</p>
                  </button>
                  <button className={`my-2 sm:my-0 relative after:content-[''] after:absolute after:h-[5px] ${activeTab === "tab4" ? "after:bg-brite" : ""} after:w-full sm:after:-bottom-2 -bottom-1 after:left-0`} onClick={() => setActiveTab("tab4")}>
                    <p className={`text-base hover:text-primary hover:font-bold ${activeTab === "tab4" ? "text-black font-bold" : "text-secondary font-normal"}`}>04. Suporte</p>
                  </button>
                </div>
              </div>
              <div className='lg:min-h-[275px] '>
                {activeTab === "tab1" && (
                  <div className='text-base text-secondary mb-6'>
                    <p className='mb-8 font-semibold'>
                      Dimensionamento estratégico do projeto através das necessidades e objetivos de cada cliente.
                    </p>
                    <div className='text-sm text-primary'>
                      <p className='mb-6'>• Escolha dos computadores</p>
                    </div>
                  </div>
                )}
                {activeTab === "tab2" && (
                  <div className='text-base text-secondary mb-6'>
                    <p className='mb-8 font-semibold'>
                      Instalação e implementação dos novos equipamentos seguindo todas as especificações do projeto.
                    </p>
                    <div className='text-sm text-primary'>
                      <p className='mb-4'>• Configuração dos computadores</p>
                      <p className='mb-4'>• Atualização e backup</p>
                      <p className='mb-4'>• Pré-instalação de imagens</p>
                    </div>
                  </div>
                )}
                {activeTab === "tab3" && (
                  <div className='text-base text-secondary mb-6'>
                    <p className='mb-8 font-semibold'>
                      Entrega dos computadores prontos para uso e substituição e logística para retirada do equipamento antigo.
                    </p>
                    <div className='text-sm text-primary'>
                      <p className='mb-4'>• Envio para todo o Brasil</p>
                      <p className='mb-4'>• Descarte correto do e-lixo</p>
                    </div>
                  </div>
                )}
                {activeTab === "tab4" && (
                  <div className='text-base text-secondary mb-6'>
                    <p className='mb-8 font-semibold'>
                      Entrega dos computadores prontos para uso e substituição e logística para retirada do equipamento antigo.
                    </p>
                    <div className='text-sm text-primary'>
                      <p className='mb-4'>• Suporte técnico via telefone</p>
                      <p className='mb-4'>• Garantia com peças originais de fábrica</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className='flex justify-center items-center col-span-12 lg:col-span-5 lg:col-start-8'>
              <div className='bg-placeholder h-[590px] w-[446px] rounded-lg'></div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <ContactForm />
    </>
  )
}

export default Home
