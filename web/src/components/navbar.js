import React from "react";
import { Link } from "gatsby";
import Logo from "./logo";

import "../assets/scss/main.scss";


class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navbarPlaceholderHeight: 80,
            sidebarOpen: false
        };

        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
        this.menuOpen = this.menuOpen.bind(this);
    }

    onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
    }

    menuOpen(event) {
        event.preventDefault();
        this.onSetSidebarOpen(true);
    }

    componentDidMount() {
        this.changeNavbarPlaceholderHeight();

        let logo = this.nav.querySelector(".logo"),
            _this = this;

        logo.addEventListener("load", function() {
            _this.changeNavbarPlaceholderHeight();
        });

        this.changeNavbarHeight();
    }

    changeNavbarHeight() {
        /* While the name states changeNavbarHeight, this does not directly change the navbar height. It simply reduces the width of the logo, which reduces the height and thereby the overall navbar height.
		Also this slightly reduces the vertical padding
		*/

        window.addEventListener("scroll", function() {
            if (this.scrollY > 0) {
                document.querySelector("nav").classList.add("scrolled");
            } else {
                document.querySelector("nav").classList.remove("scrolled");
            }
        });
    }

    changeNavbarPlaceholderHeight() {
        let navBar = document.querySelector("nav");
         let navbarPlaceholderHeight = navBar.offsetHeight;
        this.setState({
            navbarPlaceholderHeight: navbarPlaceholderHeight
        });
    }

    render() {
        const placeholder = this.props.placeholder;
        return (
            <React.Fragment>
               
                <nav className="text-secondary" ref={c => (this.nav = c)}>
                    <div id="inner-wrapper">

                    </div>
                    <Link to="/">
                        <Logo />
                    </Link>
                    <ul className="navbar-links">
                        <li>
                            <Link to="./archive/">
                                <span>Blog</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
                {/* {placeholder && (
                    <div
                        className="navbar-placeholder"
                        style={{
                            height: this.state.navbarPlaceholderHeight + "px"
                        }}
                    ></div>
                )}  */}
            </React.Fragment>
        );
    }
}

export default Navbar;