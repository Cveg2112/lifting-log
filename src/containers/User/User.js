import React, { Component } from 'react';

class User extends Component {
    
    componentDidMount(){
        console.log()
        this.props.pageLoad(this.props.match.params.uid);
    }

    render(){
        return (
            <section className="cp-routines">
                <div className="in">
                    <h1>{this.props.current}'s Page</h1>
                </div>
            </section>
        );
    }
}

export default User;