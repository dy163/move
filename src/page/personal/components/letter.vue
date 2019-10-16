<template>
    <div>
        <van-nav-bar title="个人简介" @click-right="$router.push('/install')">
            <van-icon name="setting-o" slot="right" color="#fff" size="18px"/>
        </van-nav-bar>
    </div>
</template>

<script>
export default {
  name: 'Letter',
  data () {
    return {

    }
  }
}

</script>
<style lang='less' scoped>
</style>
