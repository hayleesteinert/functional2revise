<template>
  <div id="app">
    <h1>Department of Communication Internships</h1>

    <Internship />

  </div>
</template>

<script>
import Internship from './components/Internship.vue'

export default {
  name: 'app',
  components: {
    Internship
  }
}
</script>

<style lang="scss">

  * {
    box-sizing:border-box;
  }

  #app {
    html, body {
      height:100%;
      padding:0;
      margin:0;
    }
    

  h1 {
    text-align: center;
    font-size:3rem;
    letter-spacing: -0.09rem;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }

}
</style>
