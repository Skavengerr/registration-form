import React, { useState } from 'react';
import { Typography, Radio } from 'antd';

const OfficeSpace = () => {
    const [value, setValue] = useState(1);
    return (
        <>
            <Typography className="profile__item--label">Office Space</Typography>
            <div className="profile__item profile__item--box" style={{ fontSize: 24 }}>
                <Radio.Group size="large" onChange={(e) => setValue(e.target.value)} value={value}>
                    <Radio value={1}>Owned</Radio>
                    <Radio value={2}>Rental</Radio>
                </Radio.Group>
            </div>
        </>
    );
};

export default OfficeSpace;
