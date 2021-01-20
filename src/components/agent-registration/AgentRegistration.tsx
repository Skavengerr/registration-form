import React, { FC } from 'react';
import { Typography } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';

import './AgentRegistration.less';

const AgentRegistration: FC = () => {
    const { Title } = Typography;
    return (
        <>
            <Title className="heading" level={2}>
                Agent Registration
            </Title>
            <div className="details">
                <div className="details__item">
                    <CheckCircleOutlined className="details__item--icon" />
                    <Title className="details__item--title" level={5}>
                        Personal Details
                    </Title>
                </div>
                <div className="details__item details__item__active">
                    <CheckCircleOutlined className="details__item--icon" />
                    <Title className="details__item--title" level={5}>
                        Personal Details
                    </Title>
                </div>
                <div className="details__item">
                    <div className="box text-15">
                        <input type="checkbox" disabled />
                        <span className="check"></span>
                        <label>contact Person Details</label>
                    </div>
                </div>
                <div className="details__item">
                    <div className="box text-15">
                        <input type="checkbox" disabled />
                        <span className="check"></span>
                        <label>Work Order Scope</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AgentRegistration;
