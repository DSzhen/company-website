(function(t){function e(e){for(var a,o,r=e[0],s=e[1],u=e[2],f=0,p=[];f<r.length;f++)o=r[f],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);l&&l(e);while(p.length)p.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],a=!0,r=1;r<n.length;r++){var s=n[r];0!==i[s]&&(a=!1)}a&&(c.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},i={app:0},c=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],s=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var l=s;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("8b5d"),i=n.n(a);i.a},"0ee5":function(t,e,n){"use strict";var a=n("3133"),i=n.n(a);i.a},"116d":function(t,e,n){"use strict";var a=n("2276"),i=n.n(a);i.a},"12a5":function(t,e,n){"use strict";var a=n("7778"),i=n.n(a);i.a},"12df":function(t,e,n){t.exports=n.p+"img/tb.ce9609cf.png"},"18b8":function(t,e,n){t.exports=n.p+"img/hc1.951c5c63.png"},2276:function(t,e,n){},"2cd8":function(t,e,n){},3133:function(t,e,n){},"33c5":function(t,e,n){t.exports=n.p+"img/sydt.489896fb.png"},"356d":function(t,e,n){t.exports=n.p+"img/dt.7dabe96f.jpg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Container")],1)},c=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-container",[n("el-header",[n("div",{staticClass:"img-div"},[n("img",{attrs:{src:t.img.gssb,alt:""}})]),n("el-menu",{attrs:{"default-active":t.activeIndex,mode:"horizontal"},on:{select:t.handleSelect}},[n("el-menu-item",{attrs:{index:"Home"}},[t._v("首页")]),n("el-menu-item",{attrs:{index:"ExhibitionOfWorks"}},[t._v("作品展示")]),n("el-menu-item",{attrs:{index:"ContactUs"}},[t._v("联系我们")])],1)],1),n("el-main",[n("router-view")],1)],1)},r=[],s=(n("b0c0"),{name:"Container",data:function(){return{img:{gssb:n("e32f")},activeIndex:"Home"}},watch:{$route:function(t,e){console.log(e),"FangKuaiWangZheDetail"===t.name||"GuoGuoYouShiJieDetail"===t.name?this.activeIndex="ExhibitionOfWorks":this.activeIndex=t.name||"Home"}},mounted:function(){"FangKuaiWangZheDetail"===this.$route.name||"GuoGuoYouShiJieDetail"===this.$route.name?this.activeIndex="ExhibitionOfWorks":this.activeIndex=this.$route.name||"Home"},methods:{handleSelect:function(t){var e={name:t,params:{}};this.$router.push(e)}}}),u=s,l=(n("6597"),n("0c7c")),f=Object(l["a"])(u,o,r,!1,null,null,null),p=f.exports,d={name:"App",components:{Container:p}},m=d,b=(n("034f"),Object(l["a"])(m,i,c,!1,null,null,null)),A=b.exports,v=n("8c4f"),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Home"},[n("el-carousel",{attrs:{type:"card",height:"350px","indicator-position":"outside"}},t._l(t.imgList,(function(t,e){return n("el-carousel-item",{key:e},[n("img",{attrs:{src:t}})])})),1),t._m(0)],1)},h=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"brief-introduction"},[n("p",{staticClass:"first"},[t._v("公司简介")]),n("p",{staticClass:"second"},[t._v("北京万象互娱网络科技有限公司创立于2020年8月19日,主要从事休闲游戏产品开发与运营。目前运营产品包括方块王者和果果游世界二款>休闲小游戏产品。")])])}],w={name:"Home",data:function(){return{imgList:[n("8e7b"),n("ce68"),n("f344"),n("6f61"),n("9a39"),n("93a7"),n("9fc2"),n("356d"),n("c5a1"),n("9c6e"),n("a51c"),n("740c")]}}},x=w,k=(n("116d"),Object(l["a"])(x,g,h,!1,null,null,null)),P=k.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ContactUs"},[n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix"},[n("span",[t._v("北京万象互娱网络科技有限公司")]),n("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"}})],1),n("div",{staticClass:"item qq"},[t._v("QQ：546989691")]),n("div",{staticClass:"item"},[t._v("微信：yangzhen546989691")]),n("div",{staticClass:"item"},[t._v("邮箱：546989691@qq.com")])])],1)},y=[],D={},C=D,M=(n("12a5"),Object(l["a"])(C,O,y,!1,null,null,null)),W=M.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ExhibitionOfWorks"},[n("el-row",t._l(t.cardList,(function(e,a){return n("el-col",{key:a,attrs:{span:8,offset:a>0?2:0}},[n("el-card",{staticClass:"el-card",attrs:{shadow:"always","body-style":{padding:"0px"}}},[n("img",{staticClass:"image",attrs:{src:e.imgUrl},on:{click:function(n){return t.showDetail(e)}}}),n("div",{staticStyle:{padding:"14px"},on:{click:function(n){return t.showDetail(e)}}},[n("span",{staticClass:"name"},[t._v(t._s(e.name))]),n("p",{staticClass:"brief-introduction"},[t._v("简介："+t._s(e.briefIntroduction))]),n("div",{staticClass:"time"},[n("p",[t._v("上线时间："+t._s(e.date))]),n("p",[t._v("了解更多内容...")])])])])],1)})),1)],1)},X=[],S={name:"ExhibitionOfWorks",data:function(){return{cardList:[{imgUrl:n("356d"),name:"方块王者",briefIntroduction:'"方块王者"是一款休闲益智的游戏，玩家通过玩俄罗斯方块实现积攒金币，兑换自己喜欢的物品和红包。挑战不同的玩法【单人赛】【匹配赛】【排位赛】【活动赛】，挑战更厉害的玩家，成为俄罗斯方块大神！',date:"2020-10-01"},{imgUrl:n("8e7b"),name:"果果游世界",briefIntroduction:'"果果游世界"水果不同品种变换，环游虚拟世界，解锁世界地图升级拿奖励。更可以合成水果升级赚钱，让你在玩游戏的过程中体验赚钱的乐趣！',date:"2020-10-01"}]}},methods:{showDetail:function(t){switch(console.log(t),t.name){case"方块王者":this.$router.push({name:"FangKuaiWangZheDetail"});break;case"果果游世界":this.$router.push({name:"GuoGuoYouShiJieDetail"});break;default:break}}}},G=S,E=(n("9745"),Object(l["a"])(G,j,X,!1,null,null,null)),Z=E.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"FangKuaiWangZheDetail"},[n("el-card",{staticClass:"box-card-title"},[n("img",{attrs:{src:t.img.fangkuai,alt:""}}),n("div",[n("p",[n("span",{staticClass:"jiacu"},[t._v("apk下载：")]),n("button",{attrs:{type:"button"},on:{click:function(e){return t.download()}}},[t._v("立即下载")]),n("span",{staticClass:"privacy-policy",on:{click:function(e){return t.openWin()}}},[t._v("隐私政策")])]),n("p",[n("span",{staticClass:"jiacu"},[t._v("简介：")]),n("span",[t._v('"方块王者"是一款休闲益智的游戏，玩家通过玩俄罗斯方块实现积攒金币，兑换自己喜欢的物品和红包。挑战不同的玩法【单人赛】【匹配赛】【排位赛】【活动赛】，挑战更厉害的玩家，成为俄罗斯方块大神！')])]),n("p",[n("span",{staticClass:"jiacu"},[t._v("预计上架：2020-10-01")])])])]),n("el-card",{staticClass:"brief-introduction"},t._l(t.imgList,(function(t,e){return n("img",{key:e,attrs:{src:t.imgUrl,alt:""}})})),0)],1)},L=[],K=(n("c975"),n("fb6a"),{name:"FangKuaiWangZheDetail",data:function(){return{img:{fangkuai:n("875e")},imgList:[{imgUrl:n("356d")},{imgUrl:n("c5a1")},{imgUrl:n("9c6e")},{imgUrl:n("a51c")},{imgUrl:n("9fc2")}]}},methods:{download:function(){window.location.href="https://a.app.qq.com/o/simple.jsp?pkgname=com.yilian.fangkaiwangzhem"},openWin:function(){var t=location.href,e=t.indexOf("#");e>-1&&(t=t.slice(0,e)),t+="#/FangKuaiPrivacyPolicy",window.open(t)}}}),Q=K,H=(n("8543"),Object(l["a"])(Q,_,L,!1,null,null,null)),J=H.exports,B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"GuoGuoYouShiJieDetail"},[n("el-card",{staticClass:"box-card-title"},[n("img",{attrs:{src:t.img.guoguo,alt:""}}),n("div",[n("p",[n("span",{staticClass:"jiacu"},[t._v("apk下载：")]),n("button",{attrs:{type:"button"},on:{click:function(e){return t.download()}}},[t._v("立即下载")])]),n("p",[n("span",{staticClass:"jiacu"},[t._v("简介：")]),n("span",[t._v('"果果游世界"水果不同品种变换，环游虚拟世界，解锁世界地图升级拿奖励。更可以合成水果升级赚钱，让你在玩游戏的过程中体验赚钱的乐趣！')])]),n("p",[n("span",{staticClass:"jiacu"},[t._v("预计上架：2020-10-01")])])])]),n("el-card",{staticClass:"brief-introduction"},t._l(t.imgList,(function(t,e){return n("img",{key:e,attrs:{src:t.imgUrl,alt:""}})})),0)],1)},F=[],z={name:"GuoGuoYouShiJieDetail",data:function(){return{img:{guoguo:n("12df")},imgList:[{imgUrl:n("f344")},{imgUrl:n("8e7b")},{imgUrl:n("ce68")},{imgUrl:n("18b8")},{imgUrl:n("33c5")},{imgUrl:n("740c")},{imgUrl:n("9a39")},{imgUrl:n("6f61")}]}},methods:{download:function(){window.location.href="http://download.haveneed.cn/fkwz/com.yilian.fangkaiwangzhem.apk"}}},I=z,R=(n("0ee5"),Object(l["a"])(I,B,F,!1,null,null,null)),N=R.exports,V=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},U=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{padding:"0 25%"}},[n("span",[t._v(" 方块王者隐私保护指引"),n("br"),t._v(" 更新日期：【2020】年【10】月【1日】"),n("br"),t._v(" 生效日期：【2020】年【10】月【1日】"),n("br"),t._v(" 我们重视用户的隐私。您在使用我们的服务时，我们可能会收集和使用您的相关信息。我们希望通过本《隐私政策》向您说明，在使用我们的服务时，我们如何收集、使用、储存和分享这些信息，以及我们为您提供的访问、更新、控制和保护这些信息的方式。本《隐私政策》与您所使用的服务息息相关，希望您仔细阅读，在需要时，按照本《隐私政策》的指引，作出您认为适当的选择。本《隐私政策》中涉及的相关技术词汇，我们尽量以简明扼要的表述，并提供进一步说明的链接，以便您的理解。 您使用或继续使用我们的服务，即意味着同意我们按照本《隐私政策》收集、使用、储存和分享您的相关信息。"),n("br"),t._v(" 如对本《隐私政策》或相关事宜有任何问题，请通过546989691@qq.com与我们联系。"),n("br"),t._v(" 我们可能收集的信息 我们提供服务时，可能会收集、储存和使用下列与您有关的信息。如果您不提供相关信息，可能无法享受我们提供的某些服务，或者无法达到相关服务拟达到的效果。 您提供的信息 您在使用我们的服务时，向我们提供的相关个人信息，例如电话号码、电子邮件或银行卡号等； 您通过我们的服务向其他方提供的共享信息，以及您使用我们的服务时所储存的信息。 其他方分享的您的信息 其他方使用我们的服务时所提供有关您的共享信息。"),n("br"),t._v(" 我们获取的您的信息 您使用服务时我们可能收集如下信息："),n("br"),t._v(" 日志信息，指您使用我们的服务时，系统可能通过cookies、web beacon或其他方式自动采集的技术信息，包括： 设备或软件信息，例如您的移动设备、网页浏览器或用于接入我们服务的其他程序所提供的配置信息、您的IP地址和移动设备所用的版本和设备识别码； 在使用我们服务时搜索或浏览的信息，例如您使用的网页搜索词语、访问的社交媒体页面url地址，以及您在使用我们服务时浏览或要求提供的其他信息和内容详情； 有关您曾使用的移动应用（APP）和其他软件的信息，以及您曾经使用该等移动应用和软件的信息； 位置信息，指您开启设备定位功能并使用我们基于位置提供的相关服务时，收集的有关您位置的信息，包括： 您通过具有定位功能的移动设备使用我们的服务时，通过GPS或WiFi等方式收集的您的地理位置信息； 您或其他用户提供的包含您所处地理位置的实时信息，例如您提供的账户信息中包含的您所在地区信息，您或其他人上传的显示您当前或曾经所处地理位置的共享信息； 您可以通过关闭定位功能，停止对您的地理位置信息的收集。 我们可能如何使用信息 我们可能将在向您提供服务的过程之中所收集的信息用作下列用途： 向您提供服务； 在我们提供服务时，用于身份验证、客户服务、安全防范、诈骗监测、存档和备份用途，确保我们向您提供的产品和服务的安全性； 帮助我们设计新服务，改善我们现有服务； 使我们更加了解您如何接入和使用我们的服务，从而针对性地回应您的个性化需求，例如语言设定、位置设定、个性化的帮助服务和指示，或对您和其他用户作出其他方面的回应； 向您提供与您更加相关的广告以替代普遍投放的广告； 评估我们服务中的广告和其他促销及推广活动的效果，并加以改善； 软件认证或管理软件升级； 让您参与有关我们产品和服务的调查。 为了让您有更好的体验、改善我们的服务或您同意的其他用途，在符合相关法律法规的前提下，我们可能将通过某一项服务所收集的信息，以汇集信息或者个性化的方式，用于我们的其他服务。例如，在您使用我们的一项服务时所收集的信息，可能在另一服务中用于向您提供特定内容，或向您展示与您相关的、非普遍推送的信息。如果我们在相关服务中提供了相应选项，您也可以授权我们将该服务所提供和储存的信息用于我们的其他服务。 您如何访问和控制自己的个人信息 我们将尽一切可能采取适当的技术手段，保证您可以访问、更新和更正自己的注册信息或使用我们的服务时提供的其他个人信息。在访问、更新、更正和删除前述信息时，我们可能会要求您进行身份验证，以保障账户安全。 我们可能分享的信息 除以下情形外，未经您同意，我们不会与任何第三方分享您的个人信息： 我们可能将您的个人信息与第三方服务供应商、承包商及代理（例如代表我们发出电子邮件或推送通知的通讯服务提供商、为我们提供位置数据的地图服务供应商）分享（他们可能并非位于您所在的法域），用作下列用途： 向您提供我们的服务； 实现“我们可能如何使用信息”部分所述目的； 履行我们在本《隐私政策》中的义务和行使我们的权利； 理解、维护和改善我们的服务。 如我们与任何上述第三方分享您的个人信息，我们将努力确保该等第三方在使用您的个人信息时遵守本《隐私政策》及我们要求其遵守的其他适当的保密和安全措施。 随着我们业务的持续发展，我们有可能进行合并、收购、资产转让或类似的交易，您的个人信息有可能作为此类交易的一部分而被转移。我们将在转移前通知您。 我们还可能为以下需要而保留、保存或披露您的个人信息： 遵守适用的法律法规； 遵守法院命令或其他法律程序的规定； 遵守相关政府机关的要求； 为遵守适用的法律法规、维护社会公共利益，或保护我们的客户、我们、其他用户的人身和财产安全或合法权益所合理必需的用途。"),n("br"),t._v(" 信息安全"),n("br"),t._v(" 我们仅在本《隐私政策》所述目的所必需的期间和法律法规要求的时限内保留您的个人信息。 我们使用各种安全技术和程序，以防信息的丢失、不当使用、未经授权阅览或披露。例如，在某些服务中，我们将利用加密技术（例如SSL）来保护您提供的个人信息。但请您理解，由于技术的限制以及可能存在的各种恶意手段，在互联网行业，即便竭尽所能加强安全措施，也不可能始终保证信息百分之百的安全。您需要了解，您接入我们的服务所用的系统和通讯网络，有可能因我们可控范围外的因素而出现问题。 您分享的信息 我们的多项服务，可让您不仅与自己的社交网络，也与使用该服务的所有用户公开分享您的相关信息，例如，您在我们的服务中所上传或发布的信息（包括您公开的个人信息、您建立的名单）、您对其他人上传或发布的信息作出的回应，以及包括与这些信息有关的位置数据和日志信息。使用我们服务的其他用户也有可能分享与您有关的信息（包括位置数据和日志信息）。特别是，我们的社交媒体服务，是专为使您与世界各地的用户共享信息而设计，您可以使共享信息实时、广泛地传递。只要您不删除共享信息，有关信息会一直留存在公共领域；即使您删除共享信息，有关信息仍可能由其他用户或不受我们控制的非关联第三方独立地缓存、复制或储存，或由其他用户或该等第三方在公共领域保存。 因此，请您谨慎考虑通过我们的服务上传、发布和交流的信息内容。在一些情况下，您可通过我们某些服务的隐私设定来控制有权浏览您共享信息的用户范围。如要求从我们的服务中删除您的相关信息，请通过该等特别服务条款提供的方式操作。 您分享的敏感个人信息 某些个人信息因其特殊性可能被认为是敏感个人信息，例如您的种族、宗教、个人健康和医疗信息等。相比其他个人信息，敏感个人信息受到更加严格的保护。 请注意，您在使用我们的服务时所提供、上传或发布的内容和信息（例如有关您社交活动的照片等信息），可能会泄露您的敏感个人信息。您需要谨慎地考虑，是否在使用我们的服务时披露相关敏感个人信息。 您同意按本《隐私政策》所述的目的和方式来处理您的敏感个人信息。"),n("br"),t._v(" 我们可能如何收集信息"),n("br"),t._v(" 我们或我们的第三方合作伙伴，可能通过cookies和web beacon收集和使用您的信息，并将该等信息储存为日志信息。 我们使用自己的cookies和web beacon，目的是为您提供更个性化的用户体验和服务，并用于以下用途： 记住您的身份。例如：cookies和web beacon有助于我们辨认您作为我们的注册用户的身份，或保存您向我们提供的有关您的喜好或其他信息； 分析您使用我们服务的情况。例如，我们可利用cookies和web beacon来了解您使用我们的服务进行什么活动，或哪些网页或服务最受您的欢迎； 广告优化。Cookies和web beacon有助于我们根据您的信息，向您提供与您相关的广告而非进行普遍的广告投放。 我们为上述目的使用cookies和web beacon的同时，可能将通过cookies和web beacon收集的非个人身份信息，经统计加工后提供给广告商或其他合作伙伴，用于分析用户如何使用我们的服务，并用于广告服务。 我们的产品和服务上可能会有广告商或其他合作方放置的cookies和web beacon。这些cookies和web beacon可能会收集与您相关的非个人身份信息，以用于分析用户如何使用该等服务、向您发送您可能感兴趣的广告，或用于评估广告服务的效果。这些第三方cookies和web beacon收集和使用该等信息，不受本《隐私政策》约束，而是受相关使用者的隐私政策约束，我们不对第三方的cookies或web beacon承担责任。 您可以通过浏览器设置拒绝或管理cookies或web beacon。但请注意，如果停用cookies或web beacon，您有可能无法享受最佳的服务体验，某些服务也可能无法正常使用。同时，您还会收到同样数量的广告，但这些广告与您的相关性会降低。"),n("br"),t._v(" 广告服务"),n("br"),t._v(" 我们可能使用您的相关信息，向您提供与您更加相关的广告。 我们也可能使用您的信息，通过我们的服务、电子邮件或其他方式向您发送营销信息，提供或推广我们或第三方的如下商品和服务： 我们的服务，我们的关联公司和合作伙伴的商品或服务，包括即时通讯服务、网上媒体服务、互动娱乐服务、社交网络服务、付款服务、互联网搜索服务、位置和地图服务、应用软件和服务、数据管理软件和服务、网上广告服务、互联网金融，以及其他社交媒体、娱乐、电子商务、资讯和通讯软件或服务（统称“互联网服务”）； 第三方互联网服务供应商，以及与下列有关的第三方商品或服务：食物和餐饮、体育、音乐、电影、电视、现场表演及其他艺术和娱乐、书册、杂志和其他刊物、服装和配饰、珠宝、化妆品、个人健康和卫生、电子、收藏品、家用器皿、电器、家居装饰和摆设、宠物、汽车、酒店、交通和旅游、银行、保险及其他金融服务、会员积分和奖励计划，以及我们认为可能与您相关的其他商品或服务。 如您不希望我们将您的个人信息用作前述广告用途，您可以通过我们在广告中提供的相关提示，或在特定服务中提供的指引，要求我们停止为上述用途使用您的个人信息。"),n("br"),t._v(" 我们可能向您发送的邮件和信息 邮件和信息推送"),n("br"),t._v(" 您在使用我们的服务时，我们可能使用您的信息向您的设备发送电子邮件、新闻或推送通知。如您不希望收到这些信息，可以按照我们的相关提示，在设备上选择取消订阅。"),n("br"),t._v(" 与服务有关的公告"),n("br"),t._v(" 我们可能在必要时（例如因系统维护而暂停某一项服务时）向您发出与服务有关的公告。您可能无法取消这些与服务有关、性质不属于推广的公告。"),n("br"),t._v(" 隐私政策的适用例外"),n("br"),t._v(" 我们的服务可能包括或链接至第三方提供的社交媒体或其他服务（包括网站）。例如： 您利用 “分享”键将某些内容分享到我们的服务，或您利用第三方连线服务登录我们的服务。这些功能可能会收集您的相关信息（包括您的日志信息），并可能在您的电脑装置cookies，从而正常运行上述功能； 我们通过广告或我们服务的其他方式向您提供链接，使您可以接入第三方的服务或网站。 该等第三方社交媒体或其他服务可能由相关的第三方或我们运营。您使用该等第三方的社交媒体服务或其他服务（包括您向该等第三方提供的任何个人信息），须受该第三方的服务条款及隐私政策（而非《通用服务条款》或本《隐私政策》）约束，您需要仔细阅读其条款。本《隐私政策》仅适用于我们所收集的信息，并不适用于任何第三方提供的服务或第三方的信息使用规则，我们对任何第三方使用由您提供的信息不承担任何责任。 未成年人使用我们的服务"),n("br"),t._v(" 我们鼓励父母或监护人指导未满十八岁的未成年人使用我们的服务。我们建议未成年人鼓励他们的父母或监护人阅读本《隐私政策》，并建议未成年人在提交的个人信息之前寻求父母或监护人的同意和指导。"),n("br"),t._v(" 隐私政策的适用范围"),n("br"),t._v(" 除某些特定服务外，我们所有的服务均适用本《隐私政策》。这些特定服务将适用特定的隐私政策。针对某些特定服务的特定隐私政策，将更具体地说明我们在该等服务中如何使用您的信息。该特定服务的隐私政策构成本《隐私政策》的一部分。如相关特定服务的隐私政策与本《隐私政策》有不一致之处，适用该特定服务的隐私政策。 请您注意，本《隐私政策》不适用于以下情况："),n("br"),t._v(" 通过我们的服务而接入的第三方服务（包括任何第三方网站）收集的信息；"),n("br"),t._v(" 通过在我们服务中进行广告服务的其他公司或机构所收集的信息。"),n("br"),t._v(" 变更"),n("br"),t._v(" 我们可能适时修订本《隐私政策》的条款，该等修订构成本《隐私政策》的一部分。如该等修订造成您在本《隐私政策》下权利的实质减少，我们将在修订生效前通过在主页上显著位置提示或向您发送电子邮件或以其他方式通知您。在该种情况下，若您继续使用我们的服务，即表示同意受经修订的本《隐私政策》的约束。 ")])])}],q={},T=q,Y=Object(l["a"])(T,V,U,!1,null,null,null),$=Y.exports;a["default"].use(v["a"]);var tt=new v["a"]({routes:[{path:"/",component:P,name:"Home",meta:{title:"首页"}},{path:"/ContactUs",component:W,name:"ContactUs",meta:{title:"联系我们"}},{path:"/ExhibitionOfWorks",component:Z,name:"ExhibitionOfWorks",meta:{title:"作品展示"}},{path:"/FangKuaiWangZheDetail",component:J,name:"FangKuaiWangZheDetail",meta:{title:"方块王者的详情页"}},{path:"/GuoGuoYouShiJieDetail",component:N,name:"GuoGuoYouShiJieDetail",meta:{title:"果果游世界的详情页"}},{path:"/FangKuaiPrivacyPolicy",component:$,name:"FangKuaiPrivacyPolicy",meta:{title:"方块王者的隐私政策"}}]}),et=n("2f62"),nt=void 0,at={data:{backPage:"",upBackPage:""}},it={getBackPage:function(){return nt.backPage},getUpBackPage:function(){return nt.upBackPage}},ct={},ot={setBackPage:function(t,e){t.data.backPage=e},setUpBackPage:function(t,e){t.data.upBackPage=e}},rt={namespaced:!0,state:at,getters:it,actions:ct,mutations:ot};a["default"].use(et["a"]);var st=!1,ut=new et["a"].Store({state:{routeAction:"push"},modules:{home:rt},strict:st}),lt=n("5c96"),ft=n.n(lt);n("0fae");a["default"].use(ft.a),new a["default"]({router:tt,store:ut,render:function(t){return t(A)}}).$mount("#app")},6597:function(t,e,n){"use strict";var a=n("ba2c"),i=n.n(a);i.a},"6f61":function(t,e,n){t.exports=n.p+"img/fx.0024823f.png"},"740c":function(t,e,n){t.exports=n.p+"img/sg.fe7ffc36.png"},7778:function(t,e,n){},8543:function(t,e,n){"use strict";var a=n("9658"),i=n.n(a);i.a},"875e":function(t,e,n){t.exports=n.p+"img/fangkuai.ec065f5c.png"},"8b5d":function(t,e,n){},"8e7b":function(t,e,n){t.exports=n.p+"img/lx.622f5a02.png"},"93a7":function(t,e,n){t.exports=n.p+"img/lxt.341dc34a.png"},9658:function(t,e,n){},9745:function(t,e,n){"use strict";var a=n("2cd8"),i=n.n(a);i.a},"9a39":function(t,e,n){t.exports=n.p+"img/hc.2f6c20b4.png"},"9c6e":function(t,e,n){t.exports=n.p+"img/pp.2ac5c9c8.jpg"},"9fc2":function(t,e,n){t.exports=n.p+"img/dh.f9fdcc08.jpg"},a51c:function(t,e,n){t.exports=n.p+"img/rw.308cb314.jpg"},ba2c:function(t,e,n){},c5a1:function(t,e,n){t.exports=n.p+"img/yxz.a7be13ee.jpg"},ce68:function(t,e,n){t.exports=n.p+"img/ck.1367de91.png"},e32f:function(t,e){t.exports="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAEAAAAAAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCAA8AFMDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9/KKKKAGdqZJKsSsW4xzmpAMmvK/2ptQmvfD2i+GYpmtY/FuoixvJVYqyWaRSXFzg9i0ULJnsJDXm5tmEcFhJ4h622XdvRL72kdGDw7r1VS77vslq38kc548/a6MVnJceHI9Hj0WORoF8Qa1dGCyuZF4YWsSKZbnByCyhUyDhiOa5bwz+2Vq2parGtprngLxE7tt+xmG90WSZuPkiluA0bPyMA7c5HIzXzLqd1rX7Q3xHVdOs5ppJAIbGyhjzDplmpARQqg7ERSMkDk5PJNe/eG/2PBrGm/8ACI6trGm6zY2unyX2n31tDLbT6ZNPtPyctFcQyFTktg/KQuMEL/M+V8ecT59jKlXLYP2MHZSbsm+y1taybTanZ2vufrmYcK5NlWHpxx8/3sldxWtl3fdp2vZwur8uq1+jPhX8XdP+KVreCGO60/UtMlEOoadeJsurGQjIDryCGHKupKsOhOCB1wziviz4EeObvw94jsZ/7Rt9Yu/Buq2fh+8v4GJj1DTb1vJWMseZBb3QBRzwV6cGvtOLlM/jX7twRxM85wPtKi9+Oj211tfRtaNNPo2rrQ/N+IMp+oYn2cdum/ZPr3TTXVJ2etySiiivtDwwooooAKKjFwufpR9qUj/69AWY4HJ968m/aptTpOleHvEzoZLPwxqfnagACSlnPDLazyYHPyLMHOOgQmvVldT/APrqrf28OpW8kM8cc0MyGOSORQyOpGCCDwQQcY715ecZesdhJ4a9m7NPs0002u10rnVg8Q6FZVbbb+aejV/NXPBv2P8A4M6P4S+Heo6XfKra9aanIbq4ikMc23pbyRyIQRG8JDLg7TvcHncK579pN/Fl18LtYtdM1VrTSYEuNQIUbbrVYUmWO4WTYoWJVLmQ7cbw+CvL7d7x/wDsnXllBHbaPa6b4g0G3DLaaZf3stje6Wh5Mdtexbm8rJ4ikVlGBzjiuX8N/sw+IobZbGPwlDbWcMpkiTXvFct9YWzHO5haQIiykgniQgHJz1r8Xx2V46ll6yChhXCPJKPNFyu76Jtxg13esk31S1R91h8ZQnjP7Vq1VOXMpcslG3mknJPysotLo3ozgv2X/AN5cWOk2GwrceM9Xsr9YyvzRabp0puHnbuqSTFIkJxuPI4r7sjGyNR7Vw3wn+DVr8OHu7+6vpNa8Q6kqLe6lNGqNIqfcijjX5YYk52ovAzkljzXcGQA8kY9a+88O+E3kOWRw0/islZ7pLXXdXbbb10vbW1zwOKs8eaY6WIWzd+vktL9Ekktm7Xdr2UtFR/aF9R7+1L56+o/Ov0A+asx9FR/aFooA+Jf+CpXi/xR8GNb8P614d8c+K9Ll19pIX023uxHZQrAgJkRVUMGZnXdliD7VyPgz4teD7/wVpd5rn7QXxssdWlso5r6G2sLhreCYoDIEb7E4KK2QDuYEDOT1p3/AAWW1R9b+JPgXRIfmmh066kVfVriWJB+sNfc2v6ZDpPw3urWFFWO3054l46KsRA/lXhxjKeKq8r0jbe71trs0fqNavh8JkeA9pTvOq5tuPKnZSsrtwlfR6bHzT+z18WvCun6V438V+Gfip8QviW3hHQpru50nXi0FuBhpUZS1tHhz5DIGG7aHbIORXyrpf7SetjS9T8YR+MvHVvdR3O17Kf4i24urhpSpLQWb2BVoxv6ogCBTjAWu8/4JT+ILrwtonxW1Kz0/wDtS7s9Atp4rQTpB9oZftBC+ZJlEz03MCB1IIrynxXp9j4Liu9Q0260LwdqWyRTGPHDazqVwx+bYPsSFAzsB/rdq5wWIxmuCriak6EKkXy/F33vZO7v9zaPq8vyPA4fNMTg6see3JZtq7TSco2jZ9d1F+ZreLv2vPiJD4Q03WdM+JWrWsN87wtYT+JLS+1GNlLfvHiS2hMUZCnBYMG3KQeQD9Dft7/EjXdO+BfgP4kaF4v8XeHL7xPb2NuNJtNRC2YV7eW4eVtqKzSDKoXyAQF+UV8w+FPjZ4usPAGlx3OvalZ6DeeJTHqGro3nXsCLFb741d8lVEbSSBQcMwOfu8/Xf/BSj9nbx38c7LwLY+CNDbWNL0WG5a4f+0IIdrsIVi/1silsKrnIz978zD1Ks6FSUHKTtHTW6flqGa4PBYXNcFSr06dKHNUu7qziraScla97LVt69DyD4UePPEWufDSz1jxBrX7Uk95Mkk011oVssmlmMMxR4pJFJZfLCksTjO7HGK6z4Z/FXTviL8KPitfeFfiF8aLy+0HwldTkeILy3MMBZWdZIjF8yy/uGUNkELIxHOCOo174t/Fj4M/spXGg3XwaGlaZoPhz+zX1U+LLOT7OqW/led5SAs2PvbVJJ6ZzzXnf/BNPwpp998AfjZNq0xt9L1DTF0+4mH3o4ltrlpGH0WXP4V1RqONSFK7d073TT28/M8WrhaVbB4nM5RUVGpFQUZQkmnJXTSvay2Wh538MPHvxB1TxT8L1i8f+NrqXxBbXtzHb/wBpTSfPDcXiLFhmPmeYYRy4JG/A4VcaGn+JvjJ/wqq6a5vvjwPGn9oILZEjufsBtNi7i527vM3b+hxjZ71x/wCzMbvXfiR4Lt9Uj042um6Bq8ukxaiG+xXZ2X8jCcr83leaZd2MnbHgdc1yfw+WHwj4f1Lxtc+B/DHiDQ5L1dJFrqMcrQ2s8iPOojVXU/LHGVyzHAIHfNeXTrNRTbet+r00Wuz+R91istpurOChTvHlaXJH3m5ztFNuK2smn1W9z9Yv2dH1yX4A+C28QJdf262iWZ1D7d/x8+f5K+Z5m7nfuznPOc0U/wCAC/Y/gh4TjS00qyjXSbcxwaVk2MSGMFVh3jdsCkYzzRX2NNvlW2x/OeKi/bz0W7/P1OR+OXwg+F3jr4veH9Q8XaIdS8TxLDFYSi8ljEYW4zErRpKqt+8kkblWBEcmegB73xL48tbTw008mm319ZXElxaSpF5YK+WXV9wZ14PlvjGT9K2dY8NadrK/6ZY2d3uZCfOhV87dxTqP4SzEem4+ppln4N0mxtGt4dNsYreR2d4lgUIzHKliMYyQSCfc1y+zq87cbJPy1+ffr95nPFSlThCcpNR0Sbdlftrp8jwXwl8Mfgp8G7XxRoOl+G7iz03XtOEGrtJPcTQ3NuF4jJkkZ1yJW+6FzgjJO0HqfCfw1+GWkpP4ZsPAOm6OmrQyadeCO0toW2vES0Uksbli7Ix+UMXAOcAc16jf+E9LubyWaXTrGaabZ5kj26Mz7WUrkkfwlEI9CinsKgh8A6HZsJItH0uN+Fytqg4K7fT+7x9OOlc8MLXi7Xj8lbTsdVXNKlV+9Obel25N3aWj+Vreh87RfBz4CP8ADCbQ4fCdzP4dlvYtV8lL6dmluCJrcSLJ9o3jakZyu4ALIhwS3F/4n/AL4N+PfEkEmveCdW1O80+FNGt5f7Rmh8yOAmNY0/0hPM285cgn+8dxAPv1z4L0e9uZnm0nTZpJlxI72yM0o+VcMSORhEHP9xfQUxvh5oOP+QLpfXPNsnX72enXPOetZRwuIa05enTt/wAObf21X5+f2tTm1d+d31tfW9+mvfTsfN+rfsZfs/eH7m8W88DXduthcQ20kr6zchN8ixvx/pOTtR97HHSN8biADteC/wBmr4L+CZbn+z/Buoae3ijSzpjM+oXMv22xu5I4SP8AXsUVi68na4AOMHivem8IaV9rkmOm2DTSAh5Dbpuf5PL5OOfk+X/d46cUWfhLStOU/Z9M0+AsyOSluq5bcGB6dmVSPQqD2prCz5nJcun93UJ59jJw9m61RrS6c3Z/K54DqHwJ+D8Oh6LG3gPVfsOj6ZcR2DxXrqYbG6juZZCSLkOyyKLk/Nl1JPCkipofgv8AB6y+HGqeB7bwbdyeGf7XWa5i+2Ou68/doHEsk4lGAEGchcAjuQferbwfpMXnKumaeqzEvIBbp85KspzxzlXcfRmHc04eEdLj1SS7XT7NboyeYZRAu8t65xnPv1rWWEq3VnHs9Ftb09NCf7ZxK+OrN21XvPe7d997tu/d3M34aaTpPh74daDY6FbSWei2unwRWEDyM7QwCNfLQlixOFwOSenU0VuWNrFZ2ccMMccMMI2JHGNqoo4AAHAAHYUV6Mab5VqeNKspNybep//Z"},f344:function(t,e,n){t.exports=n.p+"img/dl.45137890.png"}});