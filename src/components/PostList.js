import React from 'react';
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from '../actions';
import UserHeader from './UserHeader';

class PostList extends React.Component {
    componentDidMount(){
        this.props.fetchPostsAndUsers();
    }

    rednderedList() {
        return this.props.posts.map(posts => {
            return(
                <div className='item' key={posts.id}>
                    <i className='large niddle aligned icon user'/>
                    <div className='content'>
                        <div className='description'>
                            <h2>{posts.title}</h2>
                            <h2>{posts.body}</h2>
                        </div>
                        <UserHeader userId = {posts.userId}/>
                    </div>
                </div>
            )
        })
    }
    render() {
        return <div className='ui relaxed divided list'>{this.rednderedList()}</div>
    }
}

const mapStateToProps = (state) =>{
    return {posts: state.posts};
}
export default connect(mapStateToProps,{fetchPostsAndUsers})(PostList);