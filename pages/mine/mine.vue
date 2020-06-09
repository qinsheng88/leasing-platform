<!--
 * @Descripttion: 
 * @version: 
 * @Author: huangziting
 * @Date: 2020-06-01 19:03:11
 * @LastEditTime: 2020-06-09 09:48:17
--> 
<template>
  <view class="mine-container">
    <!-- 头部 -->
    <view class="mine-title">
      <view class="mine-context">
        <view class="mine-head-pic">
          <image src="/static/images/head.png"/>
        </view>
        <view class="mine-info-context">
          <view class="mine-info-name"></view>
          <view class="mine-info-name">张大哥</view>
        </view>
      </view>
    </view>

    <!-- 页签 -->
    <view class="uni-padding-wrap uni-common-mt">
			<uni-segmented-control :current="current" :values="items" :style-type="styleType" :active-color="activeColor" @clickItem="onClickItem" class=""/>
		</view>
		<view class="content">
      <view class="mine-item">
        <view class="list-cell b-b b-t" v-if="changeRole === 0">
          <text class="cell-tit">个人资料1</text>
          <uni-icons class="cell-arrow-right" type="arrowright" size="20" color="#909399"></uni-icons>
        </view>
        <view class="list-cell b-b b-t" v-if="changeRole === 1">
          <text class="cell-tit">个人资料2</text>
          <uni-icons class="cell-arrow-right" type="arrowright" size="20" color="#909399"></uni-icons>
        </view>
        <view class="list-cell b-b">
          <text class="cell-tit">申请自主挂牌</text>
          <uni-icons class="cell-arrow-right" type="arrowright" size="20" color="#909399"></uni-icons>
        </view>
        <view class="list-cell">
          <text class="cell-tit">我的自主挂牌</text>
          <uni-icons class="cell-arrow-right" type="arrowright" size="20" color="#909399"></uni-icons>
        </view>
        <view class="list-cell">
          <text class="cell-tit">合同确认</text>
          <uni-icons class="cell-arrow-right" type="arrowright" size="20" color="#909399"></uni-icons>
        </view>
        <view class="list-cell b-b">
          <text class="cell-tit">合同注销</text>
          <uni-icons class="cell-arrow-right" type="arrowright" size="20" color="#909399"></uni-icons>
        </view>
        <view class="list-cell b-b">
          <text class="cell-tit">我的合同管理</text>
          <uni-icons class="cell-arrow-right" type="arrowright" size="20" color="#909399"></uni-icons>
        </view>
        <view class="list-cell">
          <text class="cell-tit">我的预约管理</text>
          <uni-icons class="cell-arrow-right" type="arrowright" size="20" color="#909399"></uni-icons>
        </view>
        <view class="list-cell b-b">
          <text class="cell-tit">我的评价</text>
          <uni-icons class="cell-arrow-right" type="arrowright" size="20" color="#909399"></uni-icons>
        </view>
        <view class="list-cell b-b">
          <text class="cell-tit">我的咨询投诉</text>
          <uni-icons class="cell-arrow-right" type="arrowright" size="20" color="#909399"></uni-icons>
        </view>
      </view>
		</view>

    <view class="mine-logout" @click="toLogout">
      <view class="logout-button">退出登录</view>
    </view>
  </view>
</template>

<script>
export default {
  components: {

  },
  data() {
    return {
      items: ['个人', '房东'],
      current: 0,
      styleType: 'button',
      activeColor: '#1296db',
      changeRole: 0 // 0-个人， 1-房东
    }
  },
  methods: {
    onClickItem(e) {
      if (this.current !== e.currentIndex) {
        this.current = e.currentIndex
      }
      e.currentIndex === 1 ? this.changeRole = 1 : this.changeRole = 0
    },

    toLogout() {
      console.log('logout')
    }
  }
}
</script>

<style scoped lang="scss">
  .mine-container {
    .mine-title {
      background-color:#f5f5f5;
      height: 230rpx;
      .mine-context{
        background-color: #ffffff;
        border-bottom-left-radius: 20rpx;
        border-bottom-right-radius: 20rpx;
        box-shadow: 0 0 3px 3px rgba($color: #f5f5f5, $alpha: .5);
        height: 200rpx;
        display: flex;
        align-items: center;
        padding: 0 40rpx;
        box-sizing: border-box;
        .mine-head-pic {

          image {
            height: 100rpx;
            width: 100rpx;
            border-radius: 52rpx;
          }
        }
        .mine-info-context {
          flex: 1;
          height: 100%;
          box-sizing: border-box;
          margin-left: 10rpx;
          display: flex;
          flex-direction: column;
          justify-content: start;
          padding: 0 20rpx;
          .mine-info-name {
            height: 70rpx;
          }
        }

      }
    }

    .list-cell{
      display:flex;
      align-items:baseline;
      padding: 20rpx 0;
      line-height: 60rpx;
      position: relative;
      background: #fff;
      justify-content: center;
      margin-left: 40rpx;
      border-bottom: #f2f2f2 solid 1px;
      color: #303133;
      .cell-arrow-right {
        margin-right: 20rpx;
      }
      .cell-tit{
        flex: 1;
        font-size: $font-base + 2rpx;
        color: $font-color-dark;
        margin-right:10rpx;
      }
      .cell-tip{
        font-size: $font-base;
        color: $font-color-light;
      }
    }

    .mine-logout {
      margin: 40rpx 0;
      .logout-button {
        height: 100rpx;
        line-height: 60rpx;
        box-sizing: border-box;
        padding: 20rpx 30rpx;
        text-align: center;
        color: #1296db;
        border-radius: 60rpx;
        border: solid 1px #1296db;
        margin: 0 88rpx;
      }
    }
  }
  .b-t {
    margin-top: 30rpx;
    border-top: #f2f2f2 solid 1px;
  }
</style>
