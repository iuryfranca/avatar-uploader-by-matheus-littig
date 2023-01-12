import { IconButton } from '@/components/elements';
import { FiX } from 'react-icons/fi';

interface ResetButtonProps {
  onReset: () => void;
}

export const ResetButton = ({ onReset }: ResetButtonProps) => {
  return (
    <IconButton
      type="transparent"
      style={{ position: 'absolute', top: 20, right: 20 }}
      onClick={onReset}
    >
      <FiX />
    </IconButton>
  );
};
