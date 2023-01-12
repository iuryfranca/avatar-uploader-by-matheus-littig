import Image from 'next/image';
import { HeaderWrapper } from './styles';

export const Header = () => {
  return (
    <HeaderWrapper>
      <Image
        src="/svgs/app-logo.svg"
        width={140}
        height={41}
        alt="Avatar Uploader"
      />
    </HeaderWrapper>
  );
};
