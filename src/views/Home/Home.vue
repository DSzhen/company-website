<template>
  <div class="Home">
    <el-carousel type="card" height="350px" indicator-position="outside">
      <el-carousel-item v-for="(item, index) in imgList" :key="index">
        <img :src="item" />
      </el-carousel-item>
    </el-carousel>
    <div class="brief-introduction">
      <p class="first">公司简介</p>
      <p class="second">网络健身游戏的技术开发；技术开发；技术咨询；技术推广；技术转让；技术服务；软件开发；经营电信业务；从事互联网文化活动；计算机系统服务；数据处理，市场调查；商务信息咨询；经济贸易咨询；科技信息咨询服务；设计、制作、代理、发布广告；销售计算机、电子产品、软件及辅助设备、通讯设备。（市场主体依法自主选择经营项目，开展经营活动；依法须经批准的项目，经相关部门批准后依批准的内容开展经营活动；不得从事国家和本市产业政策禁止和限制类项目的经营活动。）</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      imgList: [
        require("@/assets/images/dh.jpg"),
        require("@/assets/images/dt.jpg"),
        require("@/assets/images/yxz.jpg"),
      ],
    };
  },
};
</script>

<style lang="less">
.Home {
  height: 100%;
  width: 100%;
  .el-carousel {
    margin: 0 10px;
    .el-carousel__container {
      .el-carousel__item {
        img {
          height: 100%;
          width: 100%;
        }
      }
    }
  }
  .brief-introduction{
    height: calc(100% - 400px);
    padding: 10px 20px;
    background: url('../../assets/images/lanbg.jpg') no-repeat center #4c97db;
    .first{
      font-size: 18px;
      color: #fff;
    }
    .second{
      font-size: 14px;
      color: #fff;
    }
  }
}
</style>