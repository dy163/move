<template>
  <div class="busimess" :value="value" @input="$emit('input', $event)">
    <div @click="isPurchase = true">
      <img src="@/assets/img/purchase.png" alt />
      <p>买入</p>
    </div>
    <div @click="isShow = true">
      <img src="@/assets/img/selling-price.png" alt />
      <p>卖出</p>
    </div>
    <div class="busimess-follow">
      <img src="@/assets/img/cancel.png" @click="$router.push('/order-list')" />
      <p>撤单</p>
    </div>
    <div class="busimess-follow">
      <img src="@/assets/img/concern.png" @click="handleConcern" />
      <p>自选</p>
    </div>
    <!-- 卖出子组件 -->
    <home-sell v-model="isShow" />
    <!-- 买入子组件 -->
    <home-purchase v-model="isPurchase" />
  </div>
</template>

<script>
import { mySelectStockAdd } from "@/api/stock";

import HomeSell from "./sell";
import HomePurchase from "./purchase";

export default {
  name: "Besiness",
  components: {
    HomeSell,
    HomePurchase
  },
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      list: [],
      isShow: false,
      isPurchase: false
    };
  },
  methods: {
    handlePurchase() {},
    handlePrice() {},
    /**
     * 添加自选
     */
    async handleConcern() {
      const tokenHeader = window.localStorage.getItem("sessionid");
      try {
        if (!tokenHeader) {
          this.$router.push("/login");
        } else {
          this.list = this.$route.query.q;
          const stock_code = this.list.stock_code;
          const formData = new FormData();
          formData.append("stock_code", stock_code);
          const res = await mySelectStockAdd(formData);
          if(res.data.status) {
            this.$toast("添加自选成功");
          } else {
            this.$toast("股票已在自选中，请不要重复添加");
          }
        }
      } catch (error) {
        this.$toast("添加失败");
      }
    }
  }
};
</script>


<style lang='less' scoped>
.busimess {
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 0;
  height: 50px;
  background: rgba(32, 33, 42, 1);
  div:nth-child(1) {
    width: 117px;
    background: rgba(245, 69, 69, 1);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    img {
      width: 20px;
      height: 19px;
      padding-right: 5px;
    }
    p {
      font-size: 16px;
      font-family: PingFangSC-Medium, PingFangSC;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
    }
  }
  div:nth-child(2) {
    width: 117px;
    background: rgba(51, 192, 137, 1);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    img {
      width: 20px;
      height: 19px;
      padding-right: 5px;
    }
    p {
      font-size: 16px;
      font-family: PingFangSC-Medium, PingFangSC;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
    }
  }
  .busimess-follow {
    width: 71px;
    text-align: center;
    padding-bottom: 5px;
    box-sizing: border-box;
    p {
      font-size: 12px;
      font-family: PingFangSC-Regular, PingFangSC;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
    }
  }
}
</style>