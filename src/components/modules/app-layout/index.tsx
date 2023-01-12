import { ReactNode } from 'react';
import { Header, Bottom } from '../';
import { LayoutWrapper } from './styles';

interface AppLayoutProps {
  children: ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <LayoutWrapper>
      <Header />
      {children}
      <Bottom />
    </LayoutWrapper>
  );
};
