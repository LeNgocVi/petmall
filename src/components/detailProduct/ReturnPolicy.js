import React, { useState } from "react";
import onClickOutside from "react-onclickoutside";

function ReturnPolicy({ title, items, multiSelect = false }) {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState([]);
  const toggle = () => setOpen(!open);
  ReturnPolicy.handleClickOutside = () => setOpen(false);

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
            CHÍNH SÁCH ĐỔI TRẢ
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
          <p></p>
          <h1 className="ds-contentH1">Chính sách đỗi trả lại PETMALL.vn</h1>
          <p>
            <img src="https://cdn.tgdd.vn/Files/2013/07/30/519804/chinh-sach-doi-tra.jpg" />
          </p>
          <p>
            <strong>- Áp dụng từ: 01/01/2020</strong>
          </p>
          <p>
            <strong>
              - Nơi thực hiện đổi trả: 10 Trần Não, Phường Bình An, Quận 2
            </strong>
          </p>
          <h1 className="ds-contentH1" style={{ height: "96px" }}>
            I. SẢN PHẨM MỚI:
          </h1>
          <table cellPadding={1}>
            <tbody>
              <tr>
                <td colspan="2">
                  <div>
                    <strong>Sản phẩm lỗi do nhà sản xuất:</strong>
                  </div>
                </td>
              </tr>

              <tr>
                <td>
                  <strong>Tháng 1</strong>
                </td>
                <td>
                  <p>
                    <strong>Tháng 2 - 12</strong>
                  </p>
                </td>
              </tr>

              <tr>
                <td>
                  <div>
                    <p>
                      <strong>
                        - 1 đổi 1 (cùng mẫu, cùng màu, cùng dung lượng...)
                      </strong>
                      .-&nbsp; Trường hợp sản phẩm đổi hết hàng, khách hàng có
                      thể đổi sang sản phẩm khác cùng nhóm hàng có giá trị lớn
                      hơn 50% giá trị sản phẩm lỗi (<i>petmall.vn&nbsp;</i>sẽ
                      hoàn tiền phần chênh lệch cho khách hàng).
                      <br />
                      <strong>Hoặc:</strong>
                    </p>
                    <p>
                      Khách hàng trả hàng &amp;
                      <em>
                        <span>&nbsp;Petmall.vn&nbsp;</span>
                      </em>
                      hoàn lại tiền với mức giá bằng 80% giá trên hoá đơn.
                    </p>
                  </div>
                  <p>&nbsp;</p>
                </td>
                <td>
                  <div>
                    <p>Gửi bảo hành theo quy định của hãng.</p>
                    <p>
                      <strong>Hoặc:</strong>
                      <br />
                      Khách hàng trả hàng &amp;
                      <em>
                        <span>&nbsp;petmall.vn</span>
                        <span>&nbsp;</span>
                      </em>
                      <strong>hoàn lại tiền và thu phí thêm 5%</strong>
                      <span>&nbsp;</span>so với mức hoàn tiền khi trả ở tháng
                      thứ 1.
                    </p>
                    <p>
                      <strong>VD</strong>: Ở tháng thứ nhất, nếu khách hàng trả
                      sản phẩm sẽ được hoàn lại tiền với mức giá bằng 80% thì
                      sang tháng thứ 2 nếu khách hàng trả hàng sẽ thu phí thêm
                      5% nên mức hoàn tiền sẽ còn 75% giá trị sản phẩm trên hoá
                      đơn, tháng thứ 3 mức hoàn tiền sẽ trừ thêm 5% thành
                      70%....
                    </p>
                  </div>
                  <p>&nbsp;</p>
                </td>
              </tr>

              <tr>
                <td colspan="2">
                  <div>
                    <strong>
                      Sản phẩm không lỗi (không phù hợp với nhu cầu của khách
                      hàng):
                    </strong>
                  </div>
                </td>
              </tr>

              <tr>
                <td>
                  <strong>Tháng 1</strong>
                </td>
                <td>
                  <p>
                    <strong>Tháng 2 - 12</strong>
                  </p>
                </td>
              </tr>

              <tr>
                <td>
                  <div>
                    <p>Hoàn lại tiền hàng với giá bằng 80% giá trên hoá đơn.</p>
                  </div>
                </td>
                <td>
                  <div>
                    <p>
                      <strong>Hoàn lại tiền với mức phí thêm 5%</strong>
                      <span>&nbsp;</span>so với tháng thứ 1 (80%).
                      <span>&nbsp;</span>
                      <strong>VD</strong>: tháng thứ 2 hoàn lại tiền với mức giá
                      75% giá trên hoá đơn, tháng thứ 3 là 70%...
                    </p>
                  </div>
                  <p>&nbsp;</p>
                </td>
              </tr>

              <tr>
                <td colspan="2">
                  <div>
                    <p>
                      Công ty nhập lại sản phẩm cũ đồng thời xuất bán lại sản
                      phẩm mới. Phần chênh lệch giá là khoản phí sử dụng khách
                      hàng phải trả và công ty xuất hoá đơn giá trị gia tăng
                      (GTGT) cho khoản phí này.
                    </p>
                  </div>
                </td>
              </tr>

              <tr>
                <td colspan="2">
                  <div>
                    <strong>Sản phẩm lỗi do người sử dụng:</strong>
                  </div>
                </td>
              </tr>

              <tr>
                <td colspan="2">
                  <ul>
                    <li>Không đủ điều kiện bảo hành theo qui định của hãng.</li>
                    <li>Sản phẩm không giữ nguyên 100% hình dạng ban đầu.</li>
                  </ul>
                  <p>
                    =&gt;<span>&nbsp;</span>
                    <strong>Không áp dụng bảo hành, đổi trả.</strong>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <div>
            <h1></h1>
            <h1>
              <strong></strong>
            </h1>
            <p>
              <strong>Điều kiện đổi trả:</strong>
            </p>
            <p>1. Còn đầy đủ phiếu mua hàng</p>
            <p>2. Ngoài ra, KHÔNG thu thêm bất kỳ phí nào khác.&nbsp;</p>
          </div>
        </div>
      )}
    </div>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => ReturnPolicy.handleClickOutside,
};

export default onClickOutside(ReturnPolicy, clickOutsideConfig);
