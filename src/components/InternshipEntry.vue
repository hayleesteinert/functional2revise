<template>
   <div class="internship" :class="{isFavorite: internship.isFavorite, isPopular: internship.views>=5}">
       <span class="view-count">Viewed {{ internship.views}} times</span>
       <h2 class="internship-title">{{internship.title}} in <span class="internship-location">{{internship.location}}</span></h2>

       <p>{{ internship.majors }}</p>

        <div class="button-controls">
            <button class="btnFavorite" @click="setFavorites(internship.id)">
                <span v-if="internship.isFavorite === false">
                    Add As Favorite
                </span>
                <span v-else>
                    Remove From Favorites
                </span>
            </button>

            <button class="btnMoreInfo" @click="updateViewCount(internship.id)">More Info</button>
        </div>


        <div class="internship-comments">
            <div v-if="internship.comments.length>0">
                <h3 class="internship-comments-title" >
                    View Comments
                </h3>

                <ul class="internship-comment-list" v-for="(comment, index) in internship.comments" v-bind:key="index" :comment="comment">
                    <li class="internship-comment-list-item">
                        #{{comment.id}}
                        <span class="comment-first-name">{{comment.firstName}}</span>
                        <span class="comment-last-name">{{comment.lastName}}</span>
                        <span class="comment-entry">{{comment.comment}}</span>
                    </li>
                </ul>



            </div>

            <h3 class="internship-comments-title">Leave A Comment</h3>

            <label for="lblFirst">First Name</label>
            <input class="inpFirst" id="lblFirst" type="text" placeholder="First Name" v-model="fName" required />

             <label for="lblLast">Last Name</label>
            <input class="inpLast" id="lblLast" type="text" placeholder="Last Name" v-model="lName" required />

            <label for="lblComment">Comment</label>
            <input class="inpComment" id="lblComment" type="text" placeholder="New Comment" v-model="inputEntry" required />

            <button class="btnAddComment" @click="submitComment(internship.id, fName, lName, inputEntry)">Add Your Comment</button>
        </div>

   </div>
</template>

<script>
import {store} from '../store.js';


export default {
    name:'InternshipEntry',
    props:['internship'],
     data(){
      return {
          sharedState: store.state,
          fName:'',
          lName:'',
          inputEntry:''
      }
  },
    methods: {
        // need to add in the correct parameter
        // be sure to call the correct method from your store file
        setFavorites(internshipId) {
          store.setFavorites(internshipId);
            // e.g. store.setFavorites();
        },

        // need to add in the correct paramter
        // be sure to call the correct method from your store file
        showInternshipInfo(internshipId) {
            store.showInternshipInfo(internshipId);
        },

        // need to add in the correct paramters
        // be sure to call the correct method from your store file
        submitComment(internshipId, fName, lName, inputEntry) {
          store.submitComment(internshipId, fName, lName, inputEntry);
            this.inputEntry='';
            this.fName='';
            this.lName='';
        },
        updateViewCount(internshipId) {
            store.updateViewCount(internshipId);
        },
    }
}
</script>


<style lang="scss" scoped>

    .internship {
        box-sizing: border-box;
        background:#f8f8f8;
        padding:0.5em;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        border:2px transparent solid;

        h2 {
            letter-spacing: 0.02rem;
        }

        .button-controls {
            display:flex;
            justify-content: space-between;
        }
        .btnFavorite {
            padding:1em;
        }

        .btnMoreInfo {
            padding:1em;
        }

        .internship-comment-list {
            list-style:none;
            margin:0;
            padding:0;

            &-item {
                margin-bottom:0.4em;
                font-size:1.1rem;
                background:lighten(#f90, 10%);
                padding:0.5em;
            }

            .comment-first-name,
            .comment-last-name {
                font-weight:bold;
                font-style:italic;
            }
            .comment-first-name {
                margin-right:0.2rem;
            }
            .comment-last-name {
                margin-right:0.4rem;
            }

            .comment-entry {
                color:darken(#f90, 50%);
            }

            .comment-entry::before {
                content: 'said - ';
            }

        }

    }

    .inpComment, .inpFirst, .inpLast {
        padding:0.3em;
        width:100%;
        font-size:1.3rem;
        margin-bottom:0.4rem;
    }

     .isFavorite {
        border:2px solid #f90;
    }

    .isPopular {
        border:2px solid rgb(0,100,177);
        background:lighten(rgb(0,100,177), 50%);
    }


</style>
