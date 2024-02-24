const { createApp } = Vue

createApp({
  data() {
    return {
      activeIndex: null,
      creatorsForm: false,
      accordionItems: [
        { title: 'Quantos produtos serão enviados? Precisa devolver?', content: 'Content...' },
        { title: 'Como funciona o comissionamento?', content: 'Content...' },
        { title: 'Qual valor da porcentagem e do bônus?', content: 'Content...' },
        { title: 'Qual o critério de avaliação dos conteúdos para a bonificação?', content: 'Content...' },
        { title: 'Haverá um cronograma de postagem pré-definido?', content: 'Content...' },
        { title: 'A participação nas aulas é obrigatória? Será calculada a frequência?', content: 'Content...' },
        { title: 'O pagamento está vinculado à performance apenas ou tem um valor fixo?', content: 'Content...' },
        { title: 'Vou precisar ter exclusividade com a AliExpress ou posso indicar produtos da concorrência?', content: 'Content...' },
        { title: 'Qual a duração do projeto?', content: 'Content...' },
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
          numbers: "assets/44.svg",
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
          description: "Identidade visual <br> no conteúdo",
        },
        {
          numbers: "03",
          description: "Contando história <br> através  de ganchos",
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
          description: "Ser um criador de conteúdo com pelo menos 5 mil seguidores no Instagram, com postagens regulares e de uma das verticais abaixo: <br><br> <li><strong>Moda e Beleza</strong></li> <li><strong>Tecnologia e Games</strong></li> <li><strong>Esporte e Fitness</strong></li> <li><strong>Casa e Decoração</strong></li> "
        }
      ],
      itemsMiniCard: [
        { content: 'Você precisará criar 2 Reels (1 por quinzena) e 12 stories por mês <br> (2 combos de 3 telas entregues por quinzena).' },
        { content: 'Inscrever-se de 26/02 a 25/03, através do site Creators.llc/AliExperts e não deixar nenhum campo em branco, eles serão necessários para a nossa validação.' },
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
      formData: {
        nome: "",
        email: "",
        password: "",
        telefone: "",
        perfil: "",
        agent_email: "",
        origin: "aliexperts",
        specialities: [],
        validacaoRedes: [
          { socialMedia: '', link: '' }
        ]
      },

      isLoading: false,
      success: '',
      error: '',

      // success: "Inscrição Realizada com sucesso!",
      fail: "Usuário já possui cadastro!",
      credentials: "Suas credenciais não estão corretas. Por favor, verifique seu e-mail e senha e tente novamente.",
      
      selectedSocialMedia: '',
      socialMediaInput: '',
      showAllFields: true,
      alreadyCreator: false,
      
      vertical: [
        { name: "Beleza", id: 263 },
        { name: "Casa", id: 306 },
        { name: "Decoração", id: 307 },
        { name: "Esporte", id: 305 },
        { name: "Fitness", id: 264 },
        { name: "Games", id: 362 },
        { name: "Moda", id: 323 },
        { name: "Tecnologia", id: 368 },
    ],    
    }
  },
 
  methods: {
    toggleAccordion(index) {
      this.activeIndex = this.activeIndex === index ? null : index;
    },

    formatTelefone(event) {
      let unformatted = event.target.value.replace(/\D/g, '');
      
      if (unformatted.length > 11) {
        unformatted = unformatted.substr(0, 11);
      }
      this.formData.telefone = unformatted.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1)$2-$3');
    },

    formLogin() {
      this.error = "";
      this.success = "";
      this.isLoading = true;
    
      fetch('https://dev.creators.llc/api/auth/login', {
        method: 'POST',
        body: JSON.stringify(this.formData),
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .then(response => {
        if (!response.ok) {
          if (response.status === 401) {
            this.error = 'Ocorreu um erro no login. Por favor, verifique se o e-mail e senha estão corretos.';
          }
          this.isLoading = false;
        } else {
          return response.json();
        }
      })
      .then(data => {
        if (data) {
          this.formUpdateUser(data.data.access_token, data.data.user.id);
        }
      })
      .catch(error => {
        // Se ocorrer um erro, defina a mensagem de erro
        this.error = 'Ocorreu um erro ao processar sua inscrição. Por favor, tente novamente mais tarde.';
        // Defina isLoading como falso para esconder a animação de carregamento
        this.isLoading = false;
      });
    },
    
  
  formUpdateUser(token, id) {
    this.formData.validacaoRedes.forEach(element => {
      this.formData[element.socialMedia] = this.getBaseLink(element.socialMedia) + element.link;
    });
    fetch('https://dev.creators.llc/api/v1/users/'+id, {
        method: 'PUT',
        body: JSON.stringify(this.formData),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao atualizar usuário');
        }
        return response.json(); 
    })
    .then(data => {
        if(data.error) {
            this.error = 'Ocorreu um erro ao processar sua inscrição. Por favor, tente novamente mais tarde.';
            this.isLoading = false;


        } else if(!data.error) {
          this.success = 'Inscrição efetuada com sucesso!';
          this.isLoading = false;
        }
    })
    .catch(error => {
        console.error('Erro na solicitação:', error);
    });
  },

  formCreateUser() {
    console.log("chegou auqi")
      this.isLoading = true;
      fetch('https://dev.creators.llc/api/v1/users', {
          method: 'POST',
          body: JSON.stringify(this.formData),
          headers: {
              'Content-Type': 'application/json'
          }
      })
      .then(response => {
          if (!response.ok) {
              throw new Error('Erro ao criar usuário');
          }
          return response.json();
      })
        .then(data => {
          console.log(this.formData);
        if(data.error) {
          this.error = 'Ocorreu um erro ao processar sua inscrição. Por favor, tente novamente mais tarde.';
          this.isLoading = false;

        } else {
          this.formUpdateUser(data.data.access_token, data.data.user.id);
        }
      })
    
    },

    toggleReturn() {
      this.error = "";
      this.success = "";
    },
    toggleFieldsVisibility() {
      this.error = "";
      this.success = "";
      this.showAllFields = !this.showAllFields;
    },

    addSocialMedia() {
      if (this.formData.validacaoRedes.length < 2) {
        this.formData.validacaoRedes.push({ socialMedia: '', link: '' });
      }
    },
    removeSocialMedia() {
      if (this.formData.validacaoRedes.length > 1) {
        this.formData.validacaoRedes.pop();
      }
    },
    getBaseLink(socialMedia) {
      if (socialMedia === 'behance') {
        return 'https://www.behance.net/';
      } else if (socialMedia === 'facebook') {
        return 'https://www.facebook.com/';
      } else if (socialMedia === 'instagram') {
        return 'https://www.instagram.com/';
      } else if (socialMedia === 'linkedin') {
        return 'https://www.linkedin.com/in/';
      } else if (socialMedia === 'youtube') {
        return 'https://www.youtube.com/';
      } else if (socialMedia === 'tikTok') {
        return 'https://www.tiktok.com/';
      } else if (socialMedia === 'twitch') {
        return 'https://www.twitch.tv/';
      } else if (socialMedia === 'pinterest') {
        return 'https://www.pinterest.com/';
      } else if (socialMedia === 'twitter') {
        return 'https://twitter.com/';
      } else if (socialMedia === 'vimeo') {
        return 'https://vimeo.com/';
      }
      return '';
    },
  },

  computed: {
    selectedVerticals() {
      const selectedIds = this.formData.specialities.map(Number);
      return this.vertical.filter((v) => selectedIds.includes(v.id));
    },
  },

  
}).mount('#app')