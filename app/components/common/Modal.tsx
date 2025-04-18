import React from "react";
import { Modal, Button } from "antd";
import { CommonModalContainerProps } from "@/app/types";

const CommonModalContainer: React.FC<CommonModalContainerProps> = ({
  open,
  title,
  onCancel,
  onConfirm,
  confirmLoading = false,
  children,
  footer,
  className,
  ...rest
}) => {
  return (
    <Modal
      title={title}
      open={open}
      onCancel={onCancel}
      footer={footer}
      className={className}
      destroyOnClose={true}
      {...rest}
    >
      {children}
    </Modal>
  );
};

export default CommonModalContainer;
