(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"62ad":function(t,e,a){"use strict";a("4160"),a("caad"),a("13d5"),a("45fc"),a("4ec9"),a("a9e3"),a("b64b"),a("d3b7"),a("ac1f"),a("3ca3"),a("5319"),a("2ca0"),a("159b"),a("ddb0");var r=a("ade3"),n=a("5530"),c=(a("4b85"),a("2b0e")),o=a("d9f7"),i=a("80d2"),s=["sm","md","lg","xl"],l=function(){return s.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{})}(),u=function(){return s.reduce((function(t,e){return t["offset"+Object(i["q"])(e)]={type:[String,Number],default:null},t}),{})}(),d=function(){return s.reduce((function(t,e){return t["order"+Object(i["q"])(e)]={type:[String,Number],default:null},t}),{})}(),f={col:Object.keys(l),offset:Object.keys(u),order:Object.keys(d)};function b(t,e,a){var r=t;if(null!=a&&!1!==a){if(e){var n=e.replace(t,"");r+="-".concat(n)}return"col"!==t||""!==a&&!0!==a?(r+="-".concat(a),r.toLowerCase()):r.toLowerCase()}}var v=new Map;e["a"]=c["a"].extend({name:"v-col",functional:!0,props:Object(n["a"])({cols:{type:[Boolean,String,Number],default:!1}},l,{offset:{type:[String,Number],default:null}},u,{order:{type:[String,Number],default:null}},d,{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var a=e.props,n=e.data,c=e.children,i=(e.parent,"");for(var s in a)i+=String(a[s]);var l=v.get(i);return l||function(){var t,e;for(e in l=[],f)f[e].forEach((function(t){var r=a[t],n=b(e,t,r);n&&l.push(n)}));var n=l.some((function(t){return t.startsWith("col-")}));l.push((t={col:!n||!a.cols},Object(r["a"])(t,"col-".concat(a.cols),a.cols),Object(r["a"])(t,"offset-".concat(a.offset),a.offset),Object(r["a"])(t,"order-".concat(a.order),a.order),Object(r["a"])(t,"align-self-".concat(a.alignSelf),a.alignSelf),t)),v.set(i,l)}(),t(a.tag,Object(o["a"])(n,{class:l}),c)}})},f820:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-row",{attrs:{dense:""}},t._l(t.cards,(function(e){return a("v-col",{key:e.title,attrs:{cols:e.flex}},[a("v-card",[a("v-img",{staticClass:"white--text align-end",attrs:{src:e.src,gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)","max-height":"400"}},[a("v-card-title",{domProps:{textContent:t._s(e.title)}})],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("mdi-heart")])],1),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("mdi-bookmark")])],1),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("mdi-share-variant")])],1)],1)],1)],1)})),1)],1)},n=[],c={data:function(){return{cards:[{title:"Pre-fab homes",src:"https://cdn.vuetifyjs.com/images/cards/house.jpg",flex:12},{title:"Favorite road trips",src:"https://cdn.vuetifyjs.com/images/cards/road.jpg",flex:6},{title:"Best airlines",src:"https://cdn.vuetifyjs.com/images/cards/plane.jpg",flex:6}]}}},o=c,i=a("2877"),s=a("6544"),l=a.n(s),u=a("8336"),d=a("b0af"),f=a("99d9"),b=a("62ad"),v=a("a523"),p=a("132d"),g=a("adda"),m=a("0fd9"),h=a("2fa4"),j=Object(i["a"])(o,r,n,!1,null,null,null);e["default"]=j.exports;l()(j,{VBtn:u["a"],VCard:d["a"],VCardActions:f["a"],VCardTitle:f["d"],VCol:b["a"],VContainer:v["a"],VIcon:p["a"],VImg:g["a"],VRow:m["a"],VSpacer:h["a"]})}}]);
//# sourceMappingURL=about.a025522c.js.map