import React, { Component } from "react";
import { Field, reduxForm, reset } from "redux-form";
import validate from "./validate";
import RenderField from "./RenderField";
import RenderDishSelect from "./RenderDishSelect";
import { connect } from "react-redux";
import { createOrder } from "../actions";
import { StyledForm, StyledButton } from "../style/DishForm.style";

class DishForm extends Component {
  state = {
    value: "",
  };
  onSubmit = (formValues) => {
    this.props.createOrder(formValues);
    alert("Your order was submitted correctly");
  };

  handleSelectChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  renderDishDetails = () => {
    const { value } = this.state;
    if (value === "pizza") {
      return (
        <>
          <Field
            component={RenderField}
            type="number"
            name="no_of_slices"
            label="number of slices: "
            min="1"
            max="12"
            parse={parseInt}
          />

          <Field
            component={RenderField}
            type="number"
            name="diameter"
            step="0.1"
            min="1"
            max="48"
            label="diameter: "
            parse={parseFloat}
          />
        </>
      );
    } else if (value === "soup") {
      return (
        <Field
          component={RenderField}
          type="range"
          name="spiciness_scale"
          min="1"
          max="10"
          step="1"
          label="Spiciness (1-10): "
          parse={parseInt}
        />
      );
    } else if (value === "sandwich") {
      return (
        <Field
          component={RenderField}
          type="number"
          name="slices_of_bread"
          min="1"
          max="10"
          label="Slices: "
          parse={parseInt}
        />
      );
    } else {
      return null;
    }
  };

  render() {
    return (
      <StyledForm onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field
          component={RenderField}
          name="name"
          type="text"
          label="Name: "
          placeholder="state a dish name..."
        />
        <label htmlFor="prep_time">Preparation Time: </label>
        <Field
          component={RenderField}
          type="time"
          name="preparation_time"
          step="1"
        />
        <label htmlFor="type">Dish type: </label>
        <Field
          name="type"
          component={RenderDishSelect}
          value={this.state.value}
          onChange={this.handleSelectChange}
        />
        {this.renderDishDetails()}
        <StyledButton>Submit</StyledButton>
      </StyledForm>
    );
  }
}

const afterSubmit = (result, dispatch) => dispatch(reset("dishForm"));

const formWrapped = reduxForm({
  form: "dishForm",
  validate,
  onSubmitSuccess: afterSubmit,
})(DishForm);

export default connect(null, { createOrder })(formWrapped);
