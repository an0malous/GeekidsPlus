import React, { Fragment } from "react";

export function CardForm({
  handleChange,
  btnText,
  onSubmit,
  name,
  type,
  letter,
  img,
  audio,
}) {

  return (
    <form className="ui form" onSubmit={onSubmit}>
      <div className="field">
        <label>Word Label</label>
        <input
          onChange={handleChange}
          type="text"
          name="name"
          value={name}
          placeholder="word name"
        />
      </div>
      <div className="two fields">
        <div className="field">
          <label>Type</label>
          <select
            onChange={handleChange}
            name="type"
            value={type}
            className="ui fluid dropdown"
          >
            <option value="" disabledSelect>
              Choose a Type
            </option>
            <option value="cvc">CVC</option>
            <option value="cvcAdd">CVC Add on</option>
            <option value="blends">Blends</option>
          </select>
        </div>
        <div className="field">
          <label>Letter</label>
          <select
            id="card-form-select"
            onChange={handleChange}
            name="letter"
            className="ui fluid dropdown"
            value={letter}
          >
            {type !== "blends" ? (
              <Fragment>
                <option value="" disabledSelect>
                  Choose a Letter
                </option>
                <option value="a">a</option>
                <option value="e">e</option>
                <option value="i">i</option>
                <option value="o">o</option>
                <option value="u">u</option>
                <option value="y">y</option>
              </Fragment>
            ) : (
              <Fragment>
                <option value="" disabledSelect>
                  Choose a Letter
                </option>
                <option value="ch">ch</option>
                <option value="sh">sh</option>
                <option value="wh">wh</option>
                <option value="th">th</option>
                <option value="ck">ck</option>
                <option value="ng">ng</option>
              </Fragment>
            )}
          </select>
        </div>
      </div>
      <div className="field">
        <label>Image url</label>
        <input
          onChange={handleChange}
          type="text"
          name="img"
          value={img}
          placeholder="image url"
        />
      </div>
      <button className="ui button" type="submit">
        {btnText}
      </button>
    </form>
  );
}
