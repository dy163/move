<template>
  <div>
    <van-nav-bar
      title="个人信息"
      left-text="返回"
      right-text="保存"
      left-arrow
      @click-left="$router.back()"
      @click-right="handleSave"
    />
    <van-cell-group>
      <van-cell title="头像" is-link @click="handleShowFile">
        <div slot="default">
          <img width="30" :src="user.photo" alt="">
        </div>
        <input ref="file" style="display: none;" type="file">
      </van-cell>
      <van-cell title="昵称" :value="user.name" is-link />
      <van-cell title="性别" :value="user.gender" is-link />
      <van-cell title="生日" :value="user.birthday" is-link />
    </van-cell-group>
  </div>
</template>

<script>
import {
  getUserProfile,
  updateUserProfile,
  updateUserProfilePhoto
} from '@/api/user'
export default {
  name: 'UserSettings',
  data () {
    return {
      user: {}
    }
  },
  computed: {
    file () {
      return this.$refs['file']
    }
  },
  created () {
    this.loadUser()
  },
  mounted () {
    this.file.addEventListener('change', this.handleFileChange)
  },
  deactivated () {
    this.$destroy()
  },
  methods: {
    handleFileChange () {
      const file = this.file.files[0]
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.addEventListener('load', () => {
        this.user.photo = reader.result
      })
    },
    async loadUser () {
      try {
        this.user = await getUserProfile()
      } catch (err) {
        this.$toast.fail('加载用户信息失败')
      }
    },
    // 异步串行
    // await r1 1
    // await r2 1
    //          2
    // 异步并行
    // r1 1
    // r2 1
    //    1秒
    // 如果需要在几个并发异步任务都执行结束之后做处理，则
    // 使用 Promise.all([异步任务1, 异步任务2....])
    // Promise.all 还是返回 promise，结果是一个数组，数组按照任务的顺序存储每个任务的执行结果
    async handleSave () {
      try {
        let r1 = Promise.resolve()
        // 一、如果用户选择了文件，则请求上传图片
        if (this.file.files[0]) {
          r1 = this.uploadPhoto()
        }
        // 二、请求更新用户信息
        const r2 = updateUserProfile({
          name: this.user.name,
          gender: this.user.gender,
          birthday: this.user.birthday
        })
        await Promise.all([r1, r2])
        this.$toast('更新成功')
      } catch (err) {
        this.$toast.fail('更新用户信息失败')
      }
    },
    uploadPhoto () {
      /**
       * 《接口要求 Content-Type 为 multipart/form-data 的处理》
       */
      const formData = new FormData()
      formData.append('photo', this.file.files[0])
      return updateUserProfilePhoto(formData)
    },
    handleShowFile () {
      this.$refs['file'].click()
    }
  }
}
</script>

<style>
</style>