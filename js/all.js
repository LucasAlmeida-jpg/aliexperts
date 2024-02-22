const { createApp } = Vue

createApp({
  data() {
    return {
      activeIndex: null,
      mode: 'login',
      accordionItems: [
        { title: 'Quanto tempo dura o programa?', 
        content: 'O programa é de seis meses e durará de outubro de 2022 a março de 2023. Ele consistirá em sessões online semanais e em horário comercial.' 
        },
        { title: 'Como posso me inscrever?', content: 'Content for Section 2' },
        { title: 'Como me qualifico?', content: 'Content for Section 3' },
        { title: 'Quantas pessoas serão selecionadas?', content: 'Content for Section 3' },
        { title: 'Como os participantes serão selecionados?', content: 'Content for Section 3' },
        { title: 'E se eu já tiver um site?', content: 'Content for Section 3' }
      ],
      items: [
        {
          numbers: "assets/2.svg",
          title: "Produtos",
          image: "assets/Group527.png",
          description: "Você receberá produtos incríveis do <strong>AliExpress</strong> para a criação do seu conteúdo, diretamente na sua casa.",
        },
        {
          numbers: "assets/22.svg",
          title: "Remuneração",
          image: "assets/Group539.png",
          description: "Você terá uma remuneração de engajamento no primeiro mês e suas vendas terão comissões regulares através dos seus conteúdos postados com a frequência combinada.<br><br>Os melhores conteúdos ainda terão bônus por performance no final do programa!",
        },
        {
          numbers: "assets/4.svg",
          title: "Comunidade",
          image: "assets/Group528.png",
          description: "Faça parte de uma comunidade de criadores assim como você, troque ideias e atinja o máximo do potencial das suas redes sociais.",
        },
        {
          numbers: "assets/5.svg",
          title: "Desafios",
          image: "assets/Group520.png",
          description: "Lançaremos desafios de conteúdo ao longo dos meses para que você consiga soltar sua imaginação e potencial criativo nos seus conteúdos.",
        },
        {
          numbers: "assets/1.svg",
          title: "Educação",
          image: "assets/Group509.png",
          description: "Teremos professores e aulas com especialistas em vendas através das redes sociais, além de suporte ao criador pelo nosso time para que seus conteúdos sejam mais envolventes e engajadores.",
        },
      ],
      cards: [
        {
          numbers: "01",
          description: "Posicionamento estratégico e performance",
        },
        {
          numbers: "02",
          description: "Identidade visual no conteúdo",
        },
        {
          numbers: "03",
          description: "Contando história através de ganchos",
        },
        {
          numbers: "04",
          description: "Técnicas de edição de vídeos, takes e cortes",
        },
        {
          numbers: "05",
          description: "Como identificar e metrificar seus resultados",
        },
      ],
      itemsWork: [
        {
          image: "assets/Group544.png",
          description: "Ser um criador de conteúdo com pelo menos 5 mil seguidores no Instagram, com postagens regulares e de uma das verticais abaixo: <br><br> <li><strong>Moda e Beleza</strong></li> <li><strong>Tecnologia e Games</strong></li> <li><strong>Esporte, Fitness</strong></li> <li><strong>Casa e Decoração</strong></li> "
        }
      ],
      itemsMiniCard: [
        { content: 'Você precisará criar 2 Reels (1 por quinzena) e 12 stories por mês <br> (2 combos de 3 telas entregues por quinzena).' },
        { content: 'Inscrever-se de Março de 26/02 a 25/03 de março, através do site Creators.llc/AliExperts e não deixar nenhum campo em branco, eles serão necessários para a nossa validação.' },
        { content: 'Ter disponibilidade para participar do programa e entregar conteúdos até março de 2025.' },
        { content: 'Caso você seja aprovado, é obrigatório o opt-in das suas redes sociais para analisarmos os resultados das postagens.' },
      ],
      tutors: [
        {
          image: "assets/Group155.png",
          name: "@nome da influencer aqui",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic cupiditate nulla voluptatem  nostrum tenetur libero inventore consequatur aut necessitatibus assumenda fugit!"
        },
        {
          image: "assets/Group156.png",
          name: "@nome da influencer aqui",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic cupiditate nulla voluptatem natus error, unde obcaecati ad eveniet id blanditiis pariatur nostrum tenetur libero inventore consequatur aut necessitatibus assumenda fugit!"
        },
        {
          image: "assets/Group157.png",
          name: "@nome da influencer aqui",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic cupiditate nulla voluptatem natus error, unde obcaecati ad eveniet id blanditiis pariatur nostrum tenetur libero inventore consequatur aut necessitatibus assumenda fugit!"
        },
        {
          image: "assets/Group155.png",
          name: "@nome da influencer aqui",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic cupiditate nulla voluptatem natus error, unde obcaecati ad eveniet id blanditiis pariatur nostrum tenetur libero inventore consequatur aut necessitatibus assumenda fugit!"
        },
        {
          image: "assets/Group155.png",
          name: "@nome da influencer aqui",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic cupiditate nulla voluptatem natus error, unde obcaecati ad eveniet id blanditiis pariatur nostrum tenetur libero inventore consequatur aut necessitatibus assumenda fugit!"
        },
        {
          image: "assets/Group155.png",
          name: "@nome da influencer aqui",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic cupiditate nulla voluptatem natus error, unde obcaecati ad eveniet id blanditiis pariatur nostrum tenetur libero inventore consequatur aut necessitatibus assumenda fugit!"
        },
      ],
    }
  },
  methods: {
    toggleAccordion(index) {
      this.activeIndex = this.activeIndex === index ? null : index;
    },

 
  }

}).mount('#app')