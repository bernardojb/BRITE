'use client'
import * as React from 'react';

import Image from 'next/image'
import Link from 'next/link'
import { BtnChev } from '@/components/BtnChev';
import CardProducts from '@/components/CardProducts';

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
            <div className='flex lg:flex-row flex-col'>

              <BtnChev
                href="/contato"
                color="text-white"
                bg="bg-primary mr-6 md:mb-0 mb-4"
                text="Solicitar cotação"
              />

              <BtnChev
                href="/computadores"
                color="text-primary"
                bg=""
                brightness="brightness-0"
                text="Nossos produtos"
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
      <section className='py-28 flex flex-row justify-center items-center '
        style={{
          background: 'linear-gradient(180deg, #432AF4 0%, #377CD6 100%)',
        }}
      >
        <div className='container mx-auto'>
          <div className='grid xl:grid-cols-6 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 pb-10 gap-3 '>

            <div className='w-full flex justify-center relative h-[75px]'>
              <Image src="./assets/icons/btg.svg" fill />
            </div>

            <div className='w-full flex justify-center relative h-[75px]'>
              <Image src="./assets/icons/vw.svg" fill />
            </div>

            <div className='w-full flex justify-center relative h-[75px]'>
              <Image src="./assets/icons/eurobike.svg" fill />
            </div>

            <div className='w-full flex justify-center relative h-[75px]'>
              <Image src="./assets/icons/wps.svg" fill />
            </div>

            <div className='w-full flex justify-center relative h-[75px]'>
              <Image src="./assets/icons/bayer.svg" fill />
            </div>

            <div className='w-full flex justify-center relative h-[75px]'>
              <Image src="./assets/icons/bunge.svg" fill />
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
      <section className='bg-dark py-28'>
        <div className='container'>
          <div className='grid grid-cols-12 gap-4'>

            <div className='flex col-span-12 lg:col-span-4 mb-10 lg:mb-0'>
              <div className='bg-placeholder h-[506px] w-full rounded-lg'></div>
            </div>

            <div className='flex flex-col justify-center col-span-12 lg:col-span-5 lg:col-start-6'>
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
                <p className='text-sm text-secondary'><span className='font-bold text-white'>+15.000</span> computadores alugados nos últimos 12 meses</p>
                <p className='text-sm text-secondary'><span className='font-bold text-white'>+100</span> empresas atendidas</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className='bg-cream py-28'>
        <div className='container '>
          <div className='text-center flex flex-col justify-center items-center mb-12'>
            <h1 className='text-primary max-w-2xl text-xl font-semibold mb-4'>Aluguel de computadores de forma limpa e escalável.</h1>
            <p className='text-secondary max-w-md text-base'>Nossos serviços incluem diversas soluções e vantagens para sua empresa.</p>
          </div>

          <div className='grid grid-cols-12 gap-4 mb-16'>
            <div className='bg-dark h-[568px] w-full rounded-lg col-span-12 lg:col-span-5 lg:col-start-2 sm:px-12 sm:py-16 px-6 py-8'>
              <p className='text-secondary text-md'>BRITE RENT SERVICE</p>
              <h1 className='text-white text-xl font-semibold mb-4'>Benefício fiscal no Imposto.</h1>
              <p className='text-secondary text-md'>Reduza custos e invista no seu negócio. Previsibilidade sem gastos de manutenção , para focar sua equipe de TI na evolução do seu negócio.</p>
            </div>

            <div className='bg-dark h-[568px] w-full rounded-lg col-span-12 lg:col-span-5 sm:px-12 sm:py-16 px-6 py-8'>
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

            <div className='bg-dark min-h-[236px] w-full rounded-lg col-span-12 lg:col-span-10 lg:col-start-2 sm:px-12 sm:py-16 px-6 py-8'>
              <p className='text-secondary text-md'>ECO-FRIENDLY</p>
              <h1 className='text-white text-xl font-semibold mb-4'>Descarte ecológico.</h1>
              <p className='text-secondary text-md'>Retirada das peças obsoletas e descarte correto do e-lixo para evitar despesas com multas e logística.</p>
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
      <section className='bg-cream py-28'>
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
                        className='text-md text-primary rounded-md border border-secondary ps-2 pt-1 h-52 mb-4'
                        name="message"
                        rows="10"
                        // value={values.message}
                        // onChange={handleChange}
                        required
                      />
                      <p className='text-xs text-secondary mb-4'>Ao enviar este formulário, você concorda com a nossa <Link href='/contato' className="text-primary hover:text-brite font-bold">Política de Privacidade.</Link></p>
                      <Link href='/contato' className='px-5 py-1 ml-auto bg-brite rounded-full w-fit flex justify-center items-center'>
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
    </>
  )
}

export default Home
