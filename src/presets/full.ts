// import button from '../components/button/index';
// export default button;
import VueMappButton from '../components/button/index';
import Vue, { VueConstructor } from 'vue';

// export default function(Vue: VueConstructor) {
//     Vue.component('vm-button', VueMappButton);
// }

// export {
//     VueMappButton
// }

// const test = {
//     install() {
//         Vue.component('vm-button', VueMappButton);
//     }
// }

const test = '123';

export default {
    install: function(Vue: VueConstructor){
        Vue.component('Clock', VueMappButton)
    }
};

export { test };

// if (typeof window !== 'undefined' && window.Vue) {
//     window.Vue.use(Clock)
// }
