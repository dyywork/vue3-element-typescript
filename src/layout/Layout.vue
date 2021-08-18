<template>
  <el-container class="content">
    <el-main style="padding: 0">
      <el-container class="heg_100">
        <el-aside width="200px" :style="!open? openStyle: closeStyle">
          <Aside/>
        </el-aside>
        <el-container>
          <el-header class="header">
            <i class="el-icon-s-fold" @click="toggleSide"></i>
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
      openStyle: {
        width: '200px',
        transition: 'width 0.28s'
      },
      closeStyle: {
        width: '65px',
        transition: 'width 0.28s'
      }
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
    }
  }
})
export default class Layout extends Vue {
}
</script>

<style scoped lang="scss">
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
