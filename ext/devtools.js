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

(function()
{
  var inspectedTabId = chrome.devtools.inspectedWindow.tabId;
  var port = chrome.runtime.connect({name: "devtools-" + inspectedTabId});

  ext.onMessage = port.onMessage;
  ext.devtools = chrome.devtools;
})();
