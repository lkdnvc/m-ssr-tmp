import React from 'react';
import { connect } from 'react-redux';
import { classNames } from 'meteor/maxharris9:classnames';
import Lang from '../../components/lang/lang';

const Header = () => (
    <header className="header">
        <div className={classNames('header__box', 'brake')}>
            <div className="header__wrapper">
                <div className="header__icon">
                    <div className="header__logo">
                        <img src="/images/cacio-e-vino.jpg" alt="Cacio e Vino" height={110} />
                    </div>
                </div>
                <div className="header__info">
                    {true && <Lang />}
                    <a href="tel:+78432453020" className="header__number">
                        +78432453020
                    </a>
                </div>
                {/* <Accounts /> */}
            </div>
        </div>
    </header>
);

Header.propTypes = {};
Header.defaultProps = {};

const mapStateToProps = () => ({});
const mapDispatchToProps = () => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);
