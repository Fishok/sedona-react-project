import React from 'react';
import likeImg from '../../images/like-icon.svg';
import styles from './post.module.css'

const Post = ({img, description, author, likes}) => {
    return (
        <div className={styles.container + ' col-12'}>
            <div>
                <img className={styles.img} src={img}/>
            </div>
            <div className={styles.descriptionWrapper}>
                <div className={styles.commonTextStyle}>{description}</div>
                <div className={styles.authorTextStyle}>{`Автор фото: ${author}`}</div>
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
