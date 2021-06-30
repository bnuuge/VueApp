<template>
  <div id="helloMessage">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloMessage',
  props: {
    msg: String
  }
}
</script>