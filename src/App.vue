<template>
  <menubar :model="items">
    <template #start>
        Where in the World?
    </template>
    <template #end>
        Dark Mode
    </template>
  </menubar>

  <router-view/>
</template>

<script>

export default {
  components: {
  },
  data () {
    return {
      items: []
    }
  }
}
</script>
