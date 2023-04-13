import * as React from 'react';
export default class Banner extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Second Component!</h1>
        { this.props.isShowDiv &&
           <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tristique nibh molestie dui blandit iaculis. Vivamus lacinia pretium arcu, a blandit arcu facilisis sed. Sed eget condimentum est, vel porta neque. Sed sit amet rhoncus nulla. Donec varius diam et magna maximus, et pellentesque orci venenatis.
        
        </div>}
        <button onClick={this.props.toggleDiv}>Toggle</button>
      </div>
    );
  }
}
