// const app = Vue.createApp({
//     template: "<h2>This is my template...</h2>"
// });

const app = Vue.createApp({
    data() {
      return {
        title: 'The Ledger',
        author: 'Kate Anne David',
        age: 20,
      };
    },
  });
  
  app.mount('#app');
  