import React, { Component } from 'react';

class User extends Component {
    
    state = {
        currentUserInfo: null
    }

    // currentUserHandler = () => {
    //     let currentUser = this.props.current;
    // }
    
    componentDidMount(){
        this.props.pageLoad(this.props.match.params.uid);
    }

    render(){
        return (
            <section className="cp-contentBox">
                <div className="in">
                    <h1>User: {this.props.current}</h1>
                    <p></p>
                </div>
            </section>
        );
    }
}

export default User;