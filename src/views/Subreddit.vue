<template>
  <section>
    <h1>{{$route.params.name}}</h1>

    <form>
      <b-field label="Title">
        <b-input value=""></b-input>
      </b-field>
      
      <b-field label="Decription">
            <b-input type="textarea"></b-input>
      </b-field>

      <b-field label="URL">
        <b-input></b-input>
      </b-field>

      
      <button class="button is-success">Add post</button>
    </form>
  </section>

</template>

<script>
  export default {

  }

</script>

<style>

</style>
