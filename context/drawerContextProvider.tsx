import React, { useState } from "react";
import DrawerContext from "./drawerContext";

export default function DrawerProvider({children} : {children: React.ReactNode}) {
    const [state, setState] = useState({ drawerIsOpen : false });

    return(
        <DrawerContext.Provider value={ 
            {drawerIsOpen : state.drawerIsOpen, 
            openDrawer: () => { setState({drawerIsOpen: true})},
            closeDrawer: () => { setState({drawerIsOpen: false})} } 
        }>

            { children }

        </DrawerContext.Provider>
    )
}