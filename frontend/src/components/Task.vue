<template>
    <div class="tasks_container">
        <div class="tasks_content">
            <ul class="tasks_list">
                <li v-for="t in task" :key="t.id">
                    <h2>{{ t.title }}</h2>
                </li>
            </ul>
        </div>
    </div>
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
			.then(response => (this.task = response.data.results))

			//let endpoint = "/api/task/";

			//apiService(endpoint).then(data => {
			//	this.task = data
			//})	
		}
	},
	created() {
		this.getTask()
		document.title = "Task List";
	}
}
</script>