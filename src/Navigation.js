import React from "react";

class Navigation extends React.Component {
    render() {
        const { onRouteChange } = this.props;
        return (
            <nav>
                <div onClick={() => onRouteChange('sign in')}>Sign out</div>
             
            </nav>
        );
    }
}

export default Navigation;