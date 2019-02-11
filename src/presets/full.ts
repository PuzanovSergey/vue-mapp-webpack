import VueMappButton from '../components/button/index';
import VueMappCheckbox from '../components/checkbox/index';

import Vue, { VueConstructor } from 'vue';

export default function(Vue: VueConstructor, options: any) {
    Vue.component('vm-button', VueMappButton);
    Vue.component('vm-checkbox', VueMappCheckbox);
}

export {
    VueMappButton,
    VueMappCheckbox
}

// const test = {
//     install() {
//         Vue.component('vm-button', VueMappButton);
//     }
// }

// export default {
//     install: function(Vue: VueConstructor) {
//         Vue.component('vm-button', VueMappButton)
//     }
// };

// if (typeof window !== 'undefined' && window.Vue) {
//     window.Vue.use(Clock)
// }
