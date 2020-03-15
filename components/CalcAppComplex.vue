<template>
  <div class="container">
    <div>
      <h1 class="subtitle">
        {{title}}
      </h1>
      <p class="ans">
        {{message}}
      </p>
      <div>
        <textarea v-model="fomula" cols="40" rows="5" />
      </div>
      <div style="text-align:left">
        <button v-on:click="doAction">CALC</button>
      </div>
      <div><table v-html="log"></table></div>
      <h4 class="anss">
        input your fomula like this:<br />
        a = 100 <br />
        b = 250 <br />
        a + b  <br />
        And pless CALC.
      </h4>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  data: function(){
    return {
      title : 'calcAppComplex',
      message : 'Enter your Expression',
      fomula: '0',
      record: '',
      result: []
    }; 
  },
  components: {
  },
  created : function(){
    var items = localStorage.getItem('log');
    var logs = JSON.parse(items);
    if(logs != null){
      this.result = logs;
    }
  },
  computed: {
    log: function(){
      var table = '<tr><th class="head">Expression</th><th class="head">Value</th></tr>';
      for(var idx in this.result){
        table += '<tr><td>' + this.result[idx][0] + '</td><td>'
                  + this.result[idx][1] + '</td></tr>';
      }
      return table;
    }
  },
  methods: {
    doAction: function(){
      var arr = this.fomula.trim().split('\n');
      var last = arr.pop();
      var fn = '';
      for(var idx in arr){
        console.log('arr[' + idx + '] = '+ arr[idx]);
        if(arr[idx].trim() != ''){
          fn += 'var ' + arr[idx] + ';';
        }
      }
      fn += 'return ' + last + ';';
      var exp = 'function f(){' + fn + '} f();';
      var ans = eval(exp);
      this.message = 'answer = ' + ans;
      var record = arr.join(';').trim();
      if(record != ''){
        record += ';'
      } 
      record += last;
      this.record = record;
      this.setRecord(record, ans);
    },
    setRecord: function(re, ans){
      this.result.unshift([re,ans]);
      //10個まで保持
      if(this.result.length > 5){
        this.result.pop();
      }
      //localstrageに保存
      var log = JSON.stringify(this.result);
      localStorage.setItem('log', log);
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

.ans {
  font-weight: 300;
  font-size: 20px;
  color: #526488;
  word-spacing: 5px;
  margin-bottom: 15px;
  background-color: burlywood;
}
.anss {
  font-weight: 300;
  text-align: left;
  font-size: 15px;
  color: #526488;
  word-spacing: 5px;
  margin-bottom: 15px;
  background-color: burlywood;
}
.links {
  padding-top: 15px;
}

tr td {
  padding: 5px;
  border: 1px solid gray;
}
tr th {
  padding: 5px;
  border: 1px solid gray;
}
tr th.head {
  color: white;
  background-color:#35495e;
}

</style>
