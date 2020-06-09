<!--
 * @Descripttion: 
 * @version: 
 * @Author: huangziting
 * @Date: 2020-06-06 17:33:09
 * @LastEditTime: 2020-06-09 10:51:53
--> 
<template>
	<view class="login-wrapper">
		<view class="login-title">
			<text>个人自主挂牌会员登录</text>
		</view>
		<view class="login-info-context">
			<view class="login-info-form" :model="form" ref="form">
				<view class="login-type-box">
					<view class="uni-form-item uni-column" v-if="loginType === '0'">
						<image src="/static/images/type.png">
					  <input class="uni-input" focus placeholder="登录类型" placeholder-class="placeholder" />
          </view>
					<view class="uni-form-item uni-column" v-if="loginType === '1' || type === '0'">
						<image src="/static/images/certificate.png">
						<input class="uni-input" placeholder="请输入证件号码" placeholder-class="placeholder" v-model="form.username" />
          </view>
					<view class="uni-form-item uni-column" v-if="loginType === '1' || type === '1' ">
						<image src="/static/images/mobile.png">
						<input class="uni-input" type="number" placeholder="请输入手机号码" placeholder-class="placeholder" v-model="form.mobile"/>
          </view>
					<view class="uni-form-item uni-column" v-if="loginType === '0'">
						<image src="/static/images/password.png">
						<input class="uni-input" password type="text" placeholder="请输入登录密码" placeholder-class="placeholder" v-model="form.password" />
					</view>
					<view class="uni-form-item uni-column" v-if="loginType === '1'">
						<image src="/static/images/code.png">
						<input class="uni-input" type="number" placeholder="请输入手机验证码" placeholder-class="placeholder" v-model="form.code" />
						<view class="login-mobile-code" @tap="sendCode">{{codeText}}</view>
					</view>
				</view>
				<view class="login-button-container">
					<button class="login-button" type="primary" @tap="login()">登录</button>
				</view>
			</view>
		</view>
		<view class="login-tip">
			<view class="login-type-tip" @tap="changeLoginType">{{loginText}}</view>
			<view class="login-forgot-password">忘记密码</view>
			<view @tap="register">马上注册</view>
		</view>
	</view>
</template>

<script>
 	import context from '../../context/'
	const { http } = context.factory
	const { url } = context.constant
	export default {
		data() {
			return {
				form: {
					username: '',
					mobile: '13530630669', //13530630669
					code: '',
					password: ''
				},
				loginUrl: '',
				loginType: '1',
				type: '1',
				codeText: '获取验证码',
				loginText: '账号密码登录',
				sendStatus: false,
			}
		},
		methods: {
			
			// 注册
			register() {
				uni.navigateTo({url:'../../pages/register/register'})
			},

			changeLoginType() {
				if (this.loginType === '1') {
					this.loginText = '账号密码登录'
					this.loginType = '0'
				}else {
					this.loginText = '手机验证码登录'
					this.loginType = '1'
				}
			},

			login() {
				// let url = '/api/FanChan/Default/LoginToken' // 身份证 + 密码 登录接口
				let url = '/api/FanChan/Default/LoginTokenByPhone' // 手机号码 + 密码 登录接口
				// let url = '/api/FanChan/Default/LoginTokenDiyZjhmPhone' // 手机号码 + 验证码 登录接口
				
				let data = {}
				if (this.loginType === '0') {
					if(this.type === '0') { // 身份证 + 密码 登录接口
						if(!this.form.username) {
							uni.showToast({title:'请输入证件号码'})
							return
						}
						if(!this.form.password) {
							uni.showToast({title:'请输入登录密码'})
							return
						}
						this.form.password = this.$md5(this.form.password)
						data = (({password, username}) => ({password, username}))(this.form)
					}else { //手机号码 + 密码 登录接口
						if(!this.form.mobile) {
							uni.showToast({title:'请输入手机号码'})
							return
						}
						if(!this.form.password) {
							uni.showToast({title:'请输入登录密码'})
							return
						}
						this.form.password = this.$md5(this.form.password)
						data = (({password, mobile}) => ({password, mobile}))(this.form)
					}
				} else { //手机号码 + 验证码 登录接口
					if(!this.form.mobile) {
						uni.showToast({title:'请输入手机号码'})
						return
					}
					if(!this.form.code) {
						uni.showToast({title:'请输入验证码'})
						return
					}
				 	data = (({code, mobile}) => ({code, mobile}))(this.form) 
				}
				debugger
				http.post(url, data).then((res) => {
					debugger
				}).catch((err) => {
					console.log(err)
				})

			},

			sendCode() {
				if(!this.form.mobile) {
					uni.showToast({title:'请输入手机号码'})
				}
				if(this.sendStatus) return
				let url = '/api/FanChan/Default/GetSms'
				http.get(url,{
					phone: this.form.mobile
				}).then((res) => {
					let data = res.data;
					if (data.code === 400) {
						uni.showToast({title: data.info})
						return
					}
					this.sendStatus = true
					let time = 120
					let handler = setInterval(() => {
						if (time > 0) {
							time = time - 1 
							this.codeText = '请等候(' + time + ')秒'
						}else{
							clearInterval(handler);
							this.codeText = '获取验证码'
							this.sendStatus = false
						}
					}, 1000)
					
				}).catch((err) => {
					console.log(err)
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.login-wrapper {
		.login-title {
			display: flex;
			align-items: center;
			font-size: 40rpx;
			box-sizing: border-box;
			width: 100%;
			padding: 0 40rpx;
			font-weight: bold;
			height: 200rpx;
		}

		.login-info-context {
			border-top: solid 1px #F2F2F2;
			// box-shadow: 0 0 3px 3px rgba($color: #f2f2f2, $alpha: .5);
			box-sizing: border-box;
			width: 100%;
			padding: 0 40rpx;
			font-size: 32rpx;
			.login-info-form {
				.login-type-box {
					.uni-form-item {
						display: flex;
						border-bottom: solid 1px #F2F2F2;
						margin-top: 20rpx;
						align-items: center;
						flex-direction: row;
						.uni-input {
							flex: 1;
							width: 40%;
						}
						image {
							height: 44rpx;
							width: 44rpx;
						}
						.login-mobile-code {
							border: solid 1px #cccccc;
							padding: 0 30rpx;
							color: #cccccc;
							border-radius: 30rpx;
						}
					}
				}
				.login-button-container {
					margin-top: 30rpx;
					.login-button {
						border-radius: 50rpx;
						background-color: #1296db;
					}
				}
				
			}
		}
		.login-tip {
			display: flex;
			align-items: center;
			justify-content: center;
			margin-top: 20rpx;
			color: #666;
			.login-type-tip {
				margin-right: 30rpx;
			}

			.login-forgot-password {
				margin-right: 30rpx;
			}
		}
	}
	.placeholder {
			color: #cccccc;
			font-size: 30rpx;
	}
</style>
