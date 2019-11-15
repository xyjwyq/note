import React from "react";
import types from "../../../utils/commonTypes";

export default function withDataGroup(Comp) {
  return class DataGroupWrapper extends React.PureComponent {
    static propTypes = {
      data: types.groupData
    };

    static defaultProps = {
      data: []
    };

    render() {
      const { data, ...props } = this.props;
      const comps = data.map(it => (
        <Comp key={it.id} info={it} {...props} />
      ));
      return <>{comps}</>;
    }
  };
}
