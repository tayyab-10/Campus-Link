import React, { useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, Checkbox } from 'antd';
import {Link } from 'react-router-dom';
import bgImage from "../../Assets/Images/bg1.jpg";
import { GoogleOutlined } from '@ant-design/icons';


const Signup = () => {
    
    const [avatarPreview, setAvatarPreview] = useState("/Profile.png");
  

    

    const onFinish = () => {
        // handleSignUp();
    };

    const onAgreeChange = (e) => {
        // setAgree(e.target.checked);
    };
    

    return (
      <>
        <div
        style={{ backgroundImage: `url(${bgImage})` }}
        className="flex items-center justify-center min-h-screen bg-cover bg-center p-12"
    >
        <div className="shadow-lg p-6 bg-white rounded-lg max-w-80 mt-8">
            <h5 className="text-center mb-4 font-normal">Create a new Notevault Account</h5>
            <Button type="default" icon={<GoogleOutlined />} className="mb-3 w-full">
                Sign up with Google
            </Button>
            <div className="flex items-center justify-center text-sm text-gray-600 mb-3">
                <hr className="flex-1" />
                <span className="mx-2">Or</span>
                <hr className="flex-1" />
            </div>
            <Form
                name="signup_form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                encType="multipart/form-data"
            >
                <Form.Item
                    name="name"
                    rules={[{ required: true, message: 'Please input your Name!' }]}
                >
                    <Input
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        placeholder="Name"
                        name="name"
                        
                        className="rounded-md"
                    />
                </Form.Item>
                <Form.Item
                    name="email"
                    rules={[{ required: true, message: 'Please input your Email!' }]}
                >
                    <Input
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        placeholder="Email"
                        name="email"
                       
                        className="rounded-md"
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                        name="password"
                       
                        className="rounded-md"
                    />
                </Form.Item>
                <Form.Item>
                    <div className="flex items-center justify-between">
                        <img src={avatarPreview} alt="Avatar Preview" className="w-18 h-14 rounded-full" />
                        <input
                            type="file"
                            name="avatar"
                            accept="image/*"
                          
                            className="ml-4"
                        />
                    </div>
                </Form.Item>
                <Form.Item>
                    <Checkbox onChange={onAgreeChange} className="mb-1 text-sm text-gray-600">
                        I agree to the terms and conditions
                    </Checkbox>
                    <Checkbox className="text-sm text-gray-600">
                        Send me Tips and News.
                    </Checkbox>
                </Form.Item>
                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="btn btn-primary w-full rounded-md"
                      
                    >
                        Sign up
                    </Button>
                </Form.Item>
                <div className="text-center mt-3">
                    <span className="font-normal">Already a member?</span>
                    <Link to="/login" className="text-blue-500 hover:underline ml-1">Login here!</Link>
                </div>
            </Form>
        </div>
    </div>
    
      </>
    );
};

export default Signup;
