import React from "react";
import { connect } from 'react-redux';

class HomeNav extends React.Component {
  render() {
    return (
      <div className="ui menu">
        <div className="header item">Tiendaap</div>
        <a className="item">About Us</a>
        <a className="item">Jobs</a>
        <a className="item">Locations</a>
        <div className="right item">{this.props.user.name}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return { user: state.user };
};

export default connect(mapStateToProps, {})(HomeNav);
