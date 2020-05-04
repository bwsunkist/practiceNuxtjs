<template>
  <div class="container">
    <div>
      <h1 class="titled">
        {{title}}
      </h1>
      <vue-mermaid
        :nodes="data"
        type="graph LR"
        @nodeClick="editNode"
        v-bind:config="mermaid"
      ></vue-mermaid>
      <div class="inputt">
        Set Parent : 
        <input v-model="tgtparents" />
      </div>
      Set Text : <input v-model="newText" />
        <button v-on:click="addNewNode" v-bind:disabled="isButtonAble">Add</button>
      <br />
      check parent exist : {{isexistparent}}
      <br />
      <br />
      <br />
      <div class="button--grey">
        <router-link to="/"> 
        Back To homepage
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function(){
    return {
      tgtparents: '',
      newText: '',
      currentmaxid: 6,
      title : 'mermaid test',
      mermaid: {
        theme: "default",
        startOnLoad: !1,
        securityLevel: 'loose'
      },
      data: [
        {
          id: "1",
          text: "A",
          link: "---",
          next: ["2"],
          editable: true,
          style: "fill:#f9f,stroke:#333,stroke-width:4px"
        },
        { id: "2", text: "B", edgeType: "circle", next: ["3"] },
        { id: "3", text: "C", next: ["4", "6"], editable:true  },
        { id: "4", text: "D", link: "-- This is the text ---", next: ["5"] },
        { id: "5", text: "E", url: "https://bwsunkist-portfolio.firebaseapp.com/", editable:true },
        { id: "6", text: "F", url: "https://bwsunkist-portfolio.firebaseapp.com/" }
      ]
    };
  },
  computed: {
    isexistparent(event) {
      return !this.isButtonAble?'OK':'NG '
      // this.data[0].next.push("5")
      // return this.data[0].next
      // return '"' + String(this.currentmaxid) + '"'
    },
    isButtonAble(event) {
      return (this.filterByParents(this.tgtparents) === null)
    },
    nowNextA(event) {
      return this.data[0].next
    }
  },
  methods: {
    editNode(nodeId) {
      alert(nodeId);
    },
    filterByParents(text){
      const dataarr = this.data
      for(let i = 0; i < this.currentmaxid; i++){
        if(dataarr[i].text === text)return dataarr[i]
      }
      return null
    },
    addNewNode(event) {
      const parent = this.filterByParents(this.tgtparents)
      const tagetId = parent.id
      let newtext = (this.newText === '') ? ('new_' + String(this.currentmaxid)) : this.newText
      this.currentmaxid++
      for(let i = 0; i < (this.currentmaxid-1); i++){
        console.log(this.data[i].id)
        if(this.data[i].id === tagetId){
          const newel = String(this.currentmaxid)
          if(this.data[i].next === undefined){
            this.data[i].next = []
          }
            this.data[i].next.push(newel)
        }
      }
      const newNode = {
       id:  this.currentmaxid,
       text: newtext
      }
      this.data.push(newNode)
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

.titled {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 50px;
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

.inputt {
  margin-top: 10px;
}
</style>
