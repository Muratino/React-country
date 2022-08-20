import { useDispatch } from "react-redux";
import { setFounded } from "../components/redux/slice/searchCountry";

export const FetchCountry = () => {
    const dispatch = useDispatch();

    const _apiBase = 'https://restcountries.com/v3.1/';
    const _apiAll = 'all';
    const _apiName = 'name';

    //https://restcountries.com/v3.1/all
    const getResource = async (url) => {
        let res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Could not feth ${url}, status: ${res.status}`);
        }
        return await res.json();
    }

    const getAllCountry = async () => {
        const res = await getResource(`${_apiBase}${_apiAll}`);
        return _transformAllCountry(res);
    }

    const getNameCountry = async (value) => {
        if (!value) return
        try {
            const res = await getResource(`${_apiBase}${_apiName}/${value}`);
            return _transformNameCountry(res);
        } catch (err) {
            console.log(err);
            dispatch(setFounded(true));
        }
    }
    // https://restcountries.com/v3.1/alpha/{code}
    const getCountryInfo = async (code) => {
        if (!code) {
            return;
        }
        const res = await getResource(`${_apiBase}alpha/${code}`);
        return _transformNameCountry(res);
    }



    const _transformAllCountry = (arr) => {
        const country = [];
        for (let index = 0; index < 6; index++) {
            country.push(arr[index]);
        }
        return country
    }


    const _transformNameCountry = (arr) => {
        return (
            arr.map(el => {
                return {
                    capital: el.capital,
                    coatOfArms: el.coatOfArms.png,
                    population: el.population,
                    region: el.region,
                    name: el.name.official,
                    code: el.ccn3,
                    maps: el.maps.googleMaps,
                    flags: el.flags.png
                };
            })
        )
    }

    return { getAllCountry, getNameCountry, getCountryInfo };
}
