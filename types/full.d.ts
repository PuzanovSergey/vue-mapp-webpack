// import { VueConstructor } from 'vue';

  /*
  / function
 */

// declare function VueMapp (Vue: any, options?: any): void;

  /*
  / object
 */

declare var test: string;

declare namespace VueMapp {
  function install(Vue: any, options?: any): void;
}

  /*
  / export default
 */

export default VueMapp;

export { test };
