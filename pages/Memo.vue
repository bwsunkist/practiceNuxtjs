<template>
  <div class="container">
    <div>
      <h1 class="title">
      </h1>
      <input v-model="message" />
      <input v-model="message2" />
      <h2 class="subtitle">
        {{message3}}
      </h2>
      <div class="button--green">
        <router-link v-bind:to="message3"> 
        Go to paramTest Page
        </router-link>
      </div>
      <h4 class="subtitle">
        {{now}}
      </h4>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  data: function(){
    return {
      title : 'test1',
      message : '1',
      message2 : '2',
      now : 'Now Loading ...',
      pageUrl1: '/paramTest'
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
    this.message3 =  '/' + this.message + '/' + this.message2;
  },
  computed: {
    message3: function(event){
      return '/' + this.message + '/' + this.message2;
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
