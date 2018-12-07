<template>
    <div class="test">
        <h1>{{title}}</h1>
        <p>{{user.first_name}}</p>
        <p v-text="user.last_name"></p>
    </div>
</template>


<script>
    export default {
        name: 'test',
        data() {
            return {
                title: 'Hello World',
                user: {
                    first_name: 'Loy',
                    last_name: 'Hernandez'
                }
                
            }
        }
    }
</script>


<style scoped>
</style>