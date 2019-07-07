<template>
  <section>
    <h1>{{$route.params.name}}</h1>

    <form @submit="onCreatePost()">
      <b-field label="Title">
        <b-input v-model="post.title"></b-input>
      </b-field>
      
      <b-field label="Decription">
            <b-input type="textarea" v-model="post.description"></b-input>
      </b-field>

      <b-field label="URL">
        <b-input v-model="post.URL" type="url"></b-input>
      </b-field>

      
      <button class="button is-success">Add post</button>
    </form>
  </section>

</template>

<script>
import {mapState, mapActions} from "vuex";
export default {
  data:()=>({
    post:{
      title:'',
      description:'',
      URL:''
    }
  }),
  computed : mapState('subreddits',['subreddits']),
  methods: {
    onCreatePost(post){
      if(post.title && (post.description || post.URL)){
        await this.createPost(post)
      }
    }    
  },
 
}
</script>

<style>

</style>
