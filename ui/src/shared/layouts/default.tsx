import { Header, Footer } from '../index';

type Props = {
  children: JSX.Element;
};

export function DefaultLayout({ children }: Props) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
