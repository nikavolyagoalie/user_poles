<template>
  <div class="user">
    {{ num }}
    <div>
      <div>{{ user.id }}</div>
      <div><strong>Название </strong>{{ user.name }}</div>
    </div>
    <div class="post__btns">
      <button @click="openProfile(user.id)">Открыть</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },

  computed: {
    num: {
      get() {
        return this.$store.state.num;
      },
      set(value) {
        this.$store.commit('setNum', value)
      },
    },
  },

  methods: {
    openProfile(id) {
      this.$router.push(`/${id}`);
      this.num = id
      console.log(this.num)
      // this.$store.commit('setNum', 5)
    }
  }
};
</script>

<style scoped>
</style>