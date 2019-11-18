import React, { PureComponent } from "react";
import { Provider } from "./formContext";
import FormInput from "./FormInput";
import FormButton from "./FormButton";

class Form extends PureComponent {
  state = {
    formData: {},
    changeFormData: (name, value) => {
      this.setState({
        formData: {
          ...this.state.formData,
          [name]: value
        }
      });
    },
    submit: () => {
      this.props.onSubmit && this.props.onSubmit(this.state.formData);
    }
  };

  render() {
    return (
      <div>
        <Provider value={this.state}>{this.props.children || null}</Provider>
      </div>
    );
  }
}

Form.Input = FormInput;
Form.Button = FormButton;

export default Form;
