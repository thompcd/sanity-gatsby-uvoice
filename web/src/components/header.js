import React from 'react'
import uvIcon from '../assets/images/UVOICE-logo-100x133-white.png'

class Header extends React.Component {
    render() {
        return (
            <section id="header">
                <div className="inner">
                    <span className="image"><img src={uvIcon} alt="" /></span>
                    <h1>Shout from the mountain tops.</h1>
                    <p>Marketing advice to help customers find their voice and promote sustainable growth.</p>
                    <ul className="actions">
                        <li><a href="./#one" className="button scrolly">Discover</a></li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Header
