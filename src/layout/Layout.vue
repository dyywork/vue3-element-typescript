<template>
  <el-container class="content">
    <el-main style="padding: 0">
      <el-container class="heg_100">
        <el-aside width="200px" :style="!open? openStyle: closeStyle">
          <div class="logo" :style="!open? openStyle: closeStyle">
            <img :src="logo"/>
            <span v-show="openTitle">莫名点</span>
          </div>
          <Aside/>
        </el-aside>
        <el-container>
          <el-header class="header">
            <i :class="open? 'el-icon-s-unfold' : 'el-icon-s-fold'" @click="toggleSide"></i>
          </el-header>
          <el-main>
            <router-view/>
          </el-main>
        </el-container>
      </el-container>
    </el-main>
<!--    <el-footer>Footer</el-footer>-->
  </el-container>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
import { mapState } from 'vuex'

import Aside from '@/layout/components/Aside.vue'

@Options({
  components: {
    Aside
  },
  data () {
    return {
      logo: require('../assets/logo.png'),
      openStyle: {
        width: '200px',
        transition: 'width 0.28s'
      },
      closeStyle: {
        width: '65px',
        transition: 'width 0.28s'
      },
      openTitle: true
    }
  },
  computed: mapState({
    open: (state: any) => {
      return state.aside.open
    }
  }),
  methods: {
    toggleSide () {
      this.$store.commit('CHANGE_ASIDE')
      if (this.open) {
        this.openTitle = !this.open
      } else {
        setTimeout(() => {
          this.openTitle = !this.open
        }, 100)
      }
    }
  }
})
export default class Layout extends Vue {
}
</script>

<style scoped lang="scss">
.logo {
  height: 53px;
  background-color: #001529;
  color: white;
  display: flex;
  align-items: center;

  img {
    height: 43px;
    padding-left: 10px;
  }

  span {
    display: inline-block;
    min-width: 50px;
  }
}
.content {
  height: 100%;

  .header {
    display: flex;
    align-items: center;
    font-size: 20px;
    box-shadow: 0px 1px 5px #888888;

    i {
      cursor: pointer;
    }
  }
}

:deep(.el-menu) {
  border-right: none;
}

:deep(.el-submenu__title) {
  text-align: left;
}

:deep(.el-menu-item) {
  text-align: left;
}
</style>
