import registerUser from './registerUser'
import loginUser from './loginUser'
import getuserId from './getUserId'
import getUserName from './getUserName'
import isUserLoggedIn from './isUserLoggedIn'
import logoutUser from './logoutUser'

import getPosts from './getPosts'
import createPost from './createPost'
import deletePost from './deletePost'
import toggleLikePost from './toggleLikePost'
import updatePostText from './updatePostText'




const logic = {
    registerUser,
    loginUser,
    getuserId,
    getUserName,
    isUserLoggedIn,
    logoutUser,

    getPosts,
    createPost,
    deletePost,
    updatePostText,
    toggleLikePost
}

export default logic