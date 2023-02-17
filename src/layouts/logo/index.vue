<template>
  <div
    class="logo-wrapper"
    :style="{
      'border-bottom':
        state.layoutMode === 'ttb'
          ? 'none'
          : '1px dashed var(--el-border-color-light)',
    }"
  >
    <img v-if="showLogo" class="logo-img" :src="logo" />
    <transition v-if="showTitle" name="el-fade-in-linear">
      <span v-show="!state.isCollapse || alwaysShow" class="logo-title">{{
        setting.projectName
      }}</span>
    </transition>
  </div>
</template>

<script lang="ts">
import store from '../store';
import { defineComponent, ref, watch, computed } from 'vue';
import { useSetting } from '@/hooks';
export default defineComponent({
  name: 'Logo',
  props: {
    showTitle: {
      type: Boolean,
      default: true,
    },
    showLogo: {
      type: Boolean,
      default: true,
    },
    alwaysShow: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const setting = useSetting();
    const state = store.state;
    const bgColor = ref(
      state.theme === 'light' ? 'var(--el-color-white)' : '#001428'
    );
    const logo = computed(() => {
      return state.theme === 'light' ? require('@/assets/dark_logo.png') : require('@/assets/light_logo.png')
    })
    const textColor = ref(
      state.theme === 'light' ? '#001428' : 'var(--el-color-white)'
    );
    watch(
      () => state.theme,
      (newVal) => {
        bgColor.value =
          newVal === 'light' ? 'var(--el-color-white)' : '#001428';
        textColor.value =
          state.theme === 'light' ? '#001428' : 'var(--el-color-white)';
      }
    );
    return {
      state,
      setting,
      bgColor,
      textColor,
      logo
    };
  },
});
</script>
<style lang="scss" scoped>
@import "../styles/variables.scss";
.logo-wrapper {
  height: $logoHeight;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: v-bind(bgColor);
  color: v-bind(textColor);
  .logo-img {
    width: 20px;
  }
  .logo-title {
    font-weight: bold;
    padding-left: 10px;
  }
}
</style>
