<template>
  <div class="side-content">
    <el-scrollbar style="background-color:#001529 ">
      <el-menu
        default-active="/home"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :collapse="open"
        router
        :collapse-transition="false"
        background-color="#001529"
        text-color="#fff"
        active-text-color="#FFF">
        <template v-for="(item, index) in routerList" :key="index">
          <el-submenu v-if="item.children && item.children.length > 1" :index="index.toString()">
            <template #title>
              <i :class="item.meta.icon"></i>
              <span>{{ item.meta.title }}</span>
            </template>
            <el-menu-item-group>
              <el-menu-item v-for="menuItem in item.children" :key="menuItem.path" :index="menuItem.path">
                {{ menuItem.meta.title }}
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item v-else :index="item.path">
            <i :class="item.meta.icon"></i>
            <template #title>{{ item.meta.title }}</template>
          </el-menu-item>
        </template>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
import { mapState } from 'vuex'
import router from '../../router/index'

@Options({
  data () {
    return {
      logo: require('../../assets/logo.png'),
      routerList: [],
      openStyle: {
        width: '200px',
        transition: 'width 0.29s'
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
  created () {
    this.routerList = router.options.routes
  },
  methods: {
    handleOpen (key: string, keyPath: []) {
      console.log(key, keyPath)
    },
    handleClose (key: string, keyPath: []) {
      console.log(key, keyPath)
    }
  }
})
export default class Aside extends Vue {
}
</script>

<style scoped lang="scss">
.el-menu-vertical-demo {
  height: 100%;
}

.side-content {
  height: calc(100% - 53px);
}

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

:deep(.el-menu-item.is-active) {
  background-color: #1890ff !important;
}

:deep(.el-submenu__title) {
  height: 43px;
  line-height: 43px;
}

:deep(.el-menu-item, .el-submenu__title) {
  line-height: 43px;
}

:deep(.el-menu-item) {
  height: 43px;
}
</style>
