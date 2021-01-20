import React, { FC, useState } from 'react';
import { Typography, Tabs } from 'antd';

import TabIcon from './TabIcon';
import './AgentRegistration.less';

const keys = [
    { id: '1', title: 'Personal Details' },
    { id: '2', title: 'Agency Details' },
    { id: '3', title: 'Contact Person Details' },
    { id: '4', title: 'Work Order' }
];

const AgentRegistration: FC = () => {
    const { Title } = Typography;
    const { TabPane } = Tabs;

    const [key, setKey] = useState('1');
    return (
        <>
            <Title className="heading" level={2}>
                Agent Registration
            </Title>
            <div className="details">
                <Tabs defaultActiveKey={key} className="details__tabs" onChange={(k) => setKey(k)}>
                    {keys.map((el) => (
                        <TabPane
                            key={el.id}
                            tab={<TabIcon tabKey={el.id} currentKey={key} title={el.title} />}
                        ></TabPane>
                    ))}
                </Tabs>
            </div>
        </>
    );
};

export default AgentRegistration;
