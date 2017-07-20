<template>
	<div class='send' >
		<div class="s_header">
			<img src="../../static/img/back2.png" class="s_left" v-on:click="goback">
			<div class="s_mid">
				图灵聊天机器人
			</div>
			<img src="../../static/img/person.png" class="s_right">
				
			
		</div>
		<div class="scroll" id="scroll">
		<div class="s_main" v-for="item in msg">
			<div class="s_my" v-if="item.my!=''">
				<div class="my_content">{{item.my}}</div>
				<img src="../../static/img/avatar.png" class="my_avatar">
			</div>
			<div class="s_yt" v-if="item.yt!=''">
				<img src="../../static/img/avatar.png" class="my_avatar">
				<div class="yt_content">
					{{item.yt}}
				</div>
			</div>
		</div>

		</div>
		<div class="s_bottom">
			<input type="text" class="s_input" v-model="content">
			<div class="s_btn" v-bind:class="{ s_active: isActive }" v-on:click="send()">发送</div>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue'


	export default{
		data(){
			return{
				isActive:false,
				content:'',
				msg:[
					{
						my:'',
						yt:'你好，我可以陪你聊天的'
					}
				],
				sval:""
			}
		},
		watch:{
			content:function(res){
				if(res==''){
					this.isActive=false
				}else{
					this.isActive=true;
				}
			},
			msg:function(res) { 
				  document.getElementById('scroll').scrollTop = document.getElementById('scroll').scrollHeight;
    		}
		},
		methods:{
			send:function(){
				var data={
					my:this.content,
					yt:""
				};

				this.msg.push(data);
				this.getData();
				this.content="";
			},
			goback :function() {
		      this.$router.goBack()
		    },
			getData: function() {
				var vm = this;
		      this.$http.post('http://www.tuling123.com/openapi/api',
		          {
						key:'50f58f02b338442fba7feffbdeb03c15',
						info:vm.content
		          },
		          {
		            headers:{

		            },
		            emulateJSON: true
		          }
		      ).then((res) => {
		        
		        var msg = res.body.text;
		        	var data={
					my:"",
					yt:msg
				};

				vm.msg.push(data);
				
		      }).catch(function(response) {
		      	var data={
					my:"",
					yt:"由于图灵机器人没有获取公网信任证书https，所以在github上面的没有办法陪你聊天，download下来之后，npm install即可陪你聊天了"
			};
		        	vm.msg.push(data);
		      });
		    }	
		},

	}
</script>

<style>
	*{
		padding:0;
		margin:0;
	}
	html,body,#app{
		height:100%;
	}
	.send{
		background: #f0f2f8;
		height:100%;
	}
	.scroll{
		overflow: scroll;
		background: #f0f2f8;
		padding-bottom:220px;
		padding-top:120px;
		height:90%;
		box-sizing: border-box;
	}
	.s_header{
		background: #26b8f2;
		width: 100%;
		height: 100px;
		text-align: center;
		position: fixed;
		top:0;
	}
	.s_left{
		position: absolute;
		width:70px;
		height:70px;
		top:15px;
		left:20px;
	}
	.s_right{
		width:70px;
		height:70px;
		position: absolute;
		top:15px;
		right:20px;
	}
	.s_mid{
		padding-top:20px;
		font-size:40px;
		color:#fff;
	}
	.s_bottom{
		position: fixed;
		bottom:0;
		width:100%;
		height:100px;
		font-size:0;
		padding:0 2%;
	}
	.s_input{
		width:80%;
		height:100px;
		font-size:36px;
		background: #fff;
		border:none;
		border-radius: 5px;
	}
	.s_btn{
		display: inline-block;
		width:14%;
		color:#fff;
		font-size:34px;
		background: #dddee2;
		height:100%;
		vertical-align: top;
		margin-left:1.5%;
		text-align: center;
		line-height: 100px;
		border-radius: 20px;
	}
	.s_active{
		background: #10b5f6;
	}
	.s_my{
		text-align: right;
		margin-top:42px;
		margin-right:27px;
	}
	.my_avatar{
		width:120px;
		height:120px;
		vertical-align: middle;
	}
	.my_content{
		min-height: 100px;
		margin-right: 20px;
		background: #10b5f6;
		display: inline-block;
		vertical-align: top;
		color:#fff;
		font-size:40px;
		padding:30px 20px;
		border-radius:20px;
		box-sizing: border-box;
		max-width: 50%;
		white-space: normal;
		word-wrap:break-word ;
		text-align:left;
	}
	.s_yt{
		text-align: left;
		margin-top:42px;
		margin-left:27px;
	}
	.yt_content{
		margin-left: 20px;
		background: #10b5f6;
		display: inline-block;
		vertical-align: top;
		color:#fff;
		font-size:40px;
		padding:30px 20px;
		border-radius:20px;
		box-sizing: border-box;
		max-width: 50%;
		white-space: normal;
		word-wrap:break-word ;
		text-align:left;
	}
</style>
