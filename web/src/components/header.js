import React from 'react'
import uvIcon from '../assets/images/UVOICE-logo-100x133-white.png'

class Header extends React.Component {
    render() {
        return (
            <section id="header">
                <div className="inner">
                    <span className="image"><img src={uvIcon} alt="" /></span>
                    {/* <span className="icon major fa-cloud"></span> */}
                    <h1>Marketing strategies <br /> to help yo<strong>u</strong>r company find its <strong>voice</strong>.</h1>
                    <p>Accumsan feugiat mi commodo erat lorem ipsum, sed magna<br />
                    lobortis feugiat sapien sed etiam volutpat accumsan.</p>
                    <ul className="actions">
                        <li><a href="#one" className="button scrolly">Discover</a></li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Header
