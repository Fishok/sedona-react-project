import React from 'react';
import Post from "./Post";
import testImg from '../../images/catalog-photo/photo-1-mobile.jpg.png';

const CatalogPage = props => {
    return (
        <div>
            <Post img={testImg}
                  author={'Boris'}
                  description={'Неродные просторы'}
                  likes={'1000'}/>
        </div>
    )
}

export default CatalogPage;
