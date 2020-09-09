<template>
  <el-container>
    <el-header>
      <div><img src="" alt=""></div>
      <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect">
        <el-menu-item index="home">首页</el-menu-item>
      </el-menu>
    </el-header>
    <el-main>Main</el-main>
  </el-container>
</template>

<script>
export default {
    data(){
        return {
            img:{
                
            },
            activeIndex: 'home'
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
        
    }
  }
  .el-main {
    background-color: #d3dce6;
    color: #333;
    text-align: center;
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
