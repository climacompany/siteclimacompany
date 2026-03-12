/**
 * Clima Company - Produtos Logic
 */

// 1. DADOS DOS PRODUTOS
// Simulação de banco de dados para fácil expansão
const produtosData = [
    {
        id: 201,
        destaque: true,
        categoria: 'caldeiras',
        categoriaLabel: 'Caldeiras',
        titulo: 'Caldeira Mural Rinnai REU-B300 FEA',
        desc: '★ PRODUTO EM DESTAQUE ★ Caldeira mural REU-B300 FEA a gás de dupla função para suprimento de sistema de calefação (piso radiante, radiador, toalheiro) e água para uso sanitário. Alta tecnologia e eficiência energética incomparável para o máximo conforto.',
        features: ['Bomba circuladora embutida', 'Vaso de expansão integrado', 'Trocador de calor duplo', 'Modulação de chama eletrônica'],
        especificacoesTecnicas: {
            "Potência Nominal (Kcal/h)": "30.000",
            "Rendimento Térmico": "92%",
            "Tensão Elétrica": "220V",
            "Prazo de Garantia": "3 Anos Oficial Rinnai",
            "Dimensões (AxLxP)": "600 mm x 400 mm x 250 mm",
            "Peso Líquido": "25 kg",
            "Aplicações Comuns": "Piso Radiante / Radiador / Água Sanitária",
            "Exaustão": "Forçada",
            "Vazão de Água (Δt 20°C)": "21,5 L/min"
        },
        img: 'https://www.rinnai.com.br/content/uploads/banner/8e39747ed04020bf4555c18423b76d25.jpg'
    },
    {
        id: 331,
        destaque: true,
        categoria: 'solar',
        categoriaLabel: 'Boilers',
        titulo: 'Reservatório Térmico Unisol',
        desc: '★ PRODUTO EM DESTAQUE ★ A Unisol Energia Solar é uma empresa com 30 anos de experiência no mercado, sendo reconhecida como líder no setor de energia solar.',
        features: ['Coletor Solar Plano', 'Reservatório Térmico', 'Coletor Solar para Piscina', 'Coletor Solar a Vácuo'],
        img: 'https://static.wixstatic.com/media/b5978d_55eca13a7e884ef1a13b0ef7a4e0bec4%7Emv2.png/v1/fit/w_2500,h_1330,al_c/b5978d_55eca13a7e884ef1a13b0ef7a4e0bec4%7Emv2.png'
    },
    {
        id: 202,
        categoria: 'solar',
        categoriaLabel: 'Boilers',
        titulo: '80 litros Aquecedor Elétrico Acumulação RET-080 M',
        desc: 'Aquecedor de água com tanque e resistência elétrica de 2500W indicado para pequenas demandas de água quente em residências',
        features: ['Filosofia corporativa', 'Missão, visão e valores', 'Código de conduta e ética', 'Qualidade e sustentabilidade'],
        img: 'https://www.rinnai.com.br/content/uploads/img-produto/42c16544c79abaa9103853e39ca86083_cached_thumb_ficha_produto.webp'
    },
    {
        id: 203,
        categoria: 'solar',
        categoriaLabel: 'Boilers',
        titulo: '50 litros Aquecedor Elétrico Acumulação RET-050 M',
        desc: 'Aquecedor de água com tanque e resistência elétrica indicado para pequenas demandas de água quente residencial',
        features: ['Filosofia corporativa', 'Missão, visão e valores', 'Código de conduta e ética', 'Qualidade e sustentabilidade'],
        img: 'https://www.rinnai.com.br/content/uploads/img-produto/76a4fa3c1302fd16338490b0cc268f8b_cached_thumb_ficha_produto.webp'
    },
    {
        id: 204,
        categoria: 'solar',
        categoriaLabel: 'Boilers',
        titulo: '30 litros Aquecedor Elétrico Acumulação RET-030 M',
        desc: 'Modelo de aquecedor com tanque e resistência elétrica indicado para pequenas demandas de água quente residencial',
        features: ['Filosofia corporativa', 'Missão, visão e valores', 'Código de conduta e ética', 'Qualidade e sustentabilidade'],
        img: 'https://www.rinnai.com.br/content/uploads/img-produto/d4d2b8def1f413ca1a949834d4146344_cached_thumb_ficha_produto.webp'
    },
    {
        id: 205,
        categoria: 'solar',
        categoriaLabel: 'Boilers',
        titulo: '100 litros Aquecedor Elétrico Acumulação RET-100 M',
        desc: 'Aquecedor de água com tanque e resistência elétrica indicado para demanda flexível de água quente residencial',
        features: ['Filosofia corporativa', 'Missão, visão e valores', 'Código de conduta e ética', 'Qualidade e sustentabilidade'],
        img: 'https://www.rinnai.com.br/content/uploads/img-produto/90aa0a3acbce6ffdf8ef48ce6e1c4fe2_cached_thumb_ficha_produto.webp'
    },
    {
        id: 206,
        categoria: 'aquecedores',
        categoriaLabel: 'Aquecedor',
        titulo: 'Aquecedor a gás M20',
        desc: 'Aquecedor de água a gás de grande capacidade térmica. Ideal para residências exigentes.',
        features: ['Exaustão Natural', 'Trocador de calor Premium'],
        img: 'https://www.rinnai.com.br/content/uploads/img-produto/448479eb570b851d6e39bcb591ac7b28_cached_thumb_ficha_produto.webp'
    },
    {
        id: 207,
        categoria: 'aquecedores',
        categoriaLabel: 'Aquecedor',
        titulo: 'Aquecedor a gás M15 S',
        desc: 'Em aplicações de uso intenso, comercial ou industrial, este aparelho aquecedor de água a gás é uma opção econômica.',
        features: ['Filosofia corporativa', 'Missão, visão e valores', 'Código de conduta e ética', 'Qualidade e sustentabilidade'],
        img: 'https://www.rinnai.com.br/content/uploads/img-produto/08a20be42a81874b556795957b456034_cached_thumb_ficha_produto.webp'
    },
    {
        id: 208,
        categoria: 'aquecedores',
        categoriaLabel: 'Aquecedor',
        titulo: 'Aquecedor a gás M15',
        desc: 'Aquecedor de água a gás a pilha tipo B11. Excelente custo-benefício e design moderno, ideal para residências comuns.',
        features: ['Funcionamento a Pilhas', 'Acendimento Automático', 'Sistemas Anti-Chama', 'Compacto e Discreto'],
        img: 'https://www.rinnai.com.br/content/uploads/img-produto/08a20be42a81874b556795957b456034_cached_thumb_ficha_produto.webp'
    },
    {
        id: 209,
        categoria: 'aquecedores',
        categoriaLabel: 'Aquecedor',
        titulo: 'Aquecedor a gás M11',
        desc: 'Aquecedor de água a gás de exaustão natural.',
        features: ['Filosofia corporativa', 'Missão, visão e valores', 'Código de conduta e ética', 'Qualidade e sustentabilidade'],
        img: 'https://www.rinnai.com.br/content/uploads/img-produto/9dbf1dcca92fe82a1f0f85faece9989f_cached_thumb_ficha_produto.webp'
    },
    {
        id: 210,
        categoria: 'aquecedores',
        categoriaLabel: 'Aquecedor',
        titulo: 'Aquecedor a gás M09',
        desc: 'Aquecedor de água a gás mecânico para pequenas demandas de água quente.',
        features: ['Filosofia corporativa', 'Missão, visão e valores', 'Código de conduta e ética', 'Qualidade e sustentabilidade'],
        img: 'https://www.rinnai.com.br/content/uploads/img-produto/bd5e62454f3e9b6b6e62eb35c6caedaa_cached_thumb_ficha_produto.webp'
    },
    {
        id: 211,
        categoria: 'aquecedores',
        categoriaLabel: 'Aquecedor',
        titulo: 'Aquecedor a gás E35 FEC',
        desc: 'Desenvolvido para aplicações de uso intenso - como uso comercial, industrial ou em piscinas - este aparelho robusto atinge alta temperatura de água',
        features: ['Filosofia corporativa', 'Missão, visão e valores', 'Código de conduta e ética', 'Qualidade e sustentabilidade'],
        img: 'https://www.rinnai.com.br/content/uploads/img-produto/31ac7f27f7a297542f6a13100594a17c_cached_thumb_ficha_produto.webp'
    },
    {
        id: 212,
        categoria: 'aquecedores',
        categoriaLabel: 'Aquecedor',
        titulo: 'Aquecedor a gás E35 FEA',
        desc: 'Atender uma alta vazão de água com controle preciso de temperatura não é dificuldade para este aquecedor de água a gás digital, produzido no Brasil.',
        features: ['Filosofia corporativa', 'Missão, visão e valores', 'Código de conduta e ética', 'Qualidade e sustentabilidade'],
        img: 'https://www.rinnai.com.br/content/uploads/img-produto/3d47f4b76845c01195eb0e2cc670b250_cached_thumb_ficha_produto.webp'
    },
    {
        id: 213,
        categoria: 'aquecedores',
        categoriaLabel: 'Aquecedor',
        titulo: 'Aquecedor a gás E33',
        desc: 'Compatível com o módulo WIFI, o aquecedor E33 possui modulação de chama, sistemas de segurança integrados, exaustão forçada e controle digital de temperatura.',
        features: ['Filosofia corporativa', 'Missão, visão e valores', 'Código de conduta e ética', 'Qualidade e sustentabilidade'],
        img: 'https://www.rinnai.com.br/content/uploads/img-produto/6047d7e3062ced466455cd6ea5aaa44f_cached_thumb_ficha_produto.webp'
    },
    {
        id: 214,
        categoria: 'aquecedores',
        categoriaLabel: 'Aquecedor',
        titulo: 'Aquecedor a gás E27',
        desc: 'Potência e eficiência com fabricação nacional. Este aquecedor de água a gás digital (tipo B23) é compatível com o módulo controlador WIFI Rinnai.',
        features: ['Filosofia corporativa', 'Missão, visão e valores', 'Código de conduta e ética', 'Qualidade e sustentabilidade'],
        img: 'https://www.rinnai.com.br/content/uploads/img-produto/59cf14103ca9444ebe4f93cf8bd92416_cached_thumb_ficha_produto.webp'
    },
    {
        id: 215,
        categoria: 'aquecedores',
        categoriaLabel: 'Aquecedor',
        titulo: 'Aquecedor a gás E21 FEC',
        desc: 'Desenvolvido especificamente para aplicações de uso intenso - como uso comercial, industrial ou centrais térmicas - este aparelho fabricado no Brasil atinge alt',
        features: ['Filosofia corporativa', 'Missão, visão e valores', 'Código de conduta e ética', 'Qualidade e sustentabilidade'],
        img: 'https://www.rinnai.com.br/content/uploads/img-produto/56435259197305bcbd47fe288e2b6fc2_cached_thumb_ficha_produto.webp'
    },
    {
        id: 216,
        categoria: 'aquecedores',
        categoriaLabel: 'Aquecedor',
        titulo: 'Aquecedor a gás E21',
        desc: 'O aquecedor de água a gás digital (B23) mais vendido da Nova Geração Rinnai é a melhor escolha. Compatível com módulo controlador WIFI e produzido no Brasil.',
        features: ['Modulação de Chama', 'Alarme de falha', 'Sistemas de Segurança'],
        img: 'https://www.rinnai.com.br/content/uploads/img-produto/64c34a25a10614e4197cc24283036dd8_cached_thumb_ficha_produto.webp'
    },
    {
        id: 217,
        categoria: 'aquecedores',
        categoriaLabel: 'Aquecedor',
        titulo: 'Aquecedor a gás E17',
        desc: 'Aparelho da Nova Geração de aquecedores de água a gás digitais Rinnai, fabricado no Brasil e compatível com módulo controlador WIFI.',
        features: ['Controle via Celular (Opcional)', 'Bivolt Automático', 'Display Digital', 'Silencioso'],
        img: 'https://www.rinnai.com.br/content/uploads/img-produto/3bba6519105b452e85a5fe7232230a13_cached_thumb_ficha_produto.webp'
    },
    {
        id: 218,
        categoria: 'aquecedores',
        categoriaLabel: 'Aquecedor',
        titulo: 'Aquecedor a gás E15FF',
        desc: 'Sucesso de vendas, o 15 litros digital da Rinnai é um aquecedor de água a gás confiável e eficiente para uso em todo o Brasil.',
        features: ['Filosofia corporativa', 'Missão, visão e valores', 'Código de conduta e ética', 'Qualidade e sustentabilidade'],
        img: 'https://www.rinnai.com.br/content/uploads/img-produto/2e4ac4fa3c5443d76f9df3a128afbd49_cached_thumb_ficha_produto.webp'
    },
    {
        id: 219,
        categoria: 'aquecedores',
        categoriaLabel: 'Aquecedor',
        titulo: 'Aquecedor a gás E15 GLP',
        desc: 'Com display touchscreen, o 15 litros digital GLP da Rinnai se mostra um aquecedor a gás eficiente e econômico para uso em todas as regiões.',
        features: ['Filosofia corporativa', 'Missão, visão e valores', 'Código de conduta e ética', 'Qualidade e sustentabilidade'],
        img: 'https://www.rinnai.com.br/content/uploads/img-produto/7ff01472d6d696e6bb2c4529208d9c60_cached_thumb_ficha_produto.webp'
    },
    {
        id: 220,
        categoria: 'aquecedores',
        categoriaLabel: 'Aquecedor',
        titulo: 'Aquecedor a gás E15',
        desc: 'Sucesso de vendas, o 15 litros digital da Rinnai é um aquecedor de água a gás confiável e eficiente para uso em todo o Brasil.',
        features: ['Filosofia corporativa', 'Missão, visão e valores', 'Código de conduta e ética', 'Qualidade e sustentabilidade'],
        img: 'https://www.rinnai.com.br/content/uploads/img-produto/c3690142089f73bae297f9b2c164e689_cached_thumb_ficha_produto.webp'
    },
    {
        id: 221,
        categoria: 'aquecedores',
        categoriaLabel: 'Aquecedor',
        titulo: 'Aquecedor a gás E10',
        desc: 'O primeiro aquecedor digital de 10 litros por minuto do mercado brasileiro só podia ser da Rinnai!',
        features: ['Filosofia corporativa', 'Missão, visão e valores', 'Código de conduta e ética', 'Qualidade e sustentabilidade'],
        img: 'https://www.rinnai.com.br/content/uploads/img-produto/98e5637fbbd21d8878d7e81d4662d6aa_cached_thumb_ficha_produto.webp'
    },
    {
        id: 222,
        categoria: 'aquecedores',
        categoriaLabel: 'Aquecedor',
        titulo: 'Aquecedor a gás C40',
        desc: 'Tecnologia condensing para alta eficiência no consumo, a mais avançada do mercado brasileiro. No sistema de condensação, o calor da exaustão é redirecionado e reaproveitado.',
        features: ['Tecnologia de Condensação', 'Alta Vazão (Até 4 duchas)', 'Cobre Puro', 'Alta Durabilidade'],
        img: 'https://www.rinnai.com.br/content/uploads/img-produto/3659bbb3deabfc019c99b67e8cb22214_cached_thumb_ficha_produto.webp'
    },
    {
        id: 223,
        categoria: 'caldeiras',
        categoriaLabel: 'Caldeiras',
        titulo: 'Radiador de Aquecimento LUX 350/80 de 10 Elementos',
        desc: 'Radiadores bimetálicos Warma para calefação , calefação de ambientes por radiadores de agua quente. Acesse e veja mais opções...',
        features: ['Compre por telefone 							 							(54) 3699-1500', 'Vendas                                  (54) 99975-9885', 'Horário de atendimento 					Segunda à Sexta das 8h às 18h', 'Aquecedor Solar Tubo a Vácuo'],
        img: 'https://images.tcdn.com.br/img/img_prod/1155289/radiador_de_aquecimento_lux_350_80_de_10_elementos_873_1_36e5301afd115e598f8b40fc6e692468.jpg'
    },
    {
        id: 224,
        categoria: 'caldeiras',
        categoriaLabel: 'Caldeiras',
        titulo: 'Caldeira DC 25S - Geradora de Água Quente à Lenha de Chama Invertida 27 kW',
        desc: 'Caldeira Geradora de Água Quente DC 25 S',
        features: ['Compre por telefone 							 							(54) 3699-1500', 'Vendas                                  (54) 99975-9885', 'Horário de atendimento 					Segunda à Sexta das 8h às 18h', 'Aquecedor Solar Tubo a Vácuo'],
        img: 'https://images.tcdn.com.br/img/img_prod/1155289/caldeira_dc_25s_geradora_de_agua_quente_a_lenha_de_chama_invertida_27_kw_103_1_0f8bc24d71ef989d3fa0e9e73b2656fb.png'
    },
    {
        id: 225,
        categoria: 'bombas',
        categoriaLabel: 'Bombas de Calor',
        titulo: 'Trocador de Calor Placas Brasadas WTC30 com 30 Placas',
        desc: 'O Trocador de Calor de Placas Brasadas WTC 30 30 placas, da marca Warma são  fabricados com uma série de placas corrugadas de aço inox 316 brasadas com cobre...',
        features: ['Compre por telefone 							 							(54) 3699-1500', 'Vendas                                  (54) 99975-9885', 'Horário de atendimento 					Segunda à Sexta das 8h às 18h', 'Aquecedor Solar Tubo a Vácuo'],
        img: 'https://images.tcdn.com.br/img/img_prod/1155289/trocador_de_calor_placas_brasadas_wtc30_com_30_placas_999_1_28cec310c61d88be12dc853bc84d1c90.jpg'
    },
    {
        id: 226,
        categoria: 'bombas',
        categoriaLabel: 'Bombas de Calor',
        titulo: 'Trocador de Calor Placas Brasadas WTC20 com 40 Placas',
        desc: 'O Trocador de Calor de Placas Brasadas WTC 20 40 placas, da marca Warma são  fabricados com uma série de placas corrugadas de aço inox 316 brasadas com cobre...',
        features: ['Compre por telefone 							 							(54) 3699-1500', 'Vendas                                  (54) 99975-9885', 'Horário de atendimento 					Segunda à Sexta das 8h às 18h', 'Aquecedor Solar Tubo a Vácuo'],
        img: 'https://images.tcdn.com.br/img/img_prod/1155289/trocador_de_calor_placas_brasadas_wtc20_com_40_placas_991_1_e529d8a869b97c630b3727b2c3e52036.jpg'
    },
    {
        id: 227,
        categoria: 'bombas',
        categoriaLabel: 'Bombas de Calor',
        titulo: 'Trocador de Calor Placas Brasadas WTC30 com 50 Placas',
        desc: 'Trocador de Calor Placas Brasadas Warma WTC 30 com 50 Placas',
        features: ['Compre por telefone 							 							(54) 3699-1500', 'Vendas                                  (54) 99975-9885', 'Horário de atendimento 					Segunda à Sexta das 8h às 18h', 'Aquecedor Solar Tubo a Vácuo'],
        img: 'https://images.tcdn.com.br/img/img_prod/1155289/trocador_de_calor_placas_brasadas_wtc30_com_50_placas_1017_1_28cec310c61d88be12dc853bc84d1c90.jpg'
    },
    {
        id: 228,
        categoria: 'bombas',
        categoriaLabel: 'Bombas de Calor',
        titulo: 'Trocador de Calor Placas Brasadas WTC30 com 20 Placas',
        desc: 'O Trocador de Calor de Placas Brasadas WTC 30 20 placas, da marca Warma são  fabricados com uma série de placas corrugadas de aço inox 316 brasadas com cobre...',
        features: ['Compre por telefone 							 							(54) 3699-1500', 'Vendas                                  (54) 99975-9885', 'Horário de atendimento 					Segunda à Sexta das 8h às 18h', 'Aquecedor Solar Tubo a Vácuo'],
        img: 'https://images.tcdn.com.br/img/img_prod/1155289/trocador_de_calor_placas_brasadas_wtc30_com_20_placas_997_1_28cec310c61d88be12dc853bc84d1c90.jpg'
    },
    {
        id: 229,
        categoria: 'bombas',
        categoriaLabel: 'Bombas de Calor',
        titulo: 'Trocador de Calor Placas Brasadas WTC26 com 30 Placas',
        desc: 'O Trocador de Calor de Placas Brasadas WTC 26 30 placas, da marca Warma são  fabricados com uma série de placas corrugadas de aço inox 316 brasadas com cobre...',
        features: ['Compre por telefone 							 							(54) 3699-1500', 'Vendas                                  (54) 99975-9885', 'Horário de atendimento 					Segunda à Sexta das 8h às 18h', 'Aquecedor Solar Tubo a Vácuo'],
        img: 'https://images.tcdn.com.br/img/img_prod/1155289/trocador_de_calor_placas_brasadas_wtc26_com_30_placas_995_1_9a0cb8503457364cac37e1ececc0b84e.jpg'
    },
    {
        id: 230,
        categoria: 'bombas',
        categoriaLabel: 'Bombas de Calor',
        titulo: 'Trocador de Calor Placas Brasadas WTC26 com 20 Placas',
        desc: 'O Trocador de Calor de Placas Brasadas WTC 26 20 placas, da marca Warma são  fabricados com uma série de placas corrugadas de aço inox 316 brasadas com cobre...',
        features: ['Compre por telefone 							 							(54) 3699-1500', 'Vendas                                  (54) 99975-9885', 'Horário de atendimento 					Segunda à Sexta das 8h às 18h', 'Aquecedor Solar Tubo a Vácuo'],
        img: 'https://images.tcdn.com.br/img/img_prod/1155289/trocador_de_calor_placas_brasadas_wtc26_com_20_placas_993_1_9a0cb8503457364cac37e1ececc0b84e.jpg'
    },
    {
        id: 231,
        categoria: 'bombas',
        categoriaLabel: 'Bombas de Calor',
        titulo: 'Trocador de Calor Placas Brasadas K070 de 50 Placas',
        desc: 'Trocador de calor Placas Brasadas Kaori K070 aço inox 316L',
        features: ['Compre por telefone 							 							(54) 3699-1500', 'Vendas                                  (54) 99975-9885', 'Horário de atendimento 					Segunda à Sexta das 8h às 18h', 'Aquecedor Solar Tubo a Vácuo'],
        img: 'https://images.tcdn.com.br/img/img_prod/1155289/trocador_de_calor_placas_brasadas_k070_de_50_placas_937_1_21cdd7729f61f496ab08db16125f4bc3.jpg'
    },
    {
        id: 232,
        categoria: 'bombas',
        categoriaLabel: 'Bombas de Calor',
        titulo: 'Trocador de Calor Placas Brasadas K070 de 40 Placas',
        desc: 'Trocador de calor Placas Brasadas Kaori K070 aço inox 316L',
        features: ['Compre por telefone 							 							(54) 3699-1500', 'Vendas                                  (54) 99975-9885', 'Horário de atendimento 					Segunda à Sexta das 8h às 18h', 'Aquecedor Solar Tubo a Vácuo'],
        img: 'https://images.tcdn.com.br/img/img_prod/1155289/trocador_de_calor_placas_brasadas_k070_de_40_placas_935_1_21cdd7729f61f496ab08db16125f4bc3.jpg'
    },
    {
        id: 233,
        categoria: 'bombas',
        categoriaLabel: 'Bombas de Calor',
        titulo: 'Trocador de Calor Placas Brasadas K050 de 40 Placas',
        desc: 'Trocador de Calor Placas Brasadas Inox 316L aço japonês',
        features: ['Compre por telefone 							 							(54) 3699-1500', 'Vendas                                  (54) 99975-9885', 'Horário de atendimento 					Segunda à Sexta das 8h às 18h', 'Aquecedor Solar Tubo a Vácuo'],
        img: 'https://images.tcdn.com.br/img/img_prod/1155289/trocador_de_calor_placas_brasadas_k050_de_40_placas_933_1_c8046dba85061d1f56e80705c41286dd.jpg'
    },
    {
        id: 234,
        categoria: 'bombas',
        categoriaLabel: 'Bombas de Calor',
        titulo: 'Trocador de Calor Placas Brasadas K050 de 30 Placas',
        desc: 'Trocador de Calor Placas Brasadas Inox 316L aço japonês',
        features: ['Compre por telefone 							 							(54) 3699-1500', 'Vendas                                  (54) 99975-9885', 'Horário de atendimento 					Segunda à Sexta das 8h às 18h', 'Aquecedor Solar Tubo a Vácuo'],
        img: 'https://images.tcdn.com.br/img/img_prod/1155289/trocador_de_calor_placas_brasadas_k050_de_30_placas_931_1_c8046dba85061d1f56e80705c41286dd.jpg'
    },
    {
        id: 235,
        categoria: 'bombas',
        categoriaLabel: 'Bombas de Calor',
        titulo: 'Trocador de Calor Placas Brasadas E030 de 30 Placas',
        desc: 'Trocador de calor placas brasadas Kaori série E030 fabricado em aço inox 316L japonês',
        features: ['Compre por telefone 							 							(54) 3699-1500', 'Vendas                                  (54) 99975-9885', 'Horário de atendimento 					Segunda à Sexta das 8h às 18h', 'Aquecedor Solar Tubo a Vácuo'],
        img: 'https://images.tcdn.com.br/img/img_prod/1155289/trocador_de_calor_placas_brasadas_e030_de_30_placas_929_1_b10cc4964104ffb06c25257219300c45.jpg'
    },
    {
        id: 236,
        categoria: 'bombas',
        categoriaLabel: 'Bombas de Calor',
        titulo: 'Trocador de Calor Placas Brasadas E015 de 30 Placas',
        desc: 'Trocador de calor com placas brasadas para aquecimento e resfriamento',
        features: ['Compre por telefone 							 							(54) 3699-1500', 'Vendas                                  (54) 99975-9885', 'Horário de atendimento 					Segunda à Sexta das 8h às 18h', 'Aquecedor Solar Tubo a Vácuo'],
        img: 'https://images.tcdn.com.br/img/img_prod/1155289/trocador_de_calor_placas_brasadas_e015_de_30_placas_927_1_b10cc4964104ffb06c25257219300c45.jpg'
    },
    {
        id: 237,
        categoria: 'caldeiras',
        categoriaLabel: 'Caldeiras',
        titulo: 'Radiador de Aquecimento LUX 200/100 de 10 Elementos',
        desc: 'Radiadores bimetálicos Warma para calefação , calefação de ambientes por radiadores de agua quente. Acesse e veja mais opções...',
        features: ['Compre por telefone 							 							(54) 3699-1500', 'Vendas                                  (54) 99975-9885', 'Horário de atendimento 					Segunda à Sexta das 8h às 18h', 'Aquecedor Solar Tubo a Vácuo'],
        img: 'https://images.tcdn.com.br/img/img_prod/1155289/radiador_de_aquecimento_lux_200_100_de_10_elementos_871_1_7bb049cff1f29717f02e68b63366ed5b.jpg'
    },
    {
        id: 238,
        categoria: 'caldeiras',
        categoriaLabel: 'Caldeiras',
        titulo: 'Radiador de Aquecimento LUX 500/80 de 10 Elementos',
        desc: 'Radiadores bimetálicos Warma para calefação , calefação de ambientes por radiadores de agua quente. Acesse e veja mais opções...',
        features: ['Compre por telefone 							 							(54) 3699-1500', 'Vendas                                  (54) 99975-9885', 'Horário de atendimento 					Segunda à Sexta das 8h às 18h', 'Aquecedor Solar Tubo a Vácuo'],
        img: 'https://images.tcdn.com.br/img/img_prod/1155289/radiador_de_aquecimento_lux_500_80_de_10_elementos_869_1_8b30599d84122121c359ffab0636ae1f.jpg'
    },
    {
        id: 239,
        categoria: 'caldeiras',
        categoriaLabel: 'Caldeiras',
        titulo: 'Caldeira DC 105S - Geradora de Água Quente à Lenha de Chama Invertida 105 kW',
        desc: 'Caldeira Geradora de Água Quente DC 105 para aquecimento de calefação, piso e piscinas. Com chama invertida e de longa duração.',
        features: ['Compre por telefone 							 							(54) 3699-1500', 'Vendas                                  (54) 99975-9885', 'Horário de atendimento 					Segunda à Sexta das 8h às 18h', 'Aquecedor Solar Tubo a Vácuo'],
        img: 'https://images.tcdn.com.br/img/img_prod/1155289/caldeira_dc_105s_geradora_de_agua_quente_a_lenha_de_chama_invertida_105_kw_131_1_fee7cee092cfbc32d6f3ad8d70ed25de.png'
    },
    {
        id: 240,
        categoria: 'caldeiras',
        categoriaLabel: 'Caldeiras',
        titulo: 'Caldeira DC 150S - Geradora de Água Quente à Lenha de Chama Invertida 150 kW',
        desc: 'Caldeira Geradora de Água Quente DC 150 S para piso aquecido, calefação e piscina',
        features: ['Compre por telefone 							 							(54) 3699-1500', 'Vendas                                  (54) 99975-9885', 'Horário de atendimento 					Segunda à Sexta das 8h às 18h', 'Aquecedor Solar Tubo a Vácuo'],
        img: 'https://images.tcdn.com.br/img/img_prod/1155289/caldeira_dc_150s_geradora_de_agua_quente_a_lenha_de_chama_invertida_150_kw_113_1_6af47d30b301a4053a2115c6269a7836.jpg'
    },
    {
        id: 241,
        categoria: 'caldeiras',
        categoriaLabel: 'Caldeiras',
        titulo: 'Caldeira DC 50S - Geradora de Água Quente à Lenha de Chama Invertida 49,9 kW',
        desc: 'Caldeira Geradora de Água Quente  50 S',
        features: ['Compre por telefone 							 							(54) 3699-1500', 'Vendas                                  (54) 99975-9885', 'Horário de atendimento 					Segunda à Sexta das 8h às 18h', 'Aquecedor Solar Tubo a Vácuo'],
        img: 'https://images.tcdn.com.br/img/img_prod/1155289/caldeira_dc_50s_geradora_de_agua_quente_a_lenha_de_chama_invertida_49_9_kw_109_1_0f8bc24d71ef989d3fa0e9e73b2656fb.png'
    },
    {
        id: 242,
        categoria: 'caldeiras',
        categoriaLabel: 'Caldeiras',
        titulo: 'Caldeira DC 32S - Geradora de Água Quente à Lenha de Chama Invertida 35 kW',
        desc: 'Caldeira Geradora de  Água Quente DC 32 S, chama invertida, gaseificação para calefação e piso aquecido',
        features: ['Compre por telefone 							 							(54) 3699-1500', 'Vendas                                  (54) 99975-9885', 'Horário de atendimento 					Segunda à Sexta das 8h às 18h', 'Aquecedor Solar Tubo a Vácuo'],
        img: 'https://images.tcdn.com.br/img/img_prod/1155289/caldeira_dc_32s_geradora_de_agua_quente_a_lenha_de_chama_invertida_35_kw_105_1_0f8bc24d71ef989d3fa0e9e73b2656fb.png'
    },
    {
        id: 243,
        categoria: 'caldeiras',
        categoriaLabel: 'Caldeiras',
        titulo: 'Caldeira DC 70GSX - Geradora de Água Quente à Lenha de Chama Invertida 70 kW',
        desc: 'Caldeira Geradora de Água Quente DC 70S, caldeira a gaseificação da lenha, baixo consumo de lenha, autonomia de dentre 3 a 6 horas por abastecida de lenha; para calefação',
        features: ['Compre por telefone 							 							(54) 3699-1500', 'Vendas                                  (54) 99975-9885', 'Horário de atendimento 					Segunda à Sexta das 8h às 18h', 'Aquecedor Solar Tubo a Vácuo'],
        img: 'https://images.tcdn.com.br/img/img_prod/1155289/caldeira_dc_70gsx_geradora_de_agua_quente_a_lenha_de_chama_invertida_70_kw_111_1_3c3e0153f3dd21f975c7946732990f35.png'
    },
    {
        id: 244,
        categoria: 'caldeiras',
        categoriaLabel: 'Caldeiras',
        titulo: 'Caldeira TIS PRO 11',
        desc: 'A caldeira TIS PRO 11 é um modelo de longa queima, independente de energia, especialmente projetada com preço razoável e qualidade tradicional para atender a...',
        features: ['Compre por telefone 							 							(54) 3699-1500', 'Vendas                                  (54) 99975-9885', 'Horário de atendimento 					Segunda à Sexta das 8h às 18h', 'Aquecedor Solar Tubo a Vácuo'],
        img: 'https://images.tcdn.com.br/img/img_prod/1155289/caldeira_tis_pro_11_1027_1_b8060b2c2cc18a89142ef23396d3196b.png'
    },
    {
        id: 245,
        categoria: 'acessorios',
        categoriaLabel: 'Acessórios',
        titulo: 'SmartPool   A automação de piscina mais completa do mercado',
        desc: 'Com o SmartPool, sua piscina ganha controle inteligente: Wi-Fi integrado, programação automática e gerenciamento total via app.',
        features: ['Basic SmartHeat Painel', 'Termostato (TLZ e TLZ Smart)', 'Trocador de Calor', 'Trocador de Calor X23'],
        img: 'https://tholz.com.br/wp-content/uploads/2025/08/tholz-automacao-iluminacao-aquecimento-tratamento-de-piscina-inteligente-1.webp'
    },
    {
        id: 246,
        categoria: 'acessorios',
        categoriaLabel: 'Acessórios',
        titulo: 'SmartHeat',
        desc: 'Controle seu aquecimento residencial com SmartHeat Tholz. Gerencie 4 sistemas (solar, elétrico, gás, recirc.) via app e assistente de voz.',
        features: ['Basic SmartHeat Painel', 'Termostato (TLZ e TLZ Smart)', 'Trocador de Calor', 'Trocador de Calor X23'],
        img: 'https://tholz.com.br/wp-content/uploads/2025/08/tholz-automacao-iluminacao-aquecimento-tratamento-de-piscina-inteligente-1.webp'
    },
    {
        id: 247,
        categoria: 'acessorios',
        categoriaLabel: 'Acessórios',
        titulo: 'MMZ',
        desc: 'Painel MMZ Tholz: controle inteligente para aquecimento de piscinas com proteção anticongelamento e funções automáticas.',
        features: ['Basic SmartHeat Painel', 'Termostato (TLZ e TLZ Smart)', 'Trocador de Calor', 'Trocador de Calor X23'],
        img: 'https://tholz.com.br/wp-content/uploads/2025/08/tholz-automacao-iluminacao-aquecimento-tratamento-de-piscina-inteligente-1.webp'
    },
    {
        id: 248,
        categoria: 'acessorios',
        categoriaLabel: 'Acessórios',
        titulo: 'TLS e TLS Smart',
        desc: 'Controlador digital TLS Smart - Tholz: conecte-se via Wi-Fi, agende aquecimento da piscina ou boiler e gerencie por app ou voz.',
        features: ['Basic SmartHeat Painel', 'Termostato (TLZ e TLZ Smart)', 'Trocador de Calor', 'Trocador de Calor X23'],
        img: 'https://tholz.com.br/wp-content/uploads/2025/08/tholz-automacao-iluminacao-aquecimento-tratamento-de-piscina-inteligente-1.webp'
    },
    {
        id: 249,
        categoria: 'acessorios',
        categoriaLabel: 'Acessórios',
        titulo: 'Full Gauge Controls',
        desc: 'A Full Gauge Controls desenvolve e produz instrumentos digitais para controle e indicação de temperatura, umidade, tempo, pressão e voltagem.',
        features: ['Aquecimento Solar', 'Microsol BMP Advanced Connect', 'App exclusivo com interface amigável para configuração e diagnóstico do sistema;', 'Design sofisticado e inovador;'],
        img: 'https://http2.mlstatic.com/D_Q_NP_2X_722314-MLA107397238591_022026-E.webp'
    },
    {
        id: 250,
        categoria: 'acessorios',
        categoriaLabel: 'Acessórios',
        titulo: 'Full Gauge Controls',
        desc: 'A Full Gauge Controls desenvolve e produz instrumentos digitais para controle e indicação de temperatura, umidade, tempo, pressão e voltagem.',
        features: ['Aquecimento Solar', 'Microsol BMP Advanced Connect Wi-Fi', 'App exclusivo com interface amigável para configuração e diagnóstico do sistema;', 'Design sofisticado e inovador;'],
        img: 'https://http2.mlstatic.com/D_Q_NP_2X_865431-MLA99857312995_112025-E.webp'
    },
    {
        id: 251,
        categoria: 'bombas_pressurizacao',
        categoriaLabel: 'Bombas d\'Água',
        titulo: 'PRODUTOS',
        desc: 'Fundada em 1988, com sede em Porto Alegre, a Texius vem desenvolvendocom tecnologia própria, uma gama de produtos para aplicações nas áreas industriais, construção civil e conforto residencial. Através de modernas técnicas de engenharia no desenvolvimento e manufatura de seus produtos tem se dest...',
        features: ['texius@texius.com.br', 'Mercado - Aplicações', 'ASSISTÊNCIA TÉCNICA', 'Características Técnicas'],
        img: 'https://www.texius.com.br/admin/files/produto_galeria/produto_galeria09293929012026_1_.png'
    },
    {
        id: 252,
        categoria: 'bombas_pressurizacao',
        categoriaLabel: 'Bombas d\'Água',
        titulo: 'PRODUTOS',
        desc: 'Fundada em 1988, com sede em Porto Alegre, a Texius vem desenvolvendocom tecnologia própria, uma gama de produtos para aplicações nas áreas industriais, construção civil e conforto residencial. Através de modernas técnicas de engenharia no desenvolvimento e manufatura de seus produtos tem se dest...',
        features: ['texius@texius.com.br', 'Mercado - Aplicações', 'ASSISTÊNCIA TÉCNICA', 'Características Técnicas'],
        img: 'https://www.texius.com.br/admin/files/produto_galeria/produto_galeria09343229012026_1_.png'
    },
    {
        id: 253,
        categoria: 'bombas_pressurizacao',
        categoriaLabel: 'Bombas d\'Água',
        titulo: 'PRODUTOS',
        desc: 'Fundada em 1988, com sede em Porto Alegre, a Texius vem desenvolvendocom tecnologia própria, uma gama de produtos para aplicações nas áreas industriais, construção civil e conforto residencial. Através de modernas técnicas de engenharia no desenvolvimento e manufatura de seus produtos tem se dest...',
        features: ['texius@texius.com.br', 'Mercado - Aplicações', 'ASSISTÊNCIA TÉCNICA', 'Características Técnicas'],
        img: 'https://www.texius.com.br/admin/files/produto_galeria/produto_galeria09331129012026_1_.png'
    },
    {
        id: 254,
        categoria: 'bombas_pressurizacao',
        categoriaLabel: 'Bombas d\'Água',
        titulo: 'PRODUTOS',
        desc: 'Fundada em 1988, com sede em Porto Alegre, a Texius vem desenvolvendocom tecnologia própria, uma gama de produtos para aplicações nas áreas industriais, construção civil e conforto residencial. Através de modernas técnicas de engenharia no desenvolvimento e manufatura de seus produtos tem se dest...',
        features: ['texius@texius.com.br', 'Mercado - Aplicações', 'ASSISTÊNCIA TÉCNICA', 'Características Técnicas'],
        img: 'https://www.texius.com.br/admin/files/produto_galeria/produto_galeria09272230102025_1_.png'
    },
    {
        id: 255,
        categoria: 'bombas_pressurizacao',
        categoriaLabel: 'Bombas d\'Água',
        titulo: 'PRODUTOS',
        desc: 'Fundada em 1988, com sede em Porto Alegre, a Texius vem desenvolvendocom tecnologia própria, uma gama de produtos para aplicações nas áreas industriais, construção civil e conforto residencial. Através de modernas técnicas de engenharia no desenvolvimento e manufatura de seus produtos tem se dest...',
        features: ['texius@texius.com.br', 'Mercado - Aplicações', 'ASSISTÊNCIA TÉCNICA', 'CARACTERÍSTICAS TÉCNICAS'],
        img: 'https://www.texius.com.br/admin/files/produto_galeria/produto_galeria11155412042024_1_.png'
    },
    {
        id: 256,
        categoria: 'bombas_pressurizacao',
        categoriaLabel: 'Bombas d\'Água',
        titulo: 'PRODUTOS',
        desc: 'Fundada em 1988, com sede em Porto Alegre, a Texius vem desenvolvendocom tecnologia própria, uma gama de produtos para aplicações nas áreas industriais, construção civil e conforto residencial. Através de modernas técnicas de engenharia no desenvolvimento e manufatura de seus produtos tem se dest...',
        features: ['texius@texius.com.br', 'Mercado - Aplicações', 'ASSISTÊNCIA TÉCNICA', 'CARACTERÍSTICAS TÉCNICAS'],
        img: 'https://www.texius.com.br/admin/files/produto_galeria/produto_galeria15303630072025_1_.jpg'
    },
    {
        id: 257,
        categoria: 'bombas_pressurizacao',
        categoriaLabel: 'Bombas d\'Água',
        titulo: 'PRODUTOS',
        desc: 'Fundada em 1988, com sede em Porto Alegre, a Texius vem desenvolvendocom tecnologia própria, uma gama de produtos para aplicações nas áreas industriais, construção civil e conforto residencial. Através de modernas técnicas de engenharia no desenvolvimento e manufatura de seus produtos tem se dest...',
        features: ['texius@texius.com.br', 'Mercado - Aplicações', 'ASSISTÊNCIA TÉCNICA', 'CARACTERÍSTICAS TÉCNICAS'],
        img: 'https://www.texius.com.br/admin/files/produto_galeria/produto_galeria15350730072025_1_.jpg'
    },
    {
        id: 258,
        categoria: 'bombas_pressurizacao',
        categoriaLabel: 'Bombas d\'Água',
        titulo: 'PRODUTOS',
        desc: 'Fundada em 1988, com sede em Porto Alegre, a Texius vem desenvolvendocom tecnologia própria, uma gama de produtos para aplicações nas áreas industriais, construção civil e conforto residencial. Através de modernas técnicas de engenharia no desenvolvimento e manufatura de seus produtos tem se dest...',
        features: ['texius@texius.com.br', 'Mercado - Aplicações', 'ASSISTÊNCIA TÉCNICA', 'CARACTERÍSTICAS TÉCNICAS'],
        img: 'https://www.texius.com.br/admin/files/produto_galeria/produto_galeria09061911022025_1_.png'
    },
    {
        id: 259,
        categoria: 'bombas_pressurizacao',
        categoriaLabel: 'Bombas d\'Água',
        titulo: 'PRODUTOS',
        desc: 'Fundada em 1988, com sede em Porto Alegre, a Texius vem desenvolvendocom tecnologia própria, uma gama de produtos para aplicações nas áreas industriais, construção civil e conforto residencial. Através de modernas técnicas de engenharia no desenvolvimento e manufatura de seus produtos tem se dest...',
        features: ['texius@texius.com.br', 'Mercado - Aplicações', 'ASSISTÊNCIA TÉCNICA', 'Características Técnicas'],
        img: 'https://www.texius.com.br/admin/files/produto_galeria/produto_galeria10550604072024_1_.png'
    },
    {
        id: 260,
        categoria: 'bombas_pressurizacao',
        categoriaLabel: 'Bombas d\'Água',
        titulo: 'PRODUTOS',
        desc: 'Fundada em 1988, com sede em Porto Alegre, a Texius vem desenvolvendocom tecnologia própria, uma gama de produtos para aplicações nas áreas industriais, construção civil e conforto residencial. Através de modernas técnicas de engenharia no desenvolvimento e manufatura de seus produtos tem se dest...',
        features: ['texius@texius.com.br', 'Mercado - Aplicações', 'ASSISTÊNCIA TÉCNICA', 'CARACTERÍSTICAS TÉCNICAS'],
        img: 'https://www.texius.com.br/admin/files/produto_galeria/produto_galeria11450803122025_1_.jpg'
    },
    {
        id: 261,
        categoria: 'bombas_pressurizacao',
        categoriaLabel: 'Bombas d\'Água',
        titulo: 'PRODUTOS',
        desc: 'Fundada em 1988, com sede em Porto Alegre, a Texius vem desenvolvendocom tecnologia própria, uma gama de produtos para aplicações nas áreas industriais, construção civil e conforto residencial. Através de modernas técnicas de engenharia no desenvolvimento e manufatura de seus produtos tem se dest...',
        features: ['texius@texius.com.br', 'Mercado - Aplicações', 'ASSISTÊNCIA TÉCNICA', 'CARACTERÍSTICAS TÉCNICAS'],
        img: 'https://www.texius.com.br/admin/files/produto_galeria/produto_galeria14464905032025_1_.png'
    },
    {
        id: 262,
        categoria: 'acessorios',
        categoriaLabel: 'Acessórios',
        titulo: 'PRODUTOS',
        desc: 'Fundada em 1988, com sede em Porto Alegre, a Texius vem desenvolvendocom tecnologia própria, uma gama de produtos para aplicações nas áreas industriais, construção civil e conforto residencial. Através de modernas técnicas de engenharia no desenvolvimento e manufatura de seus produtos tem se dest...',
        features: ['texius@texius.com.br', 'Mercado - Aplicações', 'ASSISTÊNCIA TÉCNICA', 'CARACTERÍSTICAS TÉCNICAS'],
        img: 'https://www.texius.com.br/admin/files/produto_galeria/produto_galeria08213128012026_1_.png'
    },
    {
        id: 263,
        categoria: 'bombas_pressurizacao',
        categoriaLabel: 'Bombas d\'Água',
        titulo: 'Produto',
        desc: 'Informações não disponíveis.',
        features: ['Alta Qualidade'],
        img: 'imagens/logo.png'
    },
    {
        id: 264,
        categoria: 'bombas_pressurizacao',
        categoriaLabel: 'Bombas d\'Água',
        titulo: 'Pressurizador MAX PRESS 25E',
        desc: 'Bombas ROWA Brasil - Empresa de fabricação e comércio de bombas Pressurizadores e Eletrobombas Centrífugas de Água, Totalmente Silenciosas',
        features: ['Linha Tradicional Rowa - Pressurização e Circulação', 'Linha RW - Pressurização e Submersíveis', 'Linha Grupos de Pressão', 'Abertos ao público'],
        img: 'https://www.bombasrowa.com.br/static/images/logos/rowa-400-300.jpg'
    },
    {
        id: 265,
        categoria: 'bombas_pressurizacao',
        categoriaLabel: 'Bombas d\'Água',
        titulo: 'Produto',
        desc: 'Informações não disponíveis.',
        features: ['Alta Qualidade'],
        img: 'imagens/logo.png'
    },
    {
        id: 266,
        categoria: 'bombas_pressurizacao',
        categoriaLabel: 'Bombas d\'Água',
        titulo: 'Pressurizador MAX PRESS 200E Trifásico',
        desc: 'Bombas ROWA Brasil - Empresa de fabricação e comércio de bombas Pressurizadores e Eletrobombas Centrífugas de Água, Totalmente Silenciosas',
        features: ['Linha Tradicional Rowa - Pressurização e Circulação', 'Linha RW - Pressurização e Submersíveis', 'Linha Grupos de Pressão', 'Abertos ao público'],
        img: 'https://www.bombasrowa.com.br/static/images/logos/rowa-400-300.jpg'
    },
    {
        id: 267,
        categoria: 'bombas_pressurizacao',
        categoriaLabel: 'Bombas d\'Água',
        titulo: 'Pressurizador MAX PRESS 270E Trifásico',
        desc: 'Bombas ROWA Brasil - Empresa de fabricação e comércio de bombas Pressurizadores e Eletrobombas Centrífugas de Água, Totalmente Silenciosas',
        features: ['Linha Tradicional Rowa - Pressurização e Circulação', 'Linha RW - Pressurização e Submersíveis', 'Linha Grupos de Pressão', 'Abertos ao público'],
        img: 'https://www.bombasrowa.com.br/static/images/logos/rowa-400-300.jpg'
    },
    {
        id: 268,
        categoria: 'bombas_pressurizacao',
        categoriaLabel: 'Bombas d\'Água',
        titulo: 'Pressurizador PRESS 350E Trifásico',
        desc: 'Bombas ROWA Brasil - Empresa de fabricação e comércio de bombas Pressurizadores e Eletrobombas Centrífugas de Água, Totalmente Silenciosas',
        features: ['Linha Tradicional Rowa - Pressurização e Circulação', 'Linha RW - Pressurização e Submersíveis', 'Linha Grupos de Pressão', 'Abertos ao público'],
        img: 'https://www.bombasrowa.com.br/static/images/logos/rowa-400-300.jpg'
    },
    {
        id: 269,
        categoria: 'bombas_pressurizacao',
        categoriaLabel: 'Bombas d\'Água',
        titulo: 'Pressurizador ROWA PRESS 410E Trifásico',
        desc: 'Bombas ROWA Brasil - Empresa de fabricação e comércio de bombas Pressurizadores e Eletrobombas Centrífugas de Água, Totalmente Silenciosas',
        features: ['Linha Tradicional Rowa - Pressurização e Circulação', 'Linha RW - Pressurização e Submersíveis', 'Linha Grupos de Pressão', 'Abertos ao público'],
        img: 'https://www.bombasrowa.com.br/static/images/logos/rowa-400-300.jpg'
    },
    {
        id: 270,
        categoria: 'bombas_pressurizacao',
        categoriaLabel: 'Bombas d\'Água',
        titulo: 'Pressurizador MAX PRESS 270VF Mono',
        desc: 'Bombas ROWA Brasil - Empresa de fabricação e comércio de bombas Pressurizadores e Eletrobombas Centrífugas de Água, Totalmente Silenciosas',
        features: ['Linha Tradicional Rowa - Pressurização e Circulação', 'Linha RW - Pressurização e Submersíveis', 'Linha Grupos de Pressão', 'Abertos ao público'],
        img: 'https://www.bombasrowa.com.br/static/images/logos/rowa-400-300.jpg'
    },
    {
        id: 271,
        categoria: 'bombas_pressurizacao',
        categoriaLabel: 'Bombas d\'Água',
        titulo: 'Pressurizador MAX PRESS 30MVF',
        desc: 'Bombas ROWA Brasil - Empresa de fabricação e comércio de bombas Pressurizadores e Eletrobombas Centrífugas de Água, Totalmente Silenciosas',
        features: ['Linha Tradicional Rowa - Pressurização e Circulação', 'Linha RW - Pressurização e Submersíveis', 'Linha Grupos de Pressão', 'Abertos ao público'],
        img: 'https://www.bombasrowa.com.br/static/images/logos/rowa-400-300.jpg'
    },
    {
        id: 272,
        categoria: 'bombas_pressurizacao',
        categoriaLabel: 'Bombas d\'Água',
        titulo: 'Pressurizador MAX PRESS 30VF',
        desc: 'Bombas ROWA Brasil - Empresa de fabricação e comércio de bombas Pressurizadores e Eletrobombas Centrífugas de Água, Totalmente Silenciosas',
        features: ['Linha Tradicional Rowa - Pressurização e Circulação', 'Linha RW - Pressurização e Submersíveis', 'Linha Grupos de Pressão', 'Abertos ao público'],
        img: 'https://www.bombasrowa.com.br/static/images/logos/rowa-400-300.jpg'
    },
    {
        id: 273,
        categoria: 'bombas_pressurizacao',
        categoriaLabel: 'Bombas d\'Água',
        titulo: 'Pressurizador MAX PRESS 360VF - Mono 220V',
        desc: 'Bombas ROWA Brasil - Empresa de fabricação e comércio de bombas Pressurizadores e Eletrobombas Centrífugas de Água, Totalmente Silenciosas',
        features: ['Linha Tradicional Rowa - Pressurização e Circulação', 'Linha RW - Pressurização e Submersíveis', 'Linha Grupos de Pressão', 'Abertos ao público'],
        img: 'https://www.bombasrowa.com.br/static/images/logos/rowa-400-300.jpg'
    },
    {
        id: 274,
        categoria: 'bombas_pressurizacao',
        categoriaLabel: 'Bombas d\'Água',
        titulo: 'Pressurizador MAX PRESS 40VF',
        desc: 'Bombas ROWA Brasil - Empresa de fabricação e comércio de bombas Pressurizadores e Eletrobombas Centrífugas de Água, Totalmente Silenciosas',
        features: ['Linha Tradicional Rowa - Pressurização e Circulação', 'Linha RW - Pressurização e Submersíveis', 'Linha Grupos de Pressão', 'Abertos ao público'],
        img: 'https://www.bombasrowa.com.br/static/images/logos/rowa-400-300.jpg'
    },
    {
        id: 275,
        categoria: 'bombas_pressurizacao',
        categoriaLabel: 'Bombas d\'Água',
        titulo: 'Pressurizador ROWA PRESS 410VF COMPACT Trifásico',
        desc: 'Bombas ROWA Brasil - Empresa de fabricação e comércio de bombas Pressurizadores e Eletrobombas Centrífugas de Água, Totalmente Silenciosas',
        features: ['Linha Tradicional Rowa - Pressurização e Circulação', 'Linha RW - Pressurização e Submersíveis', 'Linha Grupos de Pressão', 'Abertos ao público'],
        img: 'https://www.bombasrowa.com.br/static/images/logos/rowa-400-300.jpg'
    },
    {
        id: 276,
        categoria: 'bombas_pressurizacao',
        categoriaLabel: 'Bombas d\'Água',
        titulo: 'Pressurizador ROWA PRESS 510VF',
        desc: 'Bombas ROWA Brasil - Empresa de fabricação e comércio de bombas Pressurizadores e Eletrobombas Centrífugas de Água, Totalmente Silenciosas',
        features: ['Linha Tradicional Rowa - Pressurização e Circulação', 'Linha RW - Pressurização e Submersíveis', 'Linha Grupos de Pressão', 'Abertos ao público'],
        img: 'https://www.bombasrowa.com.br/static/images/logos/rowa-400-300.jpg'
    },
    {
        id: 277,
        categoria: 'bombas_pressurizacao',
        categoriaLabel: 'Bombas d\'Água',
        titulo: 'Sistema de Pressurização MODULAR PRESS 270VF - Mono 220V',
        desc: 'Bombas ROWA Brasil - Empresa de fabricação e comércio de bombas Pressurizadores e Eletrobombas Centrífugas de Água, Totalmente Silenciosas',
        features: ['Linha Tradicional Rowa - Pressurização e Circulação', 'Linha RW - Pressurização e Submersíveis', 'Linha Grupos de Pressão', 'Abertos ao público'],
        img: 'https://www.bombasrowa.com.br/static/images/logos/rowa-400-300.jpg'
    },
    {
        id: 278,
        categoria: 'bombas_pressurizacao',
        categoriaLabel: 'Bombas d\'Água',
        titulo: 'Sistema de Pressurização MODULAR PRESS 30MVF',
        desc: 'Bombas ROWA Brasil - Empresa de fabricação e comércio de bombas Pressurizadores e Eletrobombas Centrífugas de Água, Totalmente Silenciosas',
        features: ['Linha Tradicional Rowa - Pressurização e Circulação', 'Linha RW - Pressurização e Submersíveis', 'Linha Grupos de Pressão', 'Abertos ao público'],
        img: 'https://www.bombasrowa.com.br/static/images/logos/rowa-400-300.jpg'
    },
    {
        id: 279,
        categoria: 'bombas_pressurizacao',
        categoriaLabel: 'Bombas d\'Água',
        titulo: 'Sistema de Pressurização MODULAR PRESS 30VF - Mono 220V',
        desc: 'Bombas ROWA Brasil - Empresa de fabricação e comércio de bombas Pressurizadores e Eletrobombas Centrífugas de Água, Totalmente Silenciosas',
        features: ['Linha Tradicional Rowa - Pressurização e Circulação', 'Linha RW - Pressurização e Submersíveis', 'Linha Grupos de Pressão', 'Abertos ao público'],
        img: 'https://www.bombasrowa.com.br/static/images/logos/rowa-400-300.jpg'
    },
    {
        id: 280,
        categoria: 'bombas_pressurizacao',
        categoriaLabel: 'Bombas d\'Água',
        titulo: 'Sistema de Pressurização MODULAR PRESS 360VF - Mono 220V',
        desc: 'Bombas ROWA Brasil - Empresa de fabricação e comércio de bombas Pressurizadores e Eletrobombas Centrífugas de Água, Totalmente Silenciosas',
        features: ['Linha Tradicional Rowa - Pressurização e Circulação', 'Linha RW - Pressurização e Submersíveis', 'Linha Grupos de Pressão', 'Abertos ao público'],
        img: 'https://www.bombasrowa.com.br/static/images/logos/rowa-400-300.jpg'
    },
    {
        id: 281,
        categoria: 'bombas_pressurizacao',
        categoriaLabel: 'Bombas d\'Água',
        titulo: 'Sistema de Pressurização MODULAR PRESS 40VF - Mono 220V',
        desc: 'Bombas ROWA Brasil - Empresa de fabricação e comércio de bombas Pressurizadores e Eletrobombas Centrífugas de Água, Totalmente Silenciosas',
        features: ['Linha Tradicional Rowa - Pressurização e Circulação', 'Linha RW - Pressurização e Submersíveis', 'Linha Grupos de Pressão', 'Abertos ao público'],
        img: 'https://www.bombasrowa.com.br/static/images/logos/rowa-400-300.jpg'
    },
    {
        id: 282,
        categoria: 'bombas_pressurizacao',
        categoriaLabel: 'Bombas d\'Água',
        titulo: 'Sistema de Pressurização MODULAR PRESS 410VF - Trifásico',
        desc: 'Bombas ROWA Brasil - Empresa de fabricação e comércio de bombas Pressurizadores e Eletrobombas Centrífugas de Água, Totalmente Silenciosas',
        features: ['Linha Tradicional Rowa - Pressurização e Circulação', 'Linha RW - Pressurização e Submersíveis', 'Linha Grupos de Pressão', 'Abertos ao público'],
        img: 'https://www.bombasrowa.com.br/static/images/logos/rowa-400-300.jpg'
    },
    {
        id: 283,
        categoria: 'bombas_pressurizacao',
        categoriaLabel: 'Bombas d\'Água',
        titulo: 'Sistema de Pressurização MODULAR PRESS 510VF - Trifásico',
        desc: 'Bombas ROWA Brasil - Empresa de fabricação e comércio de bombas Pressurizadores e Eletrobombas Centrífugas de Água, Totalmente Silenciosas',
        features: ['Linha Tradicional Rowa - Pressurização e Circulação', 'Linha RW - Pressurização e Submersíveis', 'Linha Grupos de Pressão', 'Abertos ao público'],
        img: 'https://www.bombasrowa.com.br/static/images/logos/rowa-400-300.jpg'
    },
    {
        id: 284,
        categoria: 'bombas_pressurizacao',
        categoriaLabel: 'Bombas d\'Água',
        titulo: 'Sistema de Pressurização MODULAR TRIO 270VF - Mono 220V',
        desc: 'Bombas ROWA Brasil - Empresa de fabricação e comércio de bombas Pressurizadores e Eletrobombas Centrífugas de Água, Totalmente Silenciosas',
        features: ['Linha Tradicional Rowa - Pressurização e Circulação', 'Linha RW - Pressurização e Submersíveis', 'Linha Grupos de Pressão', 'Abertos ao público'],
        img: 'https://www.bombasrowa.com.br/static/images/logos/rowa-400-300.jpg'
    },
    {
        id: 285,
        categoria: 'bombas_pressurizacao',
        categoriaLabel: 'Bombas d\'Água',
        titulo: 'Sistema de Pressurização MODULAR TRIO 360VF - Mono 220V',
        desc: 'Bombas ROWA Brasil - Empresa de fabricação e comércio de bombas Pressurizadores e Eletrobombas Centrífugas de Água, Totalmente Silenciosas',
        features: ['Linha Tradicional Rowa - Pressurização e Circulação', 'Linha RW - Pressurização e Submersíveis', 'Linha Grupos de Pressão', 'Abertos ao público'],
        img: 'https://www.bombasrowa.com.br/static/images/logos/rowa-400-300.jpg'
    },
    {
        id: 286,
        categoria: 'bombas_pressurizacao',
        categoriaLabel: 'Bombas d\'Água',
        titulo: 'Sistema de Pressurização MODULAR TRIO 410VF Trifásico',
        desc: 'Bombas ROWA Brasil - Empresa de fabricação e comércio de bombas Pressurizadores e Eletrobombas Centrífugas de Água, Totalmente Silenciosas',
        features: ['Linha Tradicional Rowa - Pressurização e Circulação', 'Linha RW - Pressurização e Submersíveis', 'Linha Grupos de Pressão', 'Abertos ao público'],
        img: 'https://www.bombasrowa.com.br/static/images/logos/rowa-400-300.jpg'
    },
    {
        id: 287,
        categoria: 'bombas_pressurizacao',
        categoriaLabel: 'Bombas d\'Água',
        titulo: 'Sistema de Pressurização MODULAR TRIO 510VF Trifásico',
        desc: 'Bombas ROWA Brasil - Empresa de fabricação e comércio de bombas Pressurizadores e Eletrobombas Centrífugas de Água, Totalmente Silenciosas',
        features: ['Linha Tradicional Rowa - Pressurização e Circulação', 'Linha RW - Pressurização e Submersíveis', 'Linha Grupos de Pressão', 'Abertos ao público'],
        img: 'https://www.bombasrowa.com.br/static/images/logos/rowa-400-300.jpg'
    },
    {
        id: 288,
        categoria: 'bombas_pressurizacao',
        categoriaLabel: 'Bombas d\'Água',
        titulo: 'Sistema de Pressurização Rowa Tandem MAX PRESS 200E',
        desc: 'Bombas ROWA Brasil - Empresa de fabricação e comércio de bombas Pressurizadores e Eletrobombas Centrífugas de Água, Totalmente Silenciosas',
        features: ['Linha Tradicional Rowa - Pressurização e Circulação', 'Linha RW - Pressurização e Submersíveis', 'Linha Grupos de Pressão', 'Abertos ao público'],
        img: 'https://www.bombasrowa.com.br/static/images/logos/rowa-400-300.jpg'
    },
    {
        id: 289,
        categoria: 'bombas_pressurizacao',
        categoriaLabel: 'Bombas d\'Água',
        titulo: 'Sistema de Pressurização Rowa Tandem MAX PRESS 20E',
        desc: 'Bombas ROWA Brasil - Empresa de fabricação e comércio de bombas Pressurizadores e Eletrobombas Centrífugas de Água, Totalmente Silenciosas',
        features: ['Linha Tradicional Rowa - Pressurização e Circulação', 'Linha RW - Pressurização e Submersíveis', 'Linha Grupos de Pressão', 'Abertos ao público'],
        img: 'https://www.bombasrowa.com.br/static/images/logos/rowa-400-300.jpg'
    },
    {
        id: 290,
        categoria: 'bombas_pressurizacao',
        categoriaLabel: 'Bombas d\'Água',
        titulo: 'Sistema de Pressurização Rowa Tandem MAX PRESS 270E',
        desc: 'Bombas ROWA Brasil - Empresa de fabricação e comércio de bombas Pressurizadores e Eletrobombas Centrífugas de Água, Totalmente Silenciosas',
        features: ['Linha Tradicional Rowa - Pressurização e Circulação', 'Linha RW - Pressurização e Submersíveis', 'Linha Grupos de Pressão', 'Abertos ao público'],
        img: 'https://www.bombasrowa.com.br/static/images/logos/rowa-400-300.jpg'
    },
    {
        id: 291,
        categoria: 'bombas_pressurizacao',
        categoriaLabel: 'Bombas d\'Água',
        titulo: 'Sistema de Pressurização Rowa Tandem MAX PRESS 30E',
        desc: 'Bombas ROWA Brasil - Empresa de fabricação e comércio de bombas Pressurizadores e Eletrobombas Centrífugas de Água, Totalmente Silenciosas',
        features: ['Linha Tradicional Rowa - Pressurização e Circulação', 'Linha RW - Pressurização e Submersíveis', 'Linha Grupos de Pressão', 'Abertos ao público'],
        img: 'https://www.bombasrowa.com.br/static/images/logos/rowa-400-300.jpg'
    },
    {
        id: 292,
        categoria: 'bombas_pressurizacao',
        categoriaLabel: 'Bombas d\'Água',
        titulo: 'Sistema de Pressurização Rowa Tandem PRESS 350E',
        desc: 'Bombas ROWA Brasil - Empresa de fabricação e comércio de bombas Pressurizadores e Eletrobombas Centrífugas de Água, Totalmente Silenciosas',
        features: ['Linha Tradicional Rowa - Pressurização e Circulação', 'Linha RW - Pressurização e Submersíveis', 'Linha Grupos de Pressão', 'Abertos ao público'],
        img: 'https://www.bombasrowa.com.br/static/images/logos/rowa-400-300.jpg'
    },
    {
        id: 293,
        categoria: 'bombas_pressurizacao',
        categoriaLabel: 'Bombas d\'Água',
        titulo: 'Bomba Circuladora 12/1 S',
        desc: 'Bombas ROWA Brasil - Empresa de fabricação e comércio de bombas Pressurizadores e Eletrobombas Centrífugas de Água, Totalmente Silenciosas',
        features: ['Linha Tradicional Rowa - Pressurização e Circulação', 'Linha RW - Pressurização e Submersíveis', 'Linha Grupos de Pressão', 'Abertos ao público'],
        img: 'https://www.bombasrowa.com.br/static/images/logos/rowa-400-300.jpg'
    },
    {
        id: 294,
        categoria: 'bombas_pressurizacao',
        categoriaLabel: 'Bombas d\'Água',
        titulo: 'Bomba Circuladora 20/1 S',
        desc: 'Bombas ROWA Brasil - Empresa de fabricação e comércio de bombas Pressurizadores e Eletrobombas Centrífugas de Água, Totalmente Silenciosas',
        features: ['Linha Tradicional Rowa - Pressurização e Circulação', 'Linha RW - Pressurização e Submersíveis', 'Linha Grupos de Pressão', 'Abertos ao público'],
        img: 'https://www.bombasrowa.com.br/static/images/logos/rowa-400-300.jpg'
    },
    {
        id: 295,
        categoria: 'bombas_pressurizacao',
        categoriaLabel: 'Bombas d\'Água',
        titulo: 'Bomba Circuladora MAX 26',
        desc: 'Bombas ROWA Brasil - Empresa de fabricação e comércio de bombas Pressurizadores e Eletrobombas Centrífugas de Água, Totalmente Silenciosas',
        features: ['Linha Tradicional Rowa - Pressurização e Circulação', 'Linha RW - Pressurização e Submersíveis', 'Linha Grupos de Pressão', 'Abertos ao público'],
        img: 'https://www.bombasrowa.com.br/static/images/logos/rowa-400-300.jpg'
    },
    {
        id: 296,
        categoria: 'bombas_pressurizacao',
        categoriaLabel: 'Bombas d\'Água',
        titulo: 'Bomba Circuladora MAX 22',
        desc: 'Bombas ROWA Brasil - Empresa de fabricação e comércio de bombas Pressurizadores e Eletrobombas Centrífugas de Água, Totalmente Silenciosas',
        features: ['Linha Tradicional Rowa - Pressurização e Circulação', 'Linha RW - Pressurização e Submersíveis', 'Linha Grupos de Pressão', 'Abertos ao público'],
        img: 'https://www.bombasrowa.com.br/static/images/logos/rowa-400-300.jpg'
    },
    {
        id: 297,
        categoria: 'bombas_pressurizacao',
        categoriaLabel: 'Bombas d\'Água',
        titulo: 'Bomba Circuladora RW S150',
        desc: 'Bombas ROWA Brasil - Empresa de fabricação e comércio de bombas Pressurizadores e Eletrobombas Centrífugas de Água, Totalmente Silenciosas',
        features: ['Linha Tradicional Rowa - Pressurização e Circulação', 'Linha RW - Pressurização e Submersíveis', 'Linha Grupos de Pressão', 'Abertos ao público'],
        img: 'https://www.bombasrowa.com.br/static/images/logos/rowa-400-300.jpg'
    },
    {
        id: 298,
        categoria: 'bombas_pressurizacao',
        categoriaLabel: 'Bombas d\'Água',
        titulo: 'Bomba Circuladora RW S50',
        desc: 'Bombas ROWA Brasil - Empresa de fabricação e comércio de bombas Pressurizadores e Eletrobombas Centrífugas de Água, Totalmente Silenciosas',
        features: ['Linha Tradicional Rowa - Pressurização e Circulação', 'Linha RW - Pressurização e Submersíveis', 'Linha Grupos de Pressão', 'Abertos ao público'],
        img: 'https://www.bombasrowa.com.br/static/images/logos/rowa-400-300.jpg'
    },
    {
        id: 299,
        categoria: 'bombas_pressurizacao',
        categoriaLabel: 'Bombas d\'Água',
        titulo: 'Pressurizador Inverter 30-4',
        desc: 'Bombas ROWA Brasil - Empresa de fabricação e comércio de bombas Pressurizadores e Eletrobombas Centrífugas de Água, Totalmente Silenciosas',
        features: ['Linha Tradicional Rowa - Pressurização e Circulação', 'Linha RW - Pressurização e Submersíveis', 'Linha Grupos de Pressão', 'Abertos ao público'],
        img: 'https://www.bombasrowa.com.br/static/images/logos/rowa-400-300.jpg'
    },
    {
        id: 300,
        categoria: 'bombas_pressurizacao',
        categoriaLabel: 'Bombas d\'Água',
        titulo: 'Pressurizador Inverter 40-5',
        desc: 'Bombas ROWA Brasil - Empresa de fabricação e comércio de bombas Pressurizadores e Eletrobombas Centrífugas de Água, Totalmente Silenciosas',
        features: ['Linha Tradicional Rowa - Pressurização e Circulação', 'Linha RW - Pressurização e Submersíveis', 'Linha Grupos de Pressão', 'Abertos ao público'],
        img: 'https://www.bombasrowa.com.br/static/images/logos/rowa-400-300.jpg'
    },
    {
        id: 301,
        categoria: 'bombas_pressurizacao',
        categoriaLabel: 'Bombas d\'Água',
        titulo: 'Bomba de Água Aquaflow',
        desc: 'A Bomba Aquaflow é Ideal para quem procura qualidade e confiabilidade no seu sistema de recirculação de água de piscina.',
        features: ['Universidade Komeco', 'Seja Credenciado', 'Assistência Técnica', 'Solicite Sua Peça'],
        img: 'https://www.komeco.com.br/wp-content/uploads/2024/03/img-destacada-bomba-de-piscina-aquaflow-komeco-1000X1000-v2.png'
    },
    {
        id: 302,
        categoria: 'acessorios',
        categoriaLabel: 'Acessórios',
        titulo: 'Central Inteligente Para Piscina',
        desc: 'A Central Inteligente Para Piscina da Komeco tem capacidade de desempenhar até cinco funções em um único equipamento.',
        features: ['Universidade Komeco', 'Seja Credenciado', 'Assistência Técnica', 'Solicite Sua Peça'],
        img: 'https://www.komeco.com.br/wp-content/uploads/2024/08/img-destacada-central-inteligente-de-piscina-komeco-1000X1000.png'
    },
    {
        id: 303,
        categoria: 'bombas',
        categoriaLabel: 'Bombas de Calor',
        titulo: 'Bomba de Calor Comercial 175 G1',
        desc: 'A Bomba de Calor Comercial 175 G1 comercial é perfeita para piscinas de grandes portes como hotéis, academias, clubes e resorts.',
        features: ['Universidade Komeco', 'Seja Credenciado', 'Assistência Técnica', 'Solicite Sua Peça'],
        img: 'https://www.komeco.com.br/wp-content/uploads/2024/08/img-destacada-bomba-de-calor-full-inverter-comercial-175-komeco-1000X1000-01.png'
    },
    {
        id: 304,
        categoria: 'bombas',
        categoriaLabel: 'Bombas de Calor',
        titulo: 'Bomba de Calor Comercial 265 G1',
        desc: 'A Bomba de Calor Comercial 265 G1 comercial é perfeita para piscinas de grandes portes como hotéis, academias, clubes e resorts.',
        features: ['Universidade Komeco', 'Seja Credenciado', 'Assistência Técnica', 'Solicite Sua Peça'],
        img: 'https://www.komeco.com.br/wp-content/uploads/2024/08/img-destacada-bomba-de-calor-comercial-abs-265-komeco-1000X1000-01.png'
    },
    {
        id: 305,
        categoria: 'bombas',
        categoriaLabel: 'Bombas de Calor',
        titulo: 'Bomba de Calor Full Inverter',
        desc: 'Bomba de Calor Full Inverter Komeco é perfeita para sua piscina e quem não tem espaço no telhado para um sistema de aquecimento solar de água.',
        features: ['Universidade Komeco', 'Seja Credenciado', 'Assistência Técnica', 'Solicite Sua Peça'],
        img: 'https://www.komeco.com.br/wp-content/uploads/2023/04/img-destacada-produto-bomba-de-calor-komeco.png'
    },
    {
        id: 306,
        categoria: 'bombas',
        categoriaLabel: 'Bombas de Calor',
        titulo: 'Bomba de Calor Para Aquecimento Central',
        desc: 'Bomba de Calor para Aquecimento Central da Komeco é um sistema avançado que combina aquecimento, resfriamento e fornecimento de água quente.',
        features: ['Universidade Komeco', 'Seja Credenciado', 'Assistência Técnica', 'Solicite Sua Peça'],
        img: 'https://www.komeco.com.br/wp-content/uploads/2024/09/img-destacada-bomba-de-calor-para-aquecimento-central-komeco-1000X1000-120924-01.png'
    },
    {
        id: 307,
        categoria: 'aquecedores',
        categoriaLabel: 'Aquecedor',
        titulo: 'Aquecedor a Gás KO 26BK Decor',
        desc: 'Aquecedor a Gás KO 26BK Decor, versão 26 litros, cor preta, uma combinação perfeita que une beleza, qualidade e eficiência.',
        features: ['Universidade Komeco', 'Seja Credenciado', 'Assistência Técnica', 'Solicite Sua Peça'],
        img: 'https://www.komeco.com.br/wp-content/uploads/2025/01/img-destacada-produto-aquecedor-gas-decor-26bk-litros-komeco-v7.png'
    },
    {
        id: 308,
        categoria: 'aquecedores',
        categoriaLabel: 'Aquecedor',
        titulo: 'Aquecedor a Gás KO 21BK Decor',
        desc: 'Aquecedor a Gás KO 21BK Decor, versão 21 litros, cor preta, uma combinação perfeita que une beleza, qualidade e eficiência.',
        features: ['Universidade Komeco', 'Seja Credenciado', 'Assistência Técnica', 'Solicite Sua Peça'],
        img: 'https://www.komeco.com.br/wp-content/uploads/2025/01/img-destacada-produto-aquecedor-gas-decor-bk-02.png'
    },
    {
        id: 309,
        categoria: 'aquecedores',
        categoriaLabel: 'Aquecedor',
        titulo: 'Aquecedor a Gás KO 16BK Decor',
        desc: 'Aquecedor a Gás KO 16BK Decor, versão 16 litros, cor preta, uma combinação perfeita que une beleza, qualidade e eficiência.',
        features: ['Universidade Komeco', 'Seja Credenciado', 'Assistência Técnica', 'Solicite Sua Peça'],
        img: 'https://www.komeco.com.br/wp-content/uploads/2025/01/img-destacada-produto-aquecedor-gas-decor-bk-02.png'
    },
    {
        id: 310,
        categoria: 'aquecedores',
        categoriaLabel: 'Aquecedor',
        titulo: 'Aquecedor a Gás KO 26WH Decor',
        desc: 'Aquecedor a Gás KO 26WH Decor, versão 26 litros, cor branca, uma combinação perfeita que une beleza, qualidade e eficiência.',
        features: ['Universidade Komeco', 'Seja Credenciado', 'Assistência Técnica', 'Solicite Sua Peça'],
        img: 'https://www.komeco.com.br/wp-content/uploads/2025/01/img-destacada-produto-aquecedor-gas-decor-26wh-litros-komeco-03.png'
    },
    {
        id: 311,
        categoria: 'aquecedores',
        categoriaLabel: 'Aquecedor',
        titulo: 'Aquecedor a Gás KO 21WH Decor',
        desc: 'Aquecedor a Gás KO 21WH Decor, versão 21 litros, cor branca, uma combinação perfeita que une beleza, qualidade e eficiência.',
        features: ['Universidade Komeco', 'Seja Credenciado', 'Assistência Técnica', 'Solicite Sua Peça'],
        img: 'https://www.komeco.com.br/wp-content/uploads/2023/04/img-destacada-produto-aquecedor-gas-decor-wh.png'
    },
    {
        id: 312,
        categoria: 'aquecedores',
        categoriaLabel: 'Aquecedor',
        titulo: 'Aquecedor a Gás KO 16WH Decor',
        desc: 'Aquecedor a Gás KO 16WH Decor, versão 16 litros, cor branca, uma combinação perfeita que une beleza, qualidade e eficiência.',
        features: ['Universidade Komeco', 'Seja Credenciado', 'Assistência Técnica', 'Solicite Sua Peça'],
        img: 'https://www.komeco.com.br/wp-content/uploads/2023/04/img-destacada-produto-aquecedor-gas-decor-wh.png'
    },
    {
        id: 313,
        categoria: 'aquecedores',
        categoriaLabel: 'Aquecedor',
        titulo: 'Aquecedor a Gás KO 26SL Decor',
        desc: 'Aquecedor a Gás KO 26SL Decor, versão 26 litros, cor cinza, uma combinação perfeita que une beleza, qualidade e eficiência.',
        features: ['Universidade Komeco', 'Seja Credenciado', 'Assistência Técnica', 'Solicite Sua Peça'],
        img: 'https://www.komeco.com.br/wp-content/uploads/2025/01/img-destacada-produto-aquecedor-gas-decor-26sl-litros-komeco-02.png'
    },
    {
        id: 314,
        categoria: 'aquecedores',
        categoriaLabel: 'Aquecedor',
        titulo: 'Aquecedor a Gás KO 21SL Decor',
        desc: 'Aquecedor a Gás KO 21SL Decor, versão 21 litros, cor cinza, uma combinação perfeita que une beleza, qualidade e eficiência.',
        features: ['Universidade Komeco', 'Seja Credenciado', 'Assistência Técnica', 'Solicite Sua Peça'],
        img: 'https://www.komeco.com.br/wp-content/uploads/2023/07/img-destacada-produto-aquecedor-gas-decor-sl-1000x1000-03.png'
    },
    {
        id: 315,
        categoria: 'aquecedores',
        categoriaLabel: 'Aquecedor',
        titulo: 'Aquecedor a Gás KO 16SL Decor',
        desc: 'Aquecedor a Gás KO 16SL Decor, versão 16 litros, cor cinza, uma combinação perfeita que une beleza, qualidade e eficiência.',
        features: ['Universidade Komeco', 'Seja Credenciado', 'Assistência Técnica', 'Solicite Sua Peça'],
        img: 'https://www.komeco.com.br/wp-content/uploads/2023/07/img-destacada-produto-aquecedor-gas-decor-sl-1000x1000-03.png'
    },
    {
        id: 316,
        categoria: 'aquecedores',
        categoriaLabel: 'Aquecedor',
        titulo: 'Aquecedor a Gás KO 36DI Digital',
        desc: 'Aquecedor a Gás KO 36DI Digital 2024, versão 36 litros, cor inox, é conforto, tecnologia e banho quente todos os dias. Novo design.',
        features: ['Universidade Komeco', 'Seja Credenciado', 'Assistência Técnica', 'Solicite Sua Peça'],
        img: 'https://www.komeco.com.br/wp-content/uploads/2024/08/img-destacada-produto-aquecedor-gas-digital-di-2024-komeco-1000x1000px-05.png'
    },
    {
        id: 317,
        categoria: 'aquecedores',
        categoriaLabel: 'Aquecedor',
        titulo: 'Aquecedor a Gás KO 26DI Digital 2024',
        desc: 'Aquecedor a Gás KO 26DI Digital 2024, versão 26 litros, cor inox, é conforto, tecnologia e banho quente todos os dias. Novo design.',
        features: ['Universidade Komeco', 'Seja Credenciado', 'Assistência Técnica', 'Solicite Sua Peça'],
        img: 'https://www.komeco.com.br/wp-content/uploads/2024/08/img-destacada-produto-aquecedor-gas-digital-di-2024-komeco-1000x1000px-05.png'
    },
    {
        id: 318,
        categoria: 'aquecedores',
        categoriaLabel: 'Aquecedor',
        titulo: 'Aquecedor a Gás KO 21DI Digital',
        desc: 'Aquecedor a Gás KO 21DI Digital, versão 21 litros, cor inox, é conforto, tecnologia e banho quente todos os dias. Novo design.',
        features: ['Universidade Komeco', 'Seja Credenciado', 'Assistência Técnica', 'Solicite Sua Peça'],
        img: 'https://www.komeco.com.br/wp-content/uploads/2024/08/img-destacada-produto-aquecedor-gas-digital-di-2024-komeco-1000x1000px-05.png'
    },
    {
        id: 319,
        categoria: 'aquecedores',
        categoriaLabel: 'Aquecedor',
        titulo: 'Aquecedor a Gás KO 16DI Digital',
        desc: 'Aquecedor a Gás KO 16DI Digital, versão 16 litros, cor inox, é conforto, tecnologia e banho quente todos os dias. Novo design.',
        features: ['Universidade Komeco', 'Seja Credenciado', 'Assistência Técnica', 'Solicite Sua Peça'],
        img: 'https://www.komeco.com.br/wp-content/uploads/2024/08/img-destacada-produto-aquecedor-gas-digital-di-2024-komeco-1000x1000px-05.png'
    },
    {
        id: 320,
        categoria: 'aquecedores',
        categoriaLabel: 'Aquecedor',
        titulo: 'Aquecedor a Gás Externo KO EX',
        desc: 'Aquecedor a Gás Externo KO EX da Komeco é o único do Brasil feito exclusivamente para o exterior da edificação, mais conforto com inovação.',
        features: ['Universidade Komeco', 'Seja Credenciado', 'Assistência Técnica', 'Solicite Sua Peça'],
        img: 'https://www.komeco.com.br/wp-content/uploads/2023/04/img-destacada-produto-aquecedor-gas-ex-komeco.png'
    },
    {
        id: 321,
        categoria: 'aquecedores',
        categoriaLabel: 'Aquecedor',
        titulo: 'Aquecedor a Gás KO 26BK Home',
        desc: 'Aquecedor a Gás KO 26BK Home, versão 26 litros, cor preto, é qualidade, eficiência e o melhor custo benefício em um só produto. Novo design.',
        features: ['Universidade Komeco', 'Seja Credenciado', 'Assistência Técnica', 'Solicite Sua Peça'],
        img: 'https://www.komeco.com.br/wp-content/uploads/2025/02/img-destacada-produto-aquecedor-gas-home-bk-komeco-1000x1000px-030225.png'
    },
    {
        id: 322,
        categoria: 'aquecedores',
        categoriaLabel: 'Aquecedor',
        titulo: 'Aquecedor a Gás KO 46DI Prime',
        desc: 'Aquecedor a Gás KO 46DI Prime, versão 46 litros, cor inox, é o único do mercado em aço inox. Para quem exige beleza, conforto e economia.',
        features: ['Universidade Komeco', 'Seja Credenciado', 'Assistência Técnica', 'Solicite Sua Peça'],
        img: 'https://www.komeco.com.br/wp-content/uploads/2024/12/aquecedor-gas-prime-komeco-46di-foto-1000x1000px-01.png'
    },
    {
        id: 323,
        categoria: 'aquecedores',
        categoriaLabel: 'Aquecedor',
        titulo: 'Aquecedor a Gás KO 38DI Prime',
        desc: 'Aquecedor a Gás KO 38DI Prime, versão 38 litros, cor inox, é o único do mercado em aço inox. Para quem exige beleza, conforto e economia.',
        features: ['Universidade Komeco', 'Seja Credenciado', 'Assistência Técnica', 'Solicite Sua Peça'],
        img: 'https://www.komeco.com.br/wp-content/uploads/2024/12/aquecedor-gas-prime-komeco-38di-foto-1000x1000px-01.png'
    },
    {
        id: 324,
        categoria: 'aquecedores',
        categoriaLabel: 'Aquecedor',
        titulo: 'Aquecedor a Gás KO 33DI Prime',
        desc: 'Aquecedor a Gás KO 33DI Prime, versão 33 litros, cor inox, é o único do mercado em aço inox. Para quem exige beleza, conforto e economia.',
        features: ['Universidade Komeco', 'Seja Credenciado', 'Assistência Técnica', 'Solicite Sua Peça'],
        img: 'https://www.komeco.com.br/wp-content/uploads/2024/12/aquecedor-gas-prime-komeco-33d-foto-1000x1000px-01-1.png'
    },
    {
        id: 325,
        categoria: 'aquecedores',
        categoriaLabel: 'Aquecedor',
        titulo: 'Aquecedor a Gás KO 26DI Prime',
        desc: 'Aquecedor a Gás KO 26DI Prime, versão 26 litros, cor inox, é o único do mercado em aço inox. Para quem exige beleza, conforto e economia.',
        features: ['Universidade Komeco', 'Seja Credenciado', 'Assistência Técnica', 'Solicite Sua Peça'],
        img: 'https://www.komeco.com.br/wp-content/uploads/2024/12/aquecedor-gas-prime-komeco-26d-foto-1000x1000px-01-1.png'
    },
    {
        id: 326,
        categoria: 'solar',
        categoriaLabel: 'Boilers',
        titulo: 'Reservatório Térmico Prime',
        desc: 'O Reservatório Térmico Prime da Komeco foi projetado para oferecer a você a melhor experiência em aquecimento de água,',
        features: ['Universidade Komeco', 'Seja Credenciado', 'Assistência Técnica', 'Solicite Sua Peça'],
        img: 'https://www.komeco.com.br/wp-content/uploads/2024/06/img-destacada-reservatorio-termico-prime-aquecimento-solar-de-agua-komeco-1000X1000-03.png'
    },
    {
        id: 327,
        categoria: 'solar',
        categoriaLabel: 'Boilers',
        titulo: 'Reservatório Personalizado Prime',
        desc: 'O Reservatório Térmico Personalizado Prime da Komeco é ideal para grandes obras, possuí tecnologia avançada e modelos personalizados.',
        features: ['Universidade Komeco', 'Seja Credenciado', 'Assistência Técnica', 'Solicite Sua Peça'],
        img: 'https://www.komeco.com.br/wp-content/uploads/2024/06/img-destacada-reservatorio-termico-prime-personalizado-aquecimento-solar-de-agua-komeco-1000X1000-01.png'
    },
    {
        id: 328,
        categoria: 'solar',
        categoriaLabel: 'Boilers',
        titulo: 'Reservatório Térmico',
        desc: 'O Reservatório Térmico da Komeco possuí tecnologia avançada capaz de manter a temperatura da água por mais tempo com total segurança.',
        features: ['Universidade Komeco', 'Seja Credenciado', 'Assistência Técnica', 'Solicite Sua Peça'],
        img: 'https://www.komeco.com.br/wp-content/uploads/2023/05/img-destacada-produto-reservatorio-termico-aquecimento-solar-de-agua-komeco.png'
    },
    {
        id: 329,
        categoria: 'acessorios',
        categoriaLabel: 'Acessórios',
        titulo: 'Peças e Acessórios Hidráulicos',
        desc: 'A Komeco desenvolve peças e acessórios hidráulicos originas, testados e produzidos com alto rigor tecnológico. Escolha peças originais Komeco',
        features: ['Universidade Komeco', 'Seja Credenciado', 'Assistência Técnica', 'Solicite Sua Peça'],
        img: 'https://www.komeco.com.br/wp-content/uploads/2024/02/img-destacada-pecas-acessorios-hidraulicos-aquecimento-solar-agua-komeco-1000X1000-02.png'
    },
    {
        id: 330,
        categoria: 'acessorios',
        categoriaLabel: 'Acessórios',
        titulo: 'Filtro de Piscina',
        desc: 'O filtro de piscina da Komeco é Ideal para quem procura qualidade e confiabilidade no seu sistema inteligente de filtragem de água de piscina.',
        features: ['Universidade Komeco', 'Seja Credenciado', 'Assistência Técnica', 'Solicite Sua Peça'],
        img: 'https://www.komeco.com.br/wp-content/uploads/2024/03/img-destacada-filtro-de-piscina-komeco-1000X1000-02.png'
    },
    {
        id: 332,
        categoria: 'solar',
        categoriaLabel: 'Boilers',
        titulo: 'Produto',
        desc: 'Informações não disponíveis.',
        features: ['Alta Qualidade'],
        img: 'imagens/logo.png'
    },
    {
        id: 900,
        categoria: 'solar',
        categoriaLabel: 'Sistema Solar',
        titulo: 'Coletor Solar de Tubo a Vácuo AKC25',
        desc: 'O coletor solar AKC 25 tem inúmeras aplicações, desde o aquecimento de água para banho, piscina, restaurantes, lavanderias, hotéis, clubes, escolas, etc.',
        features: ['Rua Anhanguera, 479 - Piratininga - Osasco - SP - CEP: 06230-110', '(11) 5186-2200', 'Atendimento Consultivo', 'Suporte Técnico'],
        img: 'https://www.aquakent.com.br/img/logo-aquakent.png'
    },
    {
        id: 901,
        categoria: 'bombas',
        categoriaLabel: 'Bomba de Calor',
        titulo: 'Bomba de Calor AKBC',
        desc: 'O coletor solar AKC 25 tem inúmeras aplicações, desde o aquecimento de água para banho, piscina, restaurantes, lavanderias, hotéis, clubes, escolas, etc.',
        features: ['Rua Anhanguera, 479 - Piratininga - Osasco - SP - CEP: 06230-110', '(11) 5186-2200', 'Atendimento Consultivo', 'Suporte Técnico'],
        img: 'https://www.aquakent.com.br/img/logo-aquakent.png'
    },
];

// 2. ELEMENTOS DA UI
const productGrid = document.getElementById('productGrid');
const filterBtns = document.querySelectorAll('.filter-btn');

// 3. RENDERIZAÇÃO
const renderProducts = (produtos) => {
    if (!productGrid) return; // Segurança caso estejamos na página de detalhes

    // Add fade out animation
    productGrid.classList.add('fade-out');

    setTimeout(() => {
        productGrid.innerHTML = '';

        if (produtos.length === 0) {
            productGrid.innerHTML = '<div class="no-products">Nenhum produto encontrado nesta categoria no momento.</div>';
        } else {
            produtos.forEach(prod => {
                const card = document.createElement('div');
                card.className = 'product-card reveal active';
                card.style.cursor = 'pointer';
                card.onclick = (e) => {
                    // Evita disparar navegação dupla se o usuário clicar diretamente no botão de "Comprar"
                    if (!e.target.closest('.btn-product-cta')) {
                        window.location.href = `produto-detalhe.html?id=${prod.id}`;
                    }
                };

                const featuresHtml = prod.features.map(f => `<li>${f}</li>`).join('');

                // Mensagem pre-criada para o whatsapp
                const msg = encodeURIComponent(`Olá Clima Company! Gostaria de fazer um orçamento ou saber mais sobre o produto: ${prod.titulo}.`);
                const waLink = `https://wa.me/5512996812419?text=${msg}`;

                const destaqueSelo = prod.destaque ? `<div style="position: absolute; top: 0; left: 0; background: red; color: white; padding: 0.25rem 1rem; font-weight: bold; border-bottom-right-radius: 8px; z-index: 3;">DESTAQUE</div>` : '';

                card.innerHTML = `
                    <div class="product-image-wrapper">
                        ${destaqueSelo}
                        <span class="product-category-badge">${prod.categoriaLabel}</span>
                        <img src="${prod.img}" alt="${prod.titulo}" class="product-image" onerror="this.src='imagens/logo.png'">
                    </div>
                    <div class="product-info">
                        <h3 class="product-title">${prod.titulo}</h3>
                        <p class="product-desc">${prod.desc}</p>
                        <ul class="product-features">
                            ${featuresHtml}
                        </ul>
                        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: auto;">
                            <a href="produto-detalhe.html?id=${prod.id}" class="btn-product-cta" style="flex: 1; text-align: center; background: transparent; border: 1px solid var(--text-light); color: var(--text-color);">Ver Detalhes</a>
                            <a href="${waLink}" target="_blank" class="btn-product-cta btn-comprar" style="flex: 1; text-align: center;">Comprar</a>
                        </div>
                    </div>
                `;

                productGrid.appendChild(card);
            });
        }

        // Remove anim out
        productGrid.classList.remove('fade-out');
    }, 300); // tempo que bate com a transição do css
};

// 4. LÓGICA DE FILTRAGEM
filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        // Handle Active Class
        filterBtns.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');

        const filterValue = e.target.getAttribute('data-filter');

        if (filterValue === 'all') {
            renderProducts(produtosData);
        } else {
            const filtered = produtosData.filter(p => p.categoria === filterValue);
            renderProducts(filtered);
        }
    });
});

// 5. THEME TOGGLE (mesma lógica do index)
const themeToggle = document.getElementById('theme-toggle');
const iconSun = themeToggle.querySelector('.icon-sun');
const iconMoon = themeToggle.querySelector('.icon-moon');

themeToggle.addEventListener('click', () => {
    const html = document.documentElement;
    const isDark = html.getAttribute('data-theme') === 'dark';

    if (isDark) {
        html.setAttribute('data-theme', 'light');
        iconSun.style.display = 'none';
        iconMoon.style.display = 'block';
    } else {
        html.setAttribute('data-theme', 'dark');
        iconSun.style.display = 'block';
        iconMoon.style.display = 'none';
    }
});

// 6. INICIALIZAÇÃO
document.addEventListener('DOMContentLoaded', () => {
    // Seta a cor primária global da navbar e badges pra ser o azul/marca
    document.documentElement.style.setProperty('--theme-color', 'var(--color-brand-accent)');

    // Render todos initially
    if (productGrid) {
        renderProducts(produtosData);
    }

    // Ajuste da navbar para começar com padding normal caso não tenha scroll
    const navbar = document.getElementById('navbar');
    const waFloat = document.getElementById('wa-float');

    window.addEventListener('scroll', () => {
        // Toggle Glass Navbar
        if (window.scrollY > 20) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Toggle Botão flutuante WhatsApp pós Hero Banner da produtos 
        if (waFloat) {
            if (window.scrollY > 300) {
                waFloat.classList.add('visible');
            } else {
                waFloat.classList.remove('visible');
            }
        }
    });
});
