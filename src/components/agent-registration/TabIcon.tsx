import React from 'react';

import { Typography } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';

type IconProps = {
    tabKey: string;
    currentKey: string;
    title: string;
};

const TabIcon = ({ tabKey, currentKey, title }: IconProps) => {
    const { Title } = Typography;
    return (
        <div className="details__tab">
            {+tabKey <= +currentKey ? (
                <CheckCircleOutlined className="details__item--icon" />
            ) : (
                <span className="details__item--circle">&#9675;</span>
            )}
            <Title className="details__item--title" level={5}>
                {title}
            </Title>
        </div>
    );
};

export default TabIcon;
