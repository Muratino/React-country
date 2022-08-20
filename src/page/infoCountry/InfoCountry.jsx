import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
import { Container, Box, Button, Grid } from '@mui/material';
// import { ErrorMessage } from '../../components/errorMessage/errorMessage';

import { FetchCountry } from '../../service/FetchCountry';
import Spinner from '../../components/spinner/Spinner'

import '../Home/Home.scss';
import './infoCountry.scss';

function OneCountry() {
    const { id } = useParams();

    const { getCountryInfo } = FetchCountry();
    const [country, setContry] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        updateCountry(id);
    }, [])

    const updateCountry = (i) => {
        getCountryInfo(i)
            .then(res => { onCountryLoaded(res); setLoading(false) });
    }

    const onCountryLoaded = (arr) => {
        arr.map(elem => setContry(elem))

    }

    const loaded = loading ? <Spinner /> : <Vue info={country} />;

    return (
        <Container sx={{ maxWidth: { xl: 1200, sm: 480 }, marginTop: 4, marginBottom: 4 }} className='content'>
            <Box sx={{ bgcolor: '#fff', padding: 4 }} className='cart'>
                <div className="cart__box">
                    <h3 className='cart__text' >Country Information</h3>
                    {loaded}
                    <Link to='/'>
                        <Button
                            sx={{ padding: '5px 40px', marginTop: 9 }}
                            variant="contained"
                            color="secondary"
                            size='large'>Back</Button>
                    </Link>
                </div>
            </Box >
        </Container >

    );
}

const Vue = ({ info }) => {
    const { capital, coatOfArms, population, region, name, code, maps, flags } = info;
    const allINfo = [{ value: capital, name: 'Name' }, { value: population, name: 'Population' }, { value: region, name: 'Region' }, { value: maps, name: 'Map sours' }];
    // const [loaded, setLoaded] = useState(true);
    return (
        <Grid container spacing={2}>
            <div className="country">
                <Grid item xs={6} md={4}>
                    <div className="country__right">
                        <img src={flags} alt={flags} />
                        <div className="country__right-info">
                            <span>{name}</span>
                            <span>№ {code}</span>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={6} md={8}>
                    <div className="country__left">
                        {!coatOfArms ? <Spinner /> : <img src={coatOfArms} alt={coatOfArms} />}
                        <div className="country__left-info">
                            {
                                allINfo.map((elem, i) => {
                                    return <span key={i}>{elem.name}: {elem.value}</span>
                                })
                            }
                        </div>
                    </div>
                </Grid>
            </div>
        </Grid>
    );
}


export default OneCountry;