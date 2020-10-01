const app=Vue.createApp({
    data(){
      return {
        detailsAreVisibleA:true,
        detailsAreVisibleB:true,
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
app.component('user-contact', {
  template: `  <li v-for="friend in friends" :key="friend.id">
      <h2>{{ friend.name }}</h2>
      <button @click="toggleDetails">{{ detailsAreVisible ?  'Hide' : 'Show'}}Show Details</button>
      <ul>
        <li><strong>Phone:</strong>{{ friend.phone}}</li>
        <li><strong>Email:</strong> {{ friend.email}}</li>
      </ul>
    </li>
    <li>
      <h2>Julie Jones</h2>
      <button>Show Details</button>
      <ul v-if="detailsAreVisible">
        <li><strong>Phone:</strong>{{ friend.phone }}</li>
        <li><strong>Email:</strong> {{ friend.email}}</li>
      </ul>
    </li>`,
  data(){
    return {detailsAreVisible: false,
            friend:   {id:'manuel',name:'Manuel Lopez', phone: '609-356-2573', email:'hgcai3456@gmail.com'}
          };
  },
  methods:{
    toggleDetails(){
      this.detailsAreVisible = !this.detailsAreVisible;
    }
  }
  }
});
app.mount("#app");
