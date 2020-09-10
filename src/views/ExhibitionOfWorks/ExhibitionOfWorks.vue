<template>
  <div class="ExhibitionOfWorks">
    <el-row>
      <el-col :span="8" v-for="(item, index) in cardList" :key="index" :offset="index > 0 ? 2 : 0">
        <el-card
          class="el-card"
          shadow="always"
          :body-style="{ padding: '0px' } "
        >
          <img :src="item.imgUrl" class="image" @click="showDetail(item)" />
          <div style="padding: 14px;" @click="showDetail(item)">
            <span class="name">{{item.name}}</span>
            <p class="brief-introduction">简介：{{item.briefIntroduction}}</p>
            <div class="time">
              <p>上线时间：{{item.date}}</p>
              <p>了解更多内容...</p>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "ExhibitionOfWorks",
  data() {
    return {
      cardList:[
        {
          imgUrl: require('@/assets/images/dt.jpg'),
          name: '方块王者',
          briefIntroduction: '"方块王者"是一款休闲益智的游戏，玩家通过玩俄罗斯方块实现积攒金币，兑换自己喜欢的物品和红包。挑战不同的玩法【单人赛】【匹配赛】【排位赛】【活动赛】，挑战更厉害的玩家，成为俄罗斯方块大神！',
          date: '2020-10-01'
        },
        {
          imgUrl: require('@/assets/images/dh.jpg'),
          name: '果果游世界',
          briefIntroduction: '"果果游世界"水果不同品种变换，环游虚拟世界，解锁世界地图升级拿奖励。更可以合成水果升级赚钱，让你在玩游戏的过程中体验赚钱的乐趣！',
          date: '2020-09-09'
        }
      ]
    };
  },
  methods:{
    showDetail(item){
      console.log(item);
      switch (item.name) {
        case '方块王者':
          this.$router.push({
            name:"FangKuaiWangZheDetail"
          })
          break;
      case '果果游世界':
          break;
        default:
          break;
      }
    }
  }
};
</script>

<style lang='less'>
.ExhibitionOfWorks {
  height: 100%;
  width: 100%;
  .el-row {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    .el-card:hover {
      transform:scale(1.02);
    }
    .el-col-8{
      width: 400px;
      cursor: pointer;
    }
    .name{
      font-size: 16px;
      font-weight: 600;
    }
    .image {
      height: 360px;
      width: 400px;
      display: block;
    }
    .brief-introduction{
      height: 100px;
      color: #a798b1;
    }
    .time{
      display: flex;
      p{
        width: 50%;
      }
      p:last-child{
        cursor: pointer;
        text-align: right;
        color: royalblue;
      }
    }
  }
}
</style>