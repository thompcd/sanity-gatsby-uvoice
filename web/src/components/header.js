import React from 'react'
import uvIcon from '../assets/images/UVOICE-logo-100x133-white.png'

class Header extends React.Component {
    render() {
        return (
            <section id="header">
                <div className="inner">
                    <span className="image"><img src={uvIcon} alt="" /></span>
                    <h1>Helping companies find their voice in sustainable growth.</h1>
                    <p>UVOICE's network of consultants will take your business to the next level.</p>
                    <ul className="actions">
                        <li><a href="./#one" className="button scrolly">Discover</a></li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Header
