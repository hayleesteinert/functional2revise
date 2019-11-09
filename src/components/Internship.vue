<template>
  <div id="internships" class="container internship-listings">
      <InternshipEntry 
         v-for="internship in sharedState.InternshipData" 
         v-bind:key="internship.id" 
         :internship="internship" />
       
  </div>
</template>

<script>
import { store } from '../store.js';
import InternshipEntry from './InternshipEntry.vue'; 

export default {
  name: 'Internship',
  data(){
      return {
          sharedState: store.state,
          views:null
      }
  },
  components: {
      InternshipEntry
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .internship-listings {
        display:grid;
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 1em;
        grid-row-gap:1.2em;

        @media screen and (max-width:414px)
        {
            width:98%;
            margin:auto;
        }

        @media screen and (min-width:415px)
        {
            width:90%;
            margin:auto; 
        }

        @media screen and (min-width:769px)
        {
            width:80%;
            margin:auto; 
        }

        @media screen and (min-width:1201px)
        {
            width:70%;
            margin:auto; 
        }
    }
</style>
