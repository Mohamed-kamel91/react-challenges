import {
  GalleryVertical,
  Scaling,
  SquareMousePointer,
  MoveUp,
  LucideProps,
} from 'lucide-react';

export type Navigation = {
  path: string;
  name: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
  >;
}[];

export const navigation: Navigation = [
  {
    path: 'scroll-to-top',
    name: 'Scroll to top',
    icon: MoveUp,
  },
  {
    path: 'intersection-observer',
    name: 'Int. observer',
    icon: GalleryVertical,
  },
  {
    path: 'mouse-position',
    name: 'Mouse position',
    icon: SquareMousePointer,
  },
  {
    path: 'resizable-panel',
    name: 'Resizable panel',
    icon: Scaling,
  },
];
