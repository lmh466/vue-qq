<template>
	<div class='left' >
		123
	</div>
</template>

<script>
	import img from '../config-js/config_js.js'

	export default{
		name:'',
		data(){
			return {
				img : img.address
			}
		}
	}
</script>

<style>
	.left{
		width:100%;
		height:100vh;
		background: red;
		display: inline-block;
		transform:translate3d(-100%,0,0);
		vertical-align: top;
	}
</style>
