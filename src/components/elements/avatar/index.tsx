import { FiInfo } from 'react-icons/fi';
import { AvatarWrapper } from './styles';

interface AvatarProps {
  src?: string;
  size?: string | number;
  error?: boolean;
}

export const Avatar = ({ src, size, error }: AvatarProps) => {
  return (
    <AvatarWrapper bg={error ? 'error' : 'default'}>
      {error ? (
        <>
          <FiInfo data-testid="error-icon" style={{ fontSize: '24px' }} />
        </>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <div
          data-testid="avatar-image"
          id="avatar"
          style={{
            backgroundImage: `url(${src})`,
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: `${size}`,
          }}
        />
      )}
    </AvatarWrapper>
  );
};
