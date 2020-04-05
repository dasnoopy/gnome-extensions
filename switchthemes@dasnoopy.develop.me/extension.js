/* Uptime Indicator
 *
 * gnome-shell extension that indicates uptime in status area.
 * Loosely based on lapi's Uptime extension:
 *    https://extensions.gnome.org/extension/312/uptime/
 *
 * Author: Gniourf, gniourfgniourf@gmail.com
 * Date: 2012-20-10
 *
 * Changes:
 *    2014-05-10: moved style to css and added Clutter to vertically align the
 *    St.Label (thanks to varunoberoi)
 */

'use strict';

const St = imports.gi.St;
const Gio = imports.gi.Gio;
const Main = imports.ui.main;
const PanelMenu = imports.ui.panelMenu;

const Shell=imports.gi.Shell;
const Mainloop=imports.mainloop;
const Lang=imports.lang;
const PopupMenu=imports.ui.popupMenu;
const Clutter=imports.gi.Clutter;

const SCHEMA_KEY = 'org.gnome.desktop.interface';
const SCHEMA_KEY_SHELL = 'org.gnome.shell.extensions.user-theme';

const DEFAULT_THEME = ['Adwaita','Adwaita','Adwaita','Adwaita'];

const THEME_KEY = 'gtk-theme';
const CURSOR_KEY = 'cursor-theme';
const ICONS_KEY = 'icon-theme';
const SHELL_KEY = 'name';

let button, settings, settingsShell, CUSTOM_THEME;

function _toggleTheme() {

/* set gtk2-3 theme */
	const newTheme = settings.get_string(THEME_KEY) === DEFAULT_THEME[0]
		? CUSTOM_THEME[0]
		: DEFAULT_THEME[0];
	
	settings.set_string(THEME_KEY, newTheme);

/* set cursor theme */
		const newCursor = settings.get_string(CURSOR_KEY) === DEFAULT_THEME[1]
		? CUSTOM_THEME[1]
		: DEFAULT_THEME[1];
 	
 	settings.set_string(CURSOR_KEY, newCursor);

/* set icons theme */
		const newIcons = settings.get_string(ICONS_KEY) === DEFAULT_THEME[2]
		? CUSTOM_THEME[2]
		: DEFAULT_THEME[2];
 	
 	settings.set_string(ICONS_KEY, newIcons);
 
 /* set shell theme */
		const newShell = settingsShell.get_string(SHELL_KEY) === DEFAULT_THEME[3]
		? CUSTOM_THEME[3]
		: DEFAULT_THEME[3];
 	
 	settingsShell.set_string(SHELL_KEY, newShell);
}

function init() {
	settings = new Gio.Settings({ schema: SCHEMA_KEY });
	settingsShell = new Gio.Settings({ schema: SCHEMA_KEY_SHELL });

/* read current theme and store in an array */
let currentTheme = settings.get_string(THEME_KEY);
let currentCursor = settings.get_string(CURSOR_KEY);
let currentIcons = settings.get_string(ICONS_KEY);
let currentShell = settingsShell.get_string(SHELL_KEY);

CUSTOM_THEME = [currentTheme,currentCursor,currentIcons,currentShell];

// Button
	button = new St.Bin ({style_class: 'panel-button',
		reactive: true,
		can_focus: true,
		x_fill: true,
		y_fill: false,
		track_hover: true});

 // Icon
	let icon = new St.Icon({
		icon_name: 'media-playlist-shuffle-symbolic',
		style_class: 'system-status-icon'
	});

  button.set_child(icon);
	button.connect('button-press-event', _toggleTheme);
}

function enable() {
        /*
          We add the button we created before to the rigth panel of the top panel (where the sound and wifi settings are)
         */
		Main.panel._rightBox.insert_child_at_index(button, 1);
}

function disable() {
        /*
         we remove the button from the right panel
         */
	Main.panel._rightBox.remove_child(button);
}

