window.PokedexMovePanel=PokedexResultPanel.extend({initialize:function(e){var a=getID(BattleMovedex,e=toID(e));this.id=e,this.shortTitle=a.name;var t='<div class="pfx-body dexentry">';if(t+='<a href="'+Config.baseurl+'" class="pfx-backbutton" data-target="back"><i class="fa fa-chevron-left"></i> Pok&eacute;dex</a>'+('<h1><a href="'+Config.baseurl+"moves/"+e+'" data-target="push" class="subtle">')+a.name+"</a></h1>","magikarpsrevenge"===a.id)t+='<div class="warning"><strong>Note:</strong> Made for testing on Pok&eacute;mon Showdown, not a real move.</div>';else if(a.isNonstandard){switch(t+='<div class="warning"><strong>Note:</strong> ',a.isNonstandard){case"Past":t+="This move is only available in past generations.";break;case"Future":t+="This move is only available in future generations.";break;case"Unobtainable":a.isMax?t+="This move can't be learned normally, it can only be used by "+(!0===a.isMax?"Dynamaxing":"Gigantamaxing")+".":a.isZ?t+="This move can't be learned normally, it can only be used with a Z-Crystal.":t+="This move can't be learned normally.";break;case"CAP":t+='This is a made-up move by <a href="http://www.smogon.com/cap/" target="_blank">Smogon CAP</a>.';break;case"LGPE":t+="This move is only available in Let's Go! Pikachu and Eevee.";break;case"Custom":t+="This is a custom move, not available during normal gameplay."}t+="</div>"}if(t+='<dl class="movetypeentry"><dt>Type:</dt> <dd>'+('<a class="type '+toID(a.type)+'" href="'+Config.baseurl+"types/"+toID(a.type)+'" data-target="push">')+a.type+"</a> "+('<a class="type '+toID(a.category)+'" href="'+Config.baseurl+"categories/"+toID(a.category)+'" data-target="push">')+a.category+"</a></dd></dl>","Status"!==a.category&&(t+='<dl class="powerentry"><dt>Base power:</dt> <dd><strong>'+(a.basePower||"&mdash;")+"</strong></dd></dl>"),t+='<dl class="accuracyentry"><dt>Accuracy:</dt> <dd>'+(a.accuracy&&!0!==a.accuracy?a.accuracy+"%":"&mdash;")+"</dd></dl>"+('<dl class="ppentry"><dt>PP:</dt> <dd>'+a.pp)+(a.noPPBoosts?"":' <small class="minor">(max: '+1.6*a.pp+")</small>")+'</dd></dl><div style="clear:left;padding-top:1px"></div>',a.isZ){if(t+='<p><strong><a href="'+Config.baseurl+'tags/zmove" data-target="push">[Z-Move]</a></strong>',!0!==a.isZ){var s=getID(BattleItems,a.isZ);t+=' requiring <a href="'+Config.baseurl+"items/"+s.id+'" data-target="push">'+s.name+"</a>"}t+="</p>"}else if(a.isMax){if(!0!==a.isMax){t+='<p><strong><a href="'+Config.baseurl+'tags/gmaxmove" data-target="push">[G-Max Move]</a></strong>';var r=getID(BattlePokedex,a.isMax);t+=' used by <a href="'+Config.baseurl+"pokemon/"+r.id+'gmax" data-target="push">'+r.name+"-Gmax</a>","Toxtricity"===r.name&&(t+=' or <a href="'+Config.baseurl+"pokemon/"+r.id+'lowkeygmax" data-target="push">'+r.name+"-Low-Key-Gmax</a>")}else t+='<p><strong><a href="'+Config.baseurl+'tags/maxmove" data-target="push">[Max Move]</a></strong>'}a.priority>1?t+="<p>Nearly always moves first <em>(priority +"+a.priority+")</em>.</p>":a.priority<=-1?t+="<p>Nearly always moves last <em>(priority &minus;"+-a.priority+")</em>.</p>":1===a.priority&&(t+="<p>Usually moves first <em>(priority +"+a.priority+")</em>.</p>"),t+="<p>"+escapeHTML(a.desc||a.shortDesc)+"</p>","defrost"in a.flags&&(t+='<p><a class="subtle" href="'+Config.baseurl+'tags/defrost" data-target="push">The user thaws out</a> if it is frozen.</p>'),"protect"in a.flags||"self"===a.target||(t+='<p class="movetag"><a href="'+Config.baseurl+'tags/bypassprotect" data-target="push">Bypasses Protect</a> <small>(bypasses <a class="subtle" href="'+Config.baseurl+'moves/protect" data-target="push">Protect</a>, <a class="subtle" href="'+Config.baseurl+'moves/detect" data-target="push">Detect</a>, <a class="subtle" href="'+Config.baseurl+'moves/kingsshield" data-target="push">King\'s Shield</a>, and <a class="subtle" href="'+Config.baseurl+'moves/spikyshield" data-target="push">Spiky Shield</a>)</small></p>'),"bypasssub"in a.flags&&(t+='<p class="movetag"><a href="'+Config.baseurl+'tags/bypasssub" data-target="push">Bypasses Substitute</a> <small>(bypasses but does not break a <a class="subtle" href="'+Config.baseurl+'moves/substitute" data-target="push">Substitute</a>)</small></p>'),"reflectable"in a.flags||"self"===a.target||"Status"!==a.category||(t+='<p class="movetag"><a href="'+Config.baseurl+'tags/nonreflectable" data-target="push">&#x2713; Nonreflectable</a> <small>(can\'t be bounced by <a class="subtle" href="'+Config.baseurl+'moves/magiccoat" data-target="push">Magic Coat</a> or <a class="subtle" href="'+Config.baseurl+'abilities/magicbounce" data-target="push">Magic Bounce</a>)</small></p>'),"mirror"in a.flags||"self"===a.target||(t+='<p class="movetag"><a href="'+Config.baseurl+'tags/nonmirror" data-target="push">&#x2713; Nonmirror</a> <small>(can\'t be copied by <a class="subtle" href="'+Config.baseurl+'moves/mirrormove" data-target="push">Mirror Move</a>)</small></p>'),"snatch"in a.flags||"self"!==a.target&&"allyTeam"!==a.target&&"adjacentAllyOrSelf"!==a.target||(t+='<p class="movetag"><a href="'+Config.baseurl+'tags/nonsnatchable" data-target="push">&#x2713; Nonsnatchable</a> <small>(can\'t be copied by <a class="subtle" href="'+Config.baseurl+'moves/snatch" data-target="push">Snatch</a>)</small></p>'),"contact"in a.flags&&(t+='<p class="movetag"><a href="'+Config.baseurl+'tags/contact" data-target="push">&#x2713; Contact</a> <small>(affected by many abilities like Iron Barbs and moves like Spiky Shield)</small></p>'),"sound"in a.flags&&(t+='<p class="movetag"><a href="'+Config.baseurl+'tags/sound" data-target="push">&#x2713; Sound</a> <small>(bypasses <a class="subtle" href="'+Config.baseurl+'moves/substitute" data-target="push">Substitute</a>, doesn\'t affect <a class="subtle" href="'+Config.baseurl+'abilities/soundproof" data-target="push">Soundproof</a> pokemon)</small></p>'),"powder"in a.flags&&(t+='<p class="movetag"><a href="'+Config.baseurl+'tags/powder" data-target="push">&#x2713; Powder</a> <small>(doesn\'t affect <a class="subtle" href="'+Config.baseurl+'types/grass" data-target="push">Grass</a>-types, <a class="subtle" href="'+Config.baseurl+'abilities/overcoat" data-target="push">Overcoat</a> pokemon, and <a class="subtle" href="'+Config.baseurl+'items/safetygoggles" data-target="push">Safety Goggles</a> holders)</small></p>'),"punch"in a.flags&&(t+='<p class="movetag"><a href="'+Config.baseurl+'tags/fist" data-target="push">&#x2713; Fist</a> <small>(boosted by <a class="subtle" href="'+Config.baseurl+'abilities/ironfist" data-target="push">Iron Fist</a>)</small></p>'),"pulse"in a.flags&&(t+='<p class="movetag"><a href="'+Config.baseurl+'tags/pulse" data-target="push">&#x2713; Pulse</a> <small>(boosted by <a class="subtle" href="'+Config.baseurl+'abilities/megalauncher" data-target="push">Mega Launcher</a>)</small></p>'),"bite"in a.flags&&(t+='<p class="movetag"><a href="'+Config.baseurl+'tags/bite" data-target="push">&#x2713; Bite</a> <small>(boosted by <a class="subtle" href="'+Config.baseurl+'abilities/strongjaw" data-target="push">Strong Jaw</a>)</small></p>'),"bullet"in a.flags&&(t+='<p class="movetag"><a href="'+Config.baseurl+'tags/ballistic" data-target="push">&#x2713; Ballistic</a> <small>(doesn\'t affect <a class="subtle" href="'+Config.baseurl+'abilities/bulletproof" data-target="push">Bulletproof</a> pokemon)</small></p>'),"slicing"in a.flags&&(t+='<p class="movetag"><a href="'+Config.baseurl+'tags/slicing" data-target="push">&#x2713; Slicing</a> <small>(boosted by <a class="subtle" href="'+Config.baseurl+'abilities/sharpness" data-target="push">Sharpness</a>)</small></p>'),"wind"in a.flags&&(t+='<p class="movetag"><a href="'+Config.baseurl+'tags/wind" data-target="push">&#x2713; Wind</a> <small>(interacts with <a class="subtle" href="'+Config.baseurl+'abilities/windpower" data-target="push">Wind Power</a> and <a class="subtle" href="'+Config.baseurl+'abilities/windrider" data-target="push">Wind Rider</a>)</small></p>'),"allAdjacent"===a.target?t+='<p class="movetag"><small>In Doubles, hits all adjacent Pokémon (including allies)</small></p>':"allAdjacentFoes"===a.target?t+='<p class="movetag"><small>In Doubles, hits all adjacent foes</small></p>':"randomNormal"===a.target?t+='<p class="movetag"><small>In Doubles, hits a random foe (you can\'t choose its target)</small></p>':"adjacentAllyOrSelf"===a.target&&(t+='<p class="movetag"><small>In Doubles, can be used either on the user or an adjacent ally</small></p>');var o={Poison:"Acid Downpour",Fighting:"All-Out Pummeling",Dark:"Black Hole Eclipse",Grass:"Bloom Doom",Normal:"Breakneck Blitz",Rock:"Continental Crush",Steel:"Corkscrew Crash",Dragon:"Devastating Drake",Electric:"Gigavolt Havoc",Water:"Hydro Vortex",Fire:"Inferno Overdrive",Ghost:"Never-Ending Nightmare",Bug:"Savage Spin-Out",Psychic:"Shattered Psyche",Ice:"Subzero Slammer",Flying:"Supersonic Skystrike",Ground:"Tectonic Rage",Fairy:"Twinkle Tackle"},l={spiritshackle:"Sinister Arrow Raid",volttackle:"Catastropika",lastresort:"Extreme Evoboost",psychic:"Genesis Supernova",naturesmadness:"Guardian of Alola",darkestlariat:"Malicious Moonsault",sparklingaria:"Oceanic Operetta",gigaimpact:"Pulverizing Pancake",spectralthief:"Soul-Stealing 7-Star Strike",thunderbolt:"Stoked Sparksurfer",thunderbolt2:"10,000,000 Volt Thunderbolt",photongeyser:"Light That Burns the Sky",sunsteelstrike:"Searing Sunraze Smash",moongeistbeam:"Menacing Moonraze Maelstrom",playrough:"Let's Snuggle Forever",stoneedge:"Splintered Stormshards",clangingscales:"Clangorous Soulblaze"};if(!a.isMax&&(a.zMovePower||a.zMoveEffect||a.zMoveBoost)){if(t+="<h3>Z-Move(s)</h3>",a.zMovePower&&(t+='<p><strong><a href="'+Config.baseurl+"moves/"+toID(o[a.type])+'" data-target="push">'+o[a.type]+"</a></strong>: "+(""+a.zMovePower+" base power, ")+a.category+"</p>"),a.zMoveBoost){t+="<p><strong>Z-"+a.name+"</strong>: ";var i=!0;for(var n in a.zMoveBoost)i||(t+=", "),i=!1,t+="+"+a.zMoveBoost[n]+" "+(BattleStatNames[n]||n);t+=", then uses "+a.name+"</p>"}if("heal"===a.zMoveEffect?t+="<p><strong>Z-"+a.name+"</strong>: fully heals the user, then uses "+a.name+"</p>":"clearnegativeboost"===a.zMoveEffect?t+="<p><strong>Z-"+a.name+"</strong>: clears the user's negative stat boosts, then uses "+a.name+"</p>":"healreplacement"===a.zMoveEffect?t+="<p><strong>Z-"+a.name+"</strong>: uses "+a.name+", then heals the replacement</p>":"crit2"===a.zMoveEffect?t+="<p><strong>Z-"+a.name+"</strong>: increases the user's crit rate by 2, then uses "+a.name+"</p>":"redirect"===a.zMoveEffect?t+="<p><strong>Z-"+a.name+"</strong>: redirects opponent's moves to the user (like Follow Me) in doubles, then uses "+a.name+"</p>":"curse"===a.zMoveEffect&&(t+="<p><strong>Z-"+a.name+"</strong>: +1 Atk if the user is a ghost, or fully heals the user otherwise, then uses "+a.name+"</p>"),e in l){var g=getID(BattleMovedex,l[e]);t+='<p><strong><a href="'+Config.baseurl+"moves/"+g.id+'" data-target="push">'+g.name+"</a></strong>: ",g.basePower?t+=""+g.basePower+" base power, "+g.category+"</p>":t+=g.shortDesc,t+="</p>"}if(e+"2" in l){var g=getID(BattleMovedex,l[e+"2"]);t+='<p><strong><a href="'+Config.baseurl+"moves/"+g.id+'" data-target="push">'+g.name+"</a></strong>: ",g.basePower?t+=""+g.basePower+" base power, "+g.category+"</p>":t+=g.shortDesc,t+="</p>"}}var h={Poison:"Ooze",Fighting:"Knuckle",Dark:"Darkness",Grass:"Overgrowth",Normal:"Strike",Rock:"Rockfall",Steel:"Steelspike",Dragon:"Wyrmwind",Electric:"Lightning",Water:"Geyser",Fire:"Flare",Ghost:"Phantasm",Bug:"Flutterby",Psychic:"Mindstorm",Ice:"Hailstorm",Flying:"Airstream",Ground:"Quake",Fairy:"Starfall",Status:"Guard"},u={Bug:["Befuddle"],Fire:["Centiferno","Wildfire"],Fighting:["Chi Strike"],Normal:["Cuddle","Gold Rush","Replenish"],Dragon:["Depletion"],Fairy:["Finale","Smite"],Water:["Foam Burst","Stonesurge"],Psychic:["Gravitas"],Poison:["Malodor"],Steel:["Meltdown","Steelsurge"],Ice:["Resonance"],Ground:["Sandblast"],Dark:["Snooze"],Electric:["Stun Shock","Volt Crash"],Grass:["Sweetness","Tartness"],Ghost:["Terror"],Rock:["Volcalith"],Flying:["Wind Rage"]};if(a.gmaxPower&&!a.isZ&&!a.isMax&&(t+="<h3>Max Move</h3>","Status"!==a.category?t+='<p><strong><a href="'+Config.baseurl+"moves/max"+toID(h[a.type])+'" data-target="push">Max '+h[a.type]+"</a></strong>: "+(""+a.gmaxPower+" base power, ")+a.category+"</p>":t+='<p><strong><a href="'+Config.baseurl+'moves/maxguard" data-target="push">Max Guard</a></strong>'+a.shortDesc,a.type in u&&"Status"!==a.category))for(let e=0;e<u[a.type].length;e++){var c=getID(BattleMovedex,"gmax"+u[a.type][e]);t+='<p>Becomes <strong><a href="'+Config.baseurl+"moves/"+c.id+'" data-target="push">'+c.name+"</a></strong> "+('if used by <strong><a href="'+Config.baseurl+"pokemon/"+c.isMax+'gmax" data-target="push">')+c.isMax+"-Gmax</a></strong>","Toxtricity"===c.isMax&&(t+=' or <strong><a href="'+Config.baseurl+"pokemon/"+c.isMax+'lowkeygmax" data-target="push">'+c.isMax+"-Low-Key-Gmax</a></strong>"),t+="</p>"}t+='<ul class="utilichart metricchart nokbd"></ul></div>',this.html(t),setTimeout(this.renderDistribution.bind(this))},getDistribution:function(){var e=[];for(let a in BattlePokedex){let t=getLearnset(a);e=e.concat(t.filter(e=>e.move==this.id).map(e=>({poke:a,...e})))}let a=["lvl","tm","tutor","egg"];for(let t of(e.sort((e,t)=>e.how!=t.how?a.indexOf(e.how)-a.indexOf(t.how):"lvl"==e.how&&e.level!=t.level?e.level-t.level:e.poke.localeCompare(t.poke)),a)){let a=e.findIndex(e=>e.how==t);a<0||e.splice(a,0,{start:!0,method:t})}return this.results=e},renderDistribution:function(){var e=this.getDistribution();if(this.$chart=this.$(".utilichart"),e.length>1600/33){this.streamLoading=!0,this.$el.on("scroll",this.handleScroll.bind(this));var a=this.$el.children().offset().top,t=this.$el.outerHeight(),s=this.$chart.offset().top,r=Math.floor(((this.scrollLoc=this.$el.scrollTop())-(s-a))/33-35),o=Math.floor(r+35+t/33+35);r<0&&(r=0),o>e.length-1&&(o=e.length-1),this.start=r,this.end=o;for(var l="",i=0,n=e.length;i<n;i++)l+='<li class="result">'+this.renderRow(i,i<r||i>o)+"</li>";this.$chart.html(l)}else{for(var l="",i=0,n=e.length;i<n;i++)l+='<li class="result">'+this.renderRow(i)+"</li>";this.$chart.html(l)}},renderRow:function(e,a){var t=this.results,s=BattlePokedex[t[e].poke];if(t[e].start)switch(t[e].method){case"lvl":return"<h3>Level-up</h3>";case"tm":return"<h3>TM/HM</h3>";case"tutor":return"<h3>Tutor</h3>";case"egg":return"<h3>Egg</h3>"}else{if(a)return""+s.name+" "+s.abilities["0"]+" "+(s.abilities["1"]||"")+" "+(s.abilities.H||"");var r="";switch(t[e].how){case"lvl":r=t[e].level<=1?"&ndash;":"<small>L</small>"+(t[e].level||"?");break;case"tm":r=`<span class="itemicon" style="margin-top:-3px;${getItemIcon("tr01")}"></span>`;break;case"tutor":r='<img src="'+ResourcePrefix+'sprites/tutor.png" style="margin-top:-4px;opacity:.7" width="27" height="26" alt="T" />';break;case"egg":r='<span class="picon" style="margin-top:-12px;'+getPokemonIcon("egg")+'"></span>';break;case"event":r="!";break;case"past":r="..."}return BattleSearch.renderTaggedPokemonRowInner(s,r)}},handleScroll:function(){Math.abs(this.$el.scrollTop()-this.scrollLoc)>660&&this.renderUpdateDistribution()},debouncedPurgeTimer:null,renderUpdateDistribution:function(e){this.debouncedPurgeTimer&&(clearTimeout(this.debouncedPurgeTimer),this.debouncedPurgeTimer=null);var a=this.$el.children().offset().top,t=this.$el.outerHeight(),s=this.$chart.offset().top,r=this.scrollLoc=this.$el.scrollTop(),o=this.results,l=Math.floor(t/33),i=Math.floor((r-(s-a))/33-35),n=i+35+l+35;i<0&&(i=0),n>o.length-1&&(n=o.length-1);var g=this.$chart.children();if(e||i<this.start-l-30||n>this.end+l+30){for(var h="",u=0,c=o.length;u<c;u++)h+='<li class="result">'+this.renderRow(u,u<i||u>n)+"</li>";this.$chart.html(h),this.start=i,this.end=n;return}if(i<this.start){for(var u=i;u<this.start;u++)g[u].innerHTML=this.renderRow(u);this.start=i}if(n>this.end){for(var u=this.end+1;u<=n;u++)g[u].innerHTML=this.renderRow(u);this.end=n}if(this.end-this.start>l+90){var d=this;this.debouncedPurgeTimer=setTimeout(function(){d.renderUpdateDistribution(!0)},1e3)}}});
//# sourceMappingURL=index.b47b3add.js.map
