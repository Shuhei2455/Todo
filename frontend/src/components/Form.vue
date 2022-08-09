<template>
    <v-text-field 
        background-color="grey lighten-1" 
        dense 
        flat 
        hide-details 
        solo
        v-model="title"
        v-on:keydown.enter="addTask"
    >
    </v-text-field>
</template>
 
<script>
import axios from 'axios'
//import Task from "./components/Task.vue"
export default {
	data() {
		return {
            title: '',
            completed: 'False'
		}
	},
	methods: {
		addTask() {
			axios
				.post('http://127.0.0.1:8000/api/task/', {
                    title: this.title,
                    completed: this.completed
                }).then(
					alert('登録しました')
				)
            //getTask()
		}
	},
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