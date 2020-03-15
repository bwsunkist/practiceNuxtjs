<template>
  <div class="container">
    <div>
      <h1 style="text-align: left;">{{title}}</h1>
      <p style="text-align: left;">{{message}}</p>
      <pre>{{html_data}}</pre>
      <div class="button--grey">
        <router-link to="/"> 
          Back To homepage
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
const axios = require('axios');
let url = "/README.md";

export default {
  data: function(){
    return {
      title : 'test1',
      message : 'axios sample',
    }; 
  },
  created : function(){
  },
  computed: {
  },
  asyncData: async function() {
    let result = await axios.get(url);
    return {html_data: result.data};
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

pre {
  width: 70%;
  padding: 10px;
  font-size: 10pt;
  background-color: aquamarine;
  white-space: pre-wrap;
  text-align: left;
}
</style>
