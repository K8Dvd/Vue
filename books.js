const books = Vue.createApp({
    data() {
      return {
        showBooks:true,
        title: 'The Ledger',
        author: 'Kate Anne David',
        year: 2008,
      };
    },
    methods:{
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        }
    }
  });
  
  books.mount('#books');
  