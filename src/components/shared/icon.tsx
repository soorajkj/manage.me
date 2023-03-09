import { forwardRef } from 'react';
import Daybook from 'public/daybook.svg';
import Folder from 'public/folder.svg';
import User from 'public/user.svg';
import Settings from 'public/settings.svg';
import Check from 'public/check.svg';
import Menu from 'public/menu.svg';
import Google from 'public/google.svg';
import Github from 'public/github.svg';
import Loader from 'public/loader.svg';
import Spin from 'public/spin.svg';
import Plus from 'public/plus.svg';
import Minus from 'public/minus.svg';
import Maximize from 'public/maximize.svg';
import Lock from 'public/lock.svg';

const Icons = {
  folder: Folder,
  daybook: Daybook,
  user: User,
  settings: Settings,
  check: Check,
  menu: Menu,
  google: Google,
  github: Github,
  loader: Loader,
  spin: Spin,
  plus: Plus,
  minus: Minus,
  maximize: Maximize,
  lock: Lock,
} as const;

interface IconProps
  extends React.DetailedHTMLProps<React.SVGAttributes<SVGElement>, SVGElement> {
  icon: keyof typeof Icons;
}

const Icon = forwardRef<SVGElement, IconProps>((props, ref) => {
  const { icon, ...rest } = props;

  const SVGElement = Icons[icon];
  return <SVGElement ref={ref} {...rest} />;
});

Icon.displayName = 'Icon';

export default Icon;