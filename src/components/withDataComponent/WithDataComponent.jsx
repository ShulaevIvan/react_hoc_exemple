import React from "react";

const WithDataComponent = (Component, endpoint, propName) => {
    return class extends React.Component {
        state = {}
        componentDidMount() {
            fetch(endpoint)
                .then(response => response.json())
                .then(json => this.setState({[propName]:json}))
        }
        
        render() {

            return <Component {...this.props} {...this.state} />;
        }
    }
}

export default WithDataComponent;