import { Link } from 'react-router-dom';
import * as Popover from '@radix-ui/react-popover';
import { GitHub, Menu } from 'react-feather';
import { LanguageToggler } from './LanguageToggler';
import { ThemeToggler } from './ThemeToggler';

function SettingsBar(): JSX.Element {
  return (
    <>
      <LanguageToggler />
      <ThemeToggler />
      <Link
        to="https://github.com/iamunhoz"
        target="_blank"
        className="github-link"
      >
        <GitHub />
      </Link>
    </>
  );
}

function SettingsMenu() {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button
          type="button"
          className="IconButton"
          aria-label="Update dimensions"
        >
          <Menu />
        </button>
      </Popover.Trigger>
      <Popover.Content className="popover-content" sideOffset={5}>
        <SettingsBar />
      </Popover.Content>
    </Popover.Root>
  );
}

export function Settings(): JSX.Element {
  return (
    <>
      <div className="settings-bar">
        <SettingsBar />
      </div>

      <div className="settings-menu">
        <SettingsMenu />
      </div>
    </>
  );
}
