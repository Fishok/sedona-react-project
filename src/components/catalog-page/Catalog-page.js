import React from 'react';
import Post from "./Post";
import image1 from '../../images/catalog-photo/mobile/photo-1-mobile.jpg.png'
import image2 from '../../images/catalog-photo/mobile/photo-2-mobile.jpg.png'
import image3 from '../../images/catalog-photo/mobile/photo-3-mobile.jpg.png'
import image4 from '../../images/catalog-photo/mobile/photo-4-desktop 1.png'

const CatalogPage = props => {

    const posts = dummyData.map(post => <Post img={post.img}
                                              author={post.author}
                                              description={post.description}
                                              likes={post.likes}/>)

    return (
        <div className='row'>
            {posts}
        </div>
    )
}

let dummyData = [
    {
        img: image1,
        author: 'Борис',
        description: 'Неродные просторы',
        likes: '1350'
    },
    {
        img: image2,
        author: 'Сергей',
        description: 'Местная растительность',
        likes: '143'
    },
    {
        img: image3,
        author: 'Петр',
        description: 'Дорога на север',
        likes: '96'
    },
    {
        img: image4,
        author: 'Антон',
        description: 'Мост дьявола',
        likes: '254'
    }
]


export default CatalogPage;
