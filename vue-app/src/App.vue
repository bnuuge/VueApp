<template>
  <div>
    <HelloMessage :msg="msg"/>
    <button @click="updateHelloMessage">Click Me</button>
  </div>
</template>

<script>
import HelloMessage from './components/HelloMessage.vue'

export default {
  name: 'App',
  components: {
    HelloMessage
  },
  data() {
    return {
      // Counter to change message
      counter: 0,
      // All messages able to be displayed
      msgs: ["Hello CircleCI", "Thank you very much", "For giving me this opportunity!"], 
      // Default message
      msg: 'Hello CircleCI',
    }
  },
  methods: {
    updateHelloMessage() {
      // Counter to change message
      this.counter+=1;

      // Counter to reset message
      if(this.counter == this.msgs.length){
        this.counter=0;
      }
      
      // Update message returned
      return this.msg=this.msgs[this.counter];
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

button {
  background-color: #5555;
}
</style>
