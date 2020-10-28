<!--
 * @Author: your name
 * @Date: 2020-09-11 09:03:33
 * @LastEditTime: 2020-10-28 18:02:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \company-website\src\views\WorksDetail\FangKuaiWangZheDetail.vue
-->
<template>
  <div class="FangKuaiWangZheDetail">
    <el-card class="box-card-title">
      <img :src="img.fangkuai" alt />
      <div>
        <p>
          <span class="jiacu">apk下载：</span>
          <button type="button" @click="download()">立即下载</button>
          <span class="privacy-policy" @click="openWin()">隐私政策</span>
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
  name: "FangKuaiWangZheDetail",
  data() {
    return {
      img: {
        fangkuai: require('@/assets/images/FangKuai/fangkuai.png')
      },
      imgList: [
        {
          imgUrl: require("@/assets/images/FangKuai/dt.jpg")
        },
        {
          imgUrl: require("@/assets/images/FangKuai/yxz.jpg")
        },
        {
          imgUrl: require("@/assets/images/FangKuai/pp.jpg")
        },
        {
          imgUrl: require("@/assets/images/FangKuai/rw.jpg")
        },
        {
          imgUrl: require("@/assets/images/FangKuai/dh.jpg")
        }
      ]
    }
  },
  methods: {
    download() {
      window.location.href = "https://a.app.qq.com/o/simple.jsp?pkgname=com.yilian.fangkaiwangzhem";
    },
    // 新开页展示隐私政策
    openWin() {
      let url = location.href
      const index = url.indexOf('#')
      if (index > -1) {
        url = url.slice(0, index)
      }
      url += '#/FangKuaiPrivacyPolicy'
      window.open(url)
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
        .privacy-policy{
            color: cornflowerblue;
            margin-left: 5px;
            cursor: pointer;
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