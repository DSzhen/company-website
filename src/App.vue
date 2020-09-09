
<template>
  <div id="app">
    <Container />
  </div>
</template>

<script>
import Container from './views/Container/Container';
export default {
  name: 'App',
  components: {
    Container
  }
}
</script>
<style>
body,html{
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
}
#app{
  height: 100%;
  width: 100%;
}
</style>
