<template>
    <div class="users">
        {{ users }}
        <user-item 
            class="user"
            v-for="(user, idx) of users"
            :key="idx"
            :user="user"
        >
            {{ user.name }}
        </user-item>
    </div>
</template>

<script>
import UserItem from '@/components/UsersItem.vue'

export default {
    components: {
        UserItem
    },

    props: {
        users: {
            type: Array,
            required: true,
        }
    }
}
</script>

<style scoped>

</style>