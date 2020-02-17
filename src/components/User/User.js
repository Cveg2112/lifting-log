import React, { Component } from 'react';

class User extends Component {
    
    componentDidMount(){
        //this.props.match.params.uid;
        //this.
    }

    render(){
        return (
            <section className="cp-routines">
                <div className="in">
                    <h1>{this.props.match.params.uid}'s Page</h1>
                </div>
            </section>
        );
    }
}

export default User;