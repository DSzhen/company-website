<template>
  <el-container>
    <el-header>
      <div class="img-div">
        <img :src="img.gssb" alt />
      </div>
      <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect">
        <el-menu-item index="Home">首页</el-menu-item>
        <el-menu-item index="ExhibitionOfWorks">作品展示</el-menu-item>
        <el-menu-item index="ContactUs">联系我们</el-menu-item>
      </el-menu>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: "Container",
  data() {
    return {
      img: {
        gssb: require("@/assets/images/gssb.jpg"),
      },
      activeIndex: "Home",
    };
  },
  // 监听,当路由发生变化的时候执行
  watch: {
    $route(to, from) {
      console.log(from);
      if (
        to.name === "FangKuaiWangZheDetail" ||
        to.name === "GuoGuoYouShiJieDetail"
      ) {
        this.activeIndex = "ExhibitionOfWorks";
      } else {
        this.activeIndex = to.name || "Home";
      }
    },
  },
  mounted() {
    if (
      this.$route.name === "FangKuaiWangZheDetail" ||
      this.$route.name === "GuoGuoYouShiJieDetail"
    ) {
      this.activeIndex = "ExhibitionOfWorks";
    } else {
      this.activeIndex = this.$route.name || "Home";
    }
  },
  methods: {
    handleSelect(key) {
      let params = {
        name: key,
        params: {},
      };
      this.$router.push(params);
    },
  },
};
</script>

<style lang="less">
.el-container {
  height: 100%;
  width: 100%;
  .el-header {
    height: 61px !important;
    width: 100%;
    padding: 0;
    color: #333;
    display: flex;
    background-color: #fff;
    justify-content: center;
    border-bottom: 1px solid #b3c0d1;
    .el-menu {
      width: 60%;
      display: flex;
      justify-content: left;
      .el-menu-item {
        font-size: 16px;
      }
    }
    .img-div {
      height: 59px;
      width: 190px;
      img {
        height: 59px;
        width: 80px;
      }
    }
  }
  .el-main {
    height: calc(100% - 80px);
    padding: 10px 0 0 0;
  }
}
</style>
