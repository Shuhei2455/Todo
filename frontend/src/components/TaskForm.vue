<template>
  <v-text-field
    background-color="grey lighten-1"
    v-model="task.title"
		@keydown.enter="submit"
    dense
    flat
    hide-details
    solo
  ></v-text-field>
</template>

<script>
export default {
	data() {
		return {
			task: {
				title: ''
			}

		}
	},
	methods:{
		submit() {
			this.$emit('parentMethod', this.task)
			this.task.title = ''
			//console.log(this.task)
		}
	}

}
</script>
		@keydown.enter="submit"
