<template>
    <div class="test">
        <h1>{{ msg }}</h1>
        <router-link to="/test1">test1ページ</router-link>
    </div>
</template>
 
<script>
export default {
    name: 'test',
    data() {
        return {
            msg: 'です'
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