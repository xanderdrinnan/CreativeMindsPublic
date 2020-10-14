import React, { useState } from 'react';
import { NavMenu } from '../NavMenu/NavMenu';
import { Sidebar } from '../Sidebar/Sidebar';

export default function Header(props) {

    const [width, setWidth] = useState(0);
    const breakpoint = 641;

    React.useEffect(() => {
        setWidth(window.innerWidth);
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", () => setWidth(window.innerWidth));

        //Remove the event listener
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return width < breakpoint ? <Sidebar/> : <NavMenu/>
}