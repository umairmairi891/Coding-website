import React, { createContext, useContext } from 'react'


export  const WebsiteContext= createContext({

    ligthBackground:()=>{},
    darkBackground:()=>{}
})


export const WebsiteProvider=WebsiteContext.Provider;

export default function useBackground (){
   return useContext(WebsiteContext)
}