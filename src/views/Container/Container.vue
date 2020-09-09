<template>
  <el-container>
    <el-header>
      <div>
        <img src alt />
      </div>
      <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect">
        <el-menu-item index="home">首页</el-menu-item>
        <el-menu-item index="exhibition-works">作品展示</el-menu-item>
        <el-menu-item index="contact">联系我们</el-menu-item>
      </el-menu>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
export default {
    name: 'Container',
    data(){
        return {
            enum:{
              "home":'Home',
              'exhibition-works':'ExhibitionOfWorks',
              'contact':'ContactUs'
            },
            img:{},
            activeIndex: 'home'
        }
    },
    methods:{
      handleSelect(key){
        let params = {
          name: this.enum[key],
          params:{}
        }
        this.$router.push(params)
      }
    }
};
</script>

<style lang="less">
.el-container {
  height: 100%;
  width: 100%;
  .el-header,
  .el-footer {
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
    line-height: 60px;
    width: 100%;
    padding: 0;
  }
  .el-header{
    display: flex;
    background-color: #fff;
    justify-content: center;
    .el-menu{
        width: 50%;
        display: flex;
        justify-content: center;
        .el-menu-item{
          font-size: 16px;
        }
    }
  }
  .el-main {
    height: calc(100% - 60px);
  }
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
