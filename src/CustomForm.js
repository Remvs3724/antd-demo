
import React, { useState } from 'react';
import { Modal, Button } from 'antd';

const AntdModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal 
        title="Ant Design Modal"
        open={isOpen}
        onCancel={() => setIsOpen(false)}
        onOk={() => setIsOpen(false)}
      >
        <p>This is an Antd modal.</p>
      </Modal>
    </div>
  );
};

export default AntdModal;
