**What this extensions does:**
- switch current gtk2/3, cursor, icons and shell theme to ADWAITA default and viceversa just to avoid the use of gnome tweak tool



**Some important notes:**
- just stole the idea from other extensions that switch theme from light to dark and similar.
- **very early deployment. Use it at your risk!!! :-)**
-  It works, ONLY with gnome 3.36.x
- copy folder extension  in `~/.local/share/gnome-shell/extensions`
- restart gnome shell with ALT+F2 then type 'r' to restart shell
- if nothing seems to appear in the top panel bar, check if if the extension is runnning with the gnome-extensions tool

Values for current theme settings are  read from following Dconf keys:

- SCHEMA_KEY = 'org.gnome.desktop.interface'
- SCHEMA_KEY_SHELL = 'org.gnome.shell.extensions.user-theme'

default theme is set to ADWAITA for gtk2/3, cursor,icons and shell theme


**how thisn extensions should works to fits my needs:**

(Please note that my programming skills in JS are near to zero.. so this wishlist probably will be never implemented)

1) click on icon: a popover panel  should report current themes settings and a button (or switch) to switch themes
2) a button SWITCH to ADWAITA change theme to ADWAITA 
3) in the mean time the button label change to "RESTORE my theme" or something like that
4) if click on the button, then, my themes will be restored
5) if current theme change in the meantime, extension should detect this change and use new theme settings on next use
 

**What it does now**

(just because I was able to assemble pieces of codes from other similar extensions  :-)

1) first click on extension APPLY Adwaita themes
2) second click on extension APPLY original custom theme settings
3) goto  point 1


