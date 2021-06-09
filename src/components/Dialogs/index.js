import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./Dialogs.scss";

const Dialogs = (props) => {
    return (
        <div className="dialogs__item">
            <div className="dialogs__item-avatar">
                <img
                    src="https://sun1-90.userapi.com/s/v1/ig2/Rs0rm1SJkNMZSgioGN5exxiSxyRA07R4oqRDr7_BfNlx1M1M_i3DFTkDrKMm70ww8rn5_PKNdB_jkjDHNmUUQhFP.jpg?size=100x0&quality=96&crop=0,0,1024,1024&ava=1"
                    alt="avatar"
                />
            </div>
            <div className="dialogs__item-info">
                <div className="dialogs__item-info-top">
                    <div className="dialogs__item-info-name">FullName here</div>
                    <div className="dialogs__item-info-data">Now</div>
                </div>
                <div className="dialogs__item-info-bottom">
                    <div className="dialogs__item-info-text">Sometext here</div>
                    <div className="dialogs__item-info-num">
                        <span>3</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

Dialogs.propTypes = {
    className: PropTypes.string,
};

export default Dialogs;
