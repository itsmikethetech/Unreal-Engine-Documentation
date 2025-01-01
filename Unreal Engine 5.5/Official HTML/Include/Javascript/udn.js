function PageReadyBase(){function r(n){$(n).removeClass("expandable");$(n).addClass("expanded");$(n).parent().siblings(".content").show();$(n).parent().click(function(){u(n)})}function u(n){$(n).removeClass("expanded");$(n).addClass("expandable");$(n).parent().siblings(".content").hide();$(n).parent().click(function(){r(n)})}function e(){}var i,t;for($(".non-localized a:first-child img:first-child + img").each(function(){$(this).css("display","none")}),$("body").click(function(){$("#sidebar").hide()}),$("#jumplink").click(function(n){n.stopPropagation()}),$("#sidebar").click(function(n){n.stopPropagation()}),i=Object.keys(currentSelectors),t=0;t<i.length;t++)getSelector(i[t],!0);$(".checkpoint>ul>li a").each(function(){$(this).click(function(){getCheckpoints(checkpoint);setCheckpoint(checkpoint,getCheckpointURL($(this).attr("href")),!1)})});$("div.navigation>div.button.next a").each(function(){$(this).click(function(){getCheckpoints(checkpoint);setCheckpoint(checkpoint,getCheckpointURL($(this).attr("href")),!1);setCheckpoint(checkpoint,getCheckpointURL(document.location.href),!0)})});checkpoint!=""&&(getCheckpoints(checkpoint),setCheckpoint(checkpoint,getCheckpointURL(document.location.href),!1),updatePendingCheckpoints(checkpoint));$(".slider_container").each(function(){var n=[],i=0,r,t;$(this).find("#images img").each(function(){n[i]=$(this).attr("data-src");i++});r=n.length-1;t=$(this).attr("id");$(this).find("#"+t+"_Image").append('<img class="lazyload" data-src="'+n[0]+'"/>');$(this).find(".slider").slider({value:0,min:0,max:r,step:1,slide:function(i,r){$("#"+t+"_Image img").attr({src:n[r.value]})}})});e();$(".lightbox a").fancybox({overlayColor:"#777",overlayOpacity:.75,titlePosition:"over",padding:0,margin:0,centerOnScroll:!0});$(".expandable").each(function(){$(this).parent().click(function(){r($(this).children(".title"))})});$(".expanded").each(function(){$(this).parent().click(function(){u($(this).children(".title"))})});var n=".crumbs",f=$(n).offset(),o=!1;$(window).scroll(function(){if(o&&f){var t=$(window).scrollTop(),i=f.top-t;i<0?($(n).css("position","absolute"),$(n).css("top",t+2),$("#crumbs_bg").css("opacity",.5),$("#crumbs_bg").height($(n).outerHeight()+6)):($(n).css("position","relative"),$(n).css("top",2),$("#crumbs_bg").css("opacity",0));$(n).width(1172)}})}function sectionOnClick(n,t){$("#"+t).is(":visible")?($("#"+t).hide(),$(n).removeClass("expanded"),$(n).addClass("expandable")):($("#"+t).show(),$(n).removeClass("expandable"),$(n).addClass("expanded"))}function hierarchyOnClick(n){var i=document.getElementById(n+"_button"),t=document.getElementById(n);t.className=="hierarchy-table-collapsed"?(i.className="hierarchy-button-expanded",t.className="hierarchy-table"):(i.className="hierarchy-button-collapsed",t.className="hierarchy-table-collapsed")}function toggleAnimImage(n){var i=document.getElementById(n+"_still"),t=document.getElementById(n+"_anim");t.style.display=="none"?(i.style.display="none",t.style.display="block"):(i.style.display="block",t.style.display="none")}function ToggleTab(n){n=="windows"?($(".tab.windows").addClass("active_tab"),$(".tab.mac").removeClass("active_tab"),$(".tab.linux").removeClass("active_tab"),setTimeout(function(){$(".tab_content.windows").addClass("active_tab_content").hide().delay(1).show()},1),$(".tab_content.mac").hide().removeClass("active_tab_content"),$(".tab_content.linux").hide().removeClass("active_tab_content")):n=="mac"?($(".tab.mac").addClass("active_tab"),$(".tab.windows").removeClass("active_tab"),$(".tab.linux").removeClass("active_tab"),setTimeout(function(){$(".tab_content.mac").addClass("active_tab_content").hide().delay(1).show()},1),$(".tab_content.windows").hide().removeClass("active_tab_content"),$(".tab_content.linux").hide().removeClass("active_tab_content")):n=="linux"&&($(".tab.linux").addClass("active_tab"),$(".tab.mac").removeClass("active_tab"),$(".tab.windows").removeClass("active_tab"),$(".tab_content.linux").hide().delay(1).show().addClass("active_tab_content"),$(".tab_content.mac").hide().removeClass("active_tab_content"),$(".tab_content.windows").hide().removeClass("active_tab_content"))}function ToggleButton(n,t,i){i==null&&(i=!0);currentSelectors[n]!=t&&($(".btn-toggle").each(function(){$(this).hasClass(n)&&$(this).hasClass(t)?$(this).addClass("active_button"):$(this).hasClass(n)&&$(this).removeClass("active_button")}),$(".button_content").each(function(){$(this).hasClass(n)&&$(this).hasClass(t)?($(this).addClass("active_button_content").hide().delay(1).show(i?400:0,getHeadings),i!=!1&&$(this).addClass("highlight").queue(function(n){$(this).addClass("badge");n()}).delay(2500).queue(function(n){$(this).removeClass("badge").removeClass("highlight");n()})):$(this).hasClass(n)&&$(this).clearQueue().stop().hide().removeClass("active_button_content")}),currentSelectors[n]=t)}function createCookie(n,t,i){var r,u;i?(r=new Date,r.setTime(r.getTime()+i*864e5),u="; expires="+r.toGMTString()):u="";document.cookie=n+"="+t+u+"; path=/"}function readCookie(n){for(var t,r=n+"=",u=document.cookie.split(";"),i=0;i<u.length;i++){for(t=u[i];t.charAt(0)==" ";)t=t.substring(1,t.length);if(t.indexOf(r)==0)return t.substring(r.length,t.length)}return null}function eraseCookie(n){createCookie(n,"",-1)}function setSelector(n,t){eraseCookie("doc_"+n+"_Selector");createCookie("doc_"+n+"_Selector",t,30);tabSelectors[n]=t;ToggleButton(n,t)}function getSelector(n,t){var i,u,r;if(t==null&&(t=!1),i=readCookie("doc_"+n+"_Selector"),i==null&&(i=defaultSelectors[n]),tabSelectors[n]=i,n=="OS"){for(u=SetOSOptions(),r=0;r<u.length;r++)if(i==u[r]){ToggleButton(n,i,!t);return}ToggleButton("OS",defaultSelectors.OS,!t)}else ToggleButton(n,i,!t)}function getCheckpoints(n){var t,i;checkpointsCompleted[n]==null&&(checkpointsCompleted[n]=[]);checkpointsStarted[n]==null&&(checkpointsStarted[n]=[]);t=readCookie("doc_checkpoints_"+n+"_complete");t!=null&&(checkpointsCompleted[n]=t.split("|"));i=readCookie("doc_checkpoints_"+n+"_started");i!=null&&(checkpointsStarted[n]=i.split("|"));(checkpointsCompleted[n].length>0||checkpointsStarted[n].length>0)&&$(".checkpoint>ul>li>p>a").each(function(){var t=getCheckpointURL($(this).attr("href"));checkpointsCompleted[n].indexOf(t)!=-1?$(this).parent().parent().addClass("checked"):checkpointsStarted[n].indexOf(t)!=-1&&$(this).parent().parent().addClass("started")})}function updatePendingCheckpoints(){for(i=0;i<checkpointsToSet.length;i++)setCheckpoint(checkpointsToSet[i].checkpoint,checkpointsToSet[i].url,!0)}function setCheckpoint(n,t,i){var r,u;checkpointsCompleted[n]==null&&(checkpointsCompleted[n]=[]);checkpointsStarted[n]==null&&(checkpointsStarted[n]=[]);i&&checkpointsCompleted[n].indexOf(t)==-1?(checkpointsCompleted[n][checkpointsCompleted[n].length]=t,eraseCookie("doc_checkpoints_"+n+"_complete"),r=checkpointsCompleted[n].join("|"),createCookie("doc_checkpoints_"+n+"_complete",r,1e6)):checkpointsStarted[n].indexOf(t)==-1&&(checkpointsStarted[n][checkpointsStarted[n].length]=t,eraseCookie("doc_checkpoints_"+n+"_started"),u=checkpointsStarted[n].join("|"),createCookie("doc_checkpoints_"+n+"_started",u,1e6));getCheckpoints(n)}function getAchievements(){var n=readCookie("doc_achievements");n!=null&&(achievementsUnlocked=n.split("|"));achievementsUnlocked.length>0&&$(".achievements>div.item>div.info>div.title").each(function(){var n=$(this).html();achievementsUnlocked.indexOf(n)!=-1&&$(this).parent().parent().addClass("unlocked")})}function setAchievement(n){if(achievementsUnlocked.indexOf(n)==-1){achievementsUnlocked[achievementsUnlocked.length]=n;eraseCookie("doc_achievements");var t=achievementsUnlocked.join("|");createCookie("doc_achievements",t,1e6)}getAchievements()}function getCheckpointURL(n){return n=getAbsoluteURL(n,document.location.href),n.replace(baseURL,"")}function getAbsoluteURL(n,t){var i=document,r=i.getElementsByTagName("base")[0],s=r&&r.href,u=i.head||i.getElementsByTagName("head")[0],f=r||u.appendChild(i.createElement("base")),e=i.createElement("a"),o;return f.href=t,e.href=n,o=e.href,r?r.href=s:u.removeChild(f),o}function getRelativeURL(n){var t=n.replace(baseURL,"")}var bDoIndents=!1,level=0,checkpoint="",languages=["en-US","zh-CN","ja","ko"],CurrLang="en-US",LangCode="en-US",checkpointsCompleted,checkpointsStarted,checkpointsToSet,achievementsUnlocked;for(i=0;i<languages.length;i++)document.location.href.indexOf("/"+languages[i]+"/")!=-1&&(CurrLang=languages[i]);CurrLang=="en-US"?LangCode="en-US":CurrLang=="ko"?LangCode="ko":CurrLang=="ja"?LangCode="ja":CurrLang=="zh-CN"&&(LangCode="zh-CN");var host=document.location.protocol+"//"+document.location.hostname,headerURL=(host.indexOf("gamedev")==-1?defaultHost:stagingHost)+"/epic-games-header?useServerUrl=true&lang="+LangCode,footerURL=(host.indexOf("gamedev")==-1?defaultHost:stagingHost)+"/epic-games-footer?useServerUrl=true&lang="+LangCode,baseRelativePath=host.indexOf("dev.epicgames")!=-1?"/docs/services":basePath.substring(0,basePath.indexOf("/"+lang)),baseURL=host+baseRelativePath+"/";$(document).ready(function(){PageReadyBase()});var defaultSelectors={DCC:"maya",OS:"windows",VRPlatform:"googlevr",BinarySourceSelect:"binaryinstall",BlueprintOrCPPSelect:"blueprintimplementation",Platform:"android"},tabSelectors={DCC:"maya",OS:"windows",VRPlatform:"googlevr",BinarySourceSelect:"binaryinstall",BlueprintOrCPPSelect:"blueprintimplementation",Platform:"android"},currentSelectors={DCC:"",OS:"",VRPlatform:"",BinarySourceSelect:"",BlueprintOrCPPSelect:"",Platform:""},updatingHeadings=!1;checkpointsCompleted=[];checkpointsStarted=[];checkpointsToSet=[];achievementsUnlocked=[]