import React from 'react';

import Pricing from './landingPage/pricing';
import Pitch from './landingPage/pitch';
class LandingPage extends React.Component {
    render() {
        return(
            <div>
                <h1>Pages and Pricing</h1>
                <Pitch {...this.props} />
                <Pricing {...this.props}/>
            </div>
        )
    }
}

export default LandingPage