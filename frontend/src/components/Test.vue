<template>
    <div class="test">
        <h1>{{ msg }}</h1>
        <router-link to="/">Home</router-link>
        <router-link to="/test">testページ</router-link>        
    </div>
</template>
 
<script>
    export default {
        name: 'test',
        data () {
            return {
                msg: 'テストページです'
            }
        }
    }
</script> 

<style scoped>
    h1 {
        margin: 40px 0 0;
        color: #41B883;
    }
 
    a {
        color: #41B883;
    }
</style>