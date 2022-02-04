<template>
  <div v-if="status" class="container grid">
    <div
      class="row justify-content-around"
      v-for="post in posts"
      v-bind:key="post.id"
    >
      <h2>{{ post.blogTitle }}</h2>
      <br /><br /><br />
      <p>{{ post.blogContent }}</p>
    </div>
  </div>
  <div v-else class="container grid">
    <br /><br /><br />
    <h1 style="color: red">Server has been not started. Please try again!</h1>
    <br /><br /><br /><br />
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "blog",

  data() {
    return {
      loading: false,
      post: null,
      error: null,
      posts: [],
      status: false,
    };
  },

  methods: {
    async getData() {
      try {
        // const response = await this.$http.get(
        //   "http://jsonplaceholder.typicode.com/posts"
        // );
        const response = await axios.get("http://localhost:3000/api/blogs");

        console.log("response: ", response);
        if (response.status == 200) this.status = true;
        this.posts = response.data;
      } catch (err) {
        console.log(err);
      }
    },
  },

  // computed(){
  //   this.$props.checked(){
  //     return true
  //   }
  // }

  created() {
    this.getData();
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
}

.subContainer {
  flex-direction: row;
  justify-items: center;
}

.subText {
  flex: 0.5;
  text-decoration: cadetblue;
  text-justify: kashida;
  align-items: center;
  font-size: 0.5rem;
}
</style>
