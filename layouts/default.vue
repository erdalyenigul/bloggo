<template>
  <div class="containerAll">
    <div class="container">
      <appHeader></appHeader>
      <nuxt />
      <appFooter></appFooter>
    </div>
  </div>
</template>

<script>
import header from '@/components/header';
import footer from '@/components/footer';

export default {
  components: {
    appHeader: header,
    appFooter: footer,
  }
}
</script>

