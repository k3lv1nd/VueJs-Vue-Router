<template>
  <div class="HelloWorld">
    <h1>{{msg}}</h1>
    <form>
    <label>Email</label>
    <input type="text" name="email" placeholder="Enter Email"><br>
    <label>Username</label>
    <input type="text" name="Username" placeholder="Enter Username"><br>
    <label>Password</label>
    <input type="password" name="password" placeholder="Enter Password"><br>
    </form>
    <small>Already have an Account, Log in Here</small>


  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Register with us to become a member'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
