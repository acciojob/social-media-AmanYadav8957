import React, { useState } from "react";  
import Post from "./Post";  

const App = () => {  
    const [posts, setPosts] = useState([]);  
    const [users] = useState(['Author1', 'Author2', 'Author3']);  
    const [newPostContent, setNewPostContent] = useState('');  
    const [selectedAuthor, setSelectedAuthor] = useState(users[0]);  
    const [notifications, setNotifications] = useState([]);  

    const createPost = () => {  
        if (newPostContent.trim()) {  
            setPosts([...posts, { author: selectedAuthor, content: newPostContent }]);  
            setNewPostContent('');  
        }  
    };  

    const refreshNotifications = () => {  
        setNotifications([...notifications, `New notification at ${new Date().toLocaleTimeString()}`]);  
    };  

    return (  
        <div className="container">  
            <h1>Social Media App for Authors</h1>  
            <div className="tabs">  
                <button onClick={() => refreshNotifications()}>Refresh Notifications</button>  
            </div>  
            <div>  
                <h2>Create Post</h2>  
                <label>Select Author: </label>  
                <select onChange={(e) => setSelectedAuthor(e.target.value)} value={selectedAuthor}>  
                    {users.map((user, index) => (  
                        <option key={index} value={user}>{user}</option>  
                    ))}  
                </select>  
                <br />  
                <textarea  
                    value={newPostContent}  
                    onChange={(e) => setNewPostContent(e.target.value)}  
                    rows="4"  
                    cols="50"  
                    placeholder="Content"  
                />  
                <br />  
                <button onClick={createPost}>Post</button>  
            </div>  
            <h2>Recent Posts</h2>  
            <div className="posts-list">  
                {posts.map((post, index) => (  
                    <Post key={index} author={post.author} content={post.content} />  
                ))}  
            </div>  
            <h2>Notifications</h2>  
            <ul>  
                {notifications.map((notification, index) => (  
                    <li key={index}>{notification}</li>  
                ))}  
            </ul>  
        </div>  
    );  
};  

export default App;  
