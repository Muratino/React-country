import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Box } from '@mui/material';

import Search from '../../components/search/Search';
import Cart from '../../components/cart/Cart';
import { inputSelect } from '../../components/redux/slice/searchCountry';
import { ErrorMessage } from '../../components/errorMessage/errorMessage';

import './Home.scss';

function Home() {
    const { notFounded } = useSelector(inputSelect);

    const creatError = () => {
        return (
            <>
                <ErrorMessage />
                <span className="cart__box-err" >Country not found</span>
            </>
        )
    }
    const notFoundedElem = notFounded ? creatError() : <Cart />;

    return (
        <Container sx={{ maxWidth: { xl: 1200, sm: 480 }, marginTop: 4, marginBottom: 4 }} className='content'>
            <Search />
            <Box sx={{ bgcolor: '#fff', padding: 4 }} className='cart'>
                <div className="cart__box">
                    <h3 className='cart__text' >List of country</h3>
                    {notFoundedElem}
                </div>
            </Box >
        </Container >
    );
}

export default Home;