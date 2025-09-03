import { createContext } from 'react';

interface AppContextT {
    name: string;
}

export const appDefaults: AppContextT = {
    name: 'FiberSpace'
}

export const AppContext = createContext<AppContextT>(appDefaults);