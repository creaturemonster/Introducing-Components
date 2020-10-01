const app=Vue.createApp({
    data(){
      return {
        friends:[
            {id:'manuel',name:'Manuel Lopez', phone: '609-356-2573', email:'hgcai3456@gmail.com'}, {id:'julie', 'Julie Jones', phone:'609-356-2573', email:'hgcai3456@gmail.com' },],
        ]
      };
    },
    methods:{
      toggleDetails(){
        this.detailsAreVisible = !detailsAreVisible;
      }
    }
});

app.mount("#app");
