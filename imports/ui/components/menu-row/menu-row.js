import React from 'react';
import { number, string } from 'prop-types';
// import cls from 'classnames';
// import debounce from 'lodash/debounce';
// import indexOf from 'lodash/indexOf';
import { connect } from 'react-redux';
// import i18n from 'meteor/universe:i18n';
import { callGetMenu, callFindAccount } from '../../../api/redux/async-actions';
// const T = i18n.createComponent();

const MenuRow = props => {
    return (
        <div className="menu-row" key={props.key} role="main">
            <div className="menu-row__content">
                <h3 className="menu-row__title">{props.name}</h3>
                <p className="menu-row__text">{props.name_2}</p>
            </div>
            <div className="menu-row__action">
                <div className="menu-row__price">{props.price}&ensp;₽</div>

                <span
                    role="button"
                    aria-pressed="true"
                    tabIndex="0"
                    className="menu-row__order"
                    onClick={() => this.handlerOrder(props)}
                >
                    Заказать
                </span>
            </div>
        </div>
    );
};

MenuRow.propTypes = {
    key: number,
    name: string.isRequired,
    name_2: string,
    price: string.isRequired
};

// const mapStateToProps = state => ({ menu: state.menu });
const mapStateToProps = () => ({});

export default connect(mapStateToProps, { fetch: callGetMenu, findAccount: callFindAccount })(MenuRow);
