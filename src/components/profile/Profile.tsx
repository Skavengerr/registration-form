import React from 'react';
import { Typography, Col, Row, Input, Select } from 'antd';

import OfficeSpace from './OfficeSpace';
import './Profile.less';

type CustomInputProps = {
    title: string;
};

const CustomInput = ({ title }: CustomInputProps) => (
    <div className="profile__item">
        <Typography className="profile__item--label required">{title}</Typography>
        <Input className="profile__item--input" />
    </div>
);

const Profile: React.FC = () => {
    const { Title } = Typography;
    const { Option } = Select;
    return (
        <>
            <Title className="heading" level={3}>
                Profile Information
            </Title>
            <div className="profile">
                <Row gutter={16}>
                    <Col className="gutter-row p-0" span={8}>
                        <CustomInput title="Agency Name" />
                    </Col>
                    <Col className="gutter-row p-0" span={8}>
                        <div className="profile__item">
                            <Typography className="profile__item--label required">
                                Agency Type
                            </Typography>
                            <Select defaultValue="Agent" className="profile__item--input w-full">
                                <Option value="Sign Up">Agent</Option>
                                <Option value="Sign In">Not agent</Option>
                            </Select>
                        </div>
                    </Col>
                    <Col className="gutter-row p-0" span={8}>
                        <div className="profile__item">
                            <Typography className="profile__item--label required">
                                Password
                            </Typography>
                            <Select defaultValue="" className="profile__item--input w-full">
                                <Option value="Sign Up">PW</Option>
                                <Option value="Sign In">PW</Option>
                            </Select>
                        </div>
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col className="gutter-row p-0" span={8}>
                        <CustomInput title="Address" />
                    </Col>
                    <Col className="gutter-row p-0" span={8}>
                        <div style={{ display: 'flex' }}>
                            <CustomInput title="City" />
                            <CustomInput title="State" />
                        </div>
                    </Col>
                    <Col className="gutter-row p-0" span={8}>
                        <CustomInput title="Telephone Number" />
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col className="gutter-row p-0" span={8}>
                        <CustomInput title="Toll-Free Number" />
                    </Col>
                    <Col className="gutter-row p-0" span={8}>
                        <CustomInput title="Email ID" />
                    </Col>
                    <Col className="gutter-row p-0" span={8}>
                        <CustomInput title="Website" />
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col className="gutter-row p-0" span={8}>
                        <CustomInput title="Company Name" />
                    </Col>
                    <Col className="gutter-row p-0" span={8}>
                        <div className="profile__item">
                            <OfficeSpace />
                        </div>
                    </Col>
                    <Col className="gutter-row p-0" span={8}>
                        <div className="profile__item">
                            <Typography className="profile__item--label required">
                                Company Logo
                            </Typography>
                            <div className="upload">
                                <button className="upload__btn">Upload a file</button>
                                <input type="file" name="myfile" />
                                <Typography className="profile__item--file">
                                    No file choosen
                                </Typography>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default Profile;
