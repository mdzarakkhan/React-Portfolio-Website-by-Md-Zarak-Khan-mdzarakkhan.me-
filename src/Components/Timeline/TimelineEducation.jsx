import React from 'react';
import './timeline.scss';


const TimelineEducation = (props) => {
    return (
        <>
            <div className="history-tl-container">
                <ul className="tl">
                    <li className="tl-item" ng-repeat="item in retailer_history">
                        <div className="timestamp">
                            {props.years}<br />{props.years_bottom}
                        </div>
                        <div className="item-title">{props.qualification}</div>
                        <div className="item-detail">{props.place}</div>
                    </li>
                    <li className="tl-item" ng-repeat="item in retailer_history">
                        <div className="timestamp">
                            {props.years2}<br />{props.years_bottom2}
                        </div>
                        <div className="item-title">{props.qualification2}</div>
                        <div className="item-detail">{props.place2}</div>
                    </li>
                    <li className="tl-item" ng-repeat="item in retailer_history">
                        <div className="timestamp">
                            {props.years3}<br />{props.years_bottom3}
                        </div>
                        <div className="item-title">{props.qualification3}</div>
                        <div className="item-detail">{props.place3}</div>
                    </li>
                </ul>
            </div>
        </>
    )

}

export default TimelineEducation;