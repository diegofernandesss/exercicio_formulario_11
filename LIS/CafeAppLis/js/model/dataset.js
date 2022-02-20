/**
 * Foi criado uma constante que são guardada as informações em um JSON do javascript com propriedades id, nome e description.
 * As informações são iniciadas e executas através do bootstrap de forma dinâmica com o preenchimento do modal do formulário.
 */

const dataset = [
  {
    id: 1,
    name: 'Hambúrguer',
    description:
      'Um hambúrguer é um sanduíche que consiste em um ou mais hambúrgueres cozidos de carne moída, geralmente carne bovina, colocados dentro de um pão ou pão fatiado. O hambúrguer pode ser frito, grelhado, defumado ou grelhado',
    price: 8.00,
    image: 'imagem/hamburguer.jpeg',
    
  },
  {
    id: 2,
    name: 'Sanduíche',
    description:
      'O sanduíche (do inglês sandwich), também popularmente chamado de sanduba (português brasileiro) ou sandes (português europeu), é um tipo de alimento que consiste em duas fatias de um pão inteiro, entre as quais é colocada carne, queijo ou outro tipo de alimento.Os sanduíches são, habitualmente, consumidos ao lanche ou como uma refeição rápida, durante o almoço ou o jantar.',
    price: 8.50,
    image: 'imagem/sanduiche.jpeg',
    
    
  },
  {
    id: 3,
    name: 'Café',
    description:
      'O café é uma bebida produzida a partir dos grãos torrados do fruto do cafeeiro. É servido tradicionalmente quente, mas também pode ser consumido gelado. O café é um estimulante, por possuir cafeína — geralmente 80 a 140 mg para cada 207 ml dependendo do método de preparação.',
    price: 1.50,
    image: 'imagem/cafe.jpeg',
    
  },
  {
    id: 4,
    name: 'Suco',
    description:
      'Um suco (português brasileiro) ou sumo (português europeu) é uma bebida produzida do líquido extraído de frutos. Além dos frutos, sucos também podem ser obtidos pelo processamento de outras partes dos vegetais, tais como folhas, talos ou raízes.',
    price: 2.00,
    image: 'imagem/suco.jpeg',
    
  },
];


/**
 * Exportação padrão do módulo dataset.
 */
export default dataset;
