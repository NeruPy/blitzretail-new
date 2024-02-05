window.isMobile=!1;if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){window.isMobile=!0}
window.isSafari=!1;if(/^((?!chrome|android).)*safari/i.test(navigator.userAgent)){window.isSafari=!0}
window.isSafariVersion='';if(window.isSafari){var version=(navigator.appVersion).match(/Version\/(\d+)\.(\d+)\.?(\d+)? Safari/);if(version!==null){window.isSafariVersion=[parseInt(version[1],10),parseInt(version[2],10),parseInt(version[3]||0,10)]}}
window.isIE=!!document.documentMode;function t_throttle(fn,threshhold,scope){var last;var deferTimer;threshhold||(threshhold=250);return function(){var context=scope||this;var now=+new Date();var args=arguments;if(last&&now<last+threshhold){clearTimeout(deferTimer);deferTimer=setTimeout(function(){last=now;fn.apply(context,args)},threshhold)}else{last=now;fn.apply(context,args)}}}
function t602_init(recid){var rec=document.getElementById('rec'+recid);if(!rec)return;var indicator=rec.querySelector('.t602__indicator');if(!indicator)return;window.addEventListener('scroll',t_throttle(function(){var documentHeight=document.body.clientHeight;var windowScrollTop=document.documentElement.scrollTop;var windowHeight=window.innerHeight;var scrollPercent=(windowScrollTop/(documentHeight-windowHeight))*100;indicator.style.width=scrollPercent+'%'},100))}
function t454_setLogoPadding(recid){var rec=document.getElementById('rec'+recid);if(!rec||window.innerWidth<=980)return;var menu=rec.querySelector('.t454');var logo=menu?menu.querySelector('.t454__logowrapper'):null;var leftWrapper=menu?menu.querySelector('.t454__leftwrapper'):null;var rightWrapper=menu?menu.querySelector('.t454__rightwrapper'):null;var logoWidth=logo?logo.offsetWidth:0;var updateWidth=(logoWidth/2)+50;if(leftWrapper)leftWrapper.style.paddingRight=updateWidth+'px';if(rightWrapper)rightWrapper.style.paddingLeft=updateWidth+'px'}
function t450_showMenu(recid){var rec=document.getElementById('rec'+recid);if(!rec)return;var menu=rec.querySelector('.t450');var overlay=rec.querySelector('.t450__overlay');var menuElements=rec.querySelectorAll('.t450__overlay, .t450__close, a[href*="#"]');if(typeof t_triggerEvent==='function')t_triggerEvent(document.body,'popupShowed');document.body.classList.add('t450__body_menushowed');if(menu)menu.classList.add('t450__menu_show');if(overlay)overlay.classList.add('t450__menu_show');if(menu){menu.addEventListener('clickedAnchorInTooltipMenu',function(){t450_closeMenu(menu,overlay)})}
Array.prototype.forEach.call(menuElements,function(element){element.addEventListener('click',function(){if(element.closest('.tooltipstered, .t-menusub__target-link, .t794__tm-link, .t966__tm-link, .t978__tm-link'))return;if(element.href&&(element.href.substring(0,7)==='#price:'||element.href.substring(0,9)==='#submenu:'))return;t450_closeMenu(menu,overlay)})});document.addEventListener('keydown',function(e){if(e.keyCode===27){document.body.classList.remove('t390__body_popupshowed');var popups=document.querySelectorAll('.t390');Array.prototype.forEach.call(popups,function(popup){popup.classList.remove('t390__popup_show')})}});rec.addEventListener('click',function(e){if(e.target.closest('.t966__tm-link, .t978__tm-link')){t450_checkSize(recid);if(e.target.closest('.t978__tm-link')){setTimeout(function(){var hookLink=e.target.closest('.t978__tm-link');var menuBlock=hookLink.nextElementSibling;var submenuLinks=menuBlock?menuBlock.querySelectorAll('.t978__menu-link'):[];Array.prototype.forEach.call(submenuLinks,function(link){link.addEventListener('click',function(){t450_checkSize(recid)})})},300)}}});menu.addEventListener('menuOverflow',function(){t450_checkSize(recid)});t450_highlight(recid)}
function t450_closeMenu(menu,overlay){if(typeof t_triggerEvent==='function')t_triggerEvent(document.body,'popupHidden');document.body.classList.remove('t450__body_menushowed');if(menu)menu.classList.remove('t450__menu_show');if(overlay)overlay.classList.remove('t450__menu_show')}
function t450_checkSize(recid){var rec=document.getElementById('rec'+recid);var menu=rec?rec.querySelector('.t450'):null;if(!menu)return;var container=menu.querySelector('.t450__container');var topContainer=menu.querySelector('.t450__top');var rightContainer=menu.querySelector('.t450__rightside');setTimeout(function(){var topContainerHeight=topContainer?topContainer.offsetHeight:0;var rightContainerHeight=rightContainer?rightContainer.offsetHeight:0;var containerPaddingTop=container?window.getComputedStyle(container).paddingTop:'0';var containerPaddingBottom=container?window.getComputedStyle(container).paddingBottom:'0';containerPaddingTop=parseInt(containerPaddingTop,10);containerPaddingBottom=parseInt(containerPaddingBottom,10);if(topContainerHeight+rightContainerHeight+containerPaddingTop+containerPaddingBottom>document.documentElement.clientHeight){menu.classList.add('t450__overflowed')}else{menu.classList.remove('t450__overflowed')}})}
function t450_appearMenu(recid){var rec=document.getElementById('rec'+recid);var burger=rec?rec.querySelector('.t450__menu__content'):null;if(!burger)return;var burgerAppearOffset=burger?burger.getAttribute('data-appearoffset'):'';var burgerHideOffset=burger?burger.getAttribute('data-hideoffset'):'';if(burgerAppearOffset){burgerAppearOffset=t450_appearMenuParseNumber(burgerAppearOffset);if(window.pageYOffset>=burgerAppearOffset){if(burger.classList.contains('t450__beforeready')){burger.classList.remove('t450__beforeready')}}else{burger.classList.add('t450__beforeready')}}
if(burgerHideOffset){burgerHideOffset=t450_appearMenuParseNumber(burgerHideOffset);var scrollHeight=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight);if(window.pageYOffset+window.innerHeight>=scrollHeight-burgerHideOffset){if(!burger.classList.contains('t450__beforeready')){burger.classList.add('t450__beforeready')}}else if(burgerAppearOffset){if(window.pageYOffset>=burgerAppearOffset){burger.classList.remove('t450__beforeready')}}else{burger.classList.remove('t450__beforeready')}}}
function t450_appearMenuParseNumber(string){if(string.indexOf('vh')>-1){string=Math.floor((window.innerHeight*(parseInt(string)/100)))}
return parseInt(string,10)}
function t450_initMenu(recid){var rec=document.getElementById('rec'+recid);var menu=rec?rec.querySelector('.t450'):null;var overlay=rec?rec.querySelector('.t450__overlay'):null;var burger=rec?rec.querySelector('.t450__burger_container'):null;var menuLinks=rec?rec.querySelectorAll('.t-menu__link-item.t450__link-item_submenu'):[];var hook=menu?menu.getAttribute('data-tooltip-hook'):'';if(hook){document.addEventListener('click',function(e){if(e.target.closest('a[href="'+hook+'"]')){e.preventDefault();t450_closeMenu(menu,overlay);t450_showMenu(recid);t450_checkSize(recid)}})}
if(burger){burger.addEventListener('click',function(){t450_closeMenu(menu,overlay);t450_showMenu(recid);t450_checkSize(recid)})}
window.addEventListener('resize',function(){t450_checkSize(recid)});if(!window.isMobile)return;Array.prototype.forEach.call(menuLinks,function(link){link.addEventListener('click',function(){t450_checkSize(recid)})})}
function t450_highlight(recid){var url=window.location.href;var pathname=window.location.pathname;var hash=window.location.hash;if(url.substr(url.length-1)==='/'){url=url.slice(0,-1)}
if(pathname.substr(pathname.length-1)==='/'){pathname=pathname.slice(0,-1)}
if(pathname.charAt(0)==='/'){pathname=pathname.slice(1)}
if(pathname===''){pathname='/'}
var shouldBeActiveElements=document.querySelectorAll('.t450__menu a[href=\''+url+'\'], '+'.t450__menu a[href=\''+url+'/\'], '+'.t450__menu a[href=\''+pathname+'\'], '+'.t450__menu a[href=\'/'+pathname+'\'], '+'.t450__menu a[href=\''+pathname+'/\'], '+'.t450__menu a[href=\'/'+pathname+'/\']'+(hash?', .t450__menu a[href=\''+hash+'\']':''));var rec=document.getElementById('rec'+recid);var menuLinks=rec?rec.querySelectorAll('.t450__menu a'):[];Array.prototype.forEach.call(menuLinks,function(link){if(link.getAttribute('data-highlighted-by-user')!=='y')link.classList.remove('t-active')});Array.prototype.forEach.call(shouldBeActiveElements,function(link){link.classList.add('t-active')})}
function t690_onSuccess(form){t_onFuncLoad('t_forms__onSuccess',function(){t_forms__onSuccess(form)})}
function t796_init(recId){var rec=document.getElementById('rec'+recId);if(!rec)return;var container=rec.querySelector('.t796');if(!container)return;var windowWidth=window.innerWidth;var screenMin=rec.getAttribute('data-screen-min');var screenMax=rec.getAttribute('data-screen-max');if(screenMin&&windowWidth<parseInt(screenMin,10))return!1;if(screenMax&&windowWidth>parseInt(screenMax,10))return!1;var shapeBorder=rec.querySelector('.t796__shape-border');var shapeRecId=container.getAttribute('data-shape-rec-ids');if(shapeRecId){shapeRecId=shapeRecId.split(',');for(var i=0;i<shapeRecId.length;i++){var shapeId=shapeRecId[i];var currentRec=document.querySelector('#rec'+shapeId);var currentShape=shapeBorder.cloneNode(!0);t796_setColor(rec,currentShape);t796_addDivider(currentRec,currentShape)}}else{var excludesBlocks=[215,316,390,651,702,706,708,750,756,766,825,862,868,943,945,674];var excludes='';for(var i=0;i<excludesBlocks.length;i++){excludes+=':not([data-record-type="'+excludesBlocks[i]+'"])'}
if(excludes.slice(-1)===','){excludes=excludes.slice(0,-1)}
var recs=[];if(shapeBorder.classList.contains('t796__shape-border_top')||shapeBorder.classList.contains('t796__shape-border_top-flip')){recs=t796__nextAll(rec,excludes)}
if(shapeBorder.classList.contains('t796__shape-border_bottom')||shapeBorder.classList.contains('t796__shape-border_bottom-flip')){recs=t796__prevAll(rec,excludes)}
if(recs.length!==0){var currentShape=shapeBorder.cloneNode(!0);t796_setColor(rec,currentShape);t796_addDivider(recs[0],currentShape)}}}
function t796_setColor(rec,shape){if(shape.getAttribute('data-fill-color'))return;var nearestBlock;if(shape.classList.contains('t796__shape-border_bottom')||shape.classList.contains('t796__shape-border_bottom-flip')){var nextBlock=rec.nextElementSibling;if(nextBlock){nearestBlock=nextBlock.matches('.r')?nextBlock:!1}}else{var prevBlock=rec.previousElementSibling;if(prevBlock){nearestBlock=prevBlock.matches('.r')?prevBlock:!1}}
if(!nearestBlock)return;var fillColor=nearestBlock.getAttribute('data-bg-color');if(!fillColor)return;var svg=shape.querySelector('.t796__svg');if(svg)svg.style.fill=fillColor}
function t796_addDivider(rec,shape){if(!rec)return;rec.setAttribute('data-animationappear','off');rec.classList.remove('r_hidden');var cover=rec.querySelector('.t-cover');var zeroBlock=rec.querySelector('.t396');if(cover||zeroBlock){if(cover){var showLayers=cover.querySelectorAll('.t557__snow-layer');if(showLayers.length>0)shape.style.zIndex=1;var coverFilter=cover.querySelector('.t-cover__filter');if(coverFilter)coverFilter.insertAdjacentElement('afterend',shape)}
if(zeroBlock){zeroBlock.insertAdjacentElement('afterend',shape);rec.style.position='relative';var zeroFilter=zeroBlock.querySelector('.t396__filter');if(zeroFilter){var zIndex=1;var zeroArtboard=zeroBlock.querySelector('.t396__artboard');var isVisible=getComputedStyle(zeroArtboard,null).overflow==='visible';if(!isVisible)zIndex=99;shape.style.zIndex=zIndex}}
shape.style.display='block'}else{var wrapper=rec;var recordType=parseInt(rec.getAttribute('data-record-type'));if(!wrapper)return!0;wrapper.appendChild(shape);wrapper.style.position='relative';var excludesBlocks=[125,331,554,746,754,776,778,786,858,896,897,924,915,943,945,951,1004,1025];if(excludesBlocks.indexOf(recordType)===-1){var notZIndexBlocks=[983];var firstDiv=wrapper.querySelector('div');firstDiv.style.position='relative';firstDiv.classList.add('t796_cont-near-shape-divider');if(notZIndexBlocks.indexOf(recordType)!==-1){firstDiv.style.zIndex=0}else{firstDiv.style.zIndex='1'}}
var blocks=[195,246,279,675,694,734,823,938];if(blocks.indexOf(recordType)!==-1){shape.style.zIndex=1}
shape.style.display='block'}}
function t796__nextAll(element,selector){var nextElements=[];var nextElement=element;while(nextElement.nextElementSibling){nextElement=nextElement.nextElementSibling;if(nextElement.id==='t-footer'){var footerElements=nextElement.querySelectorAll('.r');if(footerElements.length!==0){nextElement=footerElements[0];if(nextElement.matches(selector)){nextElements.push(nextElement)}
nextElements=nextElements.concat(t796__nextAll(nextElement,selector))}}else if(nextElement.matches(selector)){nextElements.push(nextElement)}}
return nextElements}
function t796__prevAll(element,selector){var prevElements=[];var prevElement=element;while(prevElement.previousElementSibling){prevElement=prevElement.previousElementSibling;if(prevElement.id==='t-header'){var headerElements=prevElement.querySelectorAll('.r');if(headerElements.length!==0){prevElement=headerElements[headerElements.length-1];if(prevElement.matches(selector)){prevElements.push(prevElement)}
prevElements=prevElements.concat(t796__prevAll(prevElement,selector))}}else if(prevElement.matches(selector)){prevElements.push(prevElement)}}
return prevElements}
if(!Element.prototype.matches){Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.msMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.webkitMatchesSelector||Element.prototype.oMatchesSelector}
function t491_init(recId){t_onFuncLoad('t_card__moveClickOnCard',function(){t_card__moveClickOnCard(recId)});t_onFuncLoad('t_card__addFocusOnTab',function(){t_card__addFocusOnTab(recId)})}
function t142_checkSize(recId){var rec=document.getElementById('rec'+recId);if(!rec)return;var button=rec.querySelector('.t142__submit');if(!button)return;var buttonStyle=getComputedStyle(button,null);var buttonPaddingTop=parseInt(buttonStyle.paddingTop)||0;var buttonPaddingBottom=parseInt(buttonStyle.paddingBottom)||0;var buttonHeight=button.clientHeight-(buttonPaddingTop+buttonPaddingBottom)+5;var textHeight=button.scrollHeight;if(buttonHeight<textHeight){button.classList.add('t142__submit-overflowed')}}
function t604_init(recid){var rec=document.getElementById('rec'+recid);if(!rec)return;t604_imageHeight(recid);t604_arrowWidth(recid);t604_show(recid);t604_hide(recid);window.addEventListener('resize',t_throttle(function(){t_onFuncLoad('t_slds_updateSlider',function(){t_slds_updateSlider(recid)});t604_arrowWidth(recid)}));if(typeof jQuery!=='undefined'){$(rec).find('.t604').bind('displayChanged',function(){t_onFuncLoad('t_slds_updateSlider',function(){t_slds_updateSlider(recid)});t604_arrowWidth(recid)})}else{var currentBlock=rec.querySelector('.t604');if(currentBlock){currentBlock.addEventListener('displayChanged',function(){t_onFuncLoad('t_slds_updateSlider',function(){t_slds_updateSlider(recid)});t604_arrowWidth(recid)})}}}
function t604_show(recid){var rec=document.getElementById('rec'+recid);var playBtns=rec.querySelectorAll('.t604__play');Array.prototype.forEach.call(playBtns,function(play){play.addEventListener('click',function(){var parent=play.parentElement;var videoBg=parent?parent.querySelector('.t-slds__bgimg'):null;if(videoBg)videoBg.style.opacity='0';var sliderVideo=play.getAttribute('data-slider-video-type');var url=play.getAttribute('data-slider-video-url');var nextEl=play.nextElementSibling;if(nextEl)nextEl.style.zIndex='3';var iframe;switch(sliderVideo){case 'youtube':iframe=document.createElement('iframe');iframe.classList.add('t604__iframe');iframe.width='100%';iframe.height='100%';iframe.src='https://www.youtube.com/embed/'+url+'?autoplay=1&enablejsapi=1';iframe.frameBorder='0';iframe.setAttribute('webkitallowfullscreen','');iframe.setAttribute('mozallowfullscreen','');iframe.setAttribute('allowfullscreen','');iframe.setAttribute('allow','autoplay');if(nextEl)nextEl.innerHTML='';if(nextEl)nextEl.appendChild(iframe);break;case 'vimeo':var idMatch=/vimeo[^/]*\/(\d+)\/?(\w*)\/?/i.exec(url);var id=idMatch?idMatch[1]:null;var hash=idMatch?'?h='+idMatch[2]:null;iframe=document.createElement('iframe');iframe.classList.add('t604__iframe');iframe.width='100%';iframe.height='100%';iframe.src='https://player.vimeo.com/video/'+id+hash+'?autoplay=1&amp;api=1';iframe.frameBorder='0';iframe.setAttribute('webkitallowfullscreen','');iframe.setAttribute('mozallowfullscreen','');iframe.setAttribute('allowfullscreen','');if(nextEl)nextEl.innerHTML='';if(nextEl)nextEl.appendChild(iframe);break}})})}
function t604_hide(recid){var rec=document.getElementById('rec'+recid);var frames=rec.querySelectorAll('.t604__frame');rec.addEventListener('updateSlider',function(){Array.prototype.forEach.call(frames,function(frame){frame.innerHTML='';frame.style.zIndex=''})})}
function t604_imageHeight(recid){var rec=document.getElementById('rec'+recid);var images=rec.querySelectorAll('.t604__separator');Array.prototype.forEach.call(images,function(image){var imgHeight=image.getAttribute('data-slider-image-height');var imgWidth=image.getAttribute('data-slider-image-width');var imgRatio=imgHeight/imgWidth;var imgPadding=imgRatio*100;image.style.paddingBottom=imgPadding+'%'})}
function t604_arrowWidth(recid){var rec=document.getElementById('rec'+recid);if(!rec)return;var arrows=rec.querySelectorAll('.t-slds__arrow_wrapper');var slide=rec.querySelector('.t-slds__wrapper');var slideWidth=slide?slide.offsetWidth:0;if(slide&&slideWidth===0){t_onFuncLoad('t_slds_SliderWidth',function(){setTimeout(function(){slideWidth=slide.offsetWidth;t604__updateArrowWidth(slideWidth,arrows)},300)})}else{t604__updateArrowWidth(slideWidth,arrows)}}
function t604__updateArrowWidth(slideWidth,arrows){var calcArrowWidth=window.innerWidth-slideWidth;var arrowWidth=window.innerWidth>960?(calcArrowWidth/2)+'px':'';if(arrowWidth!=='0px'&&arrowWidth!==''){Array.prototype.forEach.call(arrows,function(arrow){arrow.style.width=arrowWidth})}}
function t604__UpdateSliderArrowsHeight(recid){var sliderRec=document.getElementById('rec'+recid);if(!sliderRec)return;var activeItem=sliderRec.querySelector('.t-slds__item_active');if(activeItem){var separator=activeItem.querySelector('.t604__separator');var isMobile=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);var offsetForVideoBtns=0;var isVideo=activeItem.querySelector('[data-slider-video-type]');if(isVideo&&isMobile)offsetForVideoBtns=40;var itemPaddingTop=parseInt(getComputedStyle(activeItem).paddingTop)||0;var itemPaddingBottom=parseInt(getComputedStyle(activeItem).paddingBottom)||0;var height=(itemPaddingTop+itemPaddingBottom)-offsetForVideoBtns;if(separator&&separator.hasAttribute('data-slider-image-height')&&activeItem.clientHeight===0){height=parseInt(separator.getAttribute('data-slider-image-height'))-height}else{height=activeItem.clientHeight-height}}
var arrowWrappers=sliderRec.querySelectorAll('.t-slds__arrow_wrapper');if(height&&arrowWrappers.length>0){Array.prototype.forEach.call(arrowWrappers,function(arrowWrapper){arrowWrapper.style.height=height+'px';var arrow=arrowWrapper.querySelector('.t-slds__arrow');if(arrow)arrow.style.marginTop=offsetForVideoBtns/2+'px'})}}
function t410_init(recid){var rec=document.getElementById('rec'+recid);if(!rec)return;var wrapper=rec?rec.querySelector('.t410__wrapper'):null;if(!wrapper)return!1;var sliderOrientation=wrapper.getAttribute('data-beforeafter-orientation');var sliderStartPosition=wrapper.getAttribute('data-beforeafter-start');var firstImgURL=wrapper.getAttribute('data-beforeafter-imgurl-first');var firstImgDescr=wrapper.getAttribute('data-beforeafter-imgdescr-first');var firstImgAlt=wrapper.getAttribute('data-beforeafter-imgalt-first');var secondImgURL=wrapper.getAttribute('data-beforeafter-imgurl-second');var secondImgDescr=wrapper.getAttribute('data-beforeafter-imgdescr-second');var secondImgAlt=wrapper.getAttribute('data-beforeafter-imgalt-second');t410_onObjLoad('beforeafter',function(){new beforeafter.BASlider('#t410-beforeafter__'+recid,[{src:firstImgURL,label:firstImgDescr,alt:firstImgAlt,},{src:secondImgURL,label:secondImgDescr,alt:secondImgAlt,},],{mode:sliderOrientation?sliderOrientation:'horizontal',startingPosition:sliderStartPosition?sliderStartPosition+'%':'50%',})});var block=rec.querySelector('.t410');if(typeof jQuery!=='undefined'){$(block).on('displayChanged',function(){window.beforeafter.sliders.forEach(function(obj){if(obj.options.wrapper.getAttribute('id')==='t410-beforeafter__'+recid){obj.options.setWrapperDimensions()}})})}else if(block){block.addEventListener('displayChanged',function(){window.beforeafter.sliders.forEach(function(obj){if(obj.options.wrapper.getAttribute('id')==='t410-beforeafter__'+recid){obj.options.setWrapperDimensions()}})})}}
function t410_onObjLoad(objName,okFunc,time){if(typeof window[objName]==='object'){okFunc()}else{var timerId=setTimeout(function checkFuncExist(){if(typeof window[objName]==='object'){okFunc();return}
timerId=setTimeout(checkFuncExist,time||100)})}}
function t678_onSuccess(form){t_onFuncLoad('t_forms__onSuccess',function(){t_forms__onSuccess(form)})}
function t594_init(recId){t_onFuncLoad('t_card__moveClickOnCard',function(){t_card__moveClickOnCard(recId)});t_onFuncLoad('t_card__addFocusOnTab',function(){t_card__addFocusOnTab(recId)})}
window.requestAnimationFrame=(function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(callback){window.setTimeout(callback,1000/60)}})();function t270_scroll(hash,offset){if(!hash)return;t270_checkLoad(hash,offset);if(hash.indexOf('#!/tproduct/')!==-1||hash.indexOf('#!/tab/')!==-1){return!0}
var isHistoryChangeAllowed=window.location.hash!==hash;var wrapperBlock=document.querySelector('.t270');var dontChangeHistory=wrapperBlock?Boolean(wrapperBlock.getAttribute('data-history-disabled')):!1;t270_scrollToEl(hash,offset);if(!dontChangeHistory&&isHistoryChangeAllowed){if(history.pushState){history.pushState(null,null,hash)}else{window.location.hash=hash}
isHistoryChangeAllowed=!1}
return!0}
function t270_checkLoad(hash,offset){if(window.t270_loadChecked)return;var sliderWrappers=document.body.querySelectorAll('.t-slds__items-wrapper');if(!sliderWrappers.length)return;var lastWrapper=sliderWrappers[sliderWrappers.length-1];var sliderImgs=lastWrapper?lastWrapper.querySelectorAll('.t-slds__bgimg'):[];var lastImg=sliderImgs[sliderImgs.length-1];var imageUrl=lastImg?window.getComputedStyle(lastImg).backgroundImage:'';imageUrl=imageUrl.substring(5,imageUrl.length-2);var preloaderImg=document.createElement('img');preloaderImg.src=imageUrl?imageUrl:'';preloaderImg.addEventListener('load',function(){t270_scroll(hash,offset);window.t270_loadChecked=!0})}
function t270_scrollToEl(hash,offset){if(document.body.getAttribute('data-scroll'))return;var scrollTargetY=t270_getTarget(hash,offset);if(isNaN(scrollTargetY))return;var body=document.body;if('scrollBehavior' in document.documentElement.style){body.setAttribute('data-scroll','true');window.scrollTo({left:0,top:scrollTargetY,behavior:'smooth'});setTimeout(function(){body.removeAttribute('data-scroll')},500)}else{var html=document.querySelector('html');var documentHeight=Math.max(body.scrollHeight,body.offsetHeight,body.clientHeight,html.offsetHeight);var scrollY=window.scrollY||document.documentElement.scrollTop;var speed=2000;var time=Math.max(.1,Math.min(Math.abs(scrollY-scrollTargetY)/speed,.8));var currentTime=0;function t270_easeInQuad(pos){return Math.pow(pos,2)}
function t270_animationScroll(){currentTime+=1/60;var newDocumentHeight=Math.max(body.scrollHeight,body.offsetHeight,body.clientHeight,html.offsetHeight);if(documentHeight<newDocumentHeight){documentHeight=newDocumentHeight;scrollTargetY=t270_getTarget(hash,offset);scrollY=window.scrollY||document.documentElement.scrollTop;time=Math.max(.1,Math.min(Math.abs(scrollY-scrollTargetY)/speed,.8))}
var difference=currentTime/time;var animation=t270_easeInQuad(difference);if(difference<1){requestAnimationFrame(t270_animationScroll);window.scrollTo(0,scrollY+((scrollTargetY-scrollY)*animation))}else{body.removeAttribute('data-scroll');body.removeAttribute('data-scrollable');window.scrollTo(0,scrollTargetY)}}
body.setAttribute('data-scroll','true');body.setAttribute('data-scrollable','true');t270_animationScroll()}}
function t270_getTarget(hash,offset){var target;try{if(hash.substring(0,1)==='#'){target=document.getElementById(hash.substring(1))}else{target=document.querySelector(hash)}}catch(event){console.log('Exception t270: '+event.message);return}
if(!target){target=document.querySelector('a[name="'+hash.substr(1)+'"]');if(!target)return}
target=parseInt((target.getBoundingClientRect().top+window.pageYOffset)-offset,10);target=Math.max(target,0);return target}
function t890_init(recId,offset){var rec=document.getElementById('rec'+recId);if(!rec)return;var container=rec.querySelector('.t890');if(!container)return;var windowOffset=offset||window.innerHeight;rec.setAttribute('data-animationappear','off');rec.style.opacity=1;window.addEventListener('scroll',t_throttle(function(){if(window.pageYOffset>windowOffset){container.style.display='block'}else{t890__fadeOut(container)}},200));var isSafari=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);rec.addEventListener('click',function(e){if(e.target.closest('.t890__arrow')){isSafari?t890__animateScrollPolyfill(0):t890__scrollToTop()}})}
function t890__fadeOut(el){if(el.style.display==='none')return;var opacity=1;var timer=setInterval(function(){el.style.opacity=opacity;opacity-=0.1;if(opacity<=0.1){clearInterval(timer);el.style.display='none';el.style.opacity=null}},20)}
function t890__scrollToTop(){if(window.isIE){window.scrollTo(0,0)}else{window.scrollTo({left:0,top:0,behavior:'smooth'})}}
function t890__animateScrollPolyfill(target){var documentHeight=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight);var bottomViewportPoint=documentHeight-document.documentElement.clientHeight;if(target>bottomViewportPoint)target=bottomViewportPoint;if(target===window.pageYOffset)return!1;var currentPosition=window.pageYOffset;var step=(target-currentPosition)/30;var difference=window.pageYOffset;var timerID=setInterval(function(){difference+=step;window.scrollTo(0,difference);document.body.setAttribute('data-scrollable','true');if((target-currentPosition<0&&window.pageYOffset<=target)||(target-currentPosition>0&&window.pageYOffset>=target)){clearInterval(timerID);document.body.removeAttribute('data-scrollable')}},10)}