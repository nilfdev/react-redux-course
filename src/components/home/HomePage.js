import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component{
    render(){
        return (
            <div className="jumbotron">
                <h1>pluralsight admin</h1>
                <p>React readux</p>
                <Link to="about" className ="btn btn-primary btn=lg">learn more</Link>
            </div>
        );
    }
}
export default HomePage;
