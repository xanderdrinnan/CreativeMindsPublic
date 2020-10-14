import React from 'react';
import './Sidebar.module.scss';
import Link from 'next/link';
import { bubble as Menu } from 'react-burger-menu';



export function Sidebar() {

    return (
        <>
            <nav className="menu-container">
                <Menu>
                    <img src="/sidebarPic.png" alt="Artwork for Sidebar" id="sidebarLogo" />
                    <Link href="/Home"><a className="sidebar-link">Home</a></Link>
                    <Link href="/About"><a className="sidebar-link">About</a></Link>
                    <Link href="/Gallery"><a className="sidebar-link">Gallery</a></Link>
                    <Link href="/Testimonials"><a className="sidebar-link">Testimonials</a></Link>
                    <Link href="/Programs"><a className="sidebar-link">Programs</a></Link>
                </Menu>
            </nav>
            <section className="sidebarWrapper">
                <div className="sidebarLogoContainer"><Link href='/Home'><img src="/Logo150.svg" alt="Logo of Xander Business" /></Link></div>
                <div className="sidebarTitlesContainer">
                    <h1>Xander Business</h1>
                    <h2>Children's Services</h2>
                </div>

                {/*Credit to https://codepen.io/jegedeolamide99/pen/MOqrZj*/}
                <div className="contact-sidebar-container">
                    <a className="hover-5"><span><Link href='/Contact' id="contact-link">Contact Us</Link></span></a>
                </div>


            </section>
        </>
    );
}