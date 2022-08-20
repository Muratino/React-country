import { configureStore } from '@reduxjs/toolkit';
import searchCountry from './slice/searchCountry';
import info from './slice/infoCountry';

export const store = configureStore({
    reducer: {  
        searchCountry,
        info,
    },

})