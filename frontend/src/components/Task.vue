<template>
	<li v-for="t in task">
		<input type="checkbox" v-model="t.isDone">
			<span> {{ t.title }} </span>
			<v-btn icon color="pink" v-on:click="deleteTask(index)">
				<v-icon>mdi-close</v-icon>
			</v-btn>
		</input>
	</li>
</template>


<script>
import axios from 'axios'
//import { apiService } from "../common/api.service.js"
export default {
	data() {
		return {
			task: [],
		}
	},
	methods: {
		getTask() {
			axios
				.get('http://127.0.0.1:8000/api/task/')
				.then(response => (
					this.task = {
						title: response.data.results,
						isDone: false
					}
				))
		},
		deleteTask(index) {
			this.task.splice(index,1)
		}
	},
	created() {
		this.getTask()
		document.title = "Task List";
	}
}
</script>