import React from "react";
import { isEmail, isEmpty, isMobilePhone, isAlpha } from "validator";

export const required = value => {
  if (isEmpty(value)) {
    return <div className="message">Trường này không được để trống</div>;
  }
};

export const email = value => {
  if (!isEmail(value)) {
    return <div className="message">Không đúng định dạng email</div>;
  }
};

export const minLengthPassword = value => {
  if (value.trim().length < 8) {
    return <div className="message">Mật khẩu cần ít nhất 8 kí tự</div>;
  }
};

export const minLengthUsername = value => {
  if (value.trim().length < 6) {
    return <div className="message">Tên người dùng cần ít nhất 6 kí tự</div>;
  }
};

export const isPhone = value => {
  if (!isMobilePhone(value, "vi-VN")) {
    return <div className="message">Số điện thoại cần ít nhất 10 kí tự</div>;
  }
};

export const onlyString = value => {
  if (!isAlpha(value)) {
    return <div className="message">Tên người dùng chỉ bao gồm chữ</div>;
  }
};

export const rePassowrd = (value, props) => {
  if (value !== props.repass) {
    return <div className="message">Mật khẩu của bạn không trùng khớp</div>;
  }
};
