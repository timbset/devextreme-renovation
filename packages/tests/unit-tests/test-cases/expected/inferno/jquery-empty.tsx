import {
  BaseInfernoComponent,
  InfernoComponent,
  InfernoComponentWrapper,
} from "../../../../modules/inferno/base_component";

export declare type PropsType = {
  height?: number;
  width?: number;
};
const Props: PropsType = {};
import { createElement as h } from "inferno-compat";
declare type RestProps = {
  className?: string;
  style?: { [name: string]: any };
  key?: any;
  ref?: any;
  $element: Element | null | undefined;
};

export default class Widget extends InfernoComponentWrapper<
  typeof Props & RestProps
> {
  state = {};
  refs: any;

  constructor(props: typeof Props & RestProps) {
    super(props);
  }

  get restAttributes(): RestProps {
    const { height, width, ...restProps } = this.props;
    return restProps;
  }

  render() {
    const props = this.props;
    return view1({
      props: { ...props },
      restAttributes: this.restAttributes,
    } as Widget);
  }
}

Widget.defaultProps = {
  ...Props,
};
function view1(viewModel: Widget) {
  return (
    <div style={{ height: viewModel.props.height }}>
      <span></span>

      <span></span>
    </div>
  );
}
