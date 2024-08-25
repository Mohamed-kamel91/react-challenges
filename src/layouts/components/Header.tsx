import { Link } from 'react-router-dom';
import { SunDim, Moon, Atom } from 'lucide-react';

import { Switch } from '@features/switch';

export const Header = () => {
  return (
    <header className="flex justify-between border-b border-gray bg-white p-[20px]">
      <Link className="flex items-center gap-2" to="/">
        <Atom />
        <span className="text-[20px] font-bold">CHALLENGES</span>
      </Link>

      <Switch
        id="dark-theme"
        aria-label="Dark theme"
        offIcon={<SunDim className="text-gray-dark" size={12} />}
        onIcon={<Moon className="text-gray-dark" size={12} />}
      />
    </header>
  );
};
