import { ReactNode } from 'react';

export function BaseLayout({ children }: { children: ReactNode }) {
  return <div className="base-layout">{children}</div>;
}
