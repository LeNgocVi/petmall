import React, { useState } from "react";
import onClickOutside from "react-onclickoutside";
import dropdown from "../../assets/image/drop-down.svg";

function Dropdown({ title, items, multiSelect = false }) {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState([]);
  const toggle = () => setOpen(!open);
  Dropdown.handleClickOutside = () => setOpen(false);

  function handleOnClick(item) {
    if (!selection.some((current) => current.id === item.id)) {
      if (!multiSelect) {
        setSelection([item]);
      } else if (multiSelect) {
        setSelection([...selection, item]);
      }
    } else {
      let selectionAfterRemoval = selection;
      selectionAfterRemoval = selectionAfterRemoval.filter(
        (current) => current.id !== item.id
      );
      setSelection([...selectionAfterRemoval]);
    }
  }

  function isItemInSelection(item) {
    if (selection.some((current) => current.id === item.id)) {
      return true;
    }
    return false;
  }

  return (
    <div className="dd-wrapper" style={{ marginTop: "16px" }}>
      <div
        tabIndex={0}
        className="dd-header"
        role="button"
        onKeyPress={() => toggle(!open)}
        onClick={() => toggle(!open)}
      >
        <div className="dd-header__title">
          <p className="dd-header__title--bold">GIÁ TIỀN</p>
        </div>
        <div className="dd-header__action">
          {open ? (
            <img
              className="icon--arrow-bottom"
              src={dropdown}
              alt=""
              style={{ transform: "rotate(180deg)" }}
            ></img>
          ) : (
            <img className="icon--arrow-bottom" src={dropdown} alt=""></img>
          )}
        </div>
      </div>
      {open && (
        <ul className="dd-list">
          <form action="/">
            {items.map((item) => (
              <li className="dd-list-item" key={item.id}>
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  class="vehicle1"
                  value="Bike"
                  onClick={() => handleOnClick(item)}
                />
                <p>{item.value}</p>
                <br></br>
              </li>
            ))}
          </form>
        </ul>
      )}
    </div>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => Dropdown.handleClickOutside,
};

export default onClickOutside(Dropdown, clickOutsideConfig);
