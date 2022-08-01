import React, { useState } from "react";
import onClickOutside from "react-onclickoutside";

function PrivacyPolicy({ title, items, multiSelect = false }) {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState([]);
  const toggle = () => setOpen(!open);
  PrivacyPolicy.handleClickOutside = () => setOpen(false);

  function handleOnClick(item) {}

  function isItemInSelection(item) {
    if (selection.some((current) => current.id === item.id)) {
      return true;
    }
    return false;
  }
  return (
    <div className="ds-wrapper">
      <div
        tabIndex={0}
        className="ds-header"
        role="button"
        onKeyPress={() => toggle(!open)}
        onClick={() => toggle(!open)}
      >
        <div className="ds-header__title">
          <p
            className="ds-header__title--bold"
            style={{ fontWeight: open ? "400" : "bold" }}
          >
            CUSTUMER REVIEWS
          </p>
        </div>
        <div className="ds-header__title">
          {open ? (
            <p className="ds-header__title--bold2">–</p>
          ) : (
            <p className="ds-header__title--bold2">+</p>
          )}
        </div>
      </div>
      {open && (
        <div className="rs-content">
          <p>
            {" "}
            <br></br>
          </p>

          <p></p>
        </div>
      )}
    </div>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => PrivacyPolicy.handleClickOutside,
};

export default onClickOutside(PrivacyPolicy, clickOutsideConfig);
