import React, { PureComponent } from "react";
import Form from "./index";

export default class Test extends PureComponent {
  render() {
    return (
      <div>
        <Form onSubmit={formData => {
            console.log(formData);
        }}>
            <div>
                账号：<Form.Input name="username" />
            </div>
            <div>
                密码：<Form.Input name="pwd" type="password" />
            </div>
            <div>
                <Form.Button>提交</Form.Button>
            </div>
        </Form>
      </div>
    );
  }
}
