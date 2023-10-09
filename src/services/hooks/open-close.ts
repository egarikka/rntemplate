import { useState } from 'react';

export const useOpenCloseModal = (defaultState?: boolean) => {
  const [isOpen, setIsOpen] = useState(Boolean(defaultState));

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);
  const onToggle = () => setIsOpen(!isOpen);

  return { isOpen, onOpen, onClose, onToggle };
};
