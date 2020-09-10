<template>
  <div class="GuoGuoYouShiJieDetail">
    <el-card class="box-card-title">
      <img :src="img.fangkuai" alt />
      <div>
        <p>
          <span class="jiacu">apk下载：</span>
          <button type="button" @click="download()">立即下载</button>
        </p>
        <p>
          <span class="jiacu">简介：</span>
          <span>"果果游世界"水果不同品种变换，环游虚拟世界，解锁世界地图升级拿奖励。更可以合成水果升级赚钱，让你在玩游戏的过程中体验赚钱的乐趣！</span>
        </p>
        <p>
          <span class="jiacu">预计上架：2020-10-01</span>
        </p>
      </div>
    </el-card>
    <el-card class="brief-introduction">
        <img v-for="(item, index) in imgList" :src="item.imgUrl" alt="" :key="index">
    </el-card>
  </div>
</template>

<script>
export default {
    name:"GuoGuoYouShiJieDetail",
    data(){
        return {
            img:{
                fangkuai:require('@/assets/images/FangKuai/fangkuai.png')
            },
            imgList:[
                {
                    imgUrl:require("@/assets/images/GuoGuo/dl.png")
                },
                {
                    imgUrl:require("@/assets/images/GuoGuo/lx.png")
                },
                {
                    imgUrl:require("@/assets/images/GuoGuo/ck.png")
                },
                {
                    imgUrl:require("@/assets/images/GuoGuo/hc1.png")
                },
                {
                    imgUrl:require("@/assets/images/GuoGuo/sydt.png")
                },
                {
                    imgUrl:require("@/assets/images/GuoGuo/sg.png")
                },
                {
                    imgUrl:require("@/assets/images/GuoGuo/hc.png")
                },
                {
                    imgUrl:require("@/assets/images/GuoGuo/fx.png")
                }
            ]
        }
    },
    methods:{
        download(){
            window.location.href="http://download.haveneed.cn/fkwz/com.yilian.fangkaiwangzhem.apk";
        }
    }
}
</script>

<style lang='less'>
.GuoGuoYouShiJieDetail{
    height: 100%;
    width: 100%;
    .box-card-title{
        margin-left: 20%;
        width: 60%;
        display: flex;
        img{
            height: 200px;
            width: 200px;
        }
        .jiacu{
            font-weight: 600;
        }
    }
    .brief-introduction{
        margin-left: 20%;
        width: 60%;
        display: flex;
        img{
            height: 400px;
            width: 200px;
            margin-left: 10px;
        }
    }
}
</style>