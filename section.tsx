import * as React from 'react';
import Banner from './banner';
export default class Section extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      isShowDiv: false,
      currentDivName: 'dsgs',
    };
  }
  toggle = () => {
    debugger;
    this.setState({ isShowDiv: !this.state.isShowDiv });
  };

  onClickHandle = (value) => {
    debugger;
    let textvalue = value.target.dataset.name;
    this.setState({ currentDivName: textvalue });
  };

  render() {
    return (
      <div>
        <h1>My First React Component!</h1>
        {/* <button onClick={this.toggle}>Toggle</button> */}
        <Banner {...this.state} toggleDiv={this.toggle}></Banner>
        {this.state.isShowDiv ? (
          <div data-name={'parent'} onClick={(e) => this.onClickHandle(e)}>
            Parent Content <br />
            Aliquam non erat non risus pretium eleifend. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Proin mi orci, rhoncus eu libero vel, pulvinar ultricies
            lorem. Sed mattis laoreet risus ut iaculis. Quisque pulvinar eget
            dui id semper. Nam eget dui a lacus scelerisque ultricies.
            Suspendisse tincidunt, nulla ut tempus finibus, tortor urna
            dignissim nulla, lobortis molestie risus quam a justo. Vestibulum
            eget ultrices nibh. Nunc in lobortis leo. Cras felis massa,
            fringilla at tellus non, interdum ultrices odio. Donec tinci
          </div>
        ) : (
          <div> ddakkaa</div>
        )}

        <div>Results: {this.state.currentDivName}</div>
      </div>
    );
  }
}
