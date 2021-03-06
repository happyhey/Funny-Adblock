/*
 * This file is part of Funny Adblock <https://happyhey.com/>
 *
 * Funny Adblock is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * Funny Adblock is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Funny Adblock.  If not, see <http://www.gnu.org/licenses/>.
 */

"use strict";

chrome.runtime.sendMessage(
  {
    type: "prefs.get",
    key: "show_devtools_panel"
  },
  function(enabled)
  {
    if (enabled)
      chrome.devtools.panels.create("Funny Adblock",
                                    "icons/detailed/abp-48.png",
                                    "devtools-panel.html");
  }
);
