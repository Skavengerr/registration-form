import React from 'react';
import { Typography, Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';

import './Footer.less';

const Footer: React.FC = () => {
    return (
        <div className="footer">
            <Typography className="footer__text">
                In order to process your registration, we ask you to provide the following
                information. Please note that all fields marked with an asterisk (*) are required.
            </Typography>
            <div className="footer__actions">
                <Button className=" footer__actions--cancel" size="large" type="primary">
                    Cancel
                </Button>
                <Button className=" footer__actions--continue" size="large" type="primary">
                    Continue
                    <ArrowRightOutlined />
                </Button>
            </div>
        </div>
    );
};

export default Footer;
