// dynamic form
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";

import { Fragment } from "react";
import { Form, Input, DatePicker, Upload, Checkbox, Radio } from "antd";
import { UploadOutlined } from "@ant-design/icons";

function DYDropdown({ label_name }) {
  return (
    <div className="mt-5 flex items-center gap-x-4">
      <h5>{label_name}:</h5>
      <Select>
        <SelectTrigger className="w-[200px] bg-white">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Small</SelectItem>
          <SelectItem value="dark">Medium</SelectItem>
          <SelectItem value="system">Large</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

function DYRadioField({ label_name, name, options }) {
  return (
    <div className="mt-3">
      <h5>{label_name}:</h5>
      <div className="flex gap-x-5 mb-2"></div>

      <Form.Item
        name={name}
        label={""}
        rules={[{ required: true, message: `Please select ${label_name}` }]}
      >
        <Radio.Group>
          {options?.map((opt) => (
            <Radio key={opt} value={opt}>
              {opt}
            </Radio>
          ))}
        </Radio.Group>
      </Form.Item>
    </div>
  );
}

function DYCheckBox({ label_name, name, options }) {
  return (
    <div className="mt-3">
      <h5>{label_name}:</h5>
      <div className="flex gap-x-5 mb-2"></div>

      <Form.Item
        name={name}
        label={""}
        rules={[
          {
            required: true,
            message: `Please select at least one ${label_name}`,
          },
        ]}
      >
        <Checkbox.Group options={options} />
      </Form.Item>
    </div>
  );
}

function DYDateField({ label_name, name }) {
  return (
    <div className="mt-3">
      <h5>{label_name}:</h5>
      <div className="flex gap-x-5 mb-2"></div>

      <Form.Item
        name={name}
        label={""}
        rules={[{ required: true, message: `Please select ${label_name}` }]}
      >
        <DatePicker style={{ width: "300px" }} />
      </Form.Item>
    </div>
  );
}

function DYSinglePhotoField({ label_name, name }) {
  return (
    <div className="mt-3">
      <h5>{label_name}:</h5>
      <div className="flex gap-x-5 mb-2"></div>

      <Form.Item
        name={name}
        label={""}
        valuePropName="fileList"
        getValueFromEvent={(e) => (Array.isArray(e) ? e : e?.fileList)}
        rules={[{ required: true, message: `Please upload ${label_name}` }]}
      >
        <Upload maxCount={1} beforeUpload={() => false} listType="picture-card">
          <button type="button">
            <UploadOutlined /> Upload
          </button>
        </Upload>
      </Form.Item>
    </div>
  );
}

function DYMultiplePhotoField({ label_name, name }) {
  return (
    <div className="mt-3">
      <h5>{label_name}:</h5>
      <div className="flex gap-x-5 mb-2"></div>

      <Form.Item
        name={name}
        label={""}
        valuePropName="fileList"
        getValueFromEvent={(e) => (Array.isArray(e) ? e : e?.fileList)}
      >
        <Upload
          multiple
          maxCount={8}
          beforeUpload={() => false}
          listType="picture-card"
        >
          <button type="button">
            <UploadOutlined /> Upload
          </button>
        </Upload>
      </Form.Item>
    </div>
  );
}

function DYTextField({ label_name, name }) {
  return (
    <div className="mt-3">
      <h5>{label_name}:</h5>
      <div className="flex gap-x-5 mb-2"></div>

      <Form.Item
        name={name}
        label={""}
        rules={[{ required: true, message: `Please enter ${label_name}` }]}
      >
        <Input style={{ width: "300px" }} />
      </Form.Item>
    </div>
  );
}

function DYShortNoteField({ label_name, name }) {
  return (
    <div className="mt-3">
      <h5>{label_name}:</h5>
      <div className="flex gap-x-5 mb-2"></div>

      <Form.Item
        name={name}
        label={""}
        rules={[{ required: true, message: `Please enter ${label_name}` }]}
      >
        <Input.TextArea style={{ width: "300px" }} rows={4} />
      </Form.Item>
    </div>
  );
}

export default function DynamicForm(props) {
  const { data } = props;
  return (
    <>
      {[...data]
        ?.sort((a, b) => a.priority - b.priority)
        .map((master) => (
          <Fragment>
            {master.tag == "dropdown" && (
              <DYDropdown
                label_name={master.name}
                name={master.name}
                options={[]}
              />
            )}
            {master.tag == "Radio Button" && (
              <DYRadioField
                label_name={master.name}
                name={master.name}
                options={master?.tag_optional?.options}
              />
            )}
            {master.tag == "Checkbox" && (
              <DYCheckBox
                label_name={master.name}
                name={master.name}
                options={master?.tag_optional?.options}
              />
            )}
            {master.tag == "Date" && (
              <DYDateField
                label_name={master.name}
                name={master.name}
                options={[]}
              />
            )}
            {master.tag == "File Upload" && (
              <DYSinglePhotoField
                label_name={master.name}
                name={master.name}
                options={[]}
              />
            )}
            {master.tag == "Multi File Upload" && (
              <DYMultiplePhotoField
                label_name={master.name}
                name={master.name}
                options={[]}
              />
            )}
            {master.tag == "Text" && (
              <DYTextField
                label_name={master.name}
                name={master.name}
                options={[]}
              />
            )}
            {master.tag == "Short Note" && (
              <DYShortNoteField
                label_name={master.name}
                name={master.name}
                options={[]}
              />
            )}
          </Fragment>
        ))}
    </>
  );
}
