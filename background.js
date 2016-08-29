/*
 * This file is part of Funny Adblock <http://www.happyhey.com/>,
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

var RegExpFilter = require("filterClasses").RegExpFilter;
var ElemHide = require("elemHide").ElemHide;
var checkWhitelisted = require("whitelisting").checkWhitelisted;
var extractHostFromFrame = require("url").extractHostFromFrame;
var port = require("messaging").port;
var devtools = require("devtools");
console.log('here');
port.on("get-selectors", function(msg, sender)
{
  var selectors;
  var trace = devtools && devtools.hasPanel(sender.page);

  if (!checkWhitelisted(sender.page, sender.frame,
                        RegExpFilter.typeMap.DOCUMENT |
                        RegExpFilter.typeMap.ELEMHIDE))
    selectors = ElemHide.getSelectorsForDomain(
      extractHostFromFrame(sender.frame),
      checkWhitelisted(sender.page, sender.frame,
                       RegExpFilter.typeMap.GENERICHIDE)
    );
  else
    selectors = [];

  return {selectors: selectors, trace: trace};
});

port.on("forward", function(msg, sender)
{
  var targetPage;
  debugger;
  if (msg.targetPageId)
    targetPage = ext.getPage(msg.targetPageId);
  else
    targetPage = sender.page;

  if (targetPage)
  {
    msg.payload.sender = sender.page.id;
    if (msg.expectsResponse)
      return new Promise(targetPage.sendMessage.bind(targetPage, msg.payload));
    targetPage.sendMessage(msg.payload);
  }
});
