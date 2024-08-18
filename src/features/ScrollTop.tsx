import { MoveUp } from 'lucide-react';

import { useScroll } from '@hooks';
import { cn } from '@utils';

type ScrollTopProps = {
  offsetY?: number;
};

export const ScrollTop = ({ offsetY = 100 }: ScrollTopProps) => {
  const { scrollY } = useScroll();

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (scrollY >= offsetY) {
    return (
      <div
        className={cn(
          'group fixed bottom-9 right-14 rounded-full border border-violet-200 bg-violet-100'
        )}
      >
        <button
          className="block p-4"
          aria-label="scroll up"
          onClick={handleScrollTop}
        >
          <MoveUp className="transition-all duration-250 ease-out group-hover:-translate-y-1" />
        </button>
      </div>
    );
  }
};
