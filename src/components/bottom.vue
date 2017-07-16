<template>
	<div class='bottom'>
		<div class='foot_box'>
			<img :src="img+'/message_c.png'" class="icon">
			<div>消息</div>
		</div>
		<div class='foot_box'>
			<img :src="img+'/mid.png'" class="icon">
			<div>联系人</div>
		</div>
		<div class='foot_box'>
			<img :src="img+'/star.png'" class="icon">
			<div>动态</div>
		</div>
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
	.icon{
		width:60px;
	}
	.bottom{
		font-size:0;
		height:110px;
		width:100vw;
		background: #fff;
		border-top:solid 1px #ababab;
		position: fixed;
		bottom:0;
	}
	.foot_box{
		width:33.3%;
		display: inline-block;
		height:100%;
		text-align: center;
		padding-top:10px;
		font-size:20px;
	}
</style>
