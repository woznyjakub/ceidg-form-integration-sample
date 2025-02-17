import { ReactNode } from 'react';

export function Section({ children }: { children: ReactNode }) {
  return (
    <section>
      <div className="container">{children}</div>
    </section>
  );
}
