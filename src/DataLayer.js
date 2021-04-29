import React,
{
    CreateContext,
    useContext,
    useReducer
}
    from "react";

export const DataLayerContext = createContext();

export const DataLayer = ({ initialState, reducer, children }) => (
    <DataLayerContext.Provider>
        {children}
    </DataLayerContext.Provider>

)
