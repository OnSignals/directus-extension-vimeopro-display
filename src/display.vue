<template>
  <span class="wrapper">
    <img :src="thumbnailSrc" class="image" v-if="thumbnailSrc" />
    <span class="title">{{ name }}</span>
  </span>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: null,
    },
  },
  computed: {
    name() {
      return this.value?.name || null;
    },

    thumbnailSrc() {
      return this.value?.pictures?.sizes?.[0]?.link || null;
    },
  },
};
</script>

<style scoped>
.wrapper {
  display: inline-block;
  height: 100%;
}

.image {
  display: inline-block;
  vertical-align: middle;

  height: 100%;
  aspect-ratio: 1;
  margin: 0 12px 0 0;
  object-fit: cover;

  border-radius: var(--border-radius);
}

.title {
  max-width: 8em;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: var(--foreground-subdued);
}
</style>
