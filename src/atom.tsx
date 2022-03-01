export interface IAtomProps {
  key: string;
  default: any;
}
type state = 'hasValue' | 'loading' | 'error';
export class atom<T = any> {
  props: IAtomProps;
  event: Event;
  value: T;
  bodyRef: HTMLBodyElement;
  state: state;

  constructor(props: IAtomProps) {
    this.props = props;
    this.value = props.default;

    this.state = 'loading';

    this.event = new Event('configured', { bubbles: true });
    this.bodyRef = document.getElementsByTagName('body')[0];
  }

  get_default() {
    return this.props.default;
  }

  set_default(value: any) {
    this.props.default = value;
  }

  set(value: any) {
    this.value = value;
    this.event = new Event(`recoil_changeState_${this.props.key}`, { bubbles: true });
    this.bodyRef.dispatchEvent(this.event);
  }
}
