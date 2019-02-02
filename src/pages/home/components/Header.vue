<template>
  <div class="header">
    <div class="header-left">
        <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
        <span class="iconfont">&#xe632;</span>
        输入城市/景点/主题
    </div>
    <div class="header-right">
        {{this.city}}
        <span class="iconfont arrow-icon">&#xe64a;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
}
</script>

<style lang="stylus" scoped>
/*通过@import '文件路径'就可以引用文件,之后我们就可以使用$bgColor这个变量*/
/*如果是引用src里面的文件，直接 @/文件路径 就可以了，*/
/*但是因为是样式文件引用，所以要写成 ~@ 这个形式*/
@import '~styles/varibles.styl'
  .header
    background: $bgColor
    display: flex
    line-height: .86rem
    color: #fff
    .header-left
      width: .64rem
      float: left
      .back-icon
        text-align: center
        font-size: .4rem
    .header-input
      flex: 1
      margin-top: .12rem
      margin-left: .2rem
      padding-left: .2rem
      height: .64rem
      line-height: .64rem
      background: #fff
      border-radius:.1rem
      color: #ccc
    .header-right
      width: 1.24rem
      float: right
      text-align: center
      .arrow-icon
        margin-left: -0.04rem
        font-size: .24rem
</style>
