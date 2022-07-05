<template>
	<ul>
		<li v-for="t in task" :key="t">
			<span> {{ t }} </span>
		</li>
	</ul>
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
					}
				))
		}
	},
	created() {
		this.getTask()
		document.title = "Task List";
	}
}
</script>