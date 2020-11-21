import React from 'react';
import HeaderHead from "./header-components/header-head/header-head";
import HeaderMain from "./header-components/header-main/header-main";

const Header = () => {
    return (
        <div>
            <div>
                <HeaderHead></HeaderHead>
                <HeaderMain></HeaderMain>
            </div>
        </div>
    )
        ;
};

export default Header;