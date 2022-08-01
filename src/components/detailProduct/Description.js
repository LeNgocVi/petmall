import React, { useState } from "react";
import onClickOutside from "react-onclickoutside";

function Description({ title, items, multiSelect = false }) {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState([]);
  const toggle = () => setOpen(!open);
  Description.handleClickOutside = () => setOpen(false);

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
            MÔ TẢ | DESCRIPTION
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
        <div>
          <p className="ds-content">
            Sản phẩm chứa phức hợp phô mai cứng, biotin, kẽm và dầu hạt lanh
            chính hãng của Ý. Phô mai một hương vị khó cưỡng với mèo. Sự kết hợp
            ba trong một biotin, kẽm và dầu hạt lanh thúc đẩy quá trình trao đổi
            chất của da và lông – giúp bộ lông khỏe mạnh bóng mượt, da mịn màng
            và móng vuốt săn chắc hơn. Sản phẩm được cho ăn như một chất bổ sung
            đặc biệt trong quá trình thay lông.
          </p>
          <p
            className="ds-producer"
            style={{ fontWeight: "bold", marginTop: "16px" }}
          >
            Thương hiệu: GimCat
          </p>
          <p className="ds-producer" style={{ fontWeight: "bold" }}>
            trọng lượng: 50g
          </p>
        </div>
      )}
    </div>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => Description.handleClickOutside,
};

export default onClickOutside(Description, clickOutsideConfig);
