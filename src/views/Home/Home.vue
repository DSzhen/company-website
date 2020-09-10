<template>
  <div class="Home">
    <el-carousel type="card" height="350px" indicator-position="outside">
      <el-carousel-item v-for="(item, index) in imgList" :key="index">
        <img :src="item" />
      </el-carousel-item>
    </el-carousel>
    <div class="brief-introduction">
      <p class="first">公司简介</p>
      <p class="second">北京万象互娱网络科技有限公司创立于2020年8月19日,主要从事休闲游戏产品开发与运营。目前运营产品包括方块王者和果果游世界二款>休闲小游戏产品。</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      imgList: [
        require("@/assets/images/GuoGuo/lx.png"),
        require("@/assets/images/GuoGuo/ck.png"),
        require("@/assets/images/GuoGuo/dl.png"),
        require("@/assets/images/GuoGuo/fx.png"),
        require("@/assets/images/GuoGuo/hc.png"),
        require("@/assets/images/GuoGuo/lxt.png"),
        require("@/assets/images/FangKuai/dh.jpg"),
        require("@/assets/images/FangKuai/dt.jpg"),
        require("@/assets/images/FangKuai/yxz.jpg"),
        require("@/assets/images/FangKuai/pp.jpg"),
        require("@/assets/images/FangKuai/rw.jpg"),
        require("@/assets/images/GuoGuo/sg.png")
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
        display: flex;
        justify-content: center;
        img {
          height: 350px;
          width: 250px;
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