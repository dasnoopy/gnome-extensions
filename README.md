What does this extensions

- switch current gtk2/3, cursor, icons and shell theme to ADWAITA default and viceversa
- just stole the idea from other extensions that switch theme from light to dark and similar.

Values are read from dconf keys


const SCHEMA_KEY = 'org.gnome.desktop.interface';
const SCHEMA_KEY_SHELL = 'org.gnome.shell.extensions.user-theme';


default theme is set to ADWAITA for gtk2/3, cursor,icons and shell theme


how extensions should work to fits my needs:

1) click on icon: a popupover should show current themes settings
2) a button SWITCH to ADWAITA change theme to ADWAITA
3) in the mean time the button label change to "RESTORE my theme" or something like that
4) if click on the button, then, my themes will be restored
5) if current theme change in the meantime, extension should detect this change e

What it does now
1) first click on extension APPLY Adwaita themes
2) second click on extension APPLY original custom theme settings
3) goto  point 1


