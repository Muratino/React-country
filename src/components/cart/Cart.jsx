import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';

import { FetchCountry } from '../../service/FetchCountry';
import Skeleton from '../Skeleton/Skeleton';

import { inputSelect } from '../redux/slice/searchCountry';

import './Cart.scss';

function Cart() {

    const { changeInput } = useSelector(inputSelect);

    const { getNameCountry } = FetchCountry();
    const [oneCountry, setOneCountry] = useState([]);
    // const [skeleton, setSkeleton] = useState(true);


    const getName = (str) => {
        const local = localStorage.getItem('value')
        if (local) {
            getNameCountry(local)
                .then(res => setOneCountry(res));
        } else {
            getNameCountry(str)
                .then(res => setOneCountry(res));
        }
    }

    useEffect(() => {
        getName(changeInput)
    }, [changeInput])

    const creatCart = (arr) => {
        return (
            arr.map(elem => {
                return (
                    <li key={elem.code} className="cart__item">
                        <Link to={`/oneCountry/${elem.code}`}>
                            <img src={elem.flags} alt={elem.name} />
                            <div className="cart__item-text">
                                <span className="cart__item-text-name">{elem.name}</span>
                                <span className="cart__item-text-code">№ {elem.code}</span>
                            </div>
                        </Link>
                    </li>
                )
            })
        )
    }

    const carts = oneCountry ? creatCart(oneCountry) : <Skeleton />;

    return (
        <ul className='cart__ul'>
            {carts}
        </ul>
    );
}

export default Cart;
