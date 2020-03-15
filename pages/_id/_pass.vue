<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        {{title}}
      </h1>
      <h2 class="subtitle">
        {{message}}
      </h2>
      <div class="button--grey">
        <router-link to="/"> 
        Back To homepage
        </router-link>
      </div>
      <h2 class="subtitle">
        {{now}}
      </h2>
      <!-- <div class = "button--grey" v-on:click="doAction">  -->
      <!-- <div class = "button--grey" v-on:click="$store.commit('plusCounterN', 5)">  -->
      <div class = "button--grey" v-on:click="$store.dispatch('twicePlus')"> 
        <a>
          {{ $store.state.counter }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  validate ({params}){
    if(params.id == undefined || params.pass == undefined){
      return false;
    }else{
      return true;
    }
  },
  data: function(){
    return {
      title : 'id = ??',
      message : 'pass = ??',
      now : 'Now Loading ...'
    };
  },
  components: {
    Logo
  },
  created : function(){
    setInterval(() => {
      var d = new Date();
      this.now = d.getMonth() + '/' + d.getDate() + '  ' + d.getHours() + 'h' + d.getMinutes() + 'm';
    }, 1000);
    this.title = "id = " + this.$route.params.id ;
    this.message = "pass = " + this.$route.params.pass ;
  },
  methods:{
    doAction: function(){
      this.$store.state.counter++;
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
