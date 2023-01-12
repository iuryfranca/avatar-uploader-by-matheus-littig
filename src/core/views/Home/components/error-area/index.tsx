import { Avatar } from '@/components/elements';
import { useHomeContext } from '@/core/contexts';
import { ErrorAreaWrapper } from './styles';

export const ErrorArea = () => {
  const { resetContext } = useHomeContext();
  return (
    <ErrorAreaWrapper>
      <Avatar error />

      <div>
        <p>Sorry, the upload failed.</p>
        <a onClick={resetContext}>Try again</a>
      </div>
    </ErrorAreaWrapper>
  );
};
