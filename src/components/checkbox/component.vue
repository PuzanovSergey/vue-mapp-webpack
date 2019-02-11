<template>
  <div
    class="vm-checkbox"
    :disabled="disabled"
    :type="type"
    :class="{
      'is--primary': primary,
      'is--raised': raised,
      'is--icon': icon,
      'is--loading': loading,
      'is--full': fullWidth,
      'is--shadow': shadow
    }"
    @click="click"
  >
    <div
      class="vm-checkbox__label"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
// import { CreateElement } from 'vue/types/vue';
// import { VueMappIcon } from 'component/typo/icon';
// import { VueMappLoader } from 'component/event/loader';
// // import template from './template.pug';
// var template = require('pug-loader!./template.pug');

@Component({
  name: 'vm-checkbox',
  // components: {
  //   'vm-icon': VueMappIcon,
  //   'vm-loader': VueMappLoader,
  // },
})
export default class VueMappCheckbox extends Vue {
  @Prop(String) icon!: string;
  @Prop(Boolean) loading!: boolean;
  @Prop(Boolean) shadow!: boolean;
  @Prop(Boolean) primary!: boolean;
  @Prop(Boolean) raised!: boolean;
  @Prop(Boolean) disabled!: boolean;
  @Prop(Boolean) readonly!: boolean;
  @Prop(Boolean) fullWidth!: boolean;
  @Prop({
    type: String,
    default: 'button',
  })
  type!: string;

  click($event: Event): void {
    if (!this.disabled && !this.readonly) {
      this.$emit('click', $event);
    }
  }
}
</script>

<style src="./css/index">
</style>
