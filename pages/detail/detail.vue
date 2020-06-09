<!--
 * @Descripttion: 租房详情
 * @version: 
 * @Author: huangziting
 * @Date: 2020-06-05 18:01:24
 * @LastEditTime: 2020-06-06 16:46:50
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

    <!-- 房屋概述 开始-->
    <view class="house-summary-wrapper">
      <view class="house-summary-title">整租·竹海水韵3室2厅2卫133㎡</view>
      <view class="house-summary-container">
        <view class="house-context-item item-spit">
          <view class="house-context-price">4800元/月</view>
          <view class="house-context-pay">付三押二</view>
        </view>
        <view class="house-context-item item-spit">
           <view class="house-context-price">3室2厅2卫</view>
          <view class="house-context-pay">户型</view>
        </view>
        <view class="house-context-item">
           <view class="house-context-price">133㎡</view>
          <view class="house-context-pay">面积</view>
        </view>
      </view>
      <view class="house-summary-tips">
        <view class="house-tip-item">随时看房</view>
        <view class="house-tip-item">精装修</view>
        <view class="house-tip-item">拎包入住</view>
        <view class="house-tip-item">电梯房</view>
      </view>
    </view>
    <!-- 房屋概述 结束-->

    <!-- 房屋详情 开始 -->
    <view class="house-desc-wrapper">
      <view class="house-desc-item">
        <view class="house-desc-label">朝向</view>
        <view class="house-desc-context">坐北朝南</view>
      </view>
      <view class="house-desc-item">
        <view class="house-desc-label">发布</view>
        <view class="house-desc-context">2020-5-30</view>
      </view>
      <view class="house-desc-item">
        <view class="house-desc-label">楼层</view>
        <view class="house-desc-context">17/18层</view>
      </view>
      <view class="house-desc-item">
        <view class="house-desc-label">装修</view>
        <view class="house-desc-context">简单装修</view>
      </view>
      <view class="house-desc-item">
        <view class="house-desc-label">类型</view>
        <view class="house-desc-context">住宅</view>
      </view>
      <view class="house-desc-item">
        <view class="house-desc-label">电梯</view>
        <view class="house-desc-context">有</view>
      </view>
      <view class="house-desc-item">
        <view class="house-desc-label">小区</view>
        <view class="house-desc-context">金翰未来之芯花苑</view>
      </view>
    </view>
    <!-- 房屋详情 结束 -->

    <!-- 房屋配套 开始 -->
    <view class="house-install-wrapper">
      <view class="house-install-title">配置设施</view>
      <view class="house-install-container">
        <view class="house-install-item">
          <view class="house-install-image">
            <image src="/static/images/tv.png" />
          </view>
          <view class="house-install-text">电视</view>
        </view>
        <view class="house-install-item">
          <view class="house-install-image">
            <image src="/static/images/refrigerator.png" />
          </view>
          <view class="house-install-text">冰箱</view>
        </view>
        <view class="house-install-item">
          <view class="house-install-image">
            <image src="/static/images/washing-machine.png" />
          </view>
          <view class="house-install-text">洗衣机</view>
        </view>
        <view class="house-install-item">
          <view class="house-install-image">
            <image src="/static/images/air-conditioning.png" />
          </view>
          <view class="house-install-text">空调</view>
        </view>
        <view class="house-install-item">
          <view class="house-install-image">
            <image src="/static/images/geyser.png" />
          </view>
          <view class="house-install-text">热水器</view>
        </view>
        <view class="house-install-item">
          <view class="house-install-image">
            <image src="/static/images/bed.png" />
          </view>
          <view class="house-install-text">床</view>
        </view>
        <view class="house-install-item">
          <view class="house-install-image">
            <image src="/static/images/bed.png" />
          </view>
          <view class="house-install-text">宽带</view>
        </view>
        <view class="house-install-item">
          <view class="house-install-image">
            <image src="/static/images/armoire.png" />
          </view>
          <view class="house-install-text">衣柜</view>
        </view>
        <view class="house-install-item">
          <view class="house-install-image">
            <image src="/static/images/gas.png" />
          </view>
          <view class="house-install-text">天然气</view>
        </view>
        <view class="house-install-item">
          <view class="house-install-image">
            <image src="/static/images/bathroom.png" />
          </view>
          <view class="house-install-text">公卫</view>
        </view>
        <view class="house-install-item">
          <view class="house-install-image">
            <image src="/static/images/private-bathroom.png" />
          </view>
          <view class="house-install-text">私卫</view>
        </view>
        <view class="house-install-item">
          <view class="house-install-image">
            <image src="/static/images/verandah.png" />
          </view>
          <view class="house-install-text">阳台</view>
        </view>
      </view>
    </view>
    <!-- 房屋配套 结束 -->

    <!-- 房屋具体描述 开始 -->
    <view class="house-instruction-wrapper">
      <view class="house-instruction-title">房源概述</view>
      <view class="house-user-info">
        <view class="user-info-item">
          <view class="user-head-sculpture">
            <image src="/static/images/head.png"/>
          </view>
        </view>
        <view class="user-info-item">
          <view class="user-info-context">
            <view class="user-name">张飞大哥</view>
            <view class="house-desc">
              自主挂牌出租
                <image src="/static/images/cert-light.png" />
            </view>
          </view>
        </view>
        <view class="user-info-item">
          <view class="user-link-info">
            <image src="/static/images/phone.png"/>
          </view>
        </view>
        <view class="user-info-item">
          <view class="user-link-info">
            <image src="/static/images/message.png"/>
          </view>
        </view>
      </view>
      <view class="house-instruction-context">1.交通便捷，离地铁站不到两百米，小区门口有多路公交车站，2.物业管理完善，小区环境整洁漂亮, 3.生活配套设施齐全, 4.拎包入住</view>
    </view>
    <!-- 房屋具体描述 结束 -->

    <!-- 周边配套 开始 -->
    <view class="house-area-wrapper">
       <view class="house-area-title">周边配套</view>
      <view class="house-area-map">
        
      </view>
    </view>
    <!-- 周边配套 结束 -->
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
      }
    },
    onLoad() {
      this.getCarouselList();
    },
    methods: {
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
      
      // 卡片
      
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

  // 房屋概述
  .house-summary-wrapper {
    width: 100%;
    box-sizing: border-box;
    padding: 10rpx 30rpx;
    margin: 20rpx 0 0;
    .house-summary-title {
      font-size: 36rpx;
      font-weight: bold;
      text-overflow: ellipsis; 
      overflow: hidden;
      white-space: nowrap;
    }

    .house-summary-container {
      display: flex;
      width: 100%;
      height: 160rpx;
      padding: 10rpx;
      text-align: center;
      align-items: center;
      justify-content: center;
      border: 1px solid #F2F2F2;
      border-radius: 5px;
      box-shadow: 0 0 10px 9px rgba(239, 235, 235, $alpha: 0.5);
      box-sizing: border-box;
      .house-context-item {
        flex: 1;
        .house-context-price {
          color: #E24319;
          font-size: 36rpx;
          font-weight: bold;
        }
        .house-context-pay {
          color: #999;
          font-size: 24rpx;
        }
        &.item-spit {
          border-right: 1px solid #F2F2F2;
        }
      }
    }

    .house-summary-tips {
      display: flex;
      height: 80rpx;
      padding: 10rpx;
      box-sizing: border-box;
      align-items: center;
      .house-tip-item {
        height: 40rpx;
        border: solid 1px #B68545;
        border-radius: 20rpx;
        vertical-align: middle;
        margin-right: 20rpx;
        padding: 0 16rpx;
        color: #B68545;
        line-height: 40rpx;
        font-size: 24rpx;
      }
    }
  }

  // 房屋详情
  .house-desc-wrapper {
    display: flex;
    height: 320rpx;
    padding: 0 40rpx 40rpx;
    width: 100%;
    box-sizing: border-box;
    flex-wrap: wrap;
    .house-desc-item {
      width: 48%;
      height: 56rpx;
      display: flex;
      align-items: center;
      font-size: 28rpx;
      .house-desc-label {
        color: #999;
        width: 30%;
      }

      .house-desc-context {
        color: #333;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        width: 70%;
      }
    }
  }

  // 配套设施
  .house-install-wrapper {
    height: 480rpx;
    box-sizing: border-box;
    width: 100%;
    padding: 0 40rpx;
    .house-install-title {
      color: #333;
      font-size: 36rpx;
      font-weight: bold;
    }
    .house-install-container {
      display: flex;
      width: 100%;
      flex-wrap: wrap;
      align-items: center;
      margin-top: 20rpx;
      .house-install-item {
        height: 120rpx;
        width: 19.1%;
        text-align: center;
        .house-install-image {
          image {
            vertical-align: middle;
            height: 30px  ;
            width: 30px;
          }
        }
        .house-install-text {
          color: #707070;
          font-size: 24rpx;
        }
      }
    }
  }

  // 房源具体描述
  .house-instruction-wrapper {
    height: 330rpx;
    box-sizing: border-box;
    width: 100%;
    padding: 0 40rpx;
    .house-instruction-title {
      color: #333;
      font-size: 36rpx;
      font-weight: bold;
    }

    .house-user-info {
      height: 140rpx;
      width: 100%;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      padding: 0 20rpx  ;
      border-radius: 20rpx;
      box-shadow: 0 0 3px 3px rgba(239, 235, 235, $alpha: 0.5);
      .user-info-item {
        .user-head-sculpture {
          display: flex;
          align-items: center;
          image {
            height: 100rpx;
            width: 100rpx;
            border-radius: 50rpx;
          }
        }
        .user-info-context {
          height: 100rpx;
          width: 360rpx;
          .user-name {
            font-weight: bold;
            margin-left: 20rpx;
            font-size: 32rpx;
            color: #000;  
          }
          .house-desc {
            margin-left: 20rpx;
            color: #666;
            font-size: 24rpx;
            image {
              width: 32rpx;
              height: 32rpx;
              vertical-align: middle;
              margin-bottom: 1px;
              margin-left: 6rpx;
            }
          }
        }
        .user-link-info {
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid  #1296db;
          height: 80rpx;
          width: 80rpx;
          border-radius: 42rpx;
            margin-right: 10rpx;
          image {
            height: 60rpx;
            width: 60rpx;
          }
        }
      }
  }
    .house-instruction-context {
      margin-top: 20rpx;
      font-size: 26rpx;
      color: #666;
    }
  }

  // 周边配置
  .house-area-wrapper {
    margin-top: 50rpx;
    height: 500rpx;
    box-sizing: border-box;
    width: 100%;
    padding: 0 40rpx;
    .house-area-title {
      color: #333;
      font-size: 36rpx;
      font-weight: bold;
    }

    .house-area-map {
      margin-top: 10rpx;
      border: solid 1px #ccc;
      height: 400rpx ;
    }
  }

</style>

