import React from 'react';
import { connect } from 'react-redux';

import { fetchPostsAndUsers } from '../actions';
import UserHeader from './UserHeader';

class PostList extends React.Component{

    componentDidMount(){
        this.props.fetchPostsAndUsers();
    }

    renderList = () => {
        return this.props.posts.map(post => {
            return (
                <div className="item" key={post.id}>
                    <i className="large middle aligned icon user"></i>
                    <div className="content">
                        <div className="header"> {post.title} </div>
                        <div className="description"> {post.body} </div>
                        <UserHeader userId={post.userId} />
                    </div>
                    <hr />
                </div>
            )
        });
    }

    render(){
        return ( 
            <div className="ui divided relaxed list">
                {this.renderList()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);