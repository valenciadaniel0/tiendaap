import React from "react";
import {connect} from "react-redux";
import Button from "./button";
import Field from "./field";
import HomeNav from "./layouts/homeNav";
import {search} from '../actions/item';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {code: ""};
    }

    searchProducts() {
        this.props.search(this.state.code, this.props.user.authentication_token);
    }

    render() {
        return (
            <React.Fragment>
                <HomeNav/>
                <div className="ui container">
                    <div className="ui fluid input">
                        <Field
                            key="home-code-input"
                            label=""
                            placeholder="Insert the code of the product"
                            inputType="text"
                            controlFunction={(code) => {
                                this.setState({code});
                            }}
                            currentValue={this.state.code}
                        />
                        <Button
                            action={() => {
                                this.searchProducts();
                            }}
                            text="OK"
                        />
                    </div>
                </div>
                <div>
                    {this.props.item ? this.props.item.code : 'paila'}
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {item: state.item, user: state.user}
};

export default connect(mapStateToProps, {search})(Home);
