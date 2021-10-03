import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
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
  };

  handleSelectChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  renderDishDetails = () => {
    if (this.state.value === "pizza") {
      return (
        <>
          <Field
            component={RenderField}
            type="number"
            name="no_of_slices"
            label="number of slices: "
            min="0"
            max="12"
          />

          <Field
            component={RenderField}
            type="number"
            name="diameter"
            step="0.1"
            min="0"
            max="48"
            label="diameter: "
          />
        </>
      );
    } else if (this.state.value === "soup") {
      return (
        <Field
          component={RenderField}
          type="range"
          name="spiciness_scale"
          min="0"
          max="10"
          step="1"
          label="Spiciness(1-10): "
        />
      );
    } else if (this.state.value === "sandwich") {
      return (
        <Field
          component={RenderField}
          type="number"
          name="bread_slices"
          min="0"
          label="Slices: "
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

const formWrapped = reduxForm({
  form: "dishForm",
  validate,
})(DishForm);

export default connect(null, { createOrder })(formWrapped);
