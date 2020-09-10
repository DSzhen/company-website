<template>
  <div class="ContactUs">
    <el-card class="box-card">
      <div class="clearfix">
        <span>北京万象互娱网络科技有限公司</span>
        <el-button style="float: right; padding: 3px 0" type="text"></el-button>
      </div>
      <div class="item qq">QQ：546989691</div>
      <div class="item">微信：yangzhen546989691</div>
      <div class="item">邮箱：546989691@qq.com</div>
    </el-card>
  </div>
</template>

<script>
export default {};
</script>

<style lang='less'>
.ContactUs {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  .box-card {
    width: 400px;
    height: 200px;
  }
  .qq{
    margin-top: 18px;
  }
  .item {
    font-size: 14px;
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both;
  }

  .box-card {
    width: 480px;
  }
}
</style>