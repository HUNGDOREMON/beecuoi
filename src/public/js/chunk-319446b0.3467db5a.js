(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-319446b0"],{7541:function(t,n,e){"use strict";e.r(n);var p=function(){var t=this,n=t._self._c;return n("div",{attrs:{id:"input-group-demo"}},[n("form-input-group-basic"),n("form-input-group-sizing"),n("form-input-group-form-elements"),n("form-input-group-multiple-addons"),n("form-input-group-button-addons")],1)},s=[],a=function(){var t=this,n=t._self._c;return n("vx-card",{attrs:{title:"Basic","code-toggler":""}},[n("div",{staticClass:"mb-base"},[n("p",[n("code",[t._v("vx-input-group")]),t._v(" component provides various options to create desired form input group.")])]),n("vx-input-group",{staticClass:"mb-base"},[n("template",{slot:"prepend"},[n("div",{staticClass:"prepend-text bg-primary"},[n("span",[t._v("@")])])]),n("vs-input",{attrs:{placeholder:"Email"},model:{value:t.title,callback:function(n){t.title=n},expression:"title"}})],2),n("vx-input-group",{staticClass:"mb-base"},[n("vs-input",{attrs:{placeholder:"Username"},model:{value:t.username,callback:function(n){t.username=n},expression:"username"}}),n("template",{slot:"append"},[n("div",{staticClass:"append-text bg-primary"},[n("span",[t._v("@url.com")])])])],2),n("vx-input-group",{staticClass:"mb-base"},[n("template",{slot:"prepend"},[n("div",{staticClass:"prepend-text bg-primary"},[n("span",[t._v("https://pixinvent.com/users/")])])]),n("vs-input",{model:{value:t.siteUsername,callback:function(n){t.siteUsername=n},expression:"siteUsername"}})],2),n("vx-input-group",{staticClass:"mb-base"},[n("template",{slot:"prepend"},[n("div",{staticClass:"prepend-text bg-primary"},[n("span",[t._v("$")])])]),n("vs-input",{model:{value:t.amount,callback:function(n){t.amount=n},expression:"amount"}}),n("template",{slot:"append"},[n("div",{staticClass:"append-text bg-primary"},[n("span",[t._v(".00")])])])],2),n("vx-input-group",[n("template",{slot:"prepend"},[n("div",{staticClass:"prepend-text bg-primary"},[n("span",[t._v("Description")])])]),n("vs-textarea",{model:{value:t.textarea,callback:function(n){t.textarea=n},expression:"textarea"}})],2),n("template",{slot:"codeContainer"},[t._v('\n<tempalte>\n  \x3c!-- TITLE --\x3e\n  <vx-input-group class="mb-base">\n    <template slot="prepend">\n      <div class="prepend-text bg-primary">\n        <span>@</span>\n      </div>\n    </template>\n\n    <vs-input v-model="title" placeholder="Email" />\n  </vx-input-group>\n  \x3c!-- /TITLE --\x3e\n\n  \x3c!-- URL --\x3e\n  <vx-input-group class="mb-base">\n    <vs-input v-model="username" placeholder="Username" />\n\n    <template slot="append">\n      <div class="append-text bg-primary">\n        <span>@url.com</span>\n      </div>\n    </template>\n  </vx-input-group>\n  \x3c!-- /URL --\x3e\n\n  \x3c!-- USERNAME --\x3e\n  <vx-input-group class="mb-base">\n    <template slot="prepend">\n      <div class="prepend-text bg-primary">\n        <span>https://pixinvent.com/users/</span>\n      </div>\n    </template>\n\n    <vs-input v-model="siteUsername" />\n  </vx-input-group>\n  \x3c!-- /USERNAME --\x3e\n\n  \x3c!-- currency --\x3e\n  <vx-input-group class="mb-base">\n    <template slot="prepend">\n      <div class="prepend-text bg-primary">\n        <span>$</span>\n      </div>\n    </template>\n\n    <vs-input v-model="amount" />\n\n    <template slot="append">\n      <div class="append-text bg-primary">\n        <span>.00</span>\n      </div>\n    </template>\n  </vx-input-group>\n  \x3c!-- /currency --\x3e\n\n  \x3c!-- Textarea --\x3e\n  <vx-input-group>\n    <template slot="prepend">\n      <div class="prepend-text bg-primary">\n        <span>Description</span>\n      </div>\n    </template>\n\n    <vs-textarea v-model="textarea" />\n  </vx-input-group>\n  \x3c!-- /Textarea --\x3e\n</tempalte>\n\n<script>\nexport default {\n  data() {\n    return {\n      title: \'\',\n      username: \'\',\n      siteUsername: \'\',\n      amount: \'\',\n      textarea: \'\',\n    }\n  }\n}\n<\/script>\n    ')])],2)},r=[],i={data:function(){return{title:"",username:"",siteUsername:"",amount:"",textarea:""}}},o=i,l=e("2877"),u=Object(l["a"])(o,a,r,!1,null,null,null),d=u.exports,c=function(){var t=this,n=t._self._c;return n("vx-card",{attrs:{title:"Sizing","code-toggler":""}},[n("div",{staticClass:"mb-base"},[n("span",[t._v("You can use "),n("code",[t._v("size")]),t._v(" prop of "),n("code",[t._v("vs-input")]),t._v(" component to change size of input group.")])]),n("vx-input-group",{staticClass:"mb-base"},[n("template",{slot:"prepend"},[n("div",{staticClass:"prepend-text bg-primary"},[n("span",[t._v("Small")])])]),n("vs-input",{attrs:{size:"small"},model:{value:t.input1,callback:function(n){t.input1=n},expression:"input1"}})],2),n("vx-input-group",{staticClass:"mb-base"},[n("template",{slot:"prepend"},[n("div",{staticClass:"prepend-text bg-primary"},[n("span",[t._v("Default")])])]),n("vs-input",{model:{value:t.input2,callback:function(n){t.input2=n},expression:"input2"}})],2),n("vx-input-group",{staticClass:"mb-base"},[n("template",{slot:"prepend"},[n("div",{staticClass:"prepend-text bg-primary"},[n("span",[t._v("Large")])])]),n("vs-input",{attrs:{size:"large"},model:{value:t.input3,callback:function(n){t.input3=n},expression:"input3"}})],2),n("template",{slot:"codeContainer"},[t._v('\n<template>\n  \x3c!-- SMALL --\x3e\n  <vx-input-group class="mb-base">\n    <template slot="prepend">\n      <div class="prepend-text bg-primary">\n        <span>Small</span>\n      </div>\n    </template>\n\n    <vs-input v-model="input1" size="small" />\n  </vx-input-group>\n  \x3c!-- /SMALL --\x3e\n\n  \x3c!-- DEFAULT --\x3e\n  <vx-input-group class="mb-base">\n    <template slot="prepend">\n      <div class="prepend-text bg-primary">\n        <span>Default</span>\n      </div>\n    </template>\n\n    <vs-input v-model="input2" />\n  </vx-input-group>\n  \x3c!-- /DEFAULT --\x3e\n\n  \x3c!-- LARGE --\x3e\n  <vx-input-group class="mb-base">\n    <template slot="prepend">\n      <div class="prepend-text bg-primary">\n        <span>Large</span>\n      </div>\n    </template>\n\n    <vs-input v-model="input3" size="large" />\n  </vx-input-group>\n  \x3c!-- /LARGE --\x3e\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      input1: \'\',\n      input2: \'\',\n      input3: \'\'\n    }\n  }\n}\n<\/script>\n    ')])],2)},v=[],m={data:function(){return{input1:"",input2:"",input3:""}}},x=m,b=Object(l["a"])(x,c,v,!1,null,null,null),g=b.exports,f=function(){var t=this,n=t._self._c;return n("vx-card",{attrs:{title:"Form Elements","code-toggler":""}},[n("div",{staticClass:"mb-base"},[n("p",[t._v("You can also add form elements to prepend/append slot. Using "),n("strong",[t._v("tailwind css")]),t._v(", you can tune appearance as you like.")])]),n("vx-input-group",{staticClass:"mb-base form-element-demo",attrs:{prependClasses:"border border-solid form-element-border border-r-0"}},[n("template",{slot:"prepend"},[n("div",{staticClass:"prepend-text"},[n("vs-checkbox",{model:{value:t.checkbox1,callback:function(n){t.checkbox1=n},expression:"checkbox1"}})],1)]),n("vs-input",{model:{value:t.input1,callback:function(n){t.input1=n},expression:"input1"}})],2),n("vx-input-group",{staticClass:"mb-base form-element-demo",attrs:{prependClasses:"border border-solid form-element-border border-r-0"}},[n("template",{slot:"prepend"},[n("div",{staticClass:"prepend-text"},[n("vs-radio",{attrs:{"vs-value":"radio1"},model:{value:t.radios1,callback:function(n){t.radios1=n},expression:"radios1"}})],1)]),n("vs-input",{model:{value:t.input2,callback:function(n){t.input2=n},expression:"input2"}})],2),n("vx-input-group",{staticClass:"mb-base form-element-demo",attrs:{prependClasses:"border border-solid form-element-border border-r-0"}},[n("template",{slot:"prepend"},[n("div",{staticClass:"prepend-text"},[n("vs-switch",{model:{value:t.switch1,callback:function(n){t.switch1=n},expression:"switch1"}})],1)]),n("vs-input",{model:{value:t.input3,callback:function(n){t.input3=n},expression:"input3"}})],2),n("template",{slot:"codeContainer"},[t._v('\n<template>\n  \x3c!-- CHECKBOX --\x3e\n  <vx-input-group class="mb-base" prependClasses="border border-solid border-grey border-r-0">\n    <template slot="prepend">\n      <div class="prepend-text">\n        <vs-checkbox v-model="checkbox1"></vs-checkbox>\n      </div>\n    </template>\n\n    <vs-input v-model="input1" />\n  </vx-input-group>\n  \x3c!-- /CHECKBOX --\x3e\n\n  \x3c!-- RADIO --\x3e\n  <vx-input-group class="mb-base" prependClasses="border border-solid border-grey border-r-0">\n    <template slot="prepend">\n      <div class="prepend-text">\n        <vs-radio v-model="radios1" vs-value="radio1"></vs-radio>\n      </div>\n    </template>\n\n    <vs-input v-model="input2" />\n  </vx-input-group>\n  \x3c!-- /RADIO --\x3e\n\n  \x3c!-- SWITCH --\x3e\n  <vx-input-group class="mb-base" prependClasses="border border-solid border-grey border-r-0">\n    <template slot="prepend">\n      <div class="prepend-text">\n        <vs-switch v-model="switch1" />\n      </div>\n    </template>\n\n    <vs-input v-model="input3" />\n  </vx-input-group>\n  \x3c!-- /SWITCH --\x3e\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      checkbox1: false,\n      radios1: null,\n      switch1: false,\n      input1: \'\',\n      input2: \'\',\n      input3: \'\'\n    }\n  }\n}\n<\/script>\n\n<style lang="scss">\n.vx-input-group {\n  .vx-input-group-prepend.form-element-border {\n    border-color: rgba(0,0,0,0.25);\n  }\n\n}\n\n.theme-dark {\n  .vx-input-group {\n    .vx-input-group-prepend.form-element-border {\n      border-color: rgba(255,255,255,0.25);\n    }\n\n    .vs-inputx {\n      border-color: rgba(255,255,255,0.25) !important;\n    }\n  }\n}\n</style>\n    ')])],2)},C=[],y={data:function(){return{checkbox1:!1,radios1:null,switch1:!1,input1:"",input2:"",input3:""}}},_=y,k=(e("8390"),Object(l["a"])(_,f,C,!1,null,null,null)),h=k.exports,B=function(){var t=this,n=t._self._c;return n("vx-card",{attrs:{title:"Multiple Addons","code-toggler":""}},[n("div",{staticClass:"mb-base"},[n("p",[n("code",[t._v("vx-input-group")]),t._v(" component provides various options to create desired form input group.")])]),n("vx-input-group",{staticClass:"mb-base"},[n("template",{slot:"prepend"},[n("div",{staticClass:"prepend-text bg-primary"},[n("span",[t._v("$")])]),n("div",{staticClass:"prepend-text bg-primary"},[n("span",[t._v("0.00")])])]),n("vs-input",{model:{value:t.title1,callback:function(n){t.title1=n},expression:"title1"}})],2),n("vx-input-group",{staticClass:"mb-base"},[n("template",{slot:"append"},[n("div",{staticClass:"append-text bg-primary"},[n("span",[t._v("$")])]),n("div",{staticClass:"append-text bg-primary"},[n("span",[t._v("0.00")])])]),n("vs-input",{model:{value:t.title2,callback:function(n){t.title2=n},expression:"title2"}})],2),n("template",{slot:"codeContainer"},[t._v('\n<template>\n  <div>\n    \x3c!-- ADDONS PREPEND --\x3e\n    <vx-input-group class="mb-base">\n      <template slot="prepend">\n        <div class="prepend-text bg-primary">\n          <span>$</span>\n        </div>\n        <div class="prepend-text bg-primary">\n          <span>0.00</span>\n        </div>\n      </template>\n\n      <vs-input v-model="title1" />\n    </vx-input-group>\n    \x3c!-- /ADDONS PREPEND --\x3e\n\n    \x3c!-- ADDONS APPEND --\x3e\n    <vx-input-group class="mb-base">\n      <template slot="append">\n        <div class="append-text bg-primary">\n          <span>$</span>\n        </div>\n        <div class="append-text bg-primary">\n          <span>0.00</span>\n        </div>\n      </template>\n\n      <vs-input v-model="title2" />\n    </vx-input-group>\n    \x3c!-- /ADDONS APPEND --\x3e\n  </div>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      title1: \'\',\n      title2: \'\',\n    }\n  }\n}\n<\/script>\n    ')])],2)},A=[],E={data:function(){return{title1:"",title2:""}}},D=E,w=Object(l["a"])(D,B,A,!1,null,null,null),U=w.exports,L=function(){var t=this,n=t._self._c;return n("vx-card",{attrs:{title:"Button addons","code-toggler":""}},[n("div",{staticClass:"mb-base"},[n("span",[t._v("You can also use button as addons to your input")])]),n("vx-input-group",{staticClass:"mb-base"},[n("template",{slot:"prepend"},[n("div",{staticClass:"prepend-text btn-addon"},[n("vs-button",{attrs:{color:"primary"}},[t._v("Button")])],1)]),n("vs-input",{model:{value:t.input1,callback:function(n){t.input1=n},expression:"input1"}})],2),n("vx-input-group",{staticClass:"mb-base"},[n("vs-input",{model:{value:t.input2,callback:function(n){t.input2=n},expression:"input2"}}),n("template",{slot:"append"},[n("div",{staticClass:"append-text btn-addon"},[n("vs-button",{attrs:{color:"primary"}},[t._v("Button")])],1)])],2),n("vx-input-group",{staticClass:"mb-base"},[n("template",{slot:"prepend"},[n("div",{staticClass:"prepend-text btn-addon"},[n("vs-button",{attrs:{color:"primary",type:"border"}},[t._v("Button1")]),n("vs-button",{attrs:{color:"primary",type:"border"}},[t._v("Button2")])],1)]),n("vs-input",{model:{value:t.input3,callback:function(n){t.input3=n},expression:"input3"}})],2),n("vx-input-group",{staticClass:"mb-base"},[n("vs-input",{model:{value:t.input4,callback:function(n){t.input4=n},expression:"input4"}}),n("template",{slot:"append"},[n("div",{staticClass:"append-text btn-addon"},[n("vs-button",{attrs:{color:"primary",type:"border"}},[t._v("Button1")]),n("vs-button",{attrs:{color:"primary",type:"border"}},[t._v("Button2")])],1)])],2),n("template",{slot:"codeContainer"},[t._v('\n<template>\n  <div>\n    \x3c!-- Basic --\x3e\n    <vx-input-group class="mb-base">\n      <template slot="prepend">\n        <div class="prepend-text btn-addon">\n          <vs-button color="primary">Button</vs-button>\n        </div>\n      </template>\n\n      <vs-input v-model="input1" />\n    </vx-input-group>\n    \x3c!-- /Basic --\x3e\n\n    \x3c!-- Append Button --\x3e\n    <vx-input-group class="mb-base">\n      <vs-input v-model="input2" />\n\n      <template slot="append">\n        <div class="append-text btn-addon">\n          <vs-button color="primary">Button</vs-button>\n        </div>\n      </template>\n    </vx-input-group>\n    \x3c!-- /Append Button --\x3e\n\n    \x3c!-- Prepend Two Buttons --\x3e\n    <vx-input-group class="mb-base">\n      <template slot="prepend">\n        <div class="prepend-text btn-addon">\n          <vs-button color="primary" type="border">Button1</vs-button>\n          <vs-button color="primary" type="border">Button2</vs-button>\n        </div>\n      </template>\n\n      <vs-input v-model="input3" />\n    </vx-input-group>\n    \x3c!-- /Prepend Two Buttons --\x3e\n\n    \x3c!-- Append Two Buttons --\x3e\n    <vx-input-group class="mb-base">\n      <vs-input v-model="input4" />\n\n      <template slot="append">\n        <div class="append-text btn-addon">\n          <vs-button color="primary" type="border">Button1</vs-button>\n          <vs-button color="primary" type="border">Button2</vs-button>\n        </div>\n      </template>\n    </vx-input-group>\n    \x3c!-- /Append Two Buttons --\x3e\n  </div>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      input1: \'\',\n      input2: \'\',\n      input3: \'\',\n      input4: \'\'\n    }\n  }\n}\n<\/script>\n    ')])],2)},O=[],S={data:function(){return{input1:"",input2:"",input3:"",input4:""}}},T=S,I=Object(l["a"])(T,L,O,!1,null,null,null),N=I.exports,P={components:{FormInputGroupBasic:d,FormInputGroupSizing:g,FormInputGroupFormElements:h,FormInputGroupButtonAddons:N,FormInputGroupMultipleAddons:U}},R=P,z=Object(l["a"])(R,p,s,!1,null,null,null);n["default"]=z.exports},8390:function(t,n,e){"use strict";e("92d7")},"92d7":function(t,n,e){}}]);