import { ReactNode } from 'react';
import { getFullPath } from '../lib/navigation';

type LinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export function Link({ href, children, className = '' }: LinkProps) {
  const fullHref = getFullPath(href);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.history.pushState({}, '', fullHref);
    window.dispatchEvent(new Event('popstate'));
  };

  return (
    <a href={fullHref} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
