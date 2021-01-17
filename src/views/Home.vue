<template>
  <div class="home">
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      countries: []
    }
  },
  async mounted () {
    const res = await fetch('https://restcountries.eu/rest/v2/all')
    this.countries = await res.json()
  }
}
</script>
