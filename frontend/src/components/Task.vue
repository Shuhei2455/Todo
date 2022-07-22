<template>
	<ul>
		<li v-for="t in tasks" :key="t.id">
			{{ t.title}}
		</li>
	</ul>
</template>


<script>

//import { apiService } from "../common/api.service.js"
export default {
		name : 'Task',
		props : {
			tasks: Object
		}
}
</script>
