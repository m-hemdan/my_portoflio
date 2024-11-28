import { createStore } from 'vuex'

export default createStore({
  state: {
    portfolioList: [
      { img: require('@/assets/img5.png'), date: 'Aug, 2024', text: 'Resin Art Design', link: 'https://resin-art.netlify.app/', subText: 'Resin Art can serve a variety of purposes, including informational, transactional, social, or entertainment-based goals, it consist of multiple pages, such as the homepage, about page, contact page, and more. These pages contain content such as text, images, videos, and interactive elements. It is responsive, meaning it adjusts its layout and content to be easily viewed on different devices like desktops, tablets, and smartphones.'
        ,githubLink:'https://github.com/m-hemdan/risen_art', animate:'animated fadeInLeft animate__delay-6s'
      },
      { img: require('@/assets/img6.png'), date: 'Oct, 2023', text: 'ASCWW', link: 'https://ascww.org/',githubLink:'https://github.com/m-hemdan/ascww_website',  animate:'animated fadeInDown',
        subText: 'Assuit Company for water and Waste Water company website can serve a variety of purposes, including inqure the bill of water company, search, social, or registeration in the school of water company. it consist of multiple pages in Arabic language only, such as tenders pages, news pages, advices pages, and more. The visual aspect of a website includes its layout, color scheme, typography, and structure. A well-designed website ensures user-friendliness and accessibility. '}
    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
