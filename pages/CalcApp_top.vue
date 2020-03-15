<template>
  <div class="container">
    <div class="portal">
      <h4 class="menuText">
        Menu
      </h4>
      <button  v-on:click="bt=1" v-bind:class="[ bt === 1 ? 'buttonSelect' : 'button--grey2' ]">
        Simple Calc
      </button>
      <button  v-on:click="bt=2" v-bind:class="[ bt === 2 ? 'buttonSelect' : 'button--grey2' ]">
        Complex Calc
      </button>
      <h4 class="subtitle">
        {{now}}
      </h4>
      <div class="button--grey">
        <router-link to="/"> 
          Back To homepage
        </router-link>
      </div>
    </div>
    <CalcAppSimple class="contents"  v-if="bt==1" />
    <CalcAppComplex class="contents" v-else />
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import CalcAppSimple from '~/components/CalcAppSimple.vue'
import CalcAppComplex from '~/components/CalcAppComplex.vue'

export default {
  data: function(){
    return {
      title : 'calcApp',
      message : '1',
      message2 : '2',
      now : 'Now Loading ...',
      pageUrl1: '/paramTest',
      bt : 1,
    }; 
  },
  components: {
    Logo,
    CalcAppSimple,
    CalcAppComplex
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

.menuText {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 5px;
  margin-bottom: 15px;
  background-color: #99FF99;
}

.links {
  padding-top: 15px;
}

.portal {
  width: 40%;
  height: 100%;
}
.contents {
  height: 100%;
  width: 60%;
}

.buttonSelect {
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  margin-left: 15px;
  color: #fff;
  background-color: #3b8070;
  width: 150px;
  height: 35px;
}
.button--grey2 {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  width: 100px;
  height: 20px;
  margin-left: 15px;
  background-color: #fff;
}
</style>
