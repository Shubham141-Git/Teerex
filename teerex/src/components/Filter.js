import * as React from "react";
import "./Filter.css";

const Filter = (props) => {
  return (
    <div id="sidebar">
      <div id="container">
        <h4>Color</h4>
        <input
          name="color"
          type="checkbox"
          value="Red"
          onChange={props.handleInputChangeColor}
          id="Red"
        />
        <label> Red</label>
        <br></br>
        <input
          name="color"
          type="checkbox"
          value="Blue"
          onChange={props.handleInputChangeColor}
          id="Blue"
        />
        <label> Blue</label>
        <br></br>
        <input
          type="checkbox"
          name="color"
          value="Green"
          onChange={props.handleInputChangeColor}
        />
        <label> Green</label>
        <br></br>
        <h4>Gender</h4>
        <input
          name="gender"
          type="checkbox"
          value="Men"
          onChange={props.handleInputChangeGender}
        />
        <label for="vehicle1"> Male</label>
        <br></br>
        <input
          name="gender"
          type="checkbox"
          value="Women"
          onChange={props.handleInputChangeGender}
        />
        <label for="vehicle1"> Female</label>
        <br></br>
        <h4>Price</h4>
        <input
          name="price"
          type="checkbox"
          value="0-250"
          onChange={props.handleInputChangePrice}
        />
        <label> Rs 0-250</label>
        <br></br>
        <input
          name="price"
          type="checkbox"
          value="251-450"
          onChange={props.handleInputChangePrice}
        />
        <label> Rs 251-450</label>
        <br></br>
        <input
          name="price"
          type="checkbox"
          value="450"
          onChange={props.handleInputChangePrice}
        />
        <label> Rs 450</label>
        <br></br>
        <h4>Type</h4>
        <input
          type="checkbox"
          value="Polo"
          onChange={props.handleInputChangeType}
        />
        <label> Polo</label>
        <br></br>
        <input
          type="checkbox"
          value="Hoodie"
          onChange={props.handleInputChangeType}
        />
        <label> Hoodie</label>
        <br></br>
        <input
          type="checkbox"
          value="Basic"
          onChange={props.handleInputChangeType}
        />
        <label> Basic</label>
        <br></br>
      </div>
    </div>
  );
};

export default Filter;
