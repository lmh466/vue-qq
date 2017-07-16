<template>
	<div class='head'>
		<div class='avatar'></div>
		<div class='mid'>
			<div class='message' v-on:click='tab_cl' v-bind:class='{choose : tab}'>消息</div>
			<div class='phone' v-on:click='tab_cl' v-bind:class='{choose : !tab}'>电话</div>
		</div>
		<img :src="img+'/add2.png'" class="add">
	</div>
</template>

<script>
	import img from '../config-js/config_js.js'

	export default{
		name:'',
		data(){
			return {
				img : img.address,
				tab : 1
			}
		},
		methods:{
			tab_cl:function(){
				this.tab = !this.tab;
			}
		}
	}
</script>

<style>
	.head{
		background: #26b8f2;
		width:100vw;
		height:100px;
		text-align: center;
		position: relative;
	}
	.avatar{
		background:#10aaf2;
		width:70px;
		height:70px;
		border-radius: 100%;
		display: inline-block;
		position: absolute;
		top:15px;
		left:20px;
	}
	.add{
		width:70px;
		position: absolute;
		top:15px;
		right:20px;
	}
	.mid{
		display: inline-block;
		font-size:0;
	}
	.message,.phone{
		display: inline-block;
		font-size:28px;
		width:150px;
		height:60px;
		line-height: 60px;
		margin-top:20px;
		color:#fff;
		border:solid 1px #fff;
	}
	.message{
		border-top-left-radius: 10px;
		border-bottom-left-radius: 10px;
	}
	.phone{
		border-top-right-radius: 10px;
		border-bottom-right-radius: 10px;
	}
	.choose{
		background: #fff;
		color:#13b6f7;
	}
</style>