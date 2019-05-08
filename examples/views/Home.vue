<template>
  <div class="home">
    <calendar/>
  </div>
</template>

<script>
// @ is an alias to /src
import Calendar from '~/index.js'

export default {
  name: 'home',
  components: {
    Calendar
  }
}
</script>
