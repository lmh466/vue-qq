<template>
	<div class='main'>
		<left v-bind:style="{ 'transform': 'translate3d(' + swiping + '%, 0, 0)' }"></left>
	<div class='index' v-on:touchstart="view_start()" v-on:touchmove="view_move()" v-on:touchend="view_end()" v-bind:style="{ 'transform': 'translate3d(' + in_swiping + 'vw, 0, 0)' }">
		<headers></headers>
		<div class='search'>
			<img src="../../static/img/glass.png" class="glass">
			<span class='search-tit'>搜索</span>
			<div class='slider_f5'>下拉刷新....</div>
		</div>
		<div class="all_card" v-on:touchstart='all_start()' v-on:touchmove='all_move()' v-on:touchend='all_end()'  
			v-bind:style="{ 'transform': 'translate3d(0,' + all_swiping + 'px, 0)' }">

			<div class='card' v-on:touchstart='start(index,this.event)' v-on:touchmove='move(index,this.event)' v-on:touchend='end(index,this.event)'  
			v-bind:style="{ 'transform': 'translate3d(' + item.swiping + 'px, 0, 0)' }" v-for="(item,index) in items" >
				<router-link to="/send.html">
				<div class='list'>
					<img src="../../static/img/avatar.png" class="user-p">
					<div class='user-n'>
						<div class='user-name'>{{item.name}}</div>
						<div class='user-content'>{{item.content}}</div>
					</div>
					<div class='l-right'>
						<div>{{item.time}}</div>
						<div class='l-circle' v-if="item.num>0">{{item.num}}</div>
					</div>
				</div>
				</router-link>
				<div class='slider'>
					<div class='to-top' v-on:click="top(index)">置顶</div>
					<div class='delete' v-on:click="del(index)">删除</div>
				</div>
			</div>
			
		</div>
		<bottoms></bottoms>
	</div>
	</div>
</template>

<script>
	import Vue from 'vue'
  	import headers from './header.vue'
  	import bottoms from './bottom.vue'
  	import left from './left.vue'
  	import slider from '../config-js/slider.js'
  	import item from '../config-js/config_js.js'

	var startX, startY;
	var endX, endY;
	var distanceX, distanceY;

	export default{
		name:'index',
		components:{
			'headers':headers,
			'bottoms':bottoms,
			'left':left
		},
		data(){
			return {
				isActive:false,
				slider:slider.slider,
				swiping:-100,
				in_swiping:-100,
				all_swiping:0,
				isPed:true,
				isTed:true,
				items:item.item
			}
		},
		methods:{
			start:function(index,event){	
				this.slider.index = index;  this.slider.event = event;  this.slider.start(this);
				this.isTed=true;
				if(this.swiping==-20){
					this.isTed=false;
				} 
			},
			move:function(index,event){	
				function li_move(distance,data,index){
					   if(distance>0){ //右划
			                            if(data.items[index].swiping<0){ //拉出状态
			                                if(distance>340){
			                                    data.items[index].swiping=340;
			                                }else{
			                                    data.items[index].swiping+= distance;
			                                }
			                  
			                            }else{
			                                //this.swiping = distance;
			                            }
			                        }else{ //左滑   
			                            if(data.items[index].swiping<=0&&data.isTed){ 
			                                if(distance<-340){
			                                    data.items[index].swiping = -340;
			                                }else if(distance==-340){

			                                }else{
			                                    if(data.items[index].swiping>-340){
			                                        data.items[index].swiping+= distance;
			                                    }
			                     
			                                }
			                            }else if(data.isTed){
			                                data.items[index].swiping+= distance;
			                            }
			                        }
				}
				this.slider.index = index;  this.slider.event = event;  var dis = this.slider.move(this);
				var data = this;
				li_move(dis,data,index);

				
			},
			end:function(index,event){ 
				this.slider.index = index;  this.slider.event = event;  this.slider.end(this);
				           	       if (this.items[index].swiping<-170) {
				                        this.items[index].swiping=-340;
				                    }else{
				                        this.items[index].swiping=0;
				                    }
			},
			view_start:function(){ 
				this.slider.index = '';  this.slider.event = event;  this.slider.start(this);
					this.isPed = true;
				   		for(var i in this.items){
				   			if(this.items[i].swiping!=0){
				   				this.isPed = false;
				   			}
				   		}				
			},
			view_move:function(){
				this.slider.index = '';  this.slider.event = event;  this.slider.move(this);			      
			},
			view_end:function(){
				this.slider.index = '';  this.slider.event = event;  
				var distance = this.slider.end(this);
				if(distance<0){
					var that = this;
					var isPed = true;
				   		function m(){
				   			that.swiping-=5;
				   			that.in_swiping-=5;
				   			if(that.swiping<=-100){

				   			}else{
							setTimeout(m,10)
				   			}
				   			
				   		}
				   		for(var i in this.items){
				   			if(this.items[i].swiping!=0){
				   				isPed = false;
				   			}
				   		}
				   		if(that.swiping==-20&&this.isPed){
				   			m();
				   		}

				}else if(distance>0){
					var that = this;
					var isPed = true;
				   		function m(){
				   			that.swiping+=5;
				   			that.in_swiping+=5;
				   			if(that.swiping>=-20){

				   			}else{
								setTimeout(m,10)
				   			}
				   			
				   		}
				   		for(var i in this.items){
				   			if(this.items[i].swiping!=0){
				   				isPed = false;
				   			}
				   		}			   		
				   		if(that.swiping==-100&&this.isPed){
				   			
				   			m();
				   		}
				}
		
			},
			all_start:function(){
				this.slider.index = '';  this.slider.event = event;  this.slider.start(this);
			},
			all_move:function(){
				this.slider.index = '';  this.slider.event = event;  
				var distance = this.slider.moveY(this);
				if(distance>0){
					if(distance>400){
						this.all_swiping = 400;
					}else{
						this.all_swiping = distance;
					}
					
				}
			},
			all_end:function(){
				if(this.all_swiping!=0){
					this.all_swiping=0;
				}
			},
			del:function(index){
				this.items.splice(index, 1);
			},
			top:function(index){
				var arr = this.items;
				var new_item = arr.splice(index, 1);
				
				arr.unshift(new_item[0]);
				arr[0].swiping = 0;
			}
		}
	}
</script>

<style>
	*{
		padding:0;
		margin:0;
	}
	html{
		height:100%;
	}
	body{
		height:100%;
	}
	#app{
		height:100%;
	}
	.index{
		display: inline-block;
		transform:translate3d(-100vw,0,0);
		height:100%;
	}
	.main{
		overflow: hidden;
		white-space:nowrap;
		font-size:0;
		height:100%;
	}
	.card{
		font-size:0;
		width:auto;
		
		white-space:nowrap;
		
	}
	.search{
		width:90vw;
		display: inline-block;
		height:60px;
		background: #f3f3f3;
		margin-left:5vw;
		margin-top:10px;
		border-radius: 10px;
		text-align: center;
		margin-bottom:14px;
		position: relative;
	}
	.slider_f5{
		position: absolute;
		width: 100%;
		height: 50px;
		font-size: 34px;
		bottom: -70px;
		z-index: 2;
	}
	.all_card{
		position: relative;
		z-index: 10;
		background: #fff;
		overflow-y: scroll;
		height:80%;
	}
	.glass{
		height:38px;
		margin-top:11px;
		vertical-align: middle;
		margin-right:5px;
	}
	.search-tit{
		font-size:32px;
		color:#c4c4c4;
		vertical-align: middle;
		margin-top:12px;
		display: inline-block;
	}
	.list{
		display: inline-block;
		width:100vw;
		height:130px;
		padding:15px 5%;
		box-sizing: border-box;
		font-size:0;
		vertical-align: middle;
		border-bottom:solid 1px #e7e7e7;
	}
	.user-p{
		width:100px;
		vertical-align: middle;
		margin-right:22px;
	}
	.user-n{
		display: inline-block;
		font-size:20px;
		vertical-align: middle;
	}
	.user-name{
		font-size:34px;
		color:#000;
		margin-bottom:10px;
	}
	.user-content{
		font-size:24px;
		color:#7b7b7b;
	}
	.l-right{
		float:right;
		color:#b1b1b1;
		font-size:22px;
		margin-top:18px;
	}
	.l-circle{
		width:30px;
		height:30px;
		border-radius: 100%;
		background: #fb4c2f;
		color:#fff;
		text-align: center;
		line-height: 30px;
		margin-left:40px;
		margin-top:5px;
	}
	.slider{
		display: inline-block;
		height:130px;
		width:340px;
		color:#fff;
		vertical-align: middle;
		line-height: 130px;
		text-align: center;
	}
	.to-top{
		font-size:28px;
		background: #c8c7cf;
		width:170px;
		display: inline-block;
	}
	.delete{
		font-size:28px;
		display: inline-block;
		background: #ff3b32;
		width:170px;
	}
</style>