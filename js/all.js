const { createApp } = Vue

createApp({
  data() {
    return {
      items: [
        {
          numbers: "01",
          title: "Produtos",
          image: "assets/Group527.png",
          description: "Você receberá produtos incríveis do <strong>AliExpress</strong> para a criação do seu conteúdo, diretamente na sua casa.",
        },
        {
          numbers: "02",
          title: "Remuneração",
          image: "assets/Group539.png",
          description: "Você terá uma remuneração de engajamento no primeiro mês e suas vendas terão comissões regulares através dos seus conteúdos postados com a frequência combinada.<br><br>Os melhores conteúdos ainda terão bônus por performance no final do programa!",
        },
        {
          numbers: "03",
          title: "Comunidade",
          image: "assets/Group528.png",
          description: "Faça parte de uma comunidade de criadores assim como você, troque ideias e atinja o máximo do potencial das suas redes sociais.",
        },
        {
          numbers: "04",
          title: "Desafios",
          image: "assets/Group520.png",
          description: "Lançaremos desafios de conteúdo ao longo dos meses para que você consiga soltar sua imaginação e potencial criativo nos seus conteúdos.",
        },
        {
          numbers: "05",
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
          description: "Identidade Visual no conteúdo",         
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
          description: "Ser um criador de conteúdo com pelo menos 5 mil seguidores no Instagram, com postagens regulares e de uma das verticais abaixo: <br><br> <li><strong>Moda e Beleza;</strong></li> <li><strong>Tecnologia e Games;</strong></li> <li><strong>Esporte, Fitness, atividades ao ar livre;</strong></li> <li><strong>Casa e Decoração;</strong></li> "
        }
      ],
      itemsMiniCard: [
        { content: 'Você precisará criar 2 reels (1 por quinzena) e 12 stories por mês <br> (2 combos de 3 telas entregues por quinzena).' },
        { content: 'Inscrever-se de X a X de março, através do site Creators.llc/AliExperts e não deixar nenhum campo em branco, eles serão necessários para a nossa validação;' },
        { content: 'Ter disponibilidade para participar do programa e entregar conteúdos até março de 2025;' },
        { content: 'Caso você seja aprovado, é obrigatório o opt-in das suas redes sociais para analisarmos os resultados das postagens;' },
      ],
      tutors: [
        { image: "assets/Group155.png", 
        name: "@nome da influencer aqui",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic cupiditate nulla voluptatem  nostrum tenetur libero inventore consequatur aut necessitatibus assumenda fugit!"
        },
        { image: "assets/Group156.png", 
        name: "@nome da influencer aqui",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic cupiditate nulla voluptatem natus error, unde obcaecati ad eveniet id blanditiis pariatur nostrum tenetur libero inventore consequatur aut necessitatibus assumenda fugit!"
        },
        { image: "assets/Group157.png", 
        name: "@nome da influencer aqui",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic cupiditate nulla voluptatem natus error, unde obcaecati ad eveniet id blanditiis pariatur nostrum tenetur libero inventore consequatur aut necessitatibus assumenda fugit!"
        },
        { image: "assets/Group155.png", 
        name: "@nome da influencer aqui",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic cupiditate nulla voluptatem natus error, unde obcaecati ad eveniet id blanditiis pariatur nostrum tenetur libero inventore consequatur aut necessitatibus assumenda fugit!"
        },
        { image: "assets/Group155.png", 
        name: "@nome da influencer aqui",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic cupiditate nulla voluptatem natus error, unde obcaecati ad eveniet id blanditiis pariatur nostrum tenetur libero inventore consequatur aut necessitatibus assumenda fugit!"
        },
        { image: "assets/Group155.png", 
        name: "@nome da influencer aqui",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic cupiditate nulla voluptatem natus error, unde obcaecati ad eveniet id blanditiis pariatur nostrum tenetur libero inventore consequatur aut necessitatibus assumenda fugit!"
        },
      ],
    }
  },

}).mount('#app')