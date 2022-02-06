import jsonPlaceholder from "../apis/jsonPlaceholder";
import _ from 'lodash';
import { isCompositeComponent } from "react-dom/cjs/react-dom-test-utils.production.min";


export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());
    const userIds = _.uniq(_.map(getState().posts,'userId'));
    console.log('userIds',userIds);
    userIds.forEach(id => dispatch(fetchUser(id)));
}
export const fetchPosts = () =>  async dispatch => {
        const resposne = await jsonPlaceholder.get('/posts');
        dispatch({type:'FETCH_POSTS',payload:resposne.data});
    };

export const fetchUser = (id) => async dispatch => {
    const resposne = await jsonPlaceholder.get(`./users/${id}`);
    dispatch({type:'FETCH_USER',payload:resposne.data});
 };
/*
export const fetchUser = (id) => dispatch => {
   _fetchUser(id, dispatch)
};

const _fetchUser = _.memoize(async (id, dispatch) => {
    console.log('Dispatch',dispatch);
    const resposne = await jsonPlaceholder.get(`./users/${id}`);
    dispatch({type:'FETCH_USER',payload:resposne.data});
});*/