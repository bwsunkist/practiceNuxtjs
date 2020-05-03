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
  methods: {
    editNode(nodeId) {
      alert(nodeId);
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
</style>
