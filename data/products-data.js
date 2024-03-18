const productsList = [
    {
        id: 1,
        title: "Notebooks",
        products: [
            // {
            //     id: 1,
            //     name: "IdeaPad 3i",
            //     href: "/computadores/notebooks/ideapad-3i",
            //     src: "/assets/notebooks/ideapad 3i/lenovo-notebook-ideapad-3i-00.webp",
            //     linha: "Notebooks para o dia a dia",
            //     intro: [
            //         {
            //             id: 1,
            //             name: "IdeaPad 3i",
            //             resume: "Desempenho com propósito",
            //             tags: [
            //                 {
            //                     id: 1,
            //                     tag: "Notebooks para o dia a dia"
            //                 },
            //                 {
            //                     id: 2,
            //                     tag: "Perfeito para e-mail e internet"
            //                 },
            //             ],
            //             src: "/assets/notebooks/ideapad 3i/lenovo-notebook-ideapad-3i-00.webp",
            //             text: 'O IdeaPad 3i Geração 6 (Intel 15″) torna ficar em ambientes fechados e trabalhar ou aprender de casa ainda mais prazeroso. Ele conta com o desempenho dos processadores Intel® Core™ de 11ª geração, bem como recursos inteligentes que tratam do cansaço visual e das distrações domésticas. E a tela FHD de 15" com bordas ultrafinas nos quatro lados fornece imagens agradáveis para trabalho ou entretenimento.'
            //         }
            //     ],
            //     tech: [
            //         {
            //             text: "O IdeaPad 3i é indicado para o uso básico do dia a dia. Para quem usa apenas o e-mail e a internet para trabalhar.",
            //             price: "A partir de R$60,00 por mês.",
            //             infos: [
            //                 {
            //                     id: 1,
            //                     name: "PROCESSADOR",
            //                     description: "Até Intel® Core™ de 11ª geração"
            //                 },
            //                 {
            //                     id: 2,
            //                     name: "MEMÓRIA",
            //                     description: "DDR4 de até 16 GB"
            //                 },
            //                 {
            //                     id: 3,
            //                     name: "GRÁFICOS",
            //                     description: "Até NVIDIA® GeForce® MX450 (apenas modelos i7)\r\nPlaca de vídeo Intel® Iris® Xe integrada"
            //                 },
            //                 {
            //                     id: 4,
            //                     name: "ARMAZENAMENTO",
            //                     description: "HD de até 1 TB\r\nSSD PCIe M.2 de até 512 GB\r\nQLC de 512 GB"
            //                 },
            //                 {
            //                     id: 5,
            //                     name: "TELA",
            //                     description: "FHD TN de até 15,6″ (1.920 x 1.080), 300 nits, antirreflexo, 45% NTSC"
            //                 },
            //                 {
            //                     id: 6,
            //                     name: "SISTEMA OPERACIONAL",
            //                     description: "Até Windows 11 Pro — A Lenovo recomenda o Windows 10 Pro"
            //                 },
            //                 {
            //                     id: 7,
            //                     name: "BATERIA",
            //                     description: "Até 2 células 38 Wh"
            //                 },
            //                 {
            //                     id: 8,
            //                     name: "CONECTIVIDADE",
            //                     description: "Até WiFi 6 (2x2 802.11ax)\r\nBluetooth® 5.2"
            //                 },
            //                 {
            //                     id: 9,
            //                     name: "CÂMERA",
            //                     description: "1 MP com obturador de privacidade da webcam"
            //                 },
            //                 {
            //                     id: 10,
            //                     name: "PORTAS",
            //                     description: "USB-C\r\nUSB-A\r\n3.0\r\nUSB-A 2.0\r\nHDMI\r\nLeitor de cartões SD\r\nCombo fone de ouvido/microfone"
            //                 },
            //                 {
            //                     id: 11,
            //                     name: "ÁUDIO",
            //                     description: "2 x alto-falantes de 1,5 W com Dolby Audio™\r\nDois microfones"
            //                 },
            //                 {
            //                     id: 12,
            //                     name: "DIMENSÕES (A X L X P)",
            //                     description: "A partir de 19,9 mm x 359,2 mm x 236,5 mm"
            //                 },
            //                 {
            //                     id: 13,
            //                     name: "PESO",
            //                     description: "A partir de 1.7 kg"
            //                 },
            //             ]
            //         },
            //     ],
            //     infos: [
            //         {
            //             id: 1,
            //             src: "/assets/notebooks/ideapad 3i/lenovo-notebook-ideapad-3i-01.webp",
            //             title: "Rompendo as barreiras do desempenho",
            //             text: "Assuma qualquer tarefa com o notebook IdeaPad 3i Geração 6 (Intel 15″) e desfrute da velocidade e inteligência inigualáveis dos processadores Intel® Core™ de 11ª geração, enquanto você aprecia os visuais da placa de vídeo Intel® Iris® Xe integrada. Fortes o bastante para executar os aplicativos e títulos de jogos AAA mais exigentes, e mais inteligentes do que nunca para manter seu notebook funcionando de modo ideal, esses avançados processadores abrem caminho para entretenimento e produtividade em casa.",
            //             title2: "",
            //             text2: ""
            //         },
            //         {
            //             id: 2,
            //             src: "/assets/notebooks/ideapad 3i/lenovo-notebook-ideapad-3i-02.webp",
            //             title: "Aproveite mais a sua tela",
            //             text: "Veja mais detalhes com menos desordem, com bordas estreitas nos quatro lados da tela FHD de 15,6” com toque opcional. É um prazer assistir e usar. Esse compromisso com o espaço da tela proporciona ao IdeaPad 3i Geração 6 (Intel 15”) uma das proporções de área ativa mais altas de sua categoria.",
            //             title2: "O bem-estar é a prioridade",
            //             text2: "O notebook IdeaPad 3i Gen 6 (Intel 15″) enfrenta os efeitos físicos e mentais do maior tempo de tela com recursos inteligentes que ajudam a remediar o cansaço visual e as distrações domésticas. Isso inclui o Eye Care, que protege seus olhos do cansaço durante longos períodos de tempo de tela e cancelamento de ruídos, que elimina o ruído de fundo e as conversas cruzadas durante chamadas de conferência."
            //         },
            //         {
            //             id: 3,
            //             src: "/assets/notebooks/ideapad 3i/lenovo-notebook-ideapad-3i-03.webp",
            //             title: "Privacidade em primeiro lugar",
            //             text: "Acidentes com webcams se tornaram comuns ultimamente. Às vezes são engraçados, às vezes humilhantes… às vezes os dois. Para garantir sua privacidade, o obturador de privacidade integrado do notebook IdeaPad 3i Geração 6 (Intel 15″) protege você contra a persistente ansiedade de sua câmera ainda estar ligada ou não após uma chamada de vídeo.",
            //             title2: "Resfriado e com ótimo desempenho",
            //             text2: "Consiga as maiores pontuações em seus jogos favoritos, edite vídeos e muito mais sem sobrecarregar seu processador. O notebook IdeaPad 3i Geração 6 (Intel 15″) é equipado com recursos de resfriamento inteligente e mecânico, que sempre mantêm seu processador resfriado e funcionando perfeitamente. Você também pode ajustar ainda mais com o Q-Control, que permite que você alterne as velocidades da ventoinha para otimizar para desempenho ou economia de energia da bateria."
            //         }
            //     ]
            // },
            {
                id: 2,
                name: "V14",
                href: "/computadores/notebooks/v14",
                src: "/assets/notebooks/V14/lenovo-notebook-v14-00.webp",
                linha: "Notebooks para o dia a dia",
                intro: [
                    {
                        id: 1,
                        name: "V14",
                        resume: "Projetado para apoiar os negócios",
                        tags: [
                            {
                                id: 1,
                                tag: "Notebooks para o dia a dia"
                            },
                            {
                                id: 2,
                                tag: "Perfeito para o uso básico do dia a dia"
                            },
                        ],
                        src: "/assets/notebooks/V14/lenovo-notebook-v14-00.webp",
                        text: 'O notebook Lenovo V14 (14" Intel) possui grande desempenho, repleto de recursos como câmera de alta resolução e privacidade, foi projetado para aprimorar sua experiência de trabalho, seja no escritório ou em casa. Aproveite ao máximo os processadores Intel® Core™ de 11ª geração e opções com placa dedicada NVIDIA® para executar multitarefas com eficiência, enquanto os recursos de segurança mantêm você e seu trabalho protegidos.'
                    }
                ],
                tech: [
                    {
                        text: "O V14 é indicado para quem utiliza o pacote Office da Microsoft, faz uso leve de planilhas além de usar a internet.",
                        price: "A partir de R$80,00 por mês.",
                        infos: [
                            {
                                id: 1,
                                name: "PROCESSADOR",
                                description: "Até 11ª Geração de Processadores Intel® Core™"
                            },
                            {
                                id: 2,
                                name: "MEMÓRIA",
                                description: "DDR4 de até 16 GB"
                            },
                            {
                                id: 3,
                                name: "GRÁFICOS",
                                description: "Intel® UHD Graphics Integrada\r\nIntel® Iris Xe Graphics\r\nNVIDIA® GeForce® MX350 2GB Dedicada"
                            },
                            {
                                id: 4,
                                name: "ARMAZENAMENTO",
                                description: "Até 512GB M.2 PCIe SSD\r\nAté 1TB HDD\r\nSuporta armazenamento híbrido (HDD+SSD)"
                            },
                            {
                                id: 5,
                                name: "TELA",
                                description: "14” FULL HD (1920x1080) antirreflexo\r\n14” HD (1366x768) antirreflexo"
                            },
                            {
                                id: 6,
                                name: "SISTEMA OPERACIONAL",
                                description: "Até Windows 11 Pro"
                            },
                            {
                                id: 7,
                                name: "BATERIA",
                                description: "Carregamento rápido: até 80% em 1h\r\nAté 6 horas (38Wh)\r\nAté 8,5 horas (45Wh)"
                            },
                            {
                                id: 8,
                                name: "CONECTIVIDADE",
                                description: "802.11ac 2x2\r\nBluetooth® 5.0"
                            },
                            {
                                id: 9,
                                name: "CÂMERA",
                                description: "0.3 MP\r\n720p HD\r\nObturador de privacidade da webcam"
                            },
                            {
                                id: 10,
                                name: "PORTAS",
                                description: "1x USB 3.2 Gen 1 (apenas para transferência de dados)\r\n1x USB 2.0\r\n1x USB 3.2 Gen 1\r\n1x HDMI 1.4b\r\n1x Ethernet (RJ-45)\r\n1x power connector\r\n1x Audio combo jack (3.5mm)"
                            },
                            {
                                id: 11,
                                name: "ÁUDIO",
                                description: "2 alto-falantes estéreo de 1.5W\r\nCertificação Dolby Audio™"
                            },
                            {
                                id: 12,
                                name: "DIMENSÕES (A X L X P)",
                                description: "19.9mm x 324.2mm x 215.2mm"
                            },
                            {
                                id: 13,
                                name: "PESO",
                                description: "A partir de 1.6 kg"
                            },
                            {
                                id: 14,
                                name: "COR",
                                description: "Preto"
                            },
                            {
                                id: 15,
                                name: "SEGURANÇA",
                                description: "Firmware Trusted Platform Module (TPM) 2.0 integrado no chip\r\nBIOS (power-on, hard disk e supervisão)\r\nObturador de privacidade da webcam\r\nSlot de trava"
                            },
                            {
                                id: 16,
                                name: "TECLADO",
                                description: "Teclado padrão ABNT com touchpad PTP (precision touchpad)"
                            },
                        ]
                    },
                ],
                infos: [
                    {
                        id: 1,
                        src: "/assets/notebooks/V14/lenovo-notebook-v14-01.webp",
                        title: "Potencialize seu negócio",
                        text: "Execute suas atividades de trabalho com facilidade, graças aos processadores Intel® Core™ de 11ª geração e com opções de placa dedicada NVIDIA® GeForce® MX350. A multitarefa também é perfeita, pois possui memória de até 16GB e opção de armazenamento híbrido, com a possibilidade de adicionar um SSD ou HDD para ganhar muito mais agilidade e produtividade.",
                        title2: "",
                        text2: ""
                    },
                    {
                        id: 2,
                        src: "/assets/notebooks/V14/lenovo-notebook-v14-02.webp",
                        title: "Projetado para impressionar",
                        text: "O notebook V14 é estiloso, fino e leve, com espessura de 19,9 mm e 1,6 kg. Possui qualidade de áudio com certificação Dolby Áudio, ideal para imersão de som para vídeo-chamada ao entretenimento. Com touchpad PTP, ideal para aumentar a produtividade usando dois ou mais dedos para navegar.",
                        title2: "",
                        text2: ""
                    },
                    {
                        id: 3,
                        src: "/assets/notebooks/V14/lenovo-notebook-v14-03.webp",
                        title: "Visualização envolvente",
                        text: 'Possui tela de 14” com bordas ultrafinas para maior aproveitamento e opção Full HD* com ganho em qualidade de imagem, além de ser antirreflexo que evita reflexos causados pela iluminação externa. Conta com a certificação TÜV Rheinland Low Blue Light certified com baixa exposição à luz azul da tela, o que evita a fadiga visual. A câmera HD 720p de alta resolução e privacidade, é ideal para uma ótima experiência nas vídeo-chamadas.',
                        title2: "Seguro, gerenciável e com conexão",
                        text2: "Dados confidenciais da sua empresa permanecem protegidos com recursos de segurança integrados. O notebook Lenovo V14 possui segurança na BIOS (power-on, hard disk e supervisão) e firmware do Trusted Platform Module (TPM) 2.0 que criptografa dados como os do HD, além de slot físico para trava. O notebook também é de fácil instalação e conta com portas USB e HDMI que permitem conexão com periféricos onde quer que você trabalhe."
                    }
                ]
            },
            {
                id: 3,
                name: "V15",
                href: "/computadores/notebooks/v15",
                src: "/assets/notebooks/V15/lenovo-notebook-v15-00.webp",
                linha: "Notebooks para o dia a dia",
                intro: [
                    {
                        id: 1,
                        name: "V15",
                        resume: "Impulsione a produtividade em qualquer lugar",
                        tags: [
                            {
                                id: 1,
                                tag: "Notebooks para o dia a dia"
                            },
                            {
                                id: 2,
                                tag: "Perfeito para o uso básico do dia a dia"
                            },
                        ],
                        src: "/assets/notebooks/V15/lenovo-notebook-v15-00.webp",
                        text: 'Projetado para o local de trabalho moderno, o Lenovo V15 2a geração (15” Intel) é um notebook que sempre acerta. Adequado para produtividade móvel, oferece ótimo desempenho no escritório ou em casa. Os processadores Intel® Core ™ de 11ª geração e com opção de placa de vídeo dedicada NVIDIA®, além de contar com segurança de dados, memória e armazenamento de alto nível, proporcionam um dia de trabalho produtivo, todos os dias.'
                    }
                ],
                tech: [
                    {
                        text: "O V15 é indicado para quem utiliza o pacote Office da Microsoft, faz uso leve de planilhas além de usar a internet. Vale destacar sua grande tela de 15' e seu teclado numérico, para quem trabalha constante mente com números.",
                        price: "A partir de R$100,00 por mês.",
                        infos: [
                            {
                                id: 1,
                                name: "PROCESSADOR",
                                description: "Até 11ª Geração de Processadores Intel® Core™"
                            },
                            {
                                id: 2,
                                name: "MEMÓRIA",
                                description: "DDR4 de até 16 GB"
                            },
                            {
                                id: 3,
                                name: "GRÁFICOS",
                                description: "Intel® UHD Graphics Integrada\r\nIntel® Iris Xe Graphics\r\nNVIDIA® GeForce® MX350 2GB Dedicada"
                            },
                            {
                                id: 4,
                                name: "ARMAZENAMENTO",
                                description: 'Até 512GB SSD M.2 PCIe NVMe\r\nAté 2.5" HDD até 1TB\r\nOpção de armazenamento híbrido (HDD+SSD)'
                            },
                            {
                                id: 5,
                                name: "TELA",
                                description: "15,6” Full HD (1920 x 1080) IPS, 300 nits, antirreflexo\r\n15,6” Full HD (1920 x 1080) TN, 250 nits, antirreflexo"
                            },
                            {
                                id: 6,
                                name: "SISTEMA OPERACIONAL",
                                description: "Até Windows 11 Pro"
                            },
                            {
                                id: 7,
                                name: "BATERIA",
                                description: "38Wh\r\n45Wh"
                            },
                            {
                                id: 8,
                                name: "CONECTIVIDADE",
                                description: "WLAN: 802.11ac 2x2 Wi-Fi\r\nBluetooth® 5.0"
                            },
                            {
                                id: 9,
                                name: "CÂMERA",
                                description: "0.3M\r\n720p HD\r\nCom privacidade na webcam"
                            },
                            {
                                id: 10,
                                name: "PORTAS",
                                description: "USB-C 3.2 Gen 1 (apenas para transferência dados)\r\nUSB 3.2 Gen 1\r\nUSB 2.0\r\nHDMI\r\nÁudio combo jack (fone de ouvido/microfone)\r\nSlot para trava\r\nEthernet (RJ-45)"
                            },
                            {
                                id: 11,
                                name: "ÁUDIO",
                                description: "2 x alto-falantes estéreo 1,5 W\r\nDolby Audio™"
                            },
                            {
                                id: 12,
                                name: "DIMENSÕES (A X L X P)",
                                description: "19,9 mm x 359,2 mm x 235,8 mm"
                            },
                            {
                                id: 13,
                                name: "PESO",
                                description: "A partir de 1.7 kg"
                            },
                            {
                                id: 14,
                                name: "COR",
                                description: "Preto"
                            },
                            {
                                id: 15,
                                name: "SEGURANÇA",
                                description: "Firmware Trusted Platform Module (TPM) 2.0 integrado no chip\r\nBIOS (power-on, hard disk e supervisão)\r\nObturador de privacidade da webcam Slot de trava"
                            },
                            {
                                id: 16,
                                name: "TECLADO",
                                description: "Teclado numérico e touchpad PTP (precision)"
                            },
                        ]
                    },
                ],
                infos: [
                    {
                        id: 1,
                        src: "/assets/notebooks/V15/lenovo-notebook-v15-01.webp",
                        title: "Grande desempenho",
                        text: "Você pode contar com os processadores Intel® Core™ da 11a geração com opção de placa de vídeo dedicada NVIDIA® GeForce® MX350 para um notebook potente para as atividades do dia a dia. Desfrute de uma ótima performance com a opção de armazenamento híbrido HDD+SSD que garante capacidade de resposta e amplo armazenamento conforme sua necessidade.",
                        title2: "",
                        text2: ""
                    },
                    {
                        id: 2,
                        src: "/assets/notebooks/V15/lenovo-notebook-v15-02.webp",
                        title: "Design moderno",
                        text: "Para profissionais exigentes, o notebook V15 pesa apenas 1,7Kg e 19,9mm de espessura, com tela antirreflexo Full HD para melhor reprodução de imagens e bordas ultrafinas para maior aproveitamento de tela. Possui a certificação TUV Rheinland Low Blue Light que reduz o cansaço visual para longas horas de trabalho. A digitação é dinâmica e precisa com o teclado numérico e touchpad PTP, ideal para interações rápidas durante o seu uso. Economize tempo e aumente a sua produtividade com gestos inteligentes, usando dois ou mais dedos para navegar.",
                        title2: "",
                        text2: ""
                    },
                    {
                        id: 3,
                        src: "/assets/notebooks/V15/lenovo-notebook-v15-03.webp",
                        title: "Privacidade e segurança em todos os lugares",
                        text: "Sua segurança pessoal e de seus dados é muito importante. Pensando nisso, o V15 está equipado com a webcam de resolução HD de 720p com privacidade, perfeita para vídeo chamadas. Ainda possui segurança na BIOS e firmware TPM 2.0 que criptografa dados valiosos, como dados do HD e slot para trava. Trabalhe de qualquer, seja no escritório, em casa ou coworking e conectar-se a outros dispositivos não será problema. O Lenovo V15 vem com porta USB tipo C que permite rápida e ampla conectividade. Ideal para conexões de áudio, dados e energia.",
                        title2: "Qualidade de som",
                        text2: "Os alto-falantes com certificação Dolby Audio permitem aumentar o volume sem distorcer os sons. Suas apresentações com áudio terão mais impacto e suas chamadas sem ruídos."
                    }
                ]
            },
            {
                id: 4,
                name: "ThinkPad L14",
                href: "/computadores/notebooks/thinkpad-l14",
                src: "/assets/notebooks/ThinkPad L14/lenovo-notebook-thinkpad-l14-00.webp",
                linha: "Notebook para PMEs",
                intro: [
                    {
                        id: 1,
                        name: "ThinkPad L14",
                        resume: "Dispositivo básico com desempenho poderoso",
                        tags: [
                            {
                                id: 1,
                                tag: "Notebook para PMEs"
                            },
                            {
                                id: 2,
                                tag: "Perfeito para mobilidade e desempenho"
                            },
                        ],
                        src: "/assets/notebooks/ThinkPad L14/lenovo-notebook-thinkpad-l14-00.webp",
                        text: 'Quando se trata de notebooks empresariais, um dispositivo básico precisa ser capaz de lidar com mais do que apenas tarefas básicas. É aí que se encaixa a segunda geração do ThinkPad L14. Este dispositivo altamente portátil oferece desempenho poderoso com processadores Intel® Core™ de 11ª geração, placa de vídeo independente NVIDIA opcional e memória rápida. Além disso, recursos de produtividade como Modern Standby e tecnologia Rapid Charge significam que ele está pronto para funcionar quando você estiver.'
                    }
                ],
                tech: [
                    {
                        text: "O ThinkPad L14 é um notebook compacto que conta com toda a robustez e performance da linha ThinkPad, excelente para quem precisa de confiança e mobilidade",
                        price: "A partir de R$166,00 por mês.",
                        infos: [
                            {
                                id: 1,
                                name: "PROCESSADOR",
                                description: "Até 11ª Geração Intel® Core™ i7"
                            },
                            {
                                id: 2,
                                name: "MEMÓRIA",
                                description: "Até 64GB DDR4 / 2 x DIMM"
                            },
                            {
                                id: 3,
                                name: "GRÁFICOS",
                                description: "Intel® UHD Integrada Opcional: NVIDIA® MX450"
                            },
                            // {
                            //     id: 3,
                            //     name: "ARMAZENAMENTO",
                            //     description: ""
                            // },
                            {
                                id: 4,
                                name: "TELA",
                                description: "14” FHD (1920 x 1080) IPS Touchscreen, 300 nits\r\n14” FHD (1920 x 1080) IPS, 250 nits\r\n14” HD (1366 x 768) TN, 220 nits"
                            },

                            {
                                id: 6,
                                name: "SISTEMA OPERACIONAL",
                                description: "Até Windows 10 Pro"
                            },
                            {
                                id: 7,
                                name: "BATERIA",
                                description: "45Wh\r\nRapid Charge incluído"
                            },
                            {
                                id: 8,
                                name: "CONECTIVIDADE",
                                description: "Opcional: WWAN LTE 4G CAT12\r\nWLAN: WiFi 6 802.11AX\r\nBluetooth® 5.1\r\nNFC"
                            },
                            {
                                id: 9,
                                name: "CÂMERA",
                                description: "720p HD com obturador de privacidade da webcam\r\nOpcional: infravermelho híbrido (IR) / 720p HD com obturador de privacidade da webcam"
                            },
                            {
                                id: 10,
                                name: "PORTAS",
                                description: "USB-C Thunderbolt™ 4\r\nUSB-C 3.2 Gen 1\r\n2 x USB-A 3.2 Gen 1\r\nOpcional: NanoSIM slot\r\nHDMI 2.0\r\nFone de ouvido/ mic combo\r\nRJ45\r\nEntrada MicroSD\r\nOpcional: leitor de smart card"
                            },
                            {
                                id: 11,
                                name: "ÁUDIO",
                                description: "Dolby® Audio Premium\r\nMicrofones de dupla matriz"
                            },
                            {
                                id: 12,
                                name: "DIMENSÕES (A X L X P)",
                                description: "19,1 mm x 331 mm x 235 mm / 0,75” x 13,03” x 9,25”"
                            },
                            {
                                id: 13,
                                name: "PESO",
                                description: "A partir de 1,58 kg/3,49 lbs"
                            },
                            {
                                id: 14,
                                name: "COR",
                                description: "Preto"
                            },
                            {
                                id: 15,
                                name: "SEGURANÇA",
                                description: "Discrete Trusted Platform Module (dTPM) 2.0\r\nWindows Hello e câmera IR para login de reconhecimento facial\r\nOpcional: Leitor de impressão digital Match-on-chip\r\nObturador de privacidade da webcam\r\nSlot de trava"
                            },
                            {
                                id: 16,
                                name: "CERTIFICAÇÕES",
                                description: "Energy Star® 8.0\r\nEPEAT® Gold"
                            },
                            {
                                id: 17,
                                name: "ADAPTADOR DE ENERGIA",
                                description: "USB-C 65W (supports rapid-charging technology)"
                            },
                            {
                                id: 18,
                                name: "TECLADO",
                                description: "Retroiluminado com iluminação LED branca\r\nÀ prova de respingos\r\nTeclas de controle de chamada (F9-F11)"
                            },
                        ]
                    },
                ],
                infos: [
                    {
                        id: 1,
                        src: "/assets/notebooks/ThinkPad L14/lenovo-notebook-thinkpad-l14-01.webp",
                        title: "Construído para desempenho",
                        text: "O notebook ThinkPad L14 Gen 2 oferece um desempenho sólido com processadores Intel® Core™ i7 de 11ª geração, memória DDR4 de até 64GB (3200MHz), armazenamento SSD de até 1TB e HDD de até 2TB, além de gráficos profissionais. Tudo isso combinado resulta em um dispositivo que transita facilmente do trabalho para o lazer.",
                        title2: "Funciona mesmo quando está em repouso",
                        text2: "Desfrute de recursos que economizam tempo e devolvem minutos preciosos para o seu dia agitado. O notebook ThinkPad L14 Gen 2 oferece o Modern Standby, que permite que o sistema acorde e se conecte à internet instantaneamente. Além disso, mantém o e-mail e alguns aplicativos sincronizados, mesmo quando o dispositivo está em repouso, garantindo produtividade instantânea ao acordar."
                    },
                    {
                        id: 2,
                        src: "/assets/notebooks/ThinkPad L14/lenovo-notebook-thinkpad-l14-02.webp",
                        title: "Sempre conectado",
                        text: 'Com a segunda geração do ThinkPad L14 (14" Intel), é ainda mais fácil ficar conectado, seja a dispositivos ou à internet. A porta Thunderbolt™ 4 transfere dados super-rápidos, enquanto a porta HDMI 2.0 se conecta convenientemente a um monitor. O WiFi 6 rápido permite que você se conecte em plataformas públicas movimentadas, evitando tempos de espera e buffering. E com o WWAN 4G opcional*, você pode desfrutar de acesso rápido e seguro à sua rede e streaming de vídeo ininterrupto, mesmo quando o WiFi está fora do alcance. Em breve. A disponibilidade opcional do WWAN varia por região e deve ser configurada no momento da compra; ela requer um provedor de serviços de rede.',
                        title2: "Chamadas com um toque e ótima qualidade de áudio",
                        text2: "Quando precisar fazer chamadas, os microfones de matriz dupla e o aplicativo Dolby® Premium no ThinkPad L14 Gen 2 cancelam o ruído de fundo para oferecer uma experiência de chamada ajustada. Além disso, com apenas um toque de botão, o notebook ThinkPad L14 permite que você atenda, faça e desconecte de chamadas em conferência com as teclas de função F9-F11. Desfrute de chamadas com um toque e simplifique o seu dia de trabalho."
                    },
                    {
                        id: 3,
                        src: "/assets/notebooks/ThinkPad L14/lenovo-notebook-thinkpad-l14-03.webp",
                        title: "Segurança perfeita",
                        text: "O ThinkPad L14 Gen 2 protege seus dados e dispositivo com uma suíte atualizada de soluções de segurança ThinkShield embutidas, bem como recursos de segurança biométrica. Eles vão desde o leitor de impressão digital compatível com chip até o módulo de plataforma confiável discreto (dTPM), que criptografa dados, tornando-os mais difíceis de serem hackeados. Além disso, a tampa de privacidade da webcam garante que sua câmera permaneça desligada quando você desejar.",
                        title2: "Teste de nível militar",
                        text2: "Os notebooks ThinkPad são testados em 12 requisitos de grau militar e mais de 200 verificações de qualidade para garantir que funcionem em condições extremas. Desde o deserto ártico até tempestades de poeira do deserto, da gravidade zero a derramamentos e quedas, você pode confiar nesses notebooks para lidar com o que a vida lhe reserva."
                    }
                ]
            },
            {
                id: 5,
                name: "ThinkPad T14",
                href: "/computadores/notebooks/thinkpad-t14",
                src: "/assets/notebooks/ThinkPad T14/lenovo-notebook-thinkpad-t14-00.webp",
                linha: "Notebooks executivos",
                intro: [
                    {
                        id: 1,
                        name: "ThinkPad T14",
                        resume: "O notebook para equilíbrio entre vida pessoal e profissional",
                        tags: [
                            {
                                id: 1,
                                tag: "Notebooks executivos"
                            },
                            {
                                id: 2,
                                tag: "Perfeito para performance e durabilidade"
                            },
                        ],
                        src: "/assets/notebooks/ThinkPad T14/lenovo-notebook-thinkpad-t14-00.webp",
                        text: 'Dos poderosos processadores Intel® Core™ de 11ª Geração aos gráficos realistas da NVIDIA®, o notebook ThinkPad T14 Geração 2 (Intel) oferece a você tudo o que você precisa para trabalho e diversão. O WiFi 6E incrivelmente rápido coloca você on-line da maneira mais rápida e estável do que nunca. Além disso, recursos que economizam tempo como um leitor de impressão digital de toque, modo de espera Modern Standby e Wake on Voice adicionam conveniência e simplificam seu fluxo de trabalho.'
                    }
                ],
                tech: [
                    {
                        text: "O ThinkPad T14 é a linha mais vendida para empresas no mundo, indicado para quem precisa de performance e a confiança que só a linha ThinkPad pode oferecer.",
                        price: "A partir de R$190,00 por mês",
                        infos: [
                            {
                                id: 1,
                                name: "PROCESSADOR",
                                description: "Intel® Core™ i7 vPro até de 11ª Geração"
                            },
                            {
                                id: 2,
                                name: "MEMÓRIA",
                                description: "DDR4 de até 48 GB 3.200 MHz\r\n1 soldada\r\n1 DIMM"
                            },
                            {
                                id: 3,
                                name: "GRÁFICOS",
                                description: "UHD Intel® integrada\r\nIntel® Iris® Xe\r\nOpcional: NVIDIA GeForce MX450"
                            },
                            {
                                id: 3,
                                name: "ARMAZENAMENTO",
                                description: "SSD PCIe com até 2 TB"
                            },
                            {
                                id: 5,
                                name: "TELA",
                                description: "UHD IPS de 14″ (3840 x 2160), 500 nits, Dolby Vision™, 100% Adobe sRGB\r\nIPS FHD de 14″ (1920 x 1080), 500 nits, Privacy Guard, On-Cell Touch\r\nIPS FHD de 14″ (1920 x 1080), 400 nits, baixo consumo de energia\r\nIPS FHD de 14″ (1920 x 1080), 300 nits, On-Cell Touch\r\nIPS FHD de 14″ (1920 x 1080), 300 nits"
                            },
                            {
                                id: 6,
                                name: "SISTEMA OPERACIONAL",
                                description: "Até Windows 10 Pro"
                            },
                            {
                                id: 7,
                                name: "BATERIA",
                                description: "Até 3 células 50 Wh (MM18)"
                            },
                            {
                                id: 8,
                                name: "CONECTIVIDADE",
                                description: "Wifi 6E 2x2 (AX) (apenas vPro)\r\nLTE: CAT12 e CAT16 4x4 MIMO"
                            },
                            {
                                id: 9,
                                name: "CÂMERA",
                                description: "Opcional: Câmera com infravermelho (IR)"
                            },
                            {
                                id: 10,
                                name: "PORTAS",
                                description: "2 USB 3.1 Geração 1 (1 sempre ativa)\r\n2 USB-C Thunderbolt™ 3\r\nLeitor de cartões USD\r\nOpcional: Leitor de Smart Card Combo fone de ouvido/microfone\r\nHDMI 2.0\r\nRJ45"
                            },
                            {
                                id: 11,
                                name: "ÁUDIO",
                                description: "Sistema de alto-falantes Dolby Audio™\r\nDois microfones de campo distante"
                            },
                            {
                                id: 12,
                                name: "DIMENSÕES (A X L X P)",
                                description: "A partir de 17,9 mm x 329 mm x 227 mm / 0,70” x 12,9” x 8,9”"
                            },
                            {
                                id: 13,
                                name: "PESO",
                                description: "A partir de 1,47 kg / 3,23 lb"
                            },
                            {
                                id: 14,
                                name: "COR",
                                description: "Preto com tratamento antimicrobiano na superfície"
                            },
                            {
                                id: 15,
                                name: "SEGURANÇA",
                                description: "Obturador de privacidade da webcam\r\nPrivacyGuard\r\nDiscrete Trusted Platform Module 2.0 (dTPM)\r\nLeitor de impressão digital\r\nSlot para trava"
                            },
                            {
                                id: 16,
                                name: "ADAPTADOR DE ENERGIA",
                                description: "USB-C 65W (compatível com RapidCharge)"
                            },
                        ]
                    },
                ],
                infos: [
                    {
                        id: 1,
                        src: "/assets/notebooks/ThinkPad T14/lenovo-notebook-thinkpad-t14-01.webp",
                        title: "Um computador verdadeiramente pessoal",
                        text: "Faça do notebook ThinkPad T14 Geração 2 (Intel) a peça central do seu equilíbrio entre vida pessoal e profissional. É tão elegante quanto potente, com acabamento antimicrobiano somente para os modelos em Preto. Equipado com os processadores Intel® Core™ i7 vPro até de 11ª Geração e Intel® Iris® Xe ou placa de vídeo NVIDIA GeForce MX450 (opcional), é criado para fazer com que os softwares e títulos de jogos AAA mais exigentes de hoje funcionem perfeitamente e sem preocupações.",
                        title2: "Nem tudo são negócios",
                        text2: "O notebook ThinkPad T14 Geração 2 (Intel) não é apenas tudo o que você precisa para o trabalho – ele é tudo o que você deseja para diversão em casa. Obtenha qualidade de imagens top de linha com até um painel UHD Dolby Vision™ de 14″ para vídeos e gráficos deslumbrantes. Combinado com o sistema de alto-falantes Dolby Audio™ para som aprimorado, transmitir filmes ou ouvir músicas nunca foi tão recompensador."
                    },
                    {
                        id: 2,
                        src: "/assets/notebooks/ThinkPad T14/lenovo-notebook-thinkpad-t14-02.webp",
                        title: "Mais inteligente significa mais resistente",
                        text: "Os notebooks ThinkPad T14 Geração 2 (Intel) são testados sob 12 requisitos de nível militar e passam por mais de 200 testes de verificação de qualidade para garantir que funcionam em condições extremas. Do Ártico selvagem a tempestades de areia no deserto, da gravidade zero a derramamentos e quedas, você pode confiar nesses notebooks para lidar com qualquer situação que a vida apresentar.",
                        title2: "Só para seus olhos",
                        text2: "Desfrute da segurança das soluções de segurança ThinkShield, uma combinação de hardware e software que funcionam juntos para manter seus dados protegidos de hackers ou olhos curiosos. O painel PrivacyGuard (opcional) apresenta um filtro eletrônico que reduz o ângulo de visão – assim as pessoas que se sentam perto de você veem somente uma tela preta enquanto você trabalha. E com um chip Discrete Trusted Platform Module 2.0 (dTPM 2.0), o ThinkPad T14 Geração 2 (Intel) é uma fortaleza impenetrável para seus dados."
                    },
                    // {
                    //     id: 3,
                    //     src: "/assets/notebooks/ideapad 3i/lenovo-notebook-ideapad-3i-03.webp",
                    //     title: "Privacidade em primeiro lugar",
                    //     text: "Acidentes com webcams se tornaram comuns ultimamente. Às vezes são engraçados, às vezes humilhantes… às vezes os dois. Para garantir sua privacidade, o obturador de privacidade integrado do notebook IdeaPad 3i Geração 6 (Intel 15″) protege você contra a persistente ansiedade de sua câmera ainda estar ligada ou não após uma chamada de vídeo.",
                    //     title2: "Resfriado e com ótimo desempenho",
                    //     text2: "Consiga as maiores pontuações em seus jogos favoritos, edite vídeos e muito mais sem sobrecarregar seu processador. O notebook IdeaPad 3i Geração 6 (Intel 15″) é equipado com recursos de resfriamento inteligente e mecânico, que sempre mantêm seu processador resfriado e funcionando perfeitamente. Você também pode ajustar ainda mais com o Q-Control, que permite que você alterne as velocidades da ventoinha para otimizar para desempenho ou economia de energia da bateria."
                    // }
                ]
            },
            {
                id: 6,
                name: "ThinkPad E14",
                href: "/computadores/notebooks/thinkpad-e14",
                src: "/assets/notebooks/ThinkPad E14/lenovo-notebook-thinkpad-e14-00.webp",
                linha: "Notebook para PMEs",
                intro: [
                    {
                        id: 1,
                        name: "ThinkPad E14",
                        resume: "Combina desempenho, substância e estilo",
                        tags: [
                            {
                                id: 1,
                                tag: "Notebook para PMEs"
                            },
                            {
                                id: 2,
                                tag: "Perfeito para performance e durabilidade"
                            },
                        ],
                        src: "/assets/notebooks/ThinkPad E14/lenovo-notebook-thinkpad-e14-00.webp",
                        text: 'O notebook ThinkPad E14 Geração 2 (Intel) é construído com confiabilidade notável e recursos de segurança robustos. Além disso, inovações modernas como inicialização de único toque com login, modo de espera Modern Standby e teclas de controle de chamadas fornecem uma experiência de alta produtividade que economiza tempo. Quando se trata de design, desempenho e segurança, o ThinkPad E14 Geração 2 não deixa a desejar.'
                    }
                ],
                tech: [
                    {
                        text: "O E14 é o ThinkPad com melhor custo beneficio e é indicado para quem precisa de performance, confiança mas não abre mão de economia.",
                        price: "A partir de R$110,00 por mês",
                        infos: [
                            {
                                id: 1,
                                name: "PROCESSADOR",
                                description: "Intel® Core™ i7 até de 11ª Geração"
                            },
                            {
                                id: 2,
                                name: "MEMÓRIA",
                                description: "DDR4 de até 32 GB"
                            },
                            {
                                id: 3,
                                name: "GRÁFICOS",
                                description: "Intel® UHD\r\nIntel® Iris Xe Graphics\r\nNVIDIA® MX450"
                            },
                            {
                                id: 4,
                                name: "ARMAZENAMENTO",
                                description: "2x SSDs PCIe de até 2 TB"
                            },
                            {
                                id: 5,
                                name: "TELA",
                                description: "FHD de 14”(1920 x 1080) TN, 220 nits, antirreflexo"
                            },
                            {
                                id: 6,
                                name: "SISTEMA OPERACIONAL",
                                description: "Até ao Windows 10 Pro"
                            },
                            {
                                id: 7,
                                name: "BATERIA",
                                description: "45 Wh\r\nTecnologia Rapid Charge disponível com CA de 65 W"
                            },
                            {
                                id: 8,
                                name: "CONECTIVIDADE",
                                description: "WLAN: WiFi 6 802.11 AX/WiFi 5 802.11 AC\r\nBluetooth® 5.0"
                            },
                            {
                                id: 9,
                                name: "CÂMERA",
                                description: "HD 720p com tampa de privacidade da webcam\r\nOpcional: HD híbrido com infravermelho (IR) com tampa de privacidade da webcam"
                            },
                            {
                                id: 10,
                                name: "PORTAS",
                                description: "USB 3.2 Type-A 1ª geração (sempre ativa)\r\nUSB-C Thunderbolt™ 4\r\nUSB 2.0 Type A 1ª geração\r\nCombo fone de ouvido/microfone\r\nHDMI 1.4\r\nRJ45"
                            },
                            {
                                id: 11,
                                name: "ÁUDIO",
                                description: "2 alto-falantes estéreo 2 W"
                            },
                            {
                                id: 12,
                                name: "DIMENSÕES (A X L X P)",
                                description: "17,9 mm x 324 mm x 220 mm / 0,70” x 12,75” x 8,66”"
                            },
                            {
                                id: 13,
                                name: "PESO",
                                description: "A partir de 1,59 kg / 3,5 lb"
                            },
                            {
                                id: 14,
                                name: "COR  ",
                                description: "Preto\r\nMineral metálico"
                            },
                            {
                                id: 15,
                                name: "SEGURANÇA",
                                description: "Trusted Platform Module (TPM) 2.0\r\nOpcional: Smart Power On (leitor de impressão digital integrado com botão de energia)\r\nTampa de privacidade da webcam\r\nSlot para trava"
                            },
                            {
                                id: 16,
                                name: "ADAPTADOR DE ENERGIA",
                                description: "USB-C de 65 W (compatível com Rapid Charge)"
                            },
                            {
                                id: 17,
                                name: "TECLADO",
                                description: "Resistente aos derrames\r\nOpcional: Retroiluminação com LED branco\r\nTeclas de controlo de chamadas (F9-F11)"
                            },
                        ]
                    },
                ],
                infos: [
                    {
                        id: 1,
                        src: "/assets/notebooks/ThinkPad E14/lenovo-notebook-thinkpad-e14-01.webp",
                        title: "Ótima aparência, experiência ainda melhor",
                        text: "O trabalho pode levar você a qualquer lugar, e a segunda geração do notebook ThinkPad E14 Geração 2 (Intel) foi feita para se movimentar. Com apenas 1,5 kg / 3,5 lb, ele é leve e fácil de carregar. E com somente 17,9 mm de espessura, esse dispositivo cabe perfeitamente na sua bolsa quando você está em trânsito. Além disso, as tampas superior e inferior de alumínio anodizado proporcionam uma aparência sofisticada — escolha entre nosso Preto tradicional ou o elegante Mineral metálico.",
                        title2: "Tecnologia avançada de próxima geração",
                        text2: "O notebook ThinkPad E14 Geração 2 conta com um avançado processador Intel® Core™ de 11ª geração, assim você obtém um desempenho mais rápido para encarar suas tarefas de trabalho. Respaldado por até 32 GB de memória DDR4 e a opção de placa de vídeo NVIDIA® 450MX discreta, este dispositivo lida com o que vier no seu caminho."
                    },
                    {
                        id: 2,
                        src: "/assets/notebooks/ThinkPad E14/lenovo-notebook-thinkpad-e14-02.webp",
                        title: "Recursos inteligentes melhoram sua experiência",
                        text: "O cancelamento de ruído baseado em IA no microfone embutido aprimora as reuniões no seu notebook ThinkPad E14 Geração 2. Escolha entre os modos predefinidos para conferências perfeitas — seja na cafeteria ou no seu escritório doméstico. O resfriamento dinâmico gerencia a temperatura de funcionamento para o desempenho ideal do PC. E com o modo de baixo nível de luz azul, você pode trabalhar confortavelmente por mais tempo.",
                        title2: "Recursos visuais que despertam a inspiração",
                        text2: "Visualize melhor em uma tela envolvente, com resolução Full-HD e 100% de gama de cores sRGB, que oferece imagens cristalinas. Escolha até 300 nits de brilho, o que significa que você pode ver sua tela até mesmo em ambientes externos. O painel da tela de toque permite que você navegue e interaja intuitivamente com seu notebook E14 Geração 2."
                    },
                    {
                        id: 3,
                        src: "/assets/notebooks/ThinkPad E14/lenovo-notebook-thinkpad-e14-03.webp",
                        title: "Encontre mais tempo no seu dia",
                        text: "Quando se trata de ser produtivo, economizar tempo pode fazer toda a diferença. O modo de espera Modern Standby permite atualizações enquanto seu notebook ThinkPad E14 Geração 2 está em suspensão e conecta você à internet instantaneamente após a ativação. Com o Smart Power On, você pode fazer login e inicializar com um único toque. Além disso, ao fazer chamadas de conferência, você pode atender, fazer e se desconectar facilmente de chamadas usando as teclas de função F9-F11.",
                        title2: "Impeça violações antes que aconteçam",
                        text2: "Você não arrisca sua segurança, e nós também não. O notebook E14 Geração 2 inclui o ThinkShield, uma suíte de soluções de segurança integrada que mantém seus dados e dispositivo protegidos. O Trusted Platform Module (TPM) criptografa os dados, tornando mais difícil de violar. O leitor de impressão digital e a câmera IR opcionais, que funcionam em conjunto com o Windows Hello, permitem autenticação biométrica praticamente infalível para impedir acessos não autorizados ao seu sistema."
                    },
                    {
                        id: 4,
                        src: "/assets/notebooks/ThinkPad E14/lenovo-notebook-thinkpad-e14-04.webp",
                        title: "Conecte-se ao que importa",
                        text: "O WiFi 6 opcional permite que você entre rapidamente em plataformas públicas lotadas e desfrute de experiências on-line tranquilas com maior largura de banda, conectividade de rede estável e menor latência. Além disso, o ThinkPad E14 Geração 2 (Intel) conta com três portas USB, incluindo a Intel® Thunderbolt™ 4 líder do setor, que oferece suporte a até dois monitores independentes e acelera as transferências de arquivos em até 40 Gbps.",
                        title2: "Confiabilidade ThinkPad",
                        text2: "Assim como todos os notebooks ThinkPad, o E14 Geração 2 é testado sob 12 requisitos de nível militar e passa por mais de 200 testes de verificação de qualidade. Do Ártico selvagem a tempestades de areia no deserto, da gravidade zero a derramamentos e quedas, você pode confiar nesses notebooks para lidar com qualquer situação que a vida apresentar."
                    }
                ]
            },
            {
                id: 7,
                name: "ThinkPad X1 Carbon",
                href: "/computadores/notebooks/thinkpad-x1-carbon",
                src: "/assets/notebooks/ThinkPad X1 Carbon/lenovo-notebook-thinkpad-x1-carbon-00.webp",
                linha: "Notebooks executivos",
                intro: [
                    {
                        id: 1,
                        name: "ThinkPad X1 Carbon",
                        resume: "Potência e portabilidade em um design robusto",
                        tags: [
                            {
                                id: 1,
                                tag: "Notebooks executivos"
                            },
                            {
                                id: 2,
                                tag: "Perfeito para mobilidade e desempenho"
                            },
                        ],
                        src: "/assets/notebooks/ThinkPad X1 Carbon/lenovo-notebook-thinkpad-x1-carbon-00.webp",
                        text: 'O notebook ThinkPad X1 Carbon 9ª geração de 14” lança uma série de novos recursos que acrescentam conveniência, aprimoram a tecnologia e enriquecem sua experiência – tudo enquanto preserva um chassi ultrafino e ultraleve. Você descobrirá uma impressionante tela 16:10, um TouchPad mais amplo, uma bateria de longa duração e ventilação traseira para aumentar a eficiência. Além disso, com a plataforma Intel® Evo® e placa de vídeo Intel® Iris® Xe, você obtém um dispositivo super-responsivo que estará pronto sempre que precisar dele.'
                    }
                ],
                tech: [
                    {
                        text: "O X1 Carbon é notebook topo de linha da Lenovo, com grande desempenho e extremamente leve, indicado para diretores e C levels, que viajam com frequência.",
                        price: "A partir de R$210,00 por mês.",
                        infos: [
                            {
                                id: 1,
                                name: "PROCESSADOR",
                                description: "Até Intel® Core™ i7 vPro® de 11ª geração"
                            },
                            {
                                id: 2,
                                name: "MEMÓRIA",
                                description: "LPDDR4x de até 32 GB"
                            },
                            {
                                id: 3,
                                name: "GRÁFICOS",
                                description: "Intel® Iris® Xe integrada"
                            },
                            {
                                id: 4,
                                name: "ARMAZENAMENTO",
                                description: "Até 2TB M.2 PCIe NVMe SSD"
                            },
                            {
                                id: 5,
                                name: "TELA",
                                description: '14” UHD+ IPS HDR400 IPS (3840 x 2400) com Dolby Vision™ DCI P3 100%, 500 nits, certificação TÜV Rheinland por redução de emissões de luz azul\r\n14” FHD+ IPS Multitouch Antirreflexo (1920 x 1200) com baixo consumo de energia, com privacidade (PrivacyGuard), 500 nits\r\n14” FHD+ IPS Antirreflexo Multitouch (1920 x 1200) sensível ao toque com baixo consumo de energia, antirreflexo, 400 nits, certificação TÜV Rheinland por redução de emissões de luz azul\r\n14” FHD+ IPS Antirreflexo (1920 x 1200) com baixo consumo de energia, com privacidade (PrivacyGuard), 400 nits, certificação TÜV Rheinland por redução de emissões de luz azul'
                            },
                            {
                                id: 6,
                                name: "SISTEMA OPERACIONAL",
                                description: "Até Windows 10 Pro"
                            },
                            {
                                id: 7,
                                name: "BATERIA",
                                description: "Até 16 horas 57 Wh\r\nCarregamento rápido (compatível com adaptador de 65W ou superior)"
                            },
                            {
                                id: 8,
                                name: "CONECTIVIDADE",
                                description: "WLAN: Wi-Fi 6 AX201, 802.11ax 2x2 Wi-Fi\r\nBluetooth® 5.2\r\nNFC"
                            },
                            {
                                id: 9,
                                name: "CÂMERA",
                                description: "Infravermelho (IR) híbrido / 720p HD com obturador de privacidade da webcam\r\nHD 720p com obturador de privacidade da webcam"
                            },
                            {
                                id: 10,
                                name: "PORTAS",
                                description: "2 x Thunderbolt™ 4\r\n2 x USB-A 3.2 1a geração (uma always on)\r\n1x Combo jack (fone de ouvido/microfone)\r\n1x HDMI 2.0\r\n1x leitor de cartão Nano-SIM (opcional)"
                            },
                            {
                                id: 11,
                                name: "ÁUDIO",
                                description: "Sistema de alto-falante Dolby Atmos®\r\n4x microfones de campo distante de 360 graus"
                            },
                            {
                                id: 12,
                                name: "DIMENSÕES (A X L X P)",
                                description: "14,9 mm x 315 mm x 221,6 mm"
                            },
                            {
                                id: 13,
                                name: "PESO",
                                description: "A partir de 1.4 kg"
                            },
                            {
                                id: 14,
                                name: "COR",
                                description: "Preto\r\nOpcional: Tecido de fibra de carbono na tampa superior"
                            },
                            {
                                id: 15,
                                name: "SEGURANÇA",
                                description: "Discrete Trusted Platform Module (dTPM) 2.0\r\nOpcional: Sensor de detecção de presença humana com câmera IR\r\nLeitor de impressão digital Smart Power On integrado com botão de energia (Match-on-Chip)\r\nObturador de privacidade da webcam\r\nSlot para trava"
                            },
                            {
                                id: 16,
                                name: "CERTIFICAÇÕES",
                                description: "Energy Star® 8.0\r\nEPEAT® Gold\r\nTCO\r\nRoHS compliant\r\nTeste militar de resitência: MIL-STD-810H"
                            },
                            {
                                id: 17,
                                name: "ADAPTADOR DE ENERGIA",
                                description: "USB-C 65 W (compatível com RapidCharge)"
                            },
                            {
                                id: 18,
                                name: "TECLADO",
                                description: "Resistente a derramamentos\r\nTeclado com as cores combinando com TrackPad mais amplo de 110 mm / 4,33”\r\nIluminação com LED branco\r\nTeclas de controle de chamadas (F9-F11)"
                            },
                        ]
                    },
                ],
                infos: [
                    {
                        id: 1,
                        src: "/assets/notebooks/ThinkPad X1 Carbon/lenovo-notebook-thinkpad-x1-carbon-01.webp",
                        title: "Capacidade de resposta reimaginada",
                        text: "Com a plataforma Intel® Evo™, o notebook ThinkPad X1 Carbon 9ª geração oferece uma potente combinação de desempenho, capacidade de resposta, duração da bateria e visuais deslumbrantes. Com os processadores Intel® Core™ i7 vPro® até de 11ª geração, você pode contar com uma experiência excepcional, em qualquer lugar.",
                        title2: "Resfriado, mesmo sob pressão",
                        text2: "A nova dobradiça de uma barra, duas ventoinhas e ventilação traseira para melhor solução térmica inteligente significam que você pode encarar longas horas de trabalho, e ainda assim o notebook ThinkPad X1 Carbon 9ª geração ficará numa boa, assim como você."
                    },
                    {
                        id: 2,
                        src: "/assets/notebooks/ThinkPad X1 Carbon/lenovo-notebook-thinkpad-x1-carbon-02.webp",
                        title: "Segurança perfeitamente integrada",
                        text: "Com uma suíte atualizada de soluções de segurança ThinkShield, o notebook ThinkPad X1 Carbon 9ª geração protege seu dispositivo e seus dados. A biometria fornece um leitor de impressão digital extremamente seguro que é integrado com o botão de energia, assim você pode fazer login e inicializar instantaneamente. A detecção de presença humana (HPD) bloqueia automaticamente seu dispositivo quando você se afasta e, em combinação com a câmera IR opcional, permite login automatizado mesmo a partir do modo de suspensão. Além disso, escolha opção integrada de tela de privacidade para garantir que olhos errantes não consigam ver o que está em sua tela.",
                        title2: "Visuais vibrantes agradáveis aos olhos",
                        text2: "O notebook ThinkPad X1 Carbon 9ª geração apresenta uma tela de 16:10 com bordas ultrafinas de alta resolução. Escolha o painel UHD+ IPS com Dolby Vision™ para aprimorar sua experiência de visualização. Uma poderosa placa de vídeo Intel® Iris™ Xe oferece incríveis clareza de imagens e precisão de cores, quer você esteja em uma videoconferência, navegando ou assistindo a mídias. Além disso, esse painel não apenas apresenta baixo consumo de energia, mas também possui certificação TÜV Rheinland por redução de emissões de luz azul para promover cuidados para os olhos."
                    },
                    {
                        id: 3,
                        src: "/assets/notebooks/ThinkPad X1 Carbon/lenovo-notebook-thinkpad-x1-carbon-03.webp",
                        title: "Colaboração remota aprimorada",
                        text: "O sistema de alto-falantes Dolby Atmos® do notebook ThinkPad X1 Carbon 9ª geração inclui dois alto-falantes de disparo para cima e dois woofers de disparo para baixo; isso cria uma experiência de áudio imersiva que você vai apreciar para o trabalho e para a diversão. Dolby Voice® e quatro microfones de campo distante de 360 graus, combinados com uma câmera de 720p de alta definição para clareza visual, aprimoram a colaboração e garantem que você seja ouvido em alto e bom som durante as chamadas.",
                        title2: "Pronto para o futuro",
                        text2: "O notebook ThinkPad X1 Carbon 9ª geração oferece uma verdadeira experiência tipo smartphone em um computador sempre conectado. O veloz WiFi 6 permite que você entre rapidamente em plataformas públicas lotadas enquanto evita tempo de retardo e armazenamento em buffer. E com o WWAN 4G/5G opcional*, você pode desfrutar de acesso mais rápido e mais seguro à sua rede, além de streaming de vídeo ininterrupto. Permaneça conectado ao que for mais importante, não importa onde você esteja. Além desse recurso, possui bateria de 57Wh de longa duração com até 16 horas de produtividade, sem necessidade de tomada."
                    },
                    {
                        id: 4,
                        src: "/assets/notebooks/ThinkPad X1 Carbon/lenovo-notebook-thinkpad-x1-carbon-04.webp",
                        title: "Resistência de nível militar",
                        text: "Os notebooks ThinkPad são testados sob 12 requisitos de nível militar e em mais de 200 testes de verificação de qualidade para garantir que funcionam em condições extremas. Do Ártico selvagem a tempestades no deserto, da gravidade zero a derramamentos e quedas, você pode confiar nesses notebooks para lidar com qualquer situação que a vida apresentar. Possui certificação MIL-STD-810H.",
                        title2: "",
                        text2: ""
                    }
                ]
            },
            {
                id: 8,
                name: "ThinkPad X1 Yoga",
                href: "/computadores/notebooks/thinkpad-x1-yoga",
                src: "/assets/notebooks/ThinkPad X1 Yoga/lenovo-notebook-thinkpad-x1-yoga-00.webp",
                linha: "Notebooks executivos",
                intro: [
                    {
                        id: 1,
                        name: "ThinkPad X1 Yoga",
                        resume: "Experiência premium redefinida",
                        tags: [
                            {
                                id: 1,
                                tag: "Notebooks executivos"
                            },
                            {
                                id: 2,
                                tag: "Perfeito para mobilidade e desempenho"
                            },
                        ],
                        src: "/assets/notebooks/ThinkPad X1 Yoga/lenovo-notebook-thinkpad-x1-yoga-00.webp",
                        text: 'Conheça a 6ª geração do ThinkPad X1 Yoga, um notebook 2 em 1 com tela Multitouch IPS Antirreflexo de 14”. Você ainda encontra os detalhes de que gostou em nosso X1 Yoga premium e descobrirá uma impressionante tela 16:10, TouchPad mais amplo, bateria de longa duração para mais tempo de utilização longe de tomadas e a nova cor com teclado combinando. Além disso, com a plataforma Intel® Evo® e placa de vídeo Intel® Iris® Xe , você obtém um dispositivo super-responsivo que está pronto sempre que precisar.'
                    }
                ],
                tech: [
                    {
                        text: "O X1 Yoga é notebook topo de linha da Lenovo, com grande desempenho e extremamente versátil, indicado para diretores e C levels, que viajam com frequência.",
                        price: "A partir de R$210,00 por mês.",
                        infos: [
                            {
                                id: 1,
                                name: "PROCESSADOR",
                                description: "Até Intel® Core™ i7 vPro® de 11ª geração"
                            },
                            {
                                id: 2,
                                name: "MEMÓRIA",
                                description: "LPDDR4x de até 32 GB"
                            },
                            {
                                id: 3,
                                name: "GRÁFICOS",
                                description: "Intel® Iris® Xe Integrada"
                            },
                            {
                                id: 4,
                                name: "ARMAZENAMENTO",
                                description: "Até 2TB M.2 PCIe NVMe SSD"
                            },
                            {
                                id: 5,
                                name: "TELA",
                                description: "14” UHD+ IPS Multitouch Antirreflexo Anti-manchas HDR400 (3840 x 2400) sensível ao toque com Dolby Vision™ 500 nits, gama de cores DCI-P3 100% certificação TÜV Rheinland por redução de emissões de luz azul\r\n14” FHD+ IPS Multitouch Antirreflexo (1920 x 1200) sensível ao toque com privacidade (PrivacyGuard), 500 nits, gama de cores 100% sRGB\r\n14” FHD+ IPS Multitouch Antirreflexo Anti-manchas (1920 x 1200) sensível ao toque 400 nits, gama de cores 100% sRGB, certificação TÜV Rheinland por redução de emissões de luz azul\r\n14” FHD+ IPS Multitouch Antirreflexo (1920 x 1200) sensível ao toque 400 nits, gama de cores 100% sRGB, certificação TÜV Rheinland por redução de emissões de luz azul"
                            },
                            {
                                id: 6,
                                name: "SISTEMA OPERACIONAL",
                                description: "Até Windows 10 Pro"
                            },
                            {
                                id: 7,
                                name: "BATERIA",
                                description: "Até 4 células – 57Wh\r\nCarregamento rápido (compatível com adaptador de 65W ou superior)"
                            },
                            {
                                id: 8,
                                name: "CONECTIVIDADE",
                                description: "WLAN: Wi-Fi 6 AX201, 802.11ax 2x2 Wi-Fi\r\nBluetooth® 5.2\r\nNFC"
                            },
                            {
                                id: 9,
                                name: "CÂMERA",
                                description: "HD 720p + IR com obturador de privacidade da webcam\r\nHD 720p com obturador de privacidade da webcam"
                            },
                            {
                                id: 10,
                                name: "PORTAS",
                                description: "1x leitor de cartão Nano-SIM (opcional)\r\n2x Thunderbolt™ 4 (support data transfer, Power Delivery 3.0 and DisplayPort™ 1.4a)\r\n2x USB 3.2 Tipo A (uma always on)\r\n1x HDMI 2.0\r\n1x Combo jack (fone de ouvido e microfone)"
                            },
                            {
                                id: 11,
                                name: "ÁUDIO",
                                description: "Sistema de alto-falante Dolby Atmos®\r\n4 x microfones de campo distante de 360 graus\r\nSolução profissional para conferências Dolby Voice®"
                            },
                            {
                                id: 12,
                                name: "DIMENSÕES (A X L X P)",
                                description: "14,9 mm x 313 mm x 223 mm"
                            },
                            {
                                id: 13,
                                name: "PESO",
                                description: "A partir de 1,399 kg"
                            },
                            {
                                id: 14,
                                name: "COR",
                                description: "Prata"
                            },
                            {
                                id: 15,
                                name: "SEGURANÇA",
                                description: "Discrete Trusted Platform Module (dTPM) 2.0\r\nOpcional: Sensor de detecção de presença humana com câmera IR\r\nLeitor de impressão digital Smart Power On integrado com botão de energia (Match-on-Chip)\r\nObturador de privacidade da webcam\r\nSlot para trava"
                            },
                            {
                                id: 16,
                                name: "CERTIFICAÇÕES",
                                description: "Energy Star® 8.0\r\nEPEAT® Gold TCO RoHS compliant Teste militar de resitência: MIL-STD-810H"
                            },
                            {
                                id: 17,
                                name: "ADAPTADOR DE ENERGIA",
                                description: "USB-C 65 W (compatível com RapidCharge)"
                            },
                            {
                                id: 18,
                                name: "TECLADO",
                                description: "Resistente a derramamentos\r\nTeclado com as cores combinando com TrackPad mais amplo de 110 mm / 4,33”\r\nIluminação com LED branco\r\nTeclas de controle de chamadas (F9-F11)"
                            },
                            {
                                id: 19,
                                name: "ACESSÓRIOS",
                                description: "Caneta ThinkPad Pro integrada com slot para carregamento no chassis\r\nOpcional: Caneta ThinkPad Active"
                            },
                        ]
                    },
                ],
                infos: [
                    {
                        id: 1,
                        src: "/assets/notebooks/ThinkPad X1 Yoga/lenovo-notebook-thinkpad-x1-yoga-01.webp",
                        title: "Desempenho potente",
                        text: "Com a plataforma Intel® Evo™, o notebook 2 em 1 ThinkPad X1 Yoga 6ª geração oferece uma potente combinação de desempenho, capacidade de resposta, duração da bateria e visuais deslumbrantes. Os processadores Intel® Core™ i7 vPro® até 11ª geração significam que você pode contar com uma experiência excepcional, em qualquer lugar.",
                        title2: "Em uma palavra: versatilidade",
                        text2: "Com à sua dobradiça em 360 graus, o notebook conversível ThinkPad X1 Yoga 6ª geração alterna rapidamente entre os modos notebook, tablet, tenda e base. Não importa onde seja sua “mesa”, temos um modo ideal para acomodar seu estilo. Além disso, passe do teclado para a caneta ThinkPad Pro em segundos quando quiser fazer esboços, assinar documentos ou fazer anotações com a caneta recarregável armazenada no próprio equipamento."
                    },
                    {
                        id: 2,
                        src: "/assets/notebooks/ThinkPad X1 Yoga/lenovo-notebook-thinkpad-x1-yoga-02.webp",
                        title: "Recursos de resfriamento",
                        text: "Projetados com duas ventoinhas e ventilação traseira, os recursos térmicos do ThinkPad X1 Yoga 6ª geração conversível mantêm o dispositivo resfriado enquanto as coisas estão aquecidas para você na trilha do sucesso.",
                        title2: "Segurança ainda mais inteligente",
                        text2: "O notebook ThinkPad X1 Yoga Ger 6 2 em 1 possui uma tela 16:10 refinada com bordas ultrafinas de alta resolução. Escolha o painel UHD + IPS Multitouch Antirreflexo com Dolby Vision ™ para ampliar sua experiência. Os poderosos gráficos da placa de vídeo Intel® Iris™ Xe proporcionam clareza de imagem e precisão de cores incríveis - esteja você fazendo uma videoconferência, navegando ou assistindo à vídeos. Além disso, este painel de baixo consumo não é apenas energeticamente eficiente, mas também é certificado pela TÜV Rheinland para reduzir as emissões de luz azul para promover a saúde dos olhos."
                    },
                    {
                        id: 3,
                        src: "/assets/notebooks/ThinkPad X1 Yoga/lenovo-notebook-thinkpad-x1-yoga-03.webp",
                        title: "Vitalidade e segurança se misturam",
                        text: "Com uma suíte atualizada de soluções de segurança ThinkShield integradas, o ThinkPad X1 Yoga 6ª geração protege seu dispositivo e seus dados com recursos como o novo botão liga/desliga com leitor de impressão digital de toque, chip dTPM 2.0, sensor opcional de detecção de presença humana (HPD), opção integrada de tela de privacidade e obturador de privacidade na webcam.",
                        title2: "A colaboração nunca soou tão bem",
                        text2: "O sistema de alto-falantes Dolby Atmos® do ThinkPad X1 Yoga 6ª geração conversível inclui dois alto-falantes de disparo para cima e dois woofers de disparo para baixo, criando uma experiência de áudio imersiva que você vai apreciar para o trabalho e para a diversão. Quatro microfones de campo amplo de 360 graus, combinados com uma câmera de alta definição de 720p para clareza visual, aprimoram a colaboração e garantem que você seja ouvido em alto e bom som durante as chamadas."
                    },
                    {
                        id: 4,
                        src: "/assets/notebooks/ThinkPad X1 Yoga/lenovo-notebook-thinkpad-x1-yoga-04.webp",
                        title: "Invista no futuro",
                        text: "O notebook 2 em 1 ThinkPad X1 Yoga 6ª geração oferece uma verdadeira experiência tipo smartphone em um computador sempre conectado. O veloz WiFi 6 permite que você entre rapidamente em plataformas públicas lotadas enquanto evita tempo de retardo e armazenamento em buffer. E com o serviço 4G/5G opcional, você pode desfrutar de acesso mais rápido e mais seguro à sua rede, além de streaming de vídeo ininterrupto. Permaneça conectado ao que for mais importante, não importa onde você esteja. Além desse recurso, possui bateria de 57Wh de longa duração, tirando a necessidade de ter uma tomada sempre por perto.",
                        title2: "Mais resistente do que seu dispositivo empresarial comum",
                        text2: "Os notebooks ThinkPad são testados sob 12 requisitos de nível militar e em mais de 200 testes de verificação de qualidade para garantir que funcionam em condições extremas. Do Ártico selvagem a tempestades no deserto, da gravidade zero a derramamentos e quedas, você pode confiar nesses notebooks para lidar com qualquer situação que a vida apresentar. Possui certificação MIL-STD-810H."
                    }
                ]
            }
        ],
    },
    {
        id: 2,
        title: "Desktops",
        products: [
            {
                id: 1,
                name: "ThinkCentre M70q Tiny",
                href: "/computadores/desktops/thinkcentre-m70q-tiny",
                src: "/assets/desktops/ThinkCentre M70q Tiny/lenovo-desktop-thinkcentre-m70q-00.webp",
                linha: "Desktop ultra compactos",
                intro: [
                    {
                        id: 1,
                        name: "ThinkCentre M70q Tiny",
                        resume: "Extremamente compacto",
                        tags: [
                            {
                                id: 1,
                                tag: "Desktop ultra compacto"
                            },
                            {
                                id: 2,
                                tag: "Perfeito para o trabalho do dia a dia"
                            },
                        ],
                        src: "/assets/desktops/ThinkCentre M70q Tiny/lenovo-desktop-thinkcentre-m70q-00.webp",
                        text: 'O desktop ThinkCentre M70q Tiny de 1L é poderoso o suficiente para lidar com as cargas de trabalho de PCs maiores, ocupando muito menos espaço. Também é configurável, expansível e seguro, com baixo consumo de energia e uma série de outros recursos que o tornarão o favorito no escritório.'
                    }
                ],
                tech: [
                    {
                        text: "O ThinkCentre Tiny M70q é indicado para quem não tem espaço mas não abre mão de performance e durabilidade.",
                        price: "A partir de R$65,00 por mês",
                        infos: [
                            {
                                id: 1,
                                name: "PROCESSADOR",
                                description: "Até Intel® Core™ i9 de 10ª Geração"
                            },
                            {
                                id: 2,
                                name: "MEMÓRIA",
                                description: "2x Slots de Memória DDR4-3200 SO-DIMM 260-pin Dual Channel\r\nMáximo de até 64GB de Memória"
                            },
                            {
                                id: 3,
                                name: "GRÁFICOS",
                                description: 'Gráfico integrado Intel UHD Graphics 610/630 (depende do processador selecionado)'
                            },
                            {
                                id: 3,
                                name: "ARMAZENAMENTO",
                                description: 'Híbrido SSD + HDD\r\nAté SSD de 1TB M.2 PCIe NVMe\r\nAté HDD de 1TB 2.5” 7200rpm SATA\r\nMemória Intel® Optane™ em alguns modelos'
                            },
                            {
                                id: 4,
                                name: "SISTEMA OPERACIONAL",
                                description: "Até Windows 10 Pro"
                            },
                            {
                                id: 5,
                                name: "PORTAS FRONTAIS",
                                description: "1x USB 3.2 Gen 2 Type-A (função Always On/Fast Charge)\r\n1x USB 3.2 Gen 1 Type-C\r\n1x Headphone / microfone combo (3.5mm)"
                            },
                            {
                                id: 6,
                                name: "PORTAS TRASEIRAS",
                                description: "1x USB 3.2 Gen 2 Type-A\r\n3x USB 3.2 Gen 1 Type-A\r\n1x DisplayPort\r\n1x HDMI\r\n3ª Saída de Vídeo opcional – VGA, DisplayPort ou HDMI (disponível apenas nos modelos selecionados)\r\n1x Ethernet (RJ-45)"
                            },
                            {
                                id: 7,
                                name: "BAIA INTERNA",
                                description: "2.5” HDD/SSD SATA"
                            },
                            {
                                id: 8,
                                name: "BAIA EXTERNA",
                                description: "Opcional: Optical Disc Drive box"
                            },
                            {
                                id: 9,
                                name: "CONECTIVIDADE",
                                description: "WiFi 6 802.11 AX\r\nBluetooth 5.0"
                            },
                            {
                                id: 10,
                                name: "SLOTS DE EXPANSÃO",
                                description: "1x M.2 para SSD ou Intel® Optane™\r\n1x M.2 para placa wireless"
                            },
                            {
                                id: 11,
                                name: "DIMENSÕES (A X L X P)",
                                description: "179 mm x 36,5 mm x 182,9 mm"
                            },
                            {
                                id: 12,
                                name: "VOLUME",
                                description: "1L"
                            },
                            {
                                id: 13,
                                name: "PESO",
                                description: "A partir de 1.32kg"
                            },
                            {
                                id: 14,
                                name: "COR",
                                description: "Raven Black"
                            },
                            {
                                id: 15,
                                name: "FONTE DE ENERGIA",
                                description: "135W, 89%\r\n90W, 89%\r\n65W, 89%"
                            },
                            {
                                id: 16,
                                name: "SEGURANÇA",
                                description: "dTPM 2.0 chip\r\nBIOS-based Smart USB Protection\r\nLock slot para cabo de segurança"
                            },
                            {
                                id: 17,
                                name: "CERTIFICAÇÕES",
                                description: "Energy Star® 8.0\r\nEPEAT® Silver\r\nRoHS\r\nERP LOT3\r\nTÜV Rheinland Low Noise\r\nTCO 8.0"
                            },

                        ]
                    },
                ],
                infos: [
                    {
                        id: 1,
                        src: "/assets/desktops/ThinkCentre M70q Tiny/lenovo-desktop-thinkcentre-m70q-01.webp",
                        title: "O equilíbrio certo entre desempenho e tamanho",
                        text: "Equipado com processador Intel® Core™ de 10ª Geração e a rápida memória DDR4 oferecem a energia necessária para você fazer o trabalho, o ThinkCentre M70q proporciona ótimo equilíbrio entre espaço ocupado e desempenho poderoso. Junte-o a um monitor modular Tiny-in-One para criar seu próprio All-in-One modular.",
                        title2: "Segurança do ThinkShield",
                        text2: "O ThinkShield, a solução de segurança abrangente e personalizável da Lenovo, fornece proteção de ponta a ponta para sua tecnologia crítica de dados e negócios com recursos de segurança integrados. Um chip TPM 2.0 criptografa suas senhas, enquanto o Smart USB Protection baseado em BIOS impede que usuários não autorizados conectem e acessem seus arquivos. O dispositivo também é equipado com um slot de trava, permitindo que você o prenda fisicamente à sua mesa ou outro espaço."
                    },
                    {
                        id: 2,
                        src: "/assets/desktops/ThinkCentre M70q Tiny/lenovo-desktop-thinkcentre-m70q-02.webp",
                        title: "Construído e testado para confiabilidade",
                        text: "Os PCs ThinkCentre são testados em 10 requisitos de nível militar e mais de 200 verificações de qualidade para garantir que funcionem em condições extremas. Da natureza selvagem do Ártico às tempestades de poeira do deserto, de temperaturas extremas a vibrações e choques, você pode confiar em seu M70q para lidar com o que for necessário.",
                        title2: "Conveniente e configurável",
                        text2: "O M70q Tiny oferece inicialização remota e suporta até três monitores independentes. Quatro portas USB - uma com capacidade de carregamento rápido - e outras portas permitem muitos periféricos. Configure da maneira que desejar e expanda-a com acesso sem ferramentas à medida que sua empresa cresce."
                    },
                    {
                        id: 3,
                        src: "/assets/desktops/ThinkCentre M70q Tiny/lenovo-desktop-thinkcentre-m70q-03.webp",
                        title: "Cabe em qualquer lugar",
                        text: "O M70q se encaixa em praticamente qualquer lugar e é fácil de instalar. Você pode o deixar em uma prateleira ou mesa, na horizontal ou vertical. Seu chassi moderno ficará ótimo onde quer que você o coloque.",
                        title2: "Design e uso sustentável",
                        text2: "O M70q atende a vários padrões globais de sustentabilidade, incluindo Energy Star® 8.0, EPEAT® Silver/Gold, RoHS e muito mais. Também é certificado pela TÜV Rheinland para emissão de baixo ruído, portanto, este PC é amigo do meio ambiente e dos funcionários."
                    },
                ]
            },
            {
                id: 2,
                name: "ThinkCentre M80s",
                href: "/computadores/desktops/thinkcentre-m80s",
                src: "/assets/desktops/ThinkCentre M80s/lenovo-desktop-thinkcentre-m80s-00.webp",
                linha: "Desktops executivos",
                intro: [
                    {
                        id: 1,
                        name: "ThinkCentre M80s",
                        resume: "Tamanho compacto, mas produtividade maior",
                        tags: [
                            {
                                id: 1,
                                tag: "Desktops executivos"
                            },
                            {
                                id: 2,
                                tag: "Perfeito performance e durabilidade"
                            },
                        ],
                        src: "/assets/desktops/ThinkCentre M80s/lenovo-desktop-thinkcentre-m80s-00.webp",
                        text: 'O desktop compacto ThinkCentre M80s SFF economiza espaço e oferece o desempenho de uma unidade torre com gabinete maior. Melhore a produtividade e a experiência dos funcionários com seu poder e capacidade de gerenciamento, enquanto seu design sustentável mantém sua empresa amiga do meio ambiente.'
                    }
                ],
                tech: [
                    {
                        text: "O ThinkCentre M80s é indicado para quem precisa de alta performance e durabilidade",
                        price: "A partir de R$85,00 por mês",
                        infos: [
                            {
                                id: 1,
                                name: "PROCESSADOR",
                                description: "Até 10ª Geração Intel® Core™ i9 vPro"
                            },
                            {
                                id: 2,
                                name: "MEMÓRIA",
                                description: "Até 128GB DDR4 (4x Slots DDR4 DIMM)"
                            },
                            {
                                id: 3,
                                name: "GRÁFICOS",
                                description: "Até AMD Radeon™ 520"
                            },
                            {
                                id: 4,
                                name: "ARMAZENAMENTO",
                                description: 'Hibrido SSD + HDD\r\nAté 1TB M.2 PCIe SSD\r\nAté 2TB 7200rpm SATA HDD\r\nMemória Intel® Optane™ em alguns modelos'
                            },
                            {
                                id: 5,
                                name: "SISTEMA OPERACIONAL",
                                description: "Windows 10 Pro 64"
                            },
                            {
                                id: 6,
                                name: "PORTAS FRONTAIS",
                                description: "USB-C\r\n2x USB 3.2 Gen 2\r\n2x USB 3.2 Gen 1\r\nHeadphone / mic combo\r\nLeitor de cartões 3 em 1 em alguns modelos"
                            },
                            {
                                id: 7,
                                name: "PORTAS TRASEIRAS",
                                description: "4 x USB 3.2 Gen 1\r\n1x HDMI\r\n2x DisplayPort\r\nRJ45\r\nAudio-out\r\n1x Serial\r\nParalela em alguns modelos\r\nLock slot"
                            },
                            {
                                id: 8,
                                name: "BAIA EXTERNA",
                                description: "Slim Optical Disc Drive"
                            },
                            {
                                id: 9,
                                name: "CONECTIVIDADE",
                                description: "WiFi 6 802.11 AX\r\nWiFi 5 802.11 AC"
                            },
                            {
                                id: 10,
                                name: "SLOTS DE EXPANSÃO",
                                description: "PCIe x 16\r\nPCIe x 1"
                            },
                            {
                                id: 11,
                                name: "SLOT M.2",
                                description: "M.2 SSD ou Intel® Optane™\r\nM.2 WiFi"
                            },
                            {
                                id: 12,
                                name: "DIMENSÕES (A X L X P)",
                                description: "340mm x 92.5mm x 298mm"
                            },
                            {
                                id: 13,
                                name: "VOLUME",
                                description: "8.2L"
                            },
                            {
                                id: 14,
                                name: "PESO",
                                description: "6 kg"
                            },
                            {
                                id: 15,
                                name: "COR",
                                description: "Raven Black"
                            },
                            {
                                id: 16,
                                name: "GERENCIABILIDADE",
                                description: "Suporta até 3 monitores independentes\r\nKeyboard power on\r\n4-port LAN add-on card\r\n4-port COM add-on card\r\nOpcional: Intel® vPro™"
                            },
                            {
                                id: 17,
                                name: "FONTE DE ENERGIA",
                                description: "380W, 92%\r\n310W, 92%\r\n260W, 85%\r\n180W, 85%"
                            },
                            {
                                id: 18,
                                name: "SEGURANÇA",
                                description: "dTPM 2.0 chip\r\nBIOS-based Smart USB Protection"
                            },
                            {
                                id: 19,
                                name: "CERTIFICAÇÕES",
                                description: "Energy Star® 8.0 (varies by configuration)\r\nEPEAT® Silver\r\nRoHS\r\nERP LOT3\r\nTÜV Rheinland Low Noise\r\nTCO 8.0"
                            },

                        ]
                    },
                ],
                infos: [
                    {
                        id: 1,
                        src: "/assets/desktops/ThinkCentre M80s/lenovo-desktop-thinkcentre-m80s-01.webp",
                        title: "Segurança para dados e dispositivos",
                        text: "Com as soluções de segurança ThinkShield da Lenovo, hardware e software trabalham juntos para proteger seu sistema e dados. O chip dTPM 2.0 criptografa suas senhas e dados, enquanto o Smart USB Protection baseado em BIOS impede o acesso não autorizado via periférico. Proteja fisicamente o próprio dispositivo com vários recursos e conte com a proteção avançada de dados da plataforma Intel® vPro™.",
                        title2: "Fácil de usar e gerenciar",
                        text2: "O M80s é compacto o suficiente para usar em cima da sua mesa, mas mesmo que esteja por baixo, você pode ligá-lo através do teclado. A plataforma Intel® vPro™ oferece excelente capacidade de gerenciamento remoto, além de suportar até três monitores independentes e vários periféricos. Caso você precise configurar ainda mais o seu PC, seus slots de expansão facilitam as atualizações."
                    },
                    {
                        id: 2,
                        src: "/assets/desktops/ThinkCentre M80s/lenovo-desktop-thinkcentre-m80s-02.webp",
                        title: "Economiza espaço e parece ótimo",
                        text: "O gabinete do M80s além de compacto (8,2L) é fácil de instalar. Seu chassi possui um design moderno que se adapta à necessidade de seu espaço de trabalho. Este PC ficará ótimo em qualquer escritório, onde quer que você o coloque.",
                        title2: "Design verde, uso confortável",
                        text2: "O M80s atende a vários padrões globais de sustentabilidade, incluindo Energy Star® 8.0, EPEAT® Silver, RoHS e muito mais. Também é certificado pela TÜV Rheinland* para emissão de baixo ruído, portanto, este PC é amigo do meio ambiente e dos funcionários."
                    },
                    {
                        id: 3,
                        src: "/assets/desktops/ThinkCentre M80s/lenovo-desktop-thinkcentre-m80s-03.webp",
                        title: "Eficiência e potência",
                        text: "O ThinkCentre M80s SFF foi projetado para lidar com todas as suas tarefas de maneira eficiente. Os Processadores Intel® Core™ de 10ª Geração e a rápida memória DDR4, permitem realizar várias tarefas com facilidade, lidando com tudo, desde email a operações complexas de dados.",
                        title2: "Armazenamento rápido e confiável",
                        text2: "Alguns versões possuem armazenamento SSD M.2 para acesso rápido e mais segurança ao armazenar seus dados."
                    },
                ]
            },
            {
                id: 3,
                name: "Lenovo V50",
                href: "/computadores/desktops/lenovo-v50",
                src: "/assets/desktops/Lenovo V50/lenovo-desktop-v50s-00.webp",
                linha: "Desktops para o dia a dia",
                intro: [
                    {
                        id: 1,
                        name: "Lenovo V50s",
                        resume: "Desktop empresarial compacto, rápido e poderoso",
                        tags: [
                            {
                                id: 1,
                                tag: "Desktops para o dia a dia"
                            },
                            {
                                id: 2,
                                tag: "Perfeito para o uso básico do dia a dia"
                            },
                        ],
                        src: "/assets/desktops/Lenovo V50/lenovo-desktop-v50s-00.webp",
                        text: 'O desktop compacto Lenovo V50s é rápido, responsivo e eficiente. Combina a potência dos mais recentes processadores Intel® de 10ª geração com a velocidade da memória DDR4 para maximizar a produtividade. Versátil e seguro, o equipamento também oferece opções gráficas dedicadas e praticidade com portas USB frontais.'
                    }
                ],
                tech: [
                    {
                        text: "O Lenovo V5 é indicado para o uso básico do dia a dia e quer ter acesso aos melhores preços.",
                        price: "A partir de R$75,00 por mês",
                        infos: [
                            {
                                id: 1,
                                name: "PROCESSADOR",
                                description: "Até os processadores Intel® Core™ i9 de 10ª geração Sistema Operacional\r\nAté o Windows 10 Pro - a Lenovo recomenda o Windows 10 Pro para empresas"
                            },
                            {
                                id: 2,
                                name: "MEMÓRIA",
                                description: "Até 32GB DDR4-2666Mhz"
                            },
                            {
                                id: 3,
                                name: "GRÁFICOS",
                                description: "Intel® UHD Graphics 610/630\r\nNVIDIA GeForce GT 730, 2GB DDR5 (opcional)\r\nAMD Radeon™ 520, 1GB DDR5 (opcional)"
                            },
                            {
                                id: 4,
                                name: "ARMAZENAMENTO",
                                description: 'HDD: 2x 3,5” até 2TB\r\nSSD: 1x M.2 PCIe NVMe para SSD de até 1TB'
                            },
                            {
                                id: 5,
                                name: "PORTAS FRONTAIS",
                                description: "4x USB 3.2 Gen 1\r\n1x headfone e microfone combo jack (3.5mm)\r\n1x Microfone (3.5mm)\r\nLeitor de cartão 7 em 1 (opcional)\r\nUnidade de disco óptico (opcional)"
                            },
                            {
                                id: 6,
                                name: "PORTAS TRASEIRAS",
                                description: "2x USB 3.2 Gen 1\r\n2x USB 2.0\r\n1x Serial\r\n1x RJ-45\r\n1x VGA\r\n1x HDMI\r\nÁudio-out (3.5mm)\r\nSerial (9 pinos) (opcional)\r\nParalelo (opcional)"
                            },
                            {
                                id: 7,
                                name: "CONECTIVIDADE",
                                description: "Wireless AC\r\nBluetooth"
                            },
                            {
                                id: 8,
                                name: "DIMENSÕES (A X L X P)",
                                description: "270mm x 100mm x 304mm"
                            },
                            {
                                id: 9,
                                name: "VOLUME",
                                description: "7.4L"
                            },
                            {
                                id: 10,
                                name: "PESO",
                                description: "A partir de 4,2 kg"
                            },
                            {
                                id: 11,
                                name: "COR",
                                description: "Preto"
                            },
                            {
                                id: 12,
                                name: "GERENCIABILIDADE",
                                description: "Suporta até 3 monitores independentes\r\nKeyboard power on\r\n4-port LAN add-on card\r\n4-port COM add-on card\r\nOpcional: Intel® vPro™"
                            },
                            {
                                id: 13,
                                name: "SEGURANÇA",
                                description: "Proteção USB inteligente\r\nFirmware TPM2.0 (fTPM)\r\nSlot para cadeado\r\nSlot de trava lock"
                            },
                            {
                                id: 14,
                                name: "CERTIFICAÇÕES",
                                description: "EPEAT® Silver\r\nEnergy Star® 8.0\r\nRoHS compliant\r\nTUV Ultra Low Noise"
                            },
                        ]
                    },
                ],
                infos: [
                    {
                        id: 1,
                        src: "/assets/desktops/Lenovo V50/lenovo-desktop-v50s-01.webp",
                        title: "Desempenho dinâmico",
                        text: "O desktop V50s é compacto com apenas 7.4L de gabinete e possui a potência e desempenho que você precisa para manter sua empresa produtiva. Com os processadores Intel® Core™ de 10ª geração, permitem que os usuários realizem multitarefas e lidem com projetos de multimídia extensos com eficiência. Alguns modelos possuem placa de vídeo dedicada que entregam visuais realistas e fornecem detalhes nítidos para suas apresentações de negócios.",
                        title2: "Memória e armazenamento rápidos",
                        text2: "O Lenovo V50s permite que você trabalhe com diversas tarefas ao mesmo tempo graças à memória DDR4 de até 32 GB. As opções de armazenamento incluem até 1TB M.2 PCIe SSD NVMe e até 2 discos rígidos 3,5” 2TB SATA."
                    },
                    {
                        id: 2,
                        src: "/assets/desktops/Lenovo V50/lenovo-desktop-v50s-02.webp",
                        title: "Controle de custos",
                        text: "Projetado para reduzir o consumo de energia e proporcionar uma operação silenciosa, o Lenovo V50s permite reduzir os custos de energia e barulho - é certificado para baixo ruído e eficiência energética. As saídas de ar frontais melhoram a circulação do ar, enquanto um sistema de resfriamento atualizado permite aumentar o desempenho ou operar silenciosamente, dependendo do modo de utilização.",
                        title2: "Controle de dados",
                        text2: "O Lenovo V50s é conectado ao firmware do Trusted Platform Module para criptografar dados e senhas. Além de possuir proteção Smart USB para evitar o uso de USB não autorizado. Possui um slot de segurança para lock e slot de cadeado para proteger fisicamente o desktop."
                    },
                ]
            },
            {
                id: 4,
                name: "ThinkCentre M75q Tiny",
                href: "/computadores/desktops/thinkcentre-m75q-tiny",
                src: "/assets/desktops/ThinkCentre M75q Tiny/lenovo-desktop-thinkcentre-m75q-00.webp",
                linha: "Desktop ultra compactos",
                intro: [
                    {
                        id: 1,
                        name: "ThinkCentre M75q Tiny",
                        resume: "Desktop compacto e aprimorado",
                        tags: [
                            {
                                id: 1,
                                tag: "Desktop ultra compacto"
                            },
                            {
                                id: 2,
                                tag: "Perfeito para o trabalho do dia a dia"
                            },
                        ],
                        src: "/assets/desktops/ThinkCentre M75q Tiny/lenovo-desktop-thinkcentre-m75q-00.webp",
                        text: 'Projetado para impulsionar a produtividade, o Thinkcentre M75q Tiny possui componentes de excelente qualidade além de recursos de segurança aprimorados que fazem dele uma opção fundamental para escritórios modernos. Conta com um processador AMD Ryzen™ PRO, memória DDR4, armazenamento SSD mais recente e ampla conectividade, tudo em um chassi de apenas 1L de volume.'
                    }
                ],
                tech: [
                    {
                        text: "O ThinkCentre Tiny m75q é indicado para quem não tem espaço mas não abre mão de performance e durabilidade.",
                        price: "A partir de R$65,00 por mês",
                        infos: [
                            {
                                id: 1,
                                name: "PROCESSADOR",
                                description: "Até AMD Ryzen™ 7 PRO 4750GE"
                            },
                            {
                                id: 2,
                                name: "MEMÓRIA",
                                description: "Até 64GB DDR4 3200MHz\r\n2 slots SO-DIMM DDR4"
                            },
                            {
                                id: 3,
                                name: "ARMAZENAMENTO",
                                description: 'SSD PCIe de até 1 TB\r\n500 GB 7200 RPM 2,5 "SATA HDD\r\nConfigurações híbridas disponíveis (HDD + SSD)'
                            },
                            {
                                id: 4,
                                name: "SISTEMA OPERACIONAL",
                                description: "Até Windows 10 Pro"
                            },
                            {
                                id: 5,
                                name: "PORTAS FRONTAIS",
                                description: "USB-C 3.2 Gen 1\r\nUSB 3.2 Gen 2\r\n1x Fone de ouvido / microfone combo jack"
                            },
                            {
                                id: 6,
                                name: "PORTAS TRASEIRAS",
                                description: "Power-in\r\n2x USB 3.2 Gen 1\r\n2x USB 2.0\r\n1x DisplayPort + 1x HDMI\r\nRJ-45\r\n2x Punch-out (Serial / DP / HDMI / Tipo-C / VGA / 2 x USB 3.2 / 2 x DP 1.2)\r\nOpcional: Paralelo"
                            },
                            {
                                id: 7,
                                name: "BAIA INTERNA",
                                description: "2,5” HDD"
                            },
                            {
                                id: 8,
                                name: "BAIA EXTERNA",
                                description: "Opcional: Unidade de Disco Óptico USB"
                            },
                            {
                                id: 9,
                                name: "CONECTIVIDADE",
                                description: "Opcional: Intel® WiFi 6 AX200 802.11 AX (2 x 2) / Bluetooth® 5.1 (em alguns modelos)"
                            },
                            {
                                id: 10,
                                name: "SLOT M.2",
                                description: "M.2 2280/2242 para SSD\r\nM.2 2230 para módulo Wi-Fi"
                            },
                            {
                                id: 11,
                                name: "DIMENSÕES (A X L X P)",
                                description: "182.9mm x 36.5mm x 179mm"
                            },
                            {
                                id: 12,
                                name: "VOLUME",
                                description: "1L"
                            },
                            {
                                id: 13,
                                name: "PESO",
                                description: "A partir de 1.32kg"
                            },
                            {
                                id: 14,
                                name: "GERENCIABILIDADE",
                                description: "Gerenciamento Remoto DASH"
                            },
                            {
                                id: 15,
                                name: "FONTE DE ENERGIA",
                                description: "Fonte de energia de 65W"
                            },
                            {
                                id: 16,
                                name: "SEGURANÇA",
                                description: "Chip TPM 2.0\r\nProteção Smart USB baseada em BIOS\r\nAMD Memory Guard\r\nEntrada para trava\r\nChassis intrusion switch"
                            },
                            {
                                id: 17,
                                name: "CERTIFICAÇÕES",
                                description: "Energy Star® 8.0\r\nEPEAT® Gold (em alguns modelos)\r\nEPEAT® Silver (em alguns modelos)\r\nRoHS\r\nERP LOT3\r\nTÜV Rheinland Baixo Ruído (em alguns modelos)\r\nTCO 8.0\r\n \r\nAprovado no teste militar MIL-STD-810H (Queda/Impacto, Poeira, Vibração, Alta Temperatura, Baixa Temperatura, Choque Térmico, Altitude, Umidade, Radiação Solar, Antifungos)"
                            },

                        ]
                    },
                ],
                infos: [
                    {
                        id: 1,
                        src: "/assets/desktops/ThinkCentre M75q Tiny/lenovo-desktop-thinkcentre-m75q-01.webp",
                        title: "Desempenho em tamanho real",
                        text: "O ThinkCentre M75q Tiny 2ª Geração pode ser guardado em qualquer lugar, enquanto fornece desempenho de nível empresarial com seu processador AMD Ryzen™ PRO. Este desktop foi projetado para multitarefa, criação de conteúdo, processamento de dados e muito mais - tudo em uma unidade compacta. Equipado com a inovadora memória RAM DDR4, SSD PCIe M.2 com velocidade 2x maior e um processador AMD Ryzen™ Pro com os poderosos gráficos Radeon™ Vega, não há nada que poderá atrasar a sua produtividade.",
                        title2: "Seguro por dentro e por fora",
                        text2: "Trabalhe sem medo, graças à segurança reforçada do ThinkShield - a solução de segurança ponta a ponta mais abrangente do mercado. ThinkShield combina hardware, software, serviços e processos líderes do setor para proteger seus dados e seus negócios. Este desktop também possui AMD Memory Guard, fornecendo criptografia de memória total para proteger dados confidenciais na hora de ligar e desligar sua máquina, com um potente co-processador de segurança dentro de cada CPU AMD Ryzen ™ PRO. Seja virtualização ou inicialização, DRM ou Trusted Platform Module 2.0, os recursos e mecanismo isolados minimizam as aberturas a eventuais agentes maliciosos."
                    },
                    {
                        id: 2,
                        src: "/assets/desktops/ThinkCentre M75q Tiny/lenovo-desktop-thinkcentre-m75q-02.webp",
                        title: "Experiência aprimorada",
                        text: "O M75q Gen 2 foi projetado para crescer com seus negócios. Ele se conecta a equipamentos específicos da indústria, bem como a periféricos legados e é construído para fácil expansão. Ele se adapta facilmente a qualquer ambiente, conecta-se a até três monitores e permite carregamento rápido e compartilhamento de dados por meio de sua porta USB-C no painel frontal.",
                        title2: "Capacidade de gerenciamento e confiabilidade abrangentes",
                        text2: "O M75q 2ª Geração é fácil de implantar, atualizar e gerenciar. Possui suporte de driver integrado para versões mais antigas do sistema operacional e acesso sem ferramentas. A capacidade de gerenciamento do AMD PRO permite que os profissionais de TI administrem uma frota completa de qualquer local de sua organização. Recursos como DASH e Smart Power On possibilitam um gerenciamento fácil e remoto do dispositivo. O DASH permite maior flexibilidade para monitorar um ambiente com diversos fornecedores e clientes enquanto o Smart Power On ajuda a gerenciar o dispositivo remotamente comum simples atalho no teclado."
                    },
                    {
                        id: 3,
                        src: "/assets/desktops/ThinkCentre M75q Tiny/lenovo-desktop-thinkcentre-m75q-03.webp",
                        title: "Sustentabilidade",
                        text: "O M75q Tiny é energeticamente eficiente e possui certificações ecológicas como ENERGY STAR® 7.1*, EPEAT™ Silver, RoHS-compliant que resulta em contas de luz mais baixas.",
                        title2: "Tamanho menor, maiores possibilidades",
                        text2: "O M75q Tiny tem apenas 1L de volume. Isso significa que ocupa um menor espaço e pode ser montado com segurança em uma parede, debaixo da mesa, ou atrás de um monitor modelo Tiny-in-One economizando espaço e reduzindo a desordem. Possui certificação MIL-spec que garante que o Tiny possa suportar as condições mais extremas de uso. Além disso, o Dust Shield protege os componentes internos contra poeira, tornando-o mais confiável e produtivo a longo prazo."
                    },
                ]
            },

        ],
    },
    {
        id: 3,
        title: "Workstations",
        products: [
            {
                id: 1,
                name: "ThinkPad P15v",
                href: "/computadores/workstations/thinkpad-p15v",
                src: "/assets/workstations/ThinkPad P15v/lenovo-workstation-thinkpad-p15v-00.webp",
                linha: "Workstation notebooks",
                intro: [
                    {
                        id: 1,
                        name: "ThinkPad P15v",
                        resume: "Para criadores práticos que exigem mais",
                        tags: [
                            {
                                id: 1,
                                tag: "Workstation notebooks"
                            },
                            {
                                id: 2,
                                tag: "Perfeito para alta performance gráfica"
                            },
                        ],
                        src: "/assets/workstations/ThinkPad P15v/lenovo-workstation-thinkpad-p15v-00.webp",
                        text: 'Poderoso Thinkpad com certificação ISV com preço acessível conta com desempenho Intel® Core™ de até 12ª geração, com gráficos até NVIDIA® RTX™ e impressionante tela UHD disponível com calibração de cores de fábrica, muita memória, armazenamento e conectividade extremamente rápidos.'
                    }
                ],
                tech: [
                    {
                        text: "O ThinkPad P15v é indicado para profissionais que trabalhem com softwares pesados mas precisam de mobilidade.",
                        price: "A partir de R$280,00 por mês",
                        infos: [
                            {
                                id: 1,
                                name: "PROCESSADOR",
                                description: "Até a 12ª geração Intel® Core™ i7-12800H H Series (6+8 núcleos, 20 threads, núcleo de desempenho de 2,4 GHz, núcleo de desempenho Turbo de 4,0 GHz, 24 MB)"
                            },
                            {
                                id: 2,
                                name: "MEMÓRIA",
                                description: "Até 64 GB DDR5 4800 MHz"
                            },
                            {
                                id: 3,
                                name: "GRÁFICOS",
                                description: "Integrado: Intel® Iris® Xe (requer canal duplo de RAM)\r\nOpcional: NVIDIA® RTX™ A2000 (4 GB VRAM)\r\nOpcional: NVIDIA® Quadro T1200 (4 GB VRAM)\r\nOpcional: NVIDIA® Quadro T600 (4 GB VRAM)"
                            },
                            {
                                id: 4,
                                name: "ARMAZENAMENTO",
                                description: 'SSD PCIe Gen 4 de até 4 TB'
                            },
                            {
                                id: 5,
                                name: "SISTEMA OPERACIONAL",
                                description: "Windows 11 Pro\r\nWindows 11 Home\r\nWindows 10 Pro (pré-instalado através de direitos de downgrade no Windows 11 Pro)\r\nLinux"
                            },
                            {
                                id: 6,
                                name: "CONECTIVIDADE",
                                description: "Intel® WiFi 6E* AX211 (requer sistema operacional Windows 11)\r\nBluetooth™ 5.2\r\nOpcional: WWAN FIBOCOM L860-GL 4G LTE CAT16 com eSIM\r\nA operação do WiFi 6E de 6 GHz depende do suporte do sistema operacional, roteadores/APs/gateways que suportam WiFi 6E, juntamente com as certificações regulatórias regionais e alocação de espectro."
                            },
                            {
                                id: 7,
                                name: "PORTAS/SLOTS",
                                description: "Thunderbolt 4 / USB4™ 40 Gbps / USB-C 3.2 Gen 2 (suporta transferência de dados, Power Delivery 3.0 e DisplayPort™ 1.4)\r\n2x USB-A 3.2 Gen 1 (1 x sempre ligado)\r\nHDMI 2.0\r\nCombinação de fone de ouvido / microfone\r\nEthernet (RJ45)\r\nLeitor de cartão SD\r\nOpcional: leitor de cartão inteligente\r\nCartão Nano-SIM"
                            },
                            {
                                id: 8,
                                name: "ÁUDIO",
                                description: "Dolby Audio™\r\nAlto-falantes duplos"
                            },
                            {
                                id: 9,
                                name: "TELA",
                                description: "IPS UHD (3840 x 2160) de 15,6″, antirreflexo, 600 nits, gama de cores 100% Adobe, DisplayHDR™ 400, Dolby Vision® HDR, calibração de exibição de fábrica da X-Rite\r\nTela sensível ao toque IPS de 15,6″ FHD (1920 x 1080), antirreflexo, 300 nits, gama de cores 45% sRGB\r\nIPS de 15,6″ FHD (1920 x 1080), antirreflexo, 300 nits, gama de cores 100% sRGB\r\nIPS FHD (1920 x 1080) de 15,6″, antirreflexo, 300 nits, gama de cores NTSC de 45%"
                            },
                            {
                                id: 10,
                                name: "BATERIA",
                                description: "68 Wh\r\nSuporta Rapid Charge (carrega até 80% em 1 hora)"
                            },
                            {
                                id: 11,
                                name: "CÂMERA",
                                description: "Câmera HD com obturador de privacidade\r\nOpcional: câmera híbrida de infravermelho (IR) com obturador de privacidade"
                            },
                            {
                                id: 12,
                                name: "TECLADO",
                                description: "Retroiluminado\r\nTeclado numérico\r\nDerramamento resistente"
                            },
                            {
                                id: 13,
                                name: "DIMENSÕES (A X L X P)",
                                description: "21.2-24.2mm x 366.5mm x 250.0mm"
                            },
                            {
                                id: 14,
                                name: "COR",
                                description: "Preto"
                            },
                            {
                                id: 15,
                                name: "SEGURANÇA",
                                description: "Módulo de plataforma confiável discreta (dTPM) 2.0\r\nBIOS autorrecuperável\r\nObturador de privacidade da webcam\r\nSlot de trava\r\nOpcional: leitor de impressão digital por toque match-on-chip\r\nOpcional: câmera infravermelha (IR) híbrida FHD para reconhecimento facial"
                            },
                            {
                                id: 16,
                                name: "CERTIFICAÇÕES",
                                description: "EPEAT® Ouro\r\nENERGY STAR® 8.0\r\nCompatível com RoHS\r\nTCO 9.0"
                            },
                            {
                                id: 17,
                                name: "CERTIFICAÇÕES ISV",
                                description: "3DEXPERIENCE®\r\nANSYS®\r\nArcGIS®\r\nCreo®\r\nMicroStation®\r\nNX®\r\nSolid Edge®\r\nSOLIDWORKS®"
                            },
                            {
                                id: 18,
                                name: "O QUE ESTÁ NA CAIXA?",
                                description: "Estação de trabalho móvel ThinkPadP15v Gen 3 (15″ Intel)\r\nAdaptador CA fino de 135 W\r\nGuia rápido"
                            },
                            {
                                id: 19,
                                name: "SUSTENTABILIDADE",
                                description: "97% de plástico reciclado de conteúdo pós-consumo (PCC) usado no gabinete do alto-falante\r\n97% de plástico reciclado PCC usado na bateria de 68 Whr\r\nSolda de baixa temperatura\r\n>/= 90% PCC e/ou embalagem florestal sustentável"
                            },

                        ]
                    },
                ],
                infos: [
                    {
                        id: 1,
                        src: "/assets/workstations/ThinkPad P15v/lenovo-workstation-thinkpad-p15v-01.webp",
                        title: "Energia em movimento sem quebrar o banco",
                        text: "Você não está mais preso em uma mesa. E agora, nem sua estação de trabalho. O ThinkPad P15v Gen 3 preenche a lacuna entre workstations móveis de nível básico e high-end, sem sacrificar o desempenho. Ele é equipado com processadores Intel® Core™ H Series de até 12ª geração com gráficos NVIDIA® RTX opcionais e um modo de desempenho ultra para ajudá-lo a executar as tarefas mais exigentes.",
                        title2: "Certificação ISV e rápido em todos os lugares",
                        text2: "O ThinkPad P15v é pré-certificado para aplicativos ISV populares e construído para produtividade máxima em movimento. Ele foi redesenhado, teclas de chamada em conferência de um toque e um leitor de impressão digital opcional para logins rápidos e seguros. Além de uma gama completa de portas, você pode obter até 4 TB de armazenamento SSD, além de conectividade de internet rápida e perfeita por meio de WiFi 6E e 4G LTE WWAN]."
                    },
                    {
                        id: 2,
                        src: "/assets/workstations/ThinkPad P15v/lenovo-workstation-thinkpad-p15v-02.webp",
                        title: "Dê vida ao seu trabalho",
                        text: "Experimente cores brilhantes com quatro opções de tela antirreflexo de 15,6″ - de FHD a UHD, todas com escurecimento DC para aliviar a cintilação da tela. Quer mais? As estações de trabalho móveis ThinkPad P15v estão disponíveis com telas sensíveis ao toque, calibração de exibição de fábrica da X-Rite e gama de cores 100% da Adobe para realmente dar vida ao seu trabalho.",
                        title2: "",
                        text2: ""
                    },
                    {
                        id: 3,
                        src: "/assets/workstations/ThinkPad P15v/lenovo-workstation-thinkpad-p15v-03.webp",
                        title: "Seguro de fora para dentro",
                        text: "A workstation ThinkPad P15v vem com segurança Lenovo ThinkShield para ajudar a proteger seu dispositivo e dados. Além do leitor de impressão digital opcional, há o Trusted Platform Module (dTPM) discreto para criptografar seus dados, um BIOS de recuperação automática para restaurar as configurações do sistema, se necessário, e um obturador de privacidade da webcam para desligar a câmera.",
                        title2: "Pronto para o que o dia trouxer",
                        text2: "Precisa de uma estação de trabalho móvel pronta para o trabalho real e para a vida cotidiana? Como todos os laptops ThinkPad, o P15v Gen 3 é testado em relação a 12 requisitos de nível militar e mais de 200 verificações de qualidade para ajudar a garantir que funcione mesmo nas condições mais extremas. Confie neste dispositivo para lidar com o que quer que seja jogado em seu caminho, incluindo choques, quedas e derramamentos acidentais."
                    },
                ]
            },
            {
                id: 2,
                name: "ThinkStation P348",
                href: "/computadores/workstations/thinkstation-p348",
                src: "/assets/workstations/ThinkStation P348/lenovo-workstation-thinkstation-p348-00.webp",
                linha: "Workstation desktops",
                intro: [
                    {
                        id: 1,
                        name: "ThinkStation P348",
                        resume: "Confiabilidade de Workstation. Preço de desktop.",
                        tags: [
                            {
                                id: 1,
                                tag: "Workstation notebooks"
                            },
                            {
                                id: 2,
                                tag: "Perfeito para alta performance gráfica e potência"
                            },
                        ],
                        src: "/assets/workstations/ThinkStation P348/lenovo-workstation-thinkstation-p348-00.webp",
                        text: 'A solução ideal para CAD de nível básico e educadores e alunos de STEM, além de profissionais, a ThinkStation P348 em Torre fornece valor sem comprometer a confiabilidade. Criado para tarefas de missão crítica que exigem alto desempenho, esse sistema apresenta um valor excepcional em todos os aspectos – e conta com certificação de ISV, os mais recentes processadores Intel® Core™ e suporte para placa de vídeo NVIDIA®.'
                    }
                ],
                tech: [
                    {
                        text: "O ThinkStation P348 é ideal para profissionais de engenharia, edição de imagens e vídeos, AI, Big Data entre outros que precisam de muita potência.",
                        price: "A partir de R$180,00 por mês",
                        infos: [
                            {
                                id: 1,
                                name: "PROCESSADOR",
                                description: "Até Intel® Core ™ i9 de 11ª geração"
                            },
                            {
                                id: 2,
                                name: "MEMÓRIA",
                                description: "DDR4 de até 128 GB (3.200 MHz), 4 slots UDIMM"
                            },
                            {
                                id: 3,
                                name: "GRÁFICOS",
                                description: "Placa de vídeo UHD Intel® integrada\r\nNVIDIA® RTX™ T1000, 4 GB de VRAM\r\nNVIDIA® GeForce RTX™ 3060, 12 GB de VRAM\r\nAMD Radeon™ WX3200, 4 GB de VRAM\r\nNVIDIA® RTX T400"
                            },
                            {
                                id: 4,
                                name: "ARMAZENAMENTO",
                                description: 'Até SSD 2 TB PCIe NVMe M.2\r\nSSD SATA 3,5” de até 4 TB 7200 rpm'
                            },
                            {
                                id: 5,
                                name: "SISTEMA OPERACIONAL",
                                description: "Windows 11 Pro\r\nUbuntu® Linux® (disponível via pré-carregamento; varia por configuração)\r\nRed Hat® Enterprise Linux® (certificado)"
                            },
                            {
                                id: 6,
                                name: "CONECTIVIDADE",
                                description: "Intel® WiFi 6 AX 201 AC + Bluetooth® 5.0\r\nEthernet RJ45"
                            },
                            {
                                id: 7,
                                name: "PORTAS/SLOTS",
                                description: "Frontais:\r\n2x USB-A 3.2 Geração 2\r\n4x USB-A 3.2 Geração 1\r\nCombo fone de ouvido/microfone\r\nMicrofone\r\nLeitor de cartões SD\r\n\r\nTraseiras:\r\n4x USB-A 2.0 Geração 1 (2 permitem a inicialização via teclado quando conectado)\r\nSaída de áudio\r\nDisplayPort\r\nEthernet RJ45\r\nPorta serial (Opcional: 2ª porta serial)\r\nHDMI\r\nVGA\r\nOpcional: PS/2\r\n3 slots PCIe: 16 Geração 4, 1 Geração 3, 1 Geração 3"
                            },
                            {
                                id: 8,
                                name: "ÁUDIO",
                                description: "Áudio Realtek Grey"
                            },
                            {
                                id: 13,
                                name: "DIMENSÕES (A X L X P)",
                                description: '376 mm x 170 mm x 315,4 mm / 14,8" x 6,7" x 12,4"'
                            },
                            {
                                id: 13,
                                name: "PESO",
                                description: 'A partir de 5,9 kg / 13 lb'
                            },
                            {
                                id: 13,
                                name: "TAMANHO",
                                description: '17 L'
                            },
                            {
                                id: 15,
                                name: "SEGURANÇA",
                                description: "Trusted Platform Module (TPM) 2.0\r\nBIOS com autorreparação\r\nSupervisor, que bloqueia e impede o acesso aos dados de configuração do BIOS\r\nSenha de gerenciamento do sistema, que funciona de modo semelhante ao Supervisor, mas com menos autoridade\r\nSenha de inicialização (POP), que solicita uma senha diretamente após pressionar o botão de energia\r\nSuporte de trava eletrônica\r\nSuporte à inicialização segura UEFI\r\nProteção de senha de HD para dados de HD\r\nSuporte de atualização de firmware Windows UEFI\r\nSuporte ao Device Guard do Windows\r\nDetecção de invasão de chassi\r\nSlot para trava\r\nOpcionais: Trava do painel de acesso, slot de cadeado, BIOS Guard, Boot Guard"
                            },
                            {
                                id: 16,
                                name: "CERTIFICAÇÕES",
                                description: "80 PLUS Platinum\r\nENERGY STAR® 8.0\r\nEPEAT® Gold (em determinadas configurações)\r\nERP Lot 3\r\nCertificação TCO\r\nEm conformidade com RoHS"
                            },
                            {
                                id: 17,
                                name: "CERTIFICAÇÕES ISV",
                                description: "Adobe®\r\nAltair®\r\nANSYS®\r\nAutodesk®\r\nAVID®\r\nBarco®\r\nBentley®\r\nDassault®\r\nMcKesson®\r\nNemetschek®\r\nPTC®\r\nSiemens®"
                            },
                            {
                                id: 18,
                                name: "O QUE ESTÁ NA CAIXA?",
                                description: "Workstation ThinkStation P348 em Torre\r\nAdaptador da fonte de alimentação: 92% de eficiência, 500W\r\nGuia de início rápido"
                            },
                        ]
                    },
                ],
                infos: [
                    {
                        id: 1,
                        src: "/assets/workstations/ThinkStation P348/lenovo-workstation-thinkstation-p348-01.webp",
                        title: "Trata do seu fluxo de trabalho",
                        text: "A ThinkStation P348 em Torre oferece a escolha dos sistemas operacionais Windows ou Linux®. Além disso, processadores Intel® Core™ i5, i7 e i9 de 11ª Geração, combinados com opções de placa de vídeo NVIDIA® RTX™ e GeForce™, aumentam o desempenho, fornecendo a potência para tratar do seu fluxo de trabalho.",
                        title2: "Testada para extremos",
                        text2: "A confiabilidade integrada a cada sistema ThinkStation significa que você vai mantê-la por perto. A P348 em Torre passa por mais de 200 testes de verificação de qualidade e 18 testes STD-810G de especificações militares para garantir que funcione nas condições mais adversas – do frio congelado do Ártico às tempestades de areia no deserto. Nossa qualidade lendária não é páreo para qualquer situação que a vida apresentar."
                    },
                    {
                        id: 2,
                        src: "/assets/workstations/ThinkStation P348/lenovo-workstation-thinkstation-p348-02.webp",
                        title: "Soluções de segurança que trabalham para você",
                        text: "A ThinkStation P348 em Torre é protegida por nossas soluções de segurança ThinkShield – um pacote de hardwares e softwares que funcionam juntos para proteger tanto seu dispositivo quanto seus dados. Do Trusted Platform Module (TPM) 2.0 que criptografa suas senhas, à detecção de invasão do chassi, a um BIOS de autorreparo com BIOS Guard e Boot Guard, cuidamos da segurança para que você possa cuidar dos negócios.",
                        title2: "Deixe-nos lidar com seus desafios de TI",
                        text2: "Descubra uma abordagem inovadora e flexível para a aquisição de TI – combinando dispositivos, suporte a serviços e software em pagamentos mensais acessíveis e previsíveis. As soluções de Dispositivo como serviço (DaaS) da Lenovo tiram o fardo do gerenciamento do ciclo de vida dos seus ombros e mantêm sua equipe na ativa."
                    },
                ]
            },
        ],
    },
    {
        id: 4,
        title: "Servidores",
        products: [
            {
                id: 1,
                name: "ThinkSystem SR550",
                href: "/computadores/servidores/thinksystem-sr550",
                src: "/assets/servidores/ThinkSystem SR550/lenovo-server-thinksystem-sr550-00.webp",
                linha: "Servidor de rack",
                intro: [
                    {
                        id: 1,
                        name: "ThinkSystem SR550",
                        resume: "Com preço acessível, servidores para todas as finalidades em rack para escritórios locais/remotos",
                        tags: [
                            {
                                id: 1,
                                tag: "Servidor de rack"
                            },
                            {
                                id: 2,
                                tag: "Perfeito para todas as finalidades"
                            },
                        ],
                        src: "/assets/servidores/ThinkSystem SR550/lenovo-server-thinksystem-sr550-00.webp",
                        text: 'O versátil servidor ThinkSystem SR550 2P combina desempenho, flexibilidade e capacidade de expansão e de gerenciamento em um pacote extremamente acessível. O design de qualidade empresarial oferece flexibilidade e escalabilidade necessárias para as variadas demandas de implantações de rack 2U para cargas de trabalho em pequenas e médias empresas e em escritórios remotos/filiais. Este servidor resiliente é ideal para infraestrutura, colaboração, armazenamento a frio, aplicativos de linha de negócios e hospedagem.'
                    }
                ],
                tech: [
                    {
                        text: "O ThinkStation SR550 é indicado para empresas que precisem de um servidor em modelo rack para o dia a dia.",
                        price: "A partir de R$460,00 por mês",
                        infos: [
                            {
                                id: 1,
                                name: "FORMATO/ALTURA",
                                description: "Servidor em rack 2U"
                            },
                            {
                                id: 2,
                                name: "PROCESSADORES",
                                description: "Até 2 processadores de segunda geração do Intel® Xeon® Platinum, até 125 W"
                            },
                            {
                                id: 3,
                                name: "MEMÓRIA",
                                description: "Até 768 GB em 12 slots, usando DIMMs de 64 GB; TruDDR4 de 2.666 MHz/2.933 MHz"
                            },
                            {
                                id: 4,
                                name: "SUPORTE A SISTEMAS OPERACIONAIS",
                                description: 'Microsoft, SUSE, Red Hat, VMware. Veja mais informações no site lenovopress.com/osig.'
                            },
                            {
                                id: 5,
                                name: "SLOTS DE EXPANSÃO",
                                description: "Até seis PCIe 3.0 (com dois processadores) por meio de múltiplas opções de riser (somente PCIe ou PCIe e ML2)"
                            },
                            {
                                id: 6,
                                name: "COMPARTIMENTOS",
                                description: 'Até 16x hot-swap 2.5" ou 12x hot-swap 3.5” ou 8x simple-swap 3.5"; e até 2x mirror M.2 boot (RAID 1 opcional)'
                            },
                            {
                                id: 7,
                                name: "SUPORTE A HBA/RAID",
                                description: "RAID de software padrão. (até oito portas); HBAs de até 16 portas/ou RAID de hardware com cache em flash"
                            },
                            {
                                id: 8,
                                name: "RECURSOS DE SEGURANÇA E DISPONIBILIDADE",
                                description: "Lenovo ThinkShield, TPM 1.2/2.0; PFA; unidades e PSUs hot-swap/redundantes; diagnóstico de acesso frontal via porta USB dedicada; resfriamento redundante opcional"
                            },
                            {
                                id: 9,
                                name: "INTERFACE DE REDE",
                                description: 'Duas portas 1GbE mais uma porta de gerenciamento 1GbE dedicada (padrão); uma LOM 10GbE opcional'
                            },
                            {
                                id: 10,
                                name: "ENERGIA",
                                description: 'Duas hot-swaps/redundantes (Energy Star 2.1): 80 PLUS Platinum de 550 W/750 W ou 80 PLUS Titanium de 750 W'
                            },
                            {
                                id: 11,
                                name: "GERENCIAMENTO DE SISTEMAS",
                                description: 'XClarity Controller, XClarity Administrator, plugins XClarity Integrator e XClarity Energy Manager'
                            },
                        ]
                    },
                ],
                infos: [
                    {
                        id: 1,
                        src: "",
                        title: "Benefícios",
                        text: "Ele incorpora as mais recentes tecnologias de processador, memória, armazenamento, E/S e rede.\r\nConfiabilidade líder de mercado e satisfação do cliente (de acordo com pesquisas independentes do setor).\r\nRecursos equilibrados e escalabilidade para oferecer maior valor.\r\nComponentes comuns em todo o portfólio ThinkSystem para reduzir o estoque de peças, acelerar o serviço e aumentar a disponibilidade.\r\nGerenciamento de sistema XClarity fácil de usar e de classe empresarial que utiliza os padrões do setor, como o RedFish.\r\nAltamente eficiente em termos de energia, em conformidade com ASHRAE A2 e A4 (com limitações) para operação contínua a 45°C.",
                        title2: "Essencial e a um preço ao alcance de todos",
                        text2: "O Lenovo ThinkSystem SR550 Dual Socket 2U Rackmount Server é ideal para pequenas e grandes organizações que precisam de desempenho, capacidade de armazenamento, E/S flexível e resiliência. Com confiabilidade† líder do setor e satisfação do cliente‡, e projetado para lidar com uma ampla variedade de cargas de trabalho, o SR550 realiza análises complexas de dados estruturados e não estruturados de forma econômica, acelera os sistemas de transações e, por meio da colaboração, alimenta cargas de trabalho com dados cada vez maiores conjuntos e arquivos grandes dentro de uma organização."
                    },
                    {
                        id: 2,
                        src: "/assets/servidores/ThinkSystem SR550/lenovo-server-thinksystem-sr550-01.webp",
                        title: "Flexível para crescer com sua empresa",
                        text: "O SR550 oferece vários recursos para aumentar o desempenho e a flexibilidade. Possui duas CPUs da família Intel® Xeon® Scalable, com 43% mais núcleos, memória mais rápida, I/O superior e mais armazenamento do que a geração anterior.* O SR550 vem com até 120 TB de armazenamento, um aumento de 50%. O RAID de software e hardware, com discos rígidos de fácil troca, facilita o gerenciamento das necessidades de armazenamento. O SR550 oferece suporte a duas unidades de inicialização M.2 internas, liberando baias de unidade adicionais para maior capacidade de armazenamento. Portas USB 3.0 e VGA opcionais simplificam a implantação e o serviço. Além disso, até seis slots de adaptador PCIe e várias opções de 1GbE/10GbE NIC e LOM, 80 PLUS Platinum e Titanium PSUs e operação contínua de 45°C fornecem mais flexibilidade e economia de custos.\r\n\r\n* Em comparação com a geração anterior Lenovo ThinkServer RD450.",
                        title2: "Fácil administração",
                        text2: "O XClarity Controller da Lenovo é um novo mecanismo de gerenciamento incorporado comum a todos os servidores ThinkSystem. O XClarity Controller apresenta uma interface de usuário gráfica limpa, APIs REST compatíveis com RedFish padrão do setor e permite a inicialização na metade do tempo dos servidores da geração anterior, com atualizações de firmware até 6x mais rápidas.\r\n\r\nO Lenovo XClarity Administrator é um aplicativo virtualizado que gerencia centralmente servidores, armazenamento e rede ThinkSystem. Usando padrões e políticas reutilizáveis, aumente e dimensione o provisionamento e a manutenção da infraestrutura. Serve como um ponto de integração central para estender seus processos de gerenciamento de data center para a TI física. A execução de Integradores XClarity em aplicativos externos de TI ou a integração por meio de APIs REST permite acelerar ainda mais o provisionamento de serviços, simplificar o gerenciamento de TI e limitar os custos."
                    },
                ]
            },
            {
                id: 2,
                name: "ThinkSystem SR630",
                href: "/computadores/servidores/thinksystem-sr630",
                src: "/assets/servidores/ThinkSystem SR630/lenovo-server-thinksystem-sr630-00.webp",
                linha: "Servidor de rack",
                intro: [
                    {
                        id: 1,
                        name: "ThinkSystem SR630",
                        resume: "Construído para negócios, com versatilidade essencial aos negócios",
                        tags: [
                            {
                                id: 1,
                                tag: "Servidor de rack"
                            },
                            {
                                id: 2,
                                tag: "Perfeito para quem precisa de adaptabilidade"
                            },
                        ],
                        src: "/assets/servidores/ThinkSystem SR630/lenovo-server-thinksystem-sr630-00.webp",
                        text: 'O servidor em rack 1U ThinkSystem SR630 2P versátil e altamente confiável foi desenvolvido para lidar com a maioria das cargas de trabalho do data center, da infraestrutura de TI e HPC à nuvem e hiperconvergência.'
                    }
                ],
                tech: [
                    {
                        text: "O ThinkStation SR550 é indicado para empresas que precisem de um servidor em modelo rack para o dia a dia.",
                        price: "A partir de R$530,00 por mês",
                        infos: [
                            {
                                id: 1,
                                name: "FORMATO/ALTURA",
                                description: "Servidor em rack 1U"
                            },
                            {
                                id: 2,
                                name: "PROCESSADORES",
                                description: "Até 2 processadores de segunda geração do Intel® Xeon® Platinum, até 205 W"
                            },
                            {
                                id: 3,
                                name: "MEMÓRIA",
                                description: "Até 9 TB em 24 slots, usando DIMMs de 128 GB; TruDDR4 de 2.666 MHz/2.933 MHz"
                            },
                            {
                                id: 4,
                                name: "SUPORTE A SISTEMAS OPERACIONAIS",
                                description: 'Microsoft, SUSE, Red Hat, VMware vSphere.'
                            },
                            {
                                id: 5,
                                name: "SLOTS DE EXPANSÃO",
                                description: "Até 4 slots PCIe 3.0 (com 2 CPUs), inclusive um PCIe dedicado para adaptador RAID"
                            },
                            {
                                id: 6,
                                name: "COMPARTIMENTOS",
                                description: 'Até 12 compartimentos (inclui 4 AnyBay): 3,5": 4 SAS/SATA hot-swap; 2,5": 4 AnyBay hot-swap + 6 SAS/SATA hot-swap + 2 traseiros ou 8 SAS/SATA hot-swap ou 10 U.2 hot-swap mais até 2 boots M.2 espelhados'
                            },
                            {
                                id: 7,
                                name: "SUPORTE A HBA/RAID",
                                description: "HW RAID (até 16 portas) com cache em flash; HBAs de até 16 portas"
                            },
                            {
                                id: 8,
                                name: "RECURSOS DE SEGURANÇA E DISPONIBILIDADE",
                                description: "TPM 1.2/2.0; PFA; unidades hot-swap/redundantes, ventoinhas e PSUs; operação contínua de 45°C; LEDs de diagnóstico por indicadores luminosos; acesso frontal via porta USB dedicada para diagnóstico"
                            },
                            {
                                id: 9,
                                name: "INTERFACE DE REDE",
                                description: 'LOM 1GbE de duas a quatro portas; LOM 10GbE de duas a quatro portas com Base-T ou SFP+; uma porta de gerenciamento 1GbE dedicada'
                            },
                            {
                                id: 10,
                                name: "ENERGIA",
                                description: '2 hot-swap/redundantes: 80 PLUS Platinum de 550 W/750 W/1.100 W CA ou 80 PLUS Titanium de 750 W CA'
                            },
                            {
                                id: 11,
                                name: "GERENCIAMENTO DE SISTEMAS",
                                description: 'Gerenciamento embutido XClarity Controller, entrega de infraestrutura centralizada XClarity Administrator, plugins XClarity Integrator e gerenciamento centralizado de energia do servidor XClarity Energy Manager'
                            },
                        ]
                    },
                ],
                infos: [
                    {
                        id: 1,
                        src: "/assets/servidores/ThinkSystem SR630/lenovo-server-thinksystem-sr630-01.webp",
                        title: "Data center definido pelo futuro",
                        text: "A Lenovo oferece soluções econômicas, confiáveis e escalonáveis, combinando a tecnologia líder do setor e as melhores ofertas definidas por software do mundo com o Lenovo ThinkShield, XClarity e TruScale Infrastructure Services para gerenciar o ciclo de vida das necessidades do seu data center. O ThinkSystem SR630 oferece suporte a análise de dados, nuvem híbrida, infraestrutura hiperconvergente, vigilância por vídeo, computação de alto desempenho e muito mais.",
                        title2: "Suporte otimizado para carga de trabalho",
                        text2: "O Intel® Optane™ DC Persistent Memory oferece um novo e flexível nível de memória desenvolvido especificamente para cargas de trabalho de data center que oferece uma combinação sem precedentes de alta capacidade, acessibilidade e persistência. Essa tecnologia terá um impacto significativo nas operações do data center no mundo real: redução dos tempos de reinicialização de minutos para segundos, 1,2 vez a densidade de máquina virtual, recuperação de dados significativamente melhorada com latência 14 vezes menor e IOPS 14 vezes maior e mais segurança para dados persistentes construídos em hardware."
                    },
                    {
                        id: 2,
                        src: "/assets/servidores/ThinkSystem SR630/lenovo-server-thinksystem-sr630-03.webp",
                        title: "Armazenamento flexível",
                        text: "O design do Lenovo AnyBay apresenta opções de tipo de interface de unidade no mesmo compartimento: unidades SAS, unidades SATA ou unidades U.2 NVMe PCIe. Com a liberdade de configurar alguns dos compartimentos com SSDs PCIe e ainda usar os restantes para unidades SAS de capacidade, você pode fazer um upgrade para mais SSDs PCIe no futuro, conforme necessário.",
                        title2: "Capacitação do gerenciamento de TI",
                        text2: "O Lenovo XClarity Controller é o mecanismo de gerenciamento integrado em todos os servidores ThinkSystem desenvolvido para padronizar, simplificar e automatizar as tarefas de gerenciamento do servidor da base. O Lenovo XClarity Administrator é um aplicativo virtualizado que gerencia centralmente os servidores, o armazenamento e a rede do ThinkSystem, o que pode reduzir o tempo de provisionamento em até 95% em relação à operação manual. A execução do XClarity Integrator ajuda a simplificar o gerenciamento de TI, agilizar o provisionamento e conter custos integrando perfeitamente o XClarity em um ambiente de TI existente."
                    },
                ]
            },
            {
                id: 3,
                name: "ThinkSystem SR650",
                href: "/computadores/servidores/thinksystem-sr650",
                src: "/assets/servidores/ThinkSystem SR650/lenovo-server-thinksystem-sr650-00.webp",
                linha: "Servidor de rack",
                intro: [
                    {
                        id: 1,
                        name: "ThinkSystem SR650",
                        resume: "Servidor de alto desempenho para data centers que precisam de escalabilidade",
                        tags: [
                            {
                                id: 1,
                                tag: "Servidor de rack"
                            },
                            {
                                id: 2,
                                tag: "Perfeito para data centers que precisam de escalabilidade "
                            },
                        ],
                        src: "/assets/servidores/ThinkSystem SR650/lenovo-server-thinksystem-sr650-00.webp",
                        text: 'O Lenovo ThinkSystem SR650 é um servidor em rack de dois soquetes desenvolvido para oferecer velocidade e expansão, com armazenamento e E/S flexíveis e a maior confiabilidade do mercado para cargas de trabalho críticas para o negócio.'
                    }
                ],
                tech: [
                    {
                        text: "O ThinkStation SR550 é indicado para empresas que precisem de um servidor em modelo rack para o dia a dia.",
                        price: "A partir de R$720,00 por mês",
                        infos: [
                            {
                                id: 1,
                                name: "FORMATO/ALTURA",
                                description: "Servidor em rack 2U"
                            },
                            {
                                id: 2,
                                name: "PROCESSADORES",
                                description: "Até 2 processadores de segunda geração do Intel® Xeon® Platinum, até 205 W"
                            },
                            {
                                id: 3,
                                name: "MEMÓRIA",
                                description: "Até 9 TB em 24 slots DIMM usando DIMMs de 128 GB e Intel® Optane™ DC Persistent Memory; TruDDR4 de 2.666 MHz/2.933 MHZ"
                            },
                            {
                                id: 4,
                                name: "SUPORTE A SISTEMAS OPERACIONAIS",
                                description: 'Microsoft, Red Hat, SUSE, VMware.'
                            },
                            {
                                id: 5,
                                name: "SLOTS DE EXPANSÃO",
                                description: "Até sete PCIe 3.0 via múltiplas opções de riser, com um slot PCIe dedicado para adaptador RAID"
                            },
                            {
                                id: 6,
                                name: "COMPARTIMENTOS",
                                description: 'Aumento do compartimentos hot-swap de 14x de 3,5" ou até 24x de 2,5" (crescimento de até 12 tipos - AnyBay ou crescimento de até 24 tipos - NVMe); Aumenta até 2 unidades de inicialização M.2 (RAID 1)'
                            },
                            {
                                id: 7,
                                name: "SUPORTE A HBA/RAID",
                                description: "HW RAID (até 24 portas) com cache em flash; HBAs de até 16 portas"
                            },
                            {
                                id: 8,
                                name: "RECURSOS DE SEGURANÇA E DISPONIBILIDADE",
                                description: "TPM 1.2/2.0; PFA; unidades hot-swap/redundantes, ventoinhas e PSUs; operação contínua de 45°C; LEDs de diagnóstico por indicadores luminosos; acesso frontal via porta USB dedicada para diagnóstico"
                            },
                            {
                                id: 9,
                                name: "INTERFACE DE REDE",
                                description: 'LOM 1GbE de duas a quatro portas; LOM 10GbE de duas a quatro portas (Base-T ou SFP+); uma porta de gerenciamento 1GbE dedicada'
                            },
                            {
                                id: 10,
                                name: "ENERGIA",
                                description: 'Dois hot-swap/redundantes: 80 PLUS Platinum de 550 W/750 W/1.100 W/1.600 W ou 80 PLUS Titanium de 750 W ou 80 PLUS Platinum de -48 V CC'
                            },
                            {
                                id: 11,
                                name: "GERENCIAMENTO DE SISTEMAS",
                                description: 'Gerenciamento embutido XClarity Controller, entrega de infraestrutura centralizada XClarity Administrator, plugins XClarity Integrator e gerenciamento centralizado de energia do servidor XClarity Energy Manager'
                            },
                        ]
                    },
                ],
                infos: [
                    {
                        id: 1,
                        src: "/assets/servidores/ThinkSystem SR650/lenovo-server-thinksystem-sr650-01.webp",
                        title: "Data center definido pelo futuro",
                        text: "A Lenovo oferece soluções econômicas, confiáveis e escalonáveis, combinando a tecnologia líder do setor e as melhores ofertas definidas por software do mundo com o Lenovo ThinkShield, XClarity e TruScale Infrastructure Services para gerenciar o ciclo de vida das necessidades do seu data center. O ThinkSystem SR650 oferece suporte a análise de dados, nuvem híbrida, infraestrutura hiperconvergente, vigilância por vídeo, computação de alto desempenho e muito mais.",
                        title2: "Suporte otimizado para carga de trabalho",
                        text2: "O Intel® Optane™ DC Persistent Memory oferece um novo e flexível nível de memória desenvolvido especificamente para cargas de trabalho de data center que oferece uma combinação sem precedentes de alta capacidade, acessibilidade e persistência. Essa tecnologia terá um impacto significativo nas operações do data center no mundo real: redução dos tempos de reinicialização de minutos para segundos, 1,2 vez a densidade de máquina virtual, recuperação de dados significativamente melhorada com latência 14 vezes menor e IOPS 14 vezes maior e mais segurança para dados persistentes construídos em hardware."
                    },
                    {
                        id: 2,
                        src: "/assets/servidores/ThinkSystem SR650/lenovo-server-thinksystem-sr650-02.webp",
                        title: "Armazenamento flexível",
                        text: "O design do Lenovo AnyBay apresenta opções de tipo de interface de unidade no mesmo compartimento: unidades SAS, unidades SATA ou unidades U.2 NVMe PCIe. Com a liberdade de configurar alguns dos compartimentos com SSDs PCIe e ainda usar os restantes para unidades SAS de capacidade, você pode fazer um upgrade para mais SSDs PCIe no futuro, conforme necessário.",
                        title2: "Capacitação do gerenciamento de TI",
                        text2: "O Lenovo XClarity Controller é o mecanismo de gerenciamento integrado em todos os servidores ThinkSystem desenvolvido para padronizar, simplificar e automatizar as tarefas de gerenciamento do servidor da base. O Lenovo XClarity Administrator é um aplicativo virtualizado que gerencia centralmente os servidores, o armazenamento e a rede do ThinkSystem, o que pode reduzir o tempo de provisionamento em até 95% em relação à operação manual. A execução do XClarity Integrator ajuda a simplificar o gerenciamento de TI, agilizar o provisionamento e conter custos integrando perfeitamente o XClarity em um ambiente de TI existente."
                    },
                ]
            },
            {
                id: 4,
                name: "ThinkSystem ST50",
                href: "/computadores/servidores/thinksystem-st50",
                src: "/assets/servidores/ThinkSystem ST50/lenovo-server-thinksystem-st50-00.webp",
                linha: "Servidor de torre",
                intro: [
                    {
                        id: 1,
                        name: "ThinkSystem ST50",
                        resume: "Primeiro servidor poderoso, compacto e acessível",
                        tags: [
                            {
                                id: 1,
                                tag: "Servidor de torre"
                            },
                            {
                                id: 2,
                                tag: "Perfeito para o dia a dia da empresa"
                            },
                        ],
                        src: "/assets/servidores/ThinkSystem ST50/lenovo-server-thinksystem-st50-00.webp",
                        text: 'Um servidor em torre de entrada otimizado para desempenho. Um servidor poderoso, compacto e silencioso, ideal para colocação discreta ao lado da mesa ou sob a mesa em qualquer empresa, varejo, local remoto/filial ou home office. O ThinkSystem ST50 V2 oferece armazenamento de nível profissional, confiabilidade e facilidade de manutenção. Pensado para ser o seu primeiro servidor, e crescer com o seu negócio.'
                    }
                ],
                tech: [
                    {
                        text: "O ThinkStation ST50 é indicado para pequenas empresas, escritórios remotos e filiais",
                        price: "A partir de R$220,00 por mês",
                        infos: [
                            {
                                id: 1,
                                name: "FORMATO/ALTURA",
                                description: "Torre pequena; kit opcional de montagem em rack; altura (com suporte): 376 mm (14,8 polegadas), largura: 169 mm (6,7 polegadas), profundidade 299 mm (11,8 polegadas)"
                            },
                            {
                                id: 2,
                                name: "PROCESSADORES",
                                description: "1 processador Intel® Xeon® E-2300 ou 1 processador Intel® Pentium®, até 8 núcleos a 95 W"
                            },
                            {
                                id: 3,
                                name: "MEMÓRIA",
                                description: "Até 64 GB em 4 slots DIMM usando UDIMMs de 16 GB TruDDR4 de 3.200 MHz (suporte planejado para UDIMM de 32 GB)"
                            },
                            {
                                id: 4,
                                name: "SUPORTE A SISTEMAS OPERACIONAIS",
                                description: 'Microsoft, SUSE, Red Hat, VMware vSphere, CentOS;'
                            },
                            {
                                id: 4,
                                name: "PORTAS",
                                description: 'Frente: 2 portas USB 3.2 G2 (10 Gb), 2 portas USB 3.2 G1 (5 Gb), 1 porta USB 3.2 G2 Tipo C (10 Gb) Traseira: 4 portas USB 3.2 G1 (5 Gb); 1 porta serial; 2 portas DisplayPort; 1 saída de linha de áudio (somente para SO cliente Microsoft)'
                            },
                            {
                                id: 5,
                                name: "SLOTS DE EXPANSÃO",
                                description: "Slot PCIe x16 com pistas Gen4 x16 Slot PCIe x1 com pistas Gen3 x1 Slot PCIe x16 com pistas Gen3 x4"
                            },
                            {
                                id: 6,
                                name: "COMPARTIMENTOS",
                                description: '2 HDDs ou SSDs de 3,5 polegadas (1 padrão; 1 opcional) 1 SSD de 2,5 polegadas 1 Módulo SSD NVMe M.2 1 compartimento de unidade óptica slim'
                            },
                            {
                                id: 7,
                                name: "SUPORTE A HBA/RAID",
                                description: "Suporte a RAID de software Intel® VROC; configurações RAID de hardware adicionais também com suporte"
                            },
                            {
                                id: 8,
                                name: "GERENCIAMENTO E SEGURANÇA DE SISTEMAS",
                                description: "Intel® AMT; Lenovo XClarity Provisioning Manager (LXPM) Lite – versão USB; TPM 2.0 incorporado com um TCM opcional"
                            },
                            {
                                id: 8,
                                name: "INTERFACE DE REDE",
                                description: "1 GbE incorporado (Intel® i219-LM)"
                            },
                            {
                                id: 8,
                                name: "ENERGIA",
                                description: "1 fonte de alimentação fixa de até 500 W com economia de energia nível Platinum"
                            },
                            
                        ]
                    },
                ],
                infos: [
                    {
                        id: 1,
                        src: "/assets/servidores/ThinkSystem ST50/lenovo-server-thinksystem-st50-01.webp",
                        title: "Potente e altamente vantajoso",
                        text: "Ideal como o primeiro servidor da sua empresa em crescimento, escritório remoto/filial ou varejo, o maior desempenho do Lenovo ThinkSystem ST50 V2 aumenta a produtividade. O ThinkSystem ST50 V2 tem a operação aprimorada do mais recente processador Intel® Xeon® E-2300. Com um aumento de 17% no desempenho, o ThinkSystem ST50 V2 oferece recursos de nível profissional a um preço básico. Muitas vantagens em relação a uma estação de trabalho com os benefícios de um servidor resiliente.",
                        title2: "Potente, mas silencioso e sem consumir muita energia",
                        text2: "Por ser discreto e compacto, ter diversas opções de montagem e ser silencioso, o ST50 V2 pode ser colocado em escritório sem causar incômodo. Ele consome pouca energia, com um TDP de até 95 W e desempenho de até 8 núcleos. O desempenho é ideal, aumentando a produtividade e economizando gastos com energia."
                    },
                    {
                        id: 2,
                        src: "/assets/servidores/ThinkSystem ST50/lenovo-server-thinksystem-st50-02.webp",
                        title: "Flexível",
                        text: "O ThinkSystem ST50 V2 agrega valor e flexibilidade ao seu negócio em crescimento, fornecendo suporte para três slots PCIe com suporte para uma única GPU NVIDIA e vários adaptadores de rede de alta largura de banda, juntamente com uma variedade de unidades de armazenamento compatíveis. Ele pode ser dimensionado para atender às necessidades da sua empresa em crescimento, oferecendo alta confiabilidade e usando componentes comuns para reduzir custos. O gerenciador de provisionamento XClarity (USB) da Lenovo permite fácil configuração e atualizações de firmware, enquanto a Intel Active Management Technology (AMT) economiza tempo e reduz custos ao monitorar a integridade do sistema e evitar a interrupção de dados.",
                        title2: "",
                        text2: ""
                    },
                ]
            },
            {
                id: 5,
                name: "ThinkSystem ST250",
                href: "/computadores/servidores/thinksystem-st250",
                src: "/assets/servidores/ThinkSystem ST250/lenovo-server-thinksystem-st250-00.webp",
                linha: "Servidor de torre",
                intro: [
                    {
                        id: 1,
                        name: "ThinkSystem ST250",
                        resume: "O poder de um servidor empresarial para o seu negócio em crescimento",
                        tags: [
                            {
                                id: 1,
                                tag: "Servidor de torre"
                            },
                            {
                                id: 2,
                                tag: "Perfeito para negocios em crescimento."
                            },
                        ],
                        src: "/assets/servidores/ThinkSystem ST250/lenovo-server-thinksystem-st250-00.webp",
                        text: 'Servidor em torre 1S com o mais recente processador Intel® Xeon® E-2300, o ThinkSystem ST250 V2 oferece computação de nível empresarial para negócios em crescimento.'
                    }
                ],
                tech: [
                    {
                        text: "O ThinkStation ST250 é indicado para empresas pequenas que esperam um crescimento no curto prazo",
                        price: "A partir de R$310,00 por mês",
                        infos: [
                            {
                                id: 1,
                                name: "FORMATO/ALTURA",
                                description: "Chassi 4U: Altura: 430 mm (16,9 polegadas), largura: 175 mm (6,9 polegadas), profundidade: 566 mm (22,3 polegadas). Conversão opcional para um chassi de montagem em rack"
                            },
                            {
                                id: 2,
                                name: "PROCESSADOR",
                                description: "1 processador Intel® Xeon® E-2300 ou 1 processador Intel® Pentium®, até 8 núcleos a 95 W"
                            },
                            {
                                id: 3,
                                name: "MEMÓRIA",
                                description: "Até 128 GB em 4 slots DIMM usando UDIMMs de 32 GB TruDDR4 de 3.200 MHz"
                            },
                            {
                                id: 4,
                                name: "SUPORTE A SISTEMAS OPERACIONAIS",
                                description: 'Microsoft Windows Server 2022, SUSE, Red Hat, VMware vSphere.'
                            },
                            {
                                id: 4,
                                name: "PORTAS",
                                description: 'Frente: 1 porta USB 3.2 G2 (10Gb), 1 porta USB 2.0 para gerenciamento local usando o aplicativo XCC Mobile Traseira: 4 portas USB 3.2 G2 (10 Gb), 2 portas RJ45 Gigabit Ethernet, 1 porta XCC dedicada de 1 GbE para gerenciamento remoto, 1 porta serial e 1 porta VGA'
                            },
                            {
                                id: 5,
                                name: "SLOTS DE EXPANSÃO",
                                description: "Slot 1: Slot PCIe x4 com pistas PCIe Gen3 x4 Slot 2: Slot PCIe x16 com pistas PCIe Gen4 x16 Slot 3: Slot PCIe x4 com pistas PCIe Gen3 x4 Slot 4: Slot PCIe x8 com pistas PCIe Gen3 x4"
                            },
                            {
                                id: 6,
                                name: "COMPARTIMENTOS",
                                description: '8 unidades SATA de troca simples de 3,5 polegadas 7 unidades SATA de troca simples de 3,5 polegadas mais 1 unidade NVMe de troca simples de 3,5 polegadas 8 unidades SAS/SATA de troca a quente de 3,5 polegadas 16 unidades SAS/SATA de troca a quente de 2,5 polegadas Híbrido 4 unidades de troca a quente de 3,5 polegadas + 8 unidades SAS/SATA troca a quente de 2,5 polegadas 2 compartimentos de mídia de 5,25 polegadas (para unidade óptica ou mídia de backup) Kit de espelhamento M.2 opcional (suporta 2 unidades SATA M.2; instala no slot PCIe)'
                            },
                            {
                                id: 7,
                                name: "SUPORTE A HBA/RAID",
                                description: "Suporte a RAID de software Intel® VROC com configuração de troca simples e troca a quente; várias configurações de RAID de hardware suportadas"
                            },
                            {
                                id: 8,
                                name: "GERENCIAMENTO E SEGURANÇA DE SISTEMAS",
                                description: "Lenovo XClarity Controller; TPM 2.0 incorporado; painel frontal bloqueável opcional, interruptor de violação do chassi"
                            },
                            {
                                id: 8,
                                name: "INTERFACE DE REDE",
                                description: "2 portas integradas GbE (Broadcom BCM5720); 1 porta GbE dedicada para gerenciamento XCC"
                            },
                            {
                                id: 8,
                                name: "ENERGIA",
                                description: "Suporta uma única fonte de alimentação fixa ou um par redundante de fontes de alimentação de troca a quente"
                            },
                            
                        ]
                    },
                ],
                infos: [
                    {
                        id: 1,
                        src: "/assets/servidores/ThinkSystem ST250/lenovo-server-thinksystem-st250-01.webp",
                        title: "Poder de um servidor empresarial",
                        text: "O ThinkSystem ST250 V2 oferece às empresas poder de nível empresarial em uma torre autônoma projetada para pequenos espaços. Com a nova geração de processadores Intel® Xeon® E-2300, o ThinkSystem ST250 V2 é uma solução robusta para simplificar sua infraestrutura de TI corporativa, backup de dados near-side e computação de borda.< /p> Gerencie seus dados do seu jeito com uma ampla variedade de opções de armazenamento e integração perfeita por meio do sistema de gerenciamento XClarity da Lenovo. Este robusto servidor em torre inclui segurança de ponta a ponta fornecida pelo Lenovo ThinkShield. Protegendo seu dispositivo, dados, identidade e soluções online.",
                        title2: "Flexibilidade empresarial",
                        text2: "O ThinkSystem ST250 V2 foi projetado com flexibilidade para crescer com seus negócios. Ele usa configurações de armazenamento altamente expansíveis, suporte a GPU, vários slots de expansão PCIe para se adaptar facilmente à medida que seus requisitos mudam. O software Lenovo XClarity oferece gerenciamento de sistemas fácil de usar e reduz significativamente o tempo de provisionamento, enquanto uma série de integradores XClarity permite o uso do XClarity por meio de aplicativos de TI externos para agilizar o gerenciamento de TI e conter custos."
                    },
                    {
                        id: 2,
                        src: "/assets/servidores/ThinkSystem ST250/lenovo-server-thinksystem-st250-02.webp",
                        title: "Projetado para uso remoto",
                        text: "Fornecendo maior confiabilidade para um ambiente sem suporte de TI dedicado no local, o ThinkSystem ST250 V2 inclui componentes que aumentam o tempo de atividade do servidor e a produtividade no local de trabalho. É de fácil manutenção e confiável para operação remota do servidor. Para dar mais tranquilidade à operação remota, o ThinkSystem 250 V2 inclui fontes de alimentação redundantes duplas, um painel frontal bloqueável e o software Lenovo ThinkShield Security. O tamanho compacto e a operação silenciosa do ThinkSystem ST250 V2 foram pensados para instalação discreta em escritórios remotos/filiais ou locais de varejo.",
                        title2: "",
                        text2: ""
                    },
                ]
            },

        ],
    },
];

export { productsList };