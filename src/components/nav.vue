<template>
  <nav>
    <ul>
      <li>
        <router-link to='/recommond'>推荐音乐</router-link>
      </li>
      <li>
        <router-link to='/hot'>热歌榜</router-link>
      </li>
      <li>
        <router-link to='/search'>搜索</router-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="stylus" scoped>
  nav 
    width:100%
    height 40px
    background #ffffff;
    ul
      display flex
      height 100%
      display: flex
      justify-content space-around
      align-items center
      li
        display flex
        align-self center
        a
          color #333
</style>
