function checkSidebarVisibility(){var n=window.matchMedia("only screen and (max-width: 700px)"),t=window.matchMedia("only screen and (max-width: 1000px)");return deviceFormat=n.matches?"mobile":t.matches?"tablet":"desktop",deviceFormat=="mobile"||deviceFormat=="tablet"?"closed":"open"}function setSidebarVisibility(n){n!="closed"?(Open(),$("#navigation").hide(),$("#navigation").click(SlideIn),autoState="open"):(Close(),$("#navigation").show(),$("#navigation").click(SlideOut),autoState="closed");$("#nav-filter-container").width(sidebarWidth-navButtonWidth)}function setSidebarState(n){eraseCookie("doc_Sidebar_State");createCookie("doc_Sidebar_State",n,30)}function getSidebarState(){var n=readCookie("doc_Sidebar_State");state=n!=null?n:state}function SlideIn(){$("#navPanel").css("left","-"+sidebarWidth+"px");$("#navWrapper>.menu_scroll").css("left","-"+sidebarWidth+"px");$("#nav-filter-container").css("left","-"+sidebarWidth+"px");$("#navWrapper>.menu_scroll>.scrollUp").css("left","-"+sidebarWidth+"px");$("#navWrapper>.menu_scroll>.scrollDown").css("left","-"+sidebarWidth+"px");$("#navigation").css("left","0px");$("#navWrapper").css("width","0px");checkSidebarVisibility()=="open"&&($("#contentContainer").css("marginLeft","0px"),$("#announcement").css("width","calc(100% - 40px)"));$("#splitter").css("left","-7px");rotate="0deg";$("#navigation").css("transform","translateY("+translateY+") rotate(0deg)");$("#navigation").off("click");$("#navigation").on("click",SlideOut);navButtonWidth=0;$("#nav-filter-container").width(sidebarWidth-navButtonWidth);state="open";setAnimate();positionBanner();setTimeout("clearAnimate()",250);setSidebarState("closed")}function SlideOut(){$("#navPanel").css("left","0px");$("#navWrapper>.menu_scroll").css("left","0px");$("#nav-filter-container").css("left","0px");$("#navWrapper>.menu_scroll>.scrollUp").css("left","0px");$("#navWrapper>.menu_scroll>.scrollDown").css("left","0px");$("#navigation").css("left",sidebarWidth+1+"px");$("#navWrapper").css("width",sidebarWidth+"px");checkSidebarVisibility()=="open"&&($("#contentContainer").css("marginLeft",sidebarWidth+"px"),$("#announcement").css("width","calc(100% - "+(sidebarWidth+40)+"px)"));$("#splitter").css("left",sidebarWidth+"px");rotate="180deg";$("#navigation").css("transform","translateY("+translateY+") rotate(180deg)");$("#navigation").off("click");$("#navigation").on("click",SlideIn);navButtonWidth=deviceFormat=="mobile"||deviceFormat=="tablet"?$("#navigation").width()+parseInt($("#navigation").css("paddingLeft"))+parseInt($("#navigation").css("paddingLeft")):0;$("#nav-filter-container").width(sidebarWidth-navButtonWidth);state="open";setAnimate();positionBanner();setTimeout("clearAnimate()",250);setSidebarState("open")}function setAnimate(){$("#banner").addClass("animate")}function clearAnimate(){$("#banner").removeClass("animate")}function setInstant(){$("#navPanel").addClass("instant");$("#navigation").addClass("instant");$("#navWrapper").addClass("instant");$("#contentContainer").addClass("instant");$("#announcement").addClass("instant");$("#nav-filter-container").addClass("instant");$("#navWrapper>.menu_scroll").addClass("instant");$("#navWrapper>.menu_scroll>.scrollUp").addClass("instant");$("#navWrapper>.menu_scroll>.scrollDown").addClass("instant")}function clearInstant(){$("#contentContainer").removeClass("instant");$("#announcement").removeClass("instant");$("#navWrapper").removeClass("instant");$("#navigation").removeClass("instant");$("#navPanel").removeClass("instant");$("#nav-filter-container").removeClass("instant");$("#navWrapper>.menu_scroll").removeClass("instant");$("#navWrapper>.menu_scroll>.scrollUp").removeClass("instant");$("#navWrapper>.menu_scroll>.scrollDown").removeClass("instant");$("#splitter").show()}function Close(){setInstant();$("#navPanel").css("left","-"+sidebarWidth+"px");$("#navWrapper>.menu_scroll").css("left","-"+sidebarWidth+"px");$("#nav-filter-container").css("left","-"+sidebarWidth+"px");$("#navWrapper>.menu_scroll>.scrollUp").css("left","-"+sidebarWidth+"px");$("#navWrapper>.menu_scroll>.scrollDown").css("left","-"+sidebarWidth+"px");$("#navigation").css("left","0px");$("#navWrapper").css("width","0px");$("#contentContainer").css("marginLeft","0px");$("#announcement").css("width","calc(100% - 40px)");$("#splitter").hide();$("#splitter").css("left","-7px");$("#banner").css("marginLeft",0);$("#banner").css("width","100%");$("#banner").css("left",0);setTimeout("clearInstant()",250);rotate="0deg";$("#navigation").css("transform","translateY("+translateY+") rotate(0deg)");$("#navigation").off("click");$("#navigation").on("click",SlideOut);navButtonWidth=0;$("#nav-filter-container").width(sidebarWidth-navButtonWidth);state="closed";positionBanner();setSidebarState("closed")}function Open(){setInstant();$("#navPanel").css("left","0px");$("#navWrapper>.menu_scroll").css("left","0px");$("#nav-filter-container").css("left","0px");$("#navWrapper>.menu_scroll>.scrollUp").css("left","0px");$("#navWrapper>.menu_scroll>.scrollDown").css("left","0px");$("#navigation").css("left",sidebarWidth+1+"px");$("#navWrapper").css("width",sidebarWidth+"px");checkSidebarVisibility()=="open"&&($("#contentContainer").css("marginLeft",sidebarWidth+"px"),$("#announcement").css("width","calc(100% - "+(sidebarWidth+40)+"px)"));$("#splitter").hide();$("#splitter").css("left",sidebarWidth+"px");$("#banner").css("marginLeft",sidebarWidth);$("#banner").css("width","calc(100% - "+(sidebarWidth+$("#splitter").width()/2)+"px)");$("#banner").css("left",$("#splitter").width()/2);setTimeout("clearInstant()",250);rotate="180deg";$("#navigation").css("transform","translateY("+translateY+") rotate(180deg)");$("#navigation").off("click");$("#navigation").on("click",SlideIn);navButtonWidth=deviceFormat=="mobile"||deviceFormat=="tablet"?$("#navigation").width()+parseInt($("#navigation").css("paddingLeft"))+parseInt($("#navigation").css("paddingLeft")):0;$("#nav-filter-container").width(sidebarWidth-navButtonWidth);state="open";positionBanner();setSidebarState("open")}var deviceFormat="desktop",margin,autoState="open",state="open",rotate="0deg",translateY="0px",navButtonWidth=0;$(document).ready(function(){autoState=checkSidebarVisibility();setSidebarVisibility(autoState)});$(window).resize(function(){var n=checkSidebarVisibility();n!=autoState?setSidebarVisibility(n):n=="closed"&&window.innerWidth-46<sidebarWidth&&UpdateSplitWidth(window.innerWidth-46)})