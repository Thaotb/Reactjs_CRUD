import React from 'react'
import PropTypes from 'prop-types'

const Header = props => {
    return (
        <div>
            <header className="header1">
                {/* Header desktop */}
                <div className="container-menu-header">
                    <div className="topbar">
                        <div className="topbar-social">
                            <a href="#" className="topbar-social-item fa fa-facebook" />
                            <a href="#" className="topbar-social-item fa fa-instagram" />
                            <a href="#" className="topbar-social-item fa fa-pinterest-p" />
                            <a href="#" className="topbar-social-item fa fa-snapchat-ghost" />
                            <a href="#" className="topbar-social-item fa fa-youtube-play" />
                        </div>
                        <span className="topbar-child1">
                            Free shipping for standard order over $100
            </span>
                        <div className="topbar-child2">
                            <span className="topbar-email">
                                fashe@example.com
              </span>
                            <div className="topbar-language rs1-select2">
                                <select className="selection-1" name="time">
                                    <option>USD</option>
                                    <option>EUR</option>
                                </select>
                            </div>
                        </div>
                    </div>

                </div>
            </header>
        </div>
    )
}

Header.propTypes = {

}

export default Header
