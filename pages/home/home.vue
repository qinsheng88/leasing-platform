<!--
 * @Descripttion: 
 * @version: 
 * @Author: huangziting
 * @Date: 2020-06-01 18:52:08
 * @LastEditTime: 2020-06-09 11:06:52
--> 
<template>
  <view>
    <!-- 头部轮播 开始-->
    <view class="carousel-section">
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
        <view class="btn-area">
          <navigator url="../notice/tzlist" open-type="redirect" hover-class="other-navigator-hover">
            <image src="/static/images/grid-1.png"></image>
            <view>公示公告</view>
          </navigator>
        </view>
      </view>
      <view class="cate-item">
        <view class="btn-area">
          <navigator url="../notice/hydtlist" open-type="redirect" hover-class="other-navigator-hover">
            <image src="/static/images/grid-2.png"></image>
            <view>行业动态</view>
          </navigator>
        </view>
      </view>
      <view class="cate-item">
        <view class="btn-area">
          <navigator url="../person/rentmessage" open-type="redirect" hover-class="other-navigator-hover">
            <image src="/static/images/grid-3.png"></image>
            <view>个人求租</view>
          </navigator>
        </view>
      </view>
      <view class="cate-item">
        <image src="/static/images/grid-4.png"></image>
        <text>集中式公寓</text>
      </view>
    </view>
    <view class="cate-section">
      <view class="cate-item">
        <view class="btn-area">
          <navigator url="../notice/mechanism" open-type="redirect" hover-class="other-navigator-hover">
            <image src="/static/images/grid-10.png"></image>
            <view>机构榜单</view>
          </navigator>
        </view>
      </view>
      <view class="cate-item">
        <view class="btn-area">
          <navigator url="../notice/zclist" open-type="redirect" hover-class="other-navigator-hover">
            <image src="/static/images/grid-7.png"></image>
            <view>政策法规</view>
          </navigator>
        </view>
      </view>
      <view class="cate-item">
        <view class="btn-area">
          <navigator url="../notice/webcomplaintslist" open-type="redirect" hover-class="other-navigator-hover">
            <image src="/static/images/grid-8.png"></image>
            <view>投诉咨询</view>
          </navigator>
        </view>
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
          <view class="info-lead">
            <text class="info-lead-title">头条</text>
            <text class="info-lead-context">最高资助20万 这2类人有福了</text>
          </view>
          <view class="info-context-swiper">
            <swiper :autoplay="true" :interval="3000" :duration="1000" :vertical="true" class="info-swiper-context">
              <swiper-item>
                <view class="swiper-item">
                    <text class="swiper-item-title">要闻</text>
                    <text class="swiper-item-content">最高资助20万 这2类人有福了</text>
                </view>
              </swiper-item>
              <swiper-item>
                <view class="swiper-item">
                    <text class="swiper-item-title">要闻</text>
                    <text class="swiper-item-content">最高资助20万 这2类人有福了</text>
                </view>
              </swiper-item>
              <swiper-item>
                <view class="swiper-item">
                    <text class="swiper-item-title">要闻</text>
                    <text class="swiper-item-content">最高资助20万 这2类人有福了最高资助20万 这2类人有福了</text>
                </view>
              </swiper-item>
            </swiper>
          </view>
        </view>
      </view>
    </view>
    <!-- 资讯 结束 -->

    <!-- 好房优选 开始 -->
    <view class="rent-wrapper">
      <view class="rent-title-wrapper">
        <text class="rent-title">租赁挂牌</text>
        <text class="rent-title-context">一手真实房源，最快，最新，享你所想！</text>
      </view>
      <view class="rent-container">
        <scroll-view class="scroll-view_H" scroll-x="true" @scroll="scroll" scroll-left="0">
          <view class="rent-context">
            <view class="scroll-view-item" v-for="item in rentList" :key="item.id" @click="toDetail(item.id)">
              <view class="rent-image">
                <image :src="item.imgSrc">
              </view>
              <view class="rent-info">
                <view class="rent-title">
                  {{item.community_name}}
                    <image src="/static/images/cert-light.png" :class="{'rent-title-cert': !!item.id}"/>
                </view>
                <view class="rent-code">统一编码：{{item.gov_house_number}}</view>
                <view class="rent-context">{{item.location_name + '  ' + item.room_num + '室   ' + item.space + "㎡"}}</view>
                <view class="rent-price">{{item.rent_price + '元/月'}}</view>
              </view>
            </view>
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
          <view class="rent-context">
            <view class="scroll-view-item" v-for="item in flatsList" :key="item.id" @click="toDetail(item.id)" >
              <view class="rent-image">
                <image :src="item.imgSrc">
              </view>
              <view class="rent-info">
                <view class="rent-title">
                  {{item.community_name}}
                    <image src="/static/images/cert-light.png" :class="{'rent-title-cert': !!item.id}"/>
                </view>
                <view class="rent-code">统一编码：{{item.gov_house_number}}</view>
                <view class="rent-context">{{item.location_name + '  ' + item.room_num + '室   ' + item.space + "㎡"}}</view>
                <view class="rent-price">{{item.rent_price + '元/月'}}</view>
              </view>
            </view>
          </view>
        </scroll-view>
      </view>
    </view>
    <!-- 好房优选 结束 -->
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
        scrollTop: 0,
				old: {
					scrollTop: 0
        },
        rentList: [],
        flatsList: []
    
      }
    },

    onLoad() {
      this.getRentList();
      this.getCarouselList();
    },
    
    methods: {

      // 请求数据DEMO
      getRentList() {
        let url = '/api/FanChan/FYXXB/GetPageListAllSearch_fyzs'
        http.get(url, {
          pagination: {"page": 1,"rows": 10,"sidx":"up_at", "sord":"desc"},
          queryJson: {"status": 1,"category": 2,"up_status": 2}
        }).then((res) => {
          let list = res.data.data.rows
          if(list && list.length != 0) {

            let tempList = []
            for (let i = 0; i < list.length; i++) {
              const item  = list[i]
              let imgList = JSON.parse(item.house_other)
              let imgSrc  = imgList[0].host + imgList[0].src
              item.imgSrc = imgSrc
              tempList.push(item)
            }

            this.rentList = tempList.filter((item)=>{
              return item.rent_type == 1
            });

            this.flatsList = tempList.filter((item) => {
              return item.rent_type == 2
            })
          }
        }).catch((err) => {
          console.log(err)
        })
      },

      // 获取轮播图数据
      getCarouselList() {
        let url = '/api/carouseList'
        http.get(url)
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
      
      upper: function(e) {},

      lower: function(e) {},
      
			scroll: function(e) {
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
      },
      
      // 租房详情
      toDetail(value) {
        uni.navigateTo({
          url: '/pages/detail/detail?keyValue=' + value
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
        margin-left: 40rpx;
        height: 100rpx;
        background-color: #fff;
        image {
          width: 100rpx;
          height: 100rpx;
        }
      }

      .info-context {
        height: 100%;
        width: 100%;
        padding: 20rpx 20rpx;
        box-sizing: border-box;
        .info-lead {
          .info-lead-title {
            width: 80rpx;
            height: 40rpx;
            line-height: 40rpx;
            color: #B68545;
            display: inline-block;
            text-align: center;
            border: 1px solid #B68545;
            border-radius: 20rpx;
          }

          .info-lead-context {
            margin-left: 10rpx;
            font-size: 24rpx;
            text-overflow:ellipsis;
            overflow: hidden;
          }
        }
        .info-context-swiper{
          margin-top: 20rpx;
          .info-swiper-context{
            height: 60rpx;
            margin-top: 10rpx;
            .swiper-item-title {
              width: 80rpx;
              height: 40rpx;
              line-height: 40rpx;
              color: #B68545;
              display: inline-block;
              text-align: center;
              border: 1px solid #B68545;
              border-radius: 20rpx;
            }
            .swiper-item-content {
              margin-left: 10rpx;
              font-size: 24rpx;
              width: 100%;
              overflow: hidden;
              text-overflow:ellipsis;
            }
          }
        }

      }
    }
  }
  // 资讯公告 结束

  // 隐藏scrollbar
  scroll-view ::-webkit-scrollbar {
    width: 0;
    height: 0;
    background-color: transparent;
  }

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

      .rent-context {
        display: flex;
        .scroll-view-item {
          display: flex;
          margin-right: 10rpx;
          border-radius: 5px;
          width: 300px;
          font-size: 36rpx;
          text-align: left;
          padding: 10rpx 20rpx;
          border: 1px solid #f5f5f5;
          background: rgba(255,255,255,1);
          box-shadow: 0px 0px 8px rgba(241, 238, 233, 0.19);
          .rent-image {
            image {
              height: 200rpx;
              line-height: 200rpx;
              width: 230rpx;
            }
          }
          .rent-info {
            width: 300rpx;
            padding: 10rpx 20rpx;
            .rent-title {
              font-size: 28rpx;
              font-weight: 800;
              .rent-title-cert {
                margin-left:3px;
                vertical-align:middle;
                height:18px; 
                width:18px;
                margin-bottom: 2px;
              }
            }
            .rent-code {
              font-size: 24rpx;
              color: #ccc;
            }
            .rent-context{
              font-size: 24rpx;
              color: #ccc;
            }
            .rent-price {
              font-size: 36rpx;
              color: #f66;
            }
          }
        }
      }
    }
  }

  
</style>
