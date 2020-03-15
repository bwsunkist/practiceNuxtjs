<template>
  <div class="container">
    <div>
      <h1 class="subtitle">
        {{title}}
      </h1>
      <input v-model="num1" class="inputforsimple" />
      <div class="buttonArea">
        <button v-on:click="bt=1" v-bind:class="[ bt === 1 ? 'buttonSelect' : 'button--forcalc' ]">＋</button>
        <button v-on:click="bt=2" v-bind:class="[ bt === 2 ? 'buttonSelect' : 'button--forcalc' ]">−</button>
        <button v-on:click="bt=3" v-bind:class="[ bt === 3 ? 'buttonSelect' : 'button--forcalc' ]">×</button>
        <button v-on:click="bt=4" v-bind:class="[ bt === 4 ? 'buttonSelect' : 'button--forcalc' ]">÷</button>
      </div>
      <input v-model="num2"  class="inputforsimple" />
      <h2 class="subtitle">
        Result = {{relt}}
      </h2>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  data: function(){
    return {
      title : 'calcAppsimple',
      message : '1',
      num1 : 0,
      num2 : 0,
      bt : 1,
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
    },
    relt: function(event){
      var n1= parseInt(this.num1);
      var n2= parseInt(this.num2);
      if(this.bt == 1){
        return n1 + n2;
      }else if (this.bt == 2){
        return n1 - n2;
      }else if (this.bt == 3){
        return n1 * n2;        
      }else if (this.bt == 4){
        return n1 / n2;
      }
    }
  },
  method: {
    selectCalc: function(event){

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

.inputforsimple {
  display:block;
}

.buttonArea {
  width: 100%;
}

.button--forcalc {
  display: table-cell;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  width: 30px;
  height: 30px;
}

.buttonSelect {
  display: table-cell;
  border-radius: 4px;
  border: 1px solid #3b8070;
  text-decoration: none;
  width: 30px;
  height: 30px;
  color: #fff;
  background-color: #3b8070;
}

</style>
