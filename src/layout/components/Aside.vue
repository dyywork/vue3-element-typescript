<template>
  <el-scrollbar style="background-color:#001529 ">
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="open"
      router
      :collapse-transition="false"
      background-color="#001529"
      text-color="#fff"
      active-text-color="#FFF">
      <el-submenu index="1">
        <template #title>
          <i class="el-icon-location"></i>
          <span>内容</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/home">home</el-menu-item>
          <el-menu-item index="/about">about</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <template #title>导航二</template>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <template #title>导航三</template>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <template #title>导航四</template>
      </el-menu-item>
    </el-menu>
  </el-scrollbar>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
import { mapState } from 'vuex'

@Options({
  data () {
    return {
      logo: require('../../assets/logo.png')
    }
  },
  computed: mapState({
    open: (state: any) => {
      return state.aside.open
    }
  }),
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

.logo {
  height: 53px;
  width: 100%;
  background-color: #001529;
  color: white;
  display: flex;
  align-items: center;

  img {
    height: 43px;
    padding-left: 20px;
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
