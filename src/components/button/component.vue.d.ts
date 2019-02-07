import { Vue } from 'vue-property-decorator';
export default class VueMappButton extends Vue {
    icon: string;
    loading: boolean;
    shadow: boolean;
    primary: boolean;
    raised: boolean;
    disabled: boolean;
    readonly: boolean;
    fullWidth: boolean;
    type: string;
    click($event: Event): void;
}
