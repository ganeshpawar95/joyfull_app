import React from "react";
import { Form, Input } from "antd";

const PhoneInput = ({
  name,
  label,
  required = true,
  placeholder = "Phone number",
}) => {
  return (
    <Form.Item
      name={name}
      label={label}
      rules={[
        {
          required: required,
          message: "Please enter phone number",
        },
        {
          pattern: /^[0-9]{10}$/,
          message: "Please enter a valid 10-digit phone number",
        },
        {
          validator: (_, value) => {
            if (value && value.length !== 10) {
              return Promise.reject("Phone number must be 10 digits");
            }
            return Promise.resolve();
          },
        },
      ]}
    >
      <Input
        type="tel"
        maxLength={10}
        placeholder={placeholder}
        className="px-3"
        onKeyPress={(e) => {
          if (!/[0-9]/.test(e.key)) {
            e.preventDefault();
          }
        }}
      />
    </Form.Item>
  );
};

export default PhoneInput;
