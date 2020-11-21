import React from 'react';
import likeImg from '../../images/like-icon.svg';
import styles from './post.module.css'

const Post = ({img, description, author, likes}) => {
    return (
        <div className={styles.container}>
            <img src={img}/>
            <div>
                <h3 className={styles.commonTextStyle}>{description}</h3>
                <h>{`Автор фото: ${author}`}</h>
            </div>
            <div className={styles.likeWrapper}>
                <img src={likeImg}/>
                <div className={styles.commonTextStyle + ' ' + styles.likesTextStyle}>
                    <h>{likes}</h>
                </div>
            </div>
        </div>
    )
}

export default Post;
