<template>
	<v-app>
		<v-contener class="spacing-playground pa-5">
			<v-row v-for="t in task" :key="t.id" class="spacing-playground pa-1">
				<v-card hover >
					<v-card-title>{{ t.title }}</v-card-title>
				</v-card>
			</v-row>
		</v-contener>
	</v-app>
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
					this.task = response.data.results
				))
		}
	},
	created() {
		this.getTask()
		document.title = "Task List";
	}
}
</script>