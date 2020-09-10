<template>
  <div class="FangKuaiWangZheDetail">
    <el-card class="box-card-title">
      <img :src="img.fangkuai" alt />
      <div>
        <p>
          <span class="jiacu">apk下载：</span>
          <button type="button" @click="download()">立即下载</button>
        </p>
        <p>
          <span class="jiacu">简介：</span>
          <span>"方块王者"是一款休闲益智的游戏，玩家通过玩俄罗斯方块实现积攒金币，兑换自己喜欢的物品和红包。挑战不同的玩法【单人赛】【匹配赛】【排位赛】【活动赛】，挑战更厉害的玩家，成为俄罗斯方块大神！</span>
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
    name:"",
    data(){
        return {
            img:{
                fangkuai:require('@/assets/images/fangkuai.png')
            },
            imgList:[
                {
                    imgUrl:require("@/assets/images/dt.jpg")
                },
                {
                    imgUrl:require("@/assets/images/yxz.jpg")
                },
                {
                    imgUrl:require("@/assets/images/pp.jpg")
                },
                {
                    imgUrl:require("@/assets/images/rw.jpg")
                },
                {
                    imgUrl:require("@/assets/images/dh.jpg")
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
.FangKuaiWangZheDetail{
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