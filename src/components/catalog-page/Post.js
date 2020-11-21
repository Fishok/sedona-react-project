import React from 'react';

const Post = ({ img, description, author, likes  }) => {
    return(
        <div>
            <img src={img}/>
            <div>
                <h3>{description}</h3>
                <h1>{`Автор фото: ${author}`}</h1>
            </div>
            <div>
                <img src={'../../images/like-icon.svg'} />
                <h3>{likes}</h3>
            </div>
        </div>
    )
}

export default Post;
