<!--
 * @Descripttion: 
 * @version: 
 * @Author: huangziting
 * @Date: 2020-06-01 18:52:08
 * @LastEditTime: 2020-06-04 19:18:08
--> 
<template>
  <view>
    <!-- 头部轮播 开始-->
    <view class="carousel-section">
      <!-- 标题栏和状态栏占位符 -->
      <!-- <view class="titleNview-placing"></view> -->
      <!-- 背景色区域 -->
      <!-- <view class="titleNview-background" :style="{backgroundColor:titleNViewBackground}"></view> -->
      <swiper class="carousel" circular @change="swiperChange">
        <swiper-item v-for="(item, index) in carouselList" :key="index" class="carousel-item" @click="navToDetailPage({title: '轮播广告'})">
          <image :src="item.src" />
        </swiper-item>
      </swiper>
      <!-- 自定义swiper指示器 -->
      <view class="swiper-dots">
        <text class="num">{{swiperCurrent+1}}</text>
        <text class="sign">/</text>
        <text class="num">{{swiperLength}}</text>
      </view>
    </view>
    <!-- 头部轮播 结束-->

    <!-- 分类 开始 -->
    <view class="cate-section">
      <view class="cate-item">
        <image src="/static/images/grid-1.png"></image>
        <text>租赁房源</text>
      </view>
      <view class="cate-item">
        <image src="/static/images/grid-2.png"></image>
        <text>租赁机构</text>
      </view>
      <view class="cate-item">
        <image src="/static/images/grid-3.png"></image>
        <text>个人求租</text>
      </view>
      <view class="cate-item">
        <image src="/static/images/grid-4.png"></image>
        <text>集中式公寓</text>
      </view>
    </view>
    <view class="cate-section">
      <view class="cate-item">
        <image src="/static/images/grid-10.png"></image>
        <text>机构榜单</text>
      </view>
      <view class="cate-item">
        <image src="/static/images/grid-7.png"></image>
        <text>政策法规</text>
      </view>
      <view class="cate-item">
        <image src="/static/images/grid-8.png"></image>
        <text>投诉咨询</text>
      </view>
      <view class="cate-item">
        <image src="/static/images/grid-9.png"></image>
        <text>行业动态</text>
      </view>
    </view>
    <!-- 分类 结束-->

    <!-- 资讯 开始 -->
    <view class="info-wrapper">
      <view class="info-container">
        <view class="info-image">
          <image src="/static/images/info.png" >
        </view>
        <view class="info-spit"></view>
        <view class="info-context">
          <view class=""></view>
          <view class=""></view>
        </view>
      </view>
    </view>
    <!-- 资讯 结束 -->

    <!-- 好房优选 开始 -->
    <view class="rent-wrapper">
      <view class="rent-title-wrapper">
        <text class="rent-title">好房优选</text>
        <text class="rent-title-context">一手真实房源，最快，最新，享你所想！</text>
      </view>
      <view class="rent-container">
        <scroll-view class="scroll-view_H" scroll-x="true" @scroll="scroll" scroll-left="0">
          <view class="scroll-view-item_H">
            <view class="rent-image">
              <image src="/static/images/house-demo.jpg">
            </view>
            <view class="rent-title">拱墅优质学区房</view>
            <view class="rent-context">赢在起跑线</view>
          </view>
          <view class="scroll-view-item_H">
            <view class="rent-image">
              <image src="/static/images/house-demo.jpg">
            </view>
            <view class="rent-title">拱墅优质学区房</view>
            <view class="rent-context">赢在起跑线</view>
          </view>
          <view class="scroll-view-item_H">
            <view class="rent-image">
              <image src="/static/images/house-demo.jpg">
            </view>
            <view class="rent-title">拱墅优质学区房</view>
            <view class="rent-context">赢在起跑线</view>
          </view>
          <view class="scroll-view-item_H">
            <view class="rent-image">
              <image src="/static/images/house-demo.jpg">
            </view>
            <view class="rent-title">拱墅优质学区房</view>
            <view class="rent-context">赢在起跑线</view>
          </view>
          <view class="scroll-view-item_H">
            <view class="rent-image">
              <image src="/static/images/house-demo.jpg">
            </view>
            <view class="rent-title">拱墅优质学区房</view>
            <view class="rent-context">赢在起跑线</view>
          </view>
        </scroll-view>
      </view>
    </view>
    <!-- 好房优选 结束 -->

    <!-- 好房优选 开始 -->
    <view class="rent-wrapper">
      <view class="rent-title-wrapper">
        <text class="rent-title">集中式公寓</text>
        <text class="rent-title-context">最优质的集中式公寓信息，都在这里！</text>
      </view>
      <view class="rent-container">
        <scroll-view class="scroll-view_H" scroll-x="true" @scroll="scroll" scroll-left="0">
          <view class="scroll-view-item_H">
            <view class="rent-image">
              <image src="/static/images/house-demo.jpg">
            </view>
            <view class="rent-title">拱墅优质学区房</view>
            <view class="rent-context">赢在起跑线</view>
          </view>
          <view class="scroll-view-item_H">
            <view class="rent-image">
              <image src="/static/images/house-demo.jpg">
            </view>
            <view class="rent-title">拱墅优质学区房</view>
            <view class="rent-context">赢在起跑线</view>
          </view>
          <view class="scroll-view-item_H">
            <view class="rent-image">
              <image src="/static/images/house-demo.jpg">
            </view>
            <view class="rent-title">拱墅优质学区房</view>
            <view class="rent-context">赢在起跑线</view>
          </view>
          <view class="scroll-view-item_H">
            <view class="rent-image">
              <image src="/static/images/house-demo.jpg">
            </view>
            <view class="rent-title">拱墅优质学区房</view>
            <view class="rent-context">赢在起跑线</view>
          </view>
          <view class="scroll-view-item_H">
            <view class="rent-image">
              <image src="/static/images/house-demo.jpg">
            </view>
            <view class="rent-title">拱墅优质学区房</view>
            <view class="rent-context">赢在起跑线</view>
          </view>
        </scroll-view>
      </view>
    </view>
    <!-- 好房优选 结束 -->

    <!-- <swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
    	<swiper-item>
    		<view class="swiper-item">hello1</view>
    	</swiper-item>
    	<swiper-item>
    		<view class="swiper-item">hello</view>
    	</swiper-item>
    </swiper> -->
	 
    <!-- 测试服务端数据 开始 -->
    <view>{{info}}</view>
    <!-- 测试服务端数据 结束 -->


  </view>
</template>

<script>
  import context from '../../context/'
  const { http } = context.factory
  
  export default {
    components: {

    },

    data() {
      return {
        carouselList: [], // 轮播图数组
        titleNViewBackground: '',
        swiperCurrent: 0,
        swiperLength: 0,

        info: '',

        scrollTop: 0,
				old: {
					scrollTop: 0
				}
      }
    },

    onLoad() {
      //this.loadDataDemo();
      this.getCarouselList();
    },
    
    methods: {

      // 请求数据DEMO
      loadDataDemo() {
        let url = '/api/FanChan/FYXXB/GetPageListAllSearch_fyzs'
        http.get(url, {
          pagination: {"page": 1,"rows": 10,"sidx":"up_at", "sord":"desc"},
          queryJson: {"status": 1,"category": 2,"up_status": 2}
        }).then((res) => {
          this.info = res.data.info
        }).catch((err) => {
          console.log(err)
        })
      },

      // 获取轮播图数据
      getCarouselList() {
        let url = '/api/carouseList'
        http.get(url, {})
          .then((res) => {
            this.carouselList = res.data.carouse
            this.titleNViewBackground = this.carouselList[0].background;
            this.swiperLength = this.carouselList.length;
          })
          .catch((err) => {
            console.log(err)
          })
      },
      
      //轮播图切换修改背景色
      swiperChange(e) {
        const index = e.detail.current;
        this.swiperCurrent = index;
        this.titleNViewBackground = this.carouselList[index].background;
      },
      

      upper: function(e) {
				console.log(e)
			},
			lower: function(e) {
				console.log(e)
			},
			scroll: function(e) {
				console.log(e)
				this.old.scrollTop = e.detail.scrollTop
			},
			goTop: function(e) {
				// 解决view层不同步的问题
				this.scrollTop = this.old.scrollTop
				this.$nextTick(function() {
					this.scrollTop = 0
				});
				uni.showToast({
					icon:"none",
					title:"纵向滚动 scrollTop 值已被修改为 0"
				})
			}
    }
  }
</script>

<style scoped lang="scss">
  /* 头部 轮播图 */
	.carousel-section {
		position: relative;
	}
	.carousel {
		width: 100%;
		height: 350rpx;
    border-radius: 20rpx;

		.carousel-item {
			width: 100%;
			height: 100%;
			overflow: hidden;
		}

		image {
			width: 100%;
			height: 100%;
		}
	}
	.swiper-dots {
		display: flex;
		position: absolute;
		left: 60rpx;
		bottom: 15rpx;
		width: 72rpx;
		height: 36rpx;
		background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABkCAYAAADDhn8LAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTk4MzlBNjE0NjU1MTFFOUExNjRFQ0I3RTQ0NEExQjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTk4MzlBNjA0NjU1MTFFOUExNjRFQ0I3RTQ0NEExQjMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Q0E3RUNERkE0NjExMTFFOTg5NzI4MTM2Rjg0OUQwOEUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Q0E3RUNERkI0NjExMTFFOTg5NzI4MTM2Rjg0OUQwOEUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4Gh5BPAAACTUlEQVR42uzcQW7jQAwFUdN306l1uWwNww5kqdsmm6/2MwtVCp8CosQtP9vg/2+/gY+DRAMBgqnjIp2PaCxCLLldpPARRIiFj1yBbMV+cHZh9PURRLQNhY8kgWyL/WDtwujjI8hoE8rKLqb5CDJaRMJHokC6yKgSCR9JAukmokIknCQJpLOIrJFwMsBJELFcKHwM9BFkLBMKFxNcBCHlQ+FhoocgpVwwnv0Xn30QBJGMC0QcaBVJiAMiec/dcwKuL4j1QMsVCXFAJE4s4NQA3K/8Y6DzO4g40P7UcmIBJxbEesCKWBDg8wWxHrAiFgT4fEGsB/CwIhYE+AeBAAdPLOcV8HRmWRDAiQVcO7GcV8CLM8uCAE4sQCDAlHcQ7x+ABQEEAggEEAggEEAggEAAgQACASAQQCCAQACBAAIBBAIIBBAIIBBAIABe4e9iAe/xd7EAJxYgEGDeO4j3EODp/cOCAE4sYMyJ5cwCHs4rCwI4sYBxJ5YzC84rCwKcXxArAuthQYDzC2JF0H49LAhwYUGsCFqvx5EF2T07dMaJBetx4cRyaqFtHJ8EIhK0i8OJBQxcECuCVutxJhCRoE0cZwMRyRcFefa/ffZBVPogePihhyCnbBhcfMFFEFM+DD4m+ghSlgmDkwlOgpAl4+BkkJMgZdk4+EgaSCcpVX7bmY9kgXQQU+1TgE0c+QJZUUz1b2T4SBbIKmJW+3iMj2SBVBWz+leVfCQLpIqYbp8b85EskIxyfIOfK5Sf+wiCRJEsllQ+oqEkQfBxmD8BBgA5hVjXyrBNUQAAAABJRU5ErkJggg==);
		background-size: 100% 100%;

		.num {
			width: 36rpx;
			height: 36rpx;
			border-radius: 50px;
			font-size: 24rpx;
			color: #fff;
			text-align: center;
			line-height: 36rpx;
		}

		.sign {
			position: absolute;
			top: 0;
			left: 50%;
			line-height: 36rpx;
			font-size: 12rpx;
			color: #fff;
			transform: translateX(-50%);
		}
	}

  /* #ifdef H5 || MP-WEIXIN */
	page {
		.cate-section{
			position:relative;
			z-index:5;
			border-radius:16rpx 16rpx 0 0;
		}
		.carousel-section{
			padding: 20px;
			.titleNview-placing {
				padding-top: 0;
				height: 0;
			}
			.carousel{
        box-shadow: 0 0 30px rgba($color: #17c72d, $alpha: 1.0);
				.carousel-item{
					padding: 0;
				}
			}
			.swiper-dots{
				left:45rpx;
				bottom:40rpx;
			}
		}
	}
	/* #endif */
	
	/* 分类 */
	.cate-section {
		display: flex;
		justify-content: space-around;
		align-items: center;
		flex-wrap:wrap;
		padding: 30rpx 22rpx; 
		background: #fff;
		.cate-item {
			display: flex;
			flex-direction: column;
			align-items: center;
			font-size: $uni-font-size-sm + 2rpx;
			color: $uni-color-dark;
		}
		/* 原图标颜色太深,不想改图了,所以加了透明度 */
		image {
			width: 88rpx;
			height: 88rpx;
			margin-bottom: 14rpx;
			border-radius: 50%;
			opacity: .7;
			box-shadow: 4rpx 4rpx 20rpx rgba(250, 67, 106, 0.3);
		}
  }
  
  // 资讯公告 开始
  .info-wrapper {
    height: 150rpx;
    padding: 30rpx 40rpx;
    .info-container {
      height: 100%;
      width: 100%;
      background: rgba(255,255,255,1);
      border-radius: 5px;
      box-shadow: 0px 0px 3px 0px rgba(100, 57, 0, 0.19);
      display: flex;
      align-items: center;
      justify-content: center ;

      .info-spit {
        width: 2rpx;
        height: 60%;
        background: rgba(242,242,242,1);
        margin-left: 20rpx;
      }
      .info-image {
        height: 100rpx;
        background-color: #fff;
        image {
          width: 100rpx;
          height: 100rpx;
        }
      }

      .info-context {
        width: 70%;
        view {
          background-color: #fff;
        }
      }
    }
  }
  // 资讯公告 结束

  .rent-wrapper {
    padding: 0 32rpx;
    .rent-title-wrapper {
      .rent-title {
        font-size: 32rpx;
        font-weight: 800;
      }
      .rent-title-context {
        margin-left: 20rpx;
        font-size: 28rpx;
        color: #999;
      }
    }

    .rent-container {
      .scroll-Y {
        height: 200rpx;
      }

      .scroll-view_H {
        white-space: nowrap;
        width: 100%;
      }

      .scroll-view-item {
        height: 200rpx;
        line-height: 200rpx;
        text-align: center;
        font-size: 36rpx;
      }

      .scroll-view-item_H {
        margin-right: 10rpx;
        border-radius: 5px;
        display: inline-block;
        width: 40%;
        text-align: center;
        font-size: 36rpx;
        text-align: left;
        padding-bottom: 20rpx;
        padding-top: 10rpx;
        .rent-image {
          image {
            height: 200rpx;
            line-height: 200rpx;
            width: 100%;
          }
        }
        .rent-title {
          font-size: 28rpx;
          font-weight: 800;
        }
        .rent-context {
          font-size: 24rpx;
          color: #ccc;
        }
      }
    }
  }

  
</style>
