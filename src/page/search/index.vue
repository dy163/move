<template>
  <div class="search">
    <form action="/">
      <van-search
        placeholder="输入名称/代码/拼音"
        v-model="searchText"
        @search="handleSearch(searchText)"
        background="rgba(32,33,42,1)"
        :clearable="true"
        @cancel="$router.back()"
        show-action
      >
        <div slot="left-icon">
          <img src="@/assets/img/search.png" alt />
        </div>
      </van-search>
    </form>

    <!-- 联想建议列表 -->
    <van-cell-group class="group" v-if="suggestions  && suggestions.length  && searchText && searchText.length">
      <van-cell class="cell" v-for="item in suggestions" :key="item.id">
        <div slot="title" v-html="handleText(item,searchText)" @click="handleList(item)"></div>
      </van-cell>
    </van-cell-group>
    <!-- /联想建议列表 -->

    <!-- 搜索列表 -->
    <van-cell-group class="search-list" v-show="show">
      <van-cell title="搜索记录">
        <van-icon slot="right-icon" name="delete" @click="handleDelete"/>
      </van-cell>
      <van-cell class="cell" v-for="item in list" :key="item.id">
        <div slot="title">{{ item.stock_name }}</div>
      </van-cell>
    </van-cell-group>
    <!-- /搜索列表 -->
  </div>
</template>

<script>
import { searchStock, searchGetList, searchAdd, getList, searchClearList } from "@/api/stock";
import { debounce } from "lodash";

export default {
  name: "SearchIndex",
  data() {
    return {
      searchText: "", // 搜索输入的文本,
      suggestions: [],
      list: [],
      show: false,
      shows: false
    };
  },
  /**
   * 监视搜索框得变化
   */
  watch: {
    searchText: debounce(async function(newVal) {
      newVal = newVal.trim(); // 去除首尾空格
      // 如果数据为空，则什么都不做
      if (!newVal) {
        return;
      }
      // 如果数据不为空,则发送请求
      const formData = new FormData();
      formData.append("keyword", this.searchText);
      const data = await searchStock(formData);
      this.suggestions = data.data.result;
    }, 500),
    

  },
  /**
   * 进来页面进行加载搜索列表
   */
  created() {
    this.searchList();
    this.$toast.setDefaultOptions({ duration: 800 });
  },
  methods: {
    /**
     * 联想建议输入高亮字体
     */
    handleText(val, searchText) {
      this.show = false;
      return `<span style="color: red">${(searchText =
        val.stock_code)}</span> <span>${(searchText = val.shortname)}</span>`;
    },
    /**
     * 输入框变化
     */
    handleSearch(q) {
      if (!q.length) {
        return
      }
      // this.handleList(q)
    },
    /**
     * 获取搜索列表
     */
    async searchList() {
      try {
        const formData = new FormData();
        const res = await searchGetList(formData);
        this.list = res.data.result;
        // 判断搜索列表长度进行展示搜索列表
        if (this.list.length > 0) {
          this.show = true
        }
      } catch (error) {
        this.$toast("获取搜索列表失败，请去登录");
      }
    },
    /**
     *联想建议跳转到详情页面
     */
    async handleList(q) {
      try {
        // 添加搜索记录
        // if(res.data.status) {  
          const formData = new FormData();
          formData.append("stock_code", q.stock_code);
          formData.append("stock_name", q.shortname);
          const res =  await searchAdd(formData)
          // this.$router.push({name: "transaction",params: {q}}); 
          this.$router.push({path: '/transaction',query: {q: q}});
        // } 
      } catch (error) {
        
      }
    },
    /**
     * 删除搜索记录
     */
    handleDelete () {
      this.$dialog.confirm({
        title: '确定清空搜索列表？',
      }).then( async ()=> {
        try {
          // on confirm
          const formData = new FormData();
          await  searchClearList(formData)
          this.searchList();
        } catch (error) {
          this.$toast('清空失败')
        }
      }).catch(() => {
        // on cancel
      });
    },
    /**
     * 再次请求获取股票列表接口
     */
    async handleGetList () {
      try {
        const formData = new FormData();
        await getList(formData)
      } catch (error) {
        this.$toast('再次获取股票列表失败')
      }
    }
  }
};
</script>

<style lang='less' scoped>
.van-search {
  padding: 0 15px;
  height: 50px;
  border-bottom: 1px solid rgba(20, 21, 28, 1);
  .van-cell {
    padding: 0;
    height: 30px;
  }
  .van-search__content {
    background: rgba(20, 21, 28, 1);
    height: 30px;
    border-radius: 5px;
  }
  /deep/.van-field__control {
    height: 30px;
  }
  /deep/.van-field__left-icon {
    div {
      height: 30px;
      line-height: 30px;
      display: flex;
      align-items: center;
      img {
        width: 18px;
        height: 18px;
      }
    }
  }
  .van-search__action {
    color: #fff;
    padding: 0;
    padding-left: 15px;
  }
  /deep/.van-field__clear {
    height: 30px;
    display: flex;
    align-items: center;
  }
}
.group {
  margin: 0 15px;
  .cell {
    height: 30px;
    line-height: 30px;
    padding: 0;
    background: rgba(32, 33, 42, 1);
  }
  .van-cell:not(:last-child)::after {
    border: 0;
  }
}
.search-list {
  padding: 0 15px;
  .van-cell {
    height: 30px;
    background: rgba(32, 33, 42, 1);
  }
  .van-icon-delete {
    height: 30px;
    line-height: 30px;
    font-size: 18px;
    color:rgba(126,130,156,1)
  }
  .van-cell__title {
    height: 30px;
    line-height: 30px;
    color:rgba(126,130,156,1)
  }
  .van-cell:not(:last-child)::after {
    border: 0;
  }
}
</style>