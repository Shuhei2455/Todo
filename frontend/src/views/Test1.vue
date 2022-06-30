<template>
    <div class="test1">
        <h1>{{ msg }}</h1>
    </div>
</template>
 
<script>
export default {
    name: 'test1',
    data() {
        return {
            msg: 'test1です'
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