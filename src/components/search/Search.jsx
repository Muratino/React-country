import React from 'react';
import { useState, useRef, useCallback } from 'react';
import { TextField, Box } from '@mui/material';
import debounce from 'lodash.debounce';
import { useDispatch } from 'react-redux';
import { setChangeInput } from '../redux/slice/searchCountry';

import '../../page/Home/Home.scss';

function Search() {
    const dispatch = useDispatch();
    const [valueRed, setValueRed] = useState('');

    const focusRef = useRef();

    const testDebounce = useCallback(
        debounce((str) => {
            dispatch(setChangeInput(str));
        }, 500),
        [],
    );

    const onClear = () => {
        dispatch(setChangeInput(''));
        setValueRed('');
        focusRef.current.focus();
    }

    if (!valueRed) {
        localStorage.clear();
    }

    const onFocus = (e) => {
        const target = e.target.value;
        setValueRed(target)
        testDebounce(target)
        localStorage.setItem('value', target)
    }

    return (
        <Box sx={{ bgcolor: '#fff' }} className='header'>
            <div className="header__box">
                <h2 className='header__text'>World Search</h2>
                <div className="header__input">
                    <TextField
                        ref={focusRef}
                        value={valueRed}
                        onChange={onFocus}
                        className='header__label'
                        color="secondary"
                        id="outlined-basic"
                        label="Country search"
                        variant="outlined"
                        size="small" />
                    {
                        valueRed ? <img onClick={onClear} src='./icon/xmark-solid.svg' alt="x" /> : null
                    }
                </div>
            </div>
        </Box>
    );
}

export default Search;