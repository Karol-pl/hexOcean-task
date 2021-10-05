import React, { useState } from "react";
import { connect } from "react-redux";

const Utils = (props) => {
  console.log(props.form);
  const [isOpen, setIsOpen] = useState(false);

  const showUtils = () => {
    if (isOpen && props.form.values !== undefined) {
      const { values, registeredFields } = props.form;
      return (
        <div>
          <p>&#91;</p>
          <p>
            &#123; {registeredFields.name.name} : {values.name} &#125;
          </p>
          <p>
            &#123; {registeredFields.preparation_time.name} :{" "}
            {values.preparation_time} &#125;
          </p>
          <p>
            &#123; {registeredFields.type.name} : {values.type} &#125;
          </p>
          <p>&#93;</p>
        </div>
      );
    }
  };
  return (
    <div>
      <h2>Wanna see what happens underneath?</h2>
      <button onClick={() => setIsOpen(!isOpen)}>Click here</button>
      <div>{showUtils()}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { form: state.form.dishForm };
};

export default connect(mapStateToProps)(Utils);
