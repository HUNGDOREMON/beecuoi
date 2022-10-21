(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-665e04ba"],{"0227":function(e,t,n){(function(e,n){n(t)})(0,(function(e){"use strict";var t="undefined"!==typeof window&&void 0!==window.flatpickr?window.flatpickr:{l10ns:{}},n={firstDayOfWeek:1,weekdays:{shorthand:["dim","lun","mar","mer","jeu","ven","sam"],longhand:["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"]},months:{shorthand:["janv","févr","mars","avr","mai","juin","juil","août","sept","oct","nov","déc"],longhand:["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"]},ordinal:function(e){return e>1?"":"er"},rangeSeparator:" au ",weekAbbreviation:"Sem",scrollTitle:"Défiler pour augmenter la valeur",toggleTitle:"Cliquer pour basculer",time_24hr:!0};t.l10ns.fr=n;var a=t.l10ns;e.French=n,e.default=a,Object.defineProperty(e,"__esModule",{value:!0})}))},"2be5":function(e,t,n){},c8de:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"extra-component-datetime-picker-demo"}},[e._m(0),t("div",{staticClass:"vx-row match-height"},[t("div",{staticClass:"vx-col md:w-1/2 w-full"},[t("datetime-picker-basic",{staticClass:"mb-base"})],1),t("div",{staticClass:"vx-col md:w-1/2 w-full"},[t("datetime-picker-datetime",{staticClass:"mb-base"})],1),t("div",{staticClass:"vx-col md:w-1/2 w-full"},[t("datetime-picker-time",{staticClass:"mb-base"})],1),t("div",{staticClass:"vx-col md:w-1/2 w-full"},[t("datetime-picker-locale",{staticClass:"mb-base"})],1),t("div",{staticClass:"vx-col md:w-1/2 w-full"},[t("datetime-picker-start-end",{staticClass:"mb-base"})],1),t("div",{staticClass:"vx-col md:w-1/2 w-full"},[t("datetime-picker-input",{staticClass:"mb-base"})],1),t("div",{staticClass:"vx-col w-full"},[t("datetime-picker-inline")],1)])])},i=[function(){var e=this,t=e._self._c;return t("p",{staticClass:"mb-4"},[e._v("vue-flatpickr-component is Vue.js component for Flatpickr datetime picker. Read full documnetation "),t("a",{attrs:{href:"https://github.com/ankurk91/vue-flatpickr-component",target:"_blank",rel:"nofollow"}},[e._v("here")])])}],c=function(){var e=this,t=e._self._c;return t("vx-card",{attrs:{title:"Basic","code-toggler":""}},[t("p",[e._v("Rendering basic Datetime Picker with "),t("code",[e._v("v-model")])]),t("div",{staticClass:"mt-5"},[t("flat-pickr",{model:{value:e.date,callback:function(t){e.date=t},expression:"date"}}),t("p",{staticClass:"mt-4"},[e._v("Selected Date: "+e._s(e.date))])],1),t("template",{slot:"codeContainer"},[e._v("\n<template>\n  <flat-pickr v-model=\"date\" />\n</template>\n\n<script>\nimport flatPickr from 'vue-flatpickr-component';\nimport 'flatpickr/dist/flatpickr.css';\n\nexport default {\n    data() {\n        return {\n            date: null,\n        }\n    },\n    components: {\n        flatPickr\n    }\n}\n<\/script>\n        ")])],2)},l=[],r=n("c38f"),o=n.n(r),s=(n("0952"),{data:function(){return{date:null}},components:{flatPickr:o.a}}),d=s,m=n("2877"),p=Object(m["a"])(d,c,l,!1,null,null,null),f=p.exports,u=function(){var e=this,t=e._self._c;return t("vx-card",{attrs:{title:"Datetime Picker","code-toggler":""}},[t("p",[e._v("Rendering datetime picker by updating config")]),t("div",{staticClass:"mt-5"},[t("flat-pickr",{attrs:{config:e.configdateTimePicker,placeholder:"Date Time"},model:{value:e.datetime,callback:function(t){e.datetime=t},expression:"datetime"}}),t("p",{staticClass:"mt-4"},[e._v("Selected Datetime: "+e._s(e.datetime))])],1),t("template",{slot:"codeContainer"},[e._v("\n<template>\n  <flat-pickr :config=\"configdateTimePicker\" v-model=\"datetime\" placeholder=\"Date Time\" />\n</template>\n\n<script>\nimport flatPickr from 'vue-flatpickr-component';\nimport 'flatpickr/dist/flatpickr.css';\n\nexport default {\n    data() {\n        return {\n            datetime: null,\n            configdateTimePicker: {\n              enableTime: true,\n              dateFormat: 'd-m-Y H:i'\n            }\n        }\n    },\n    components: {\n        flatPickr\n    }\n}\n<\/script>\n        ")])],2)},k=[],v={data:function(){return{datetime:null,configdateTimePicker:{enableTime:!0,dateFormat:"d-m-Y H:i"}}},components:{flatPickr:o.a}},g=v,h=Object(m["a"])(g,u,k,!1,null,null,null),P=h.exports,_=function(){var e=this,t=e._self._c;return t("vx-card",{attrs:{title:"Time Picker","code-toggler":""}},[t("p",[e._v("set "),t("code",[e._v("noCalendar")]),e._v(" to "),t("code",[e._v("true")]),e._v(" to hide calendar")]),t("div",{staticClass:"mt-5"},[t("flat-pickr",{attrs:{config:e.configdateTimePicker,placeholder:"Choose time"},model:{value:e.time,callback:function(t){e.time=t},expression:"time"}}),t("p",{staticClass:"mt-4"},[e._v("Selected Time: "+e._s(e.time))])],1),t("template",{slot:"codeContainer"},[e._v('\n<template>\n  <flat-pickr :config="configdateTimePicker" v-model="time" placeholder="Choose time" />\n</template>\n\n<script>\nimport flatPickr from \'vue-flatpickr-component\';\nimport \'flatpickr/dist/flatpickr.css\';\n\nexport default {\n    data() {\n        return {\n            time: null,\n            configdateTimePicker: {\n              enableTime: true,\n              enableSeconds: true,\n              noCalendar: true\n            }\n        }\n    },\n    components: {\n        flatPickr\n    }\n}\n<\/script>\n        ')])],2)},T=[],b={data:function(){return{time:null,configdateTimePicker:{enableTime:!0,enableSeconds:!0,noCalendar:!0}}},components:{flatPickr:o.a}},C=b,D=Object(m["a"])(C,_,T,!1,null,null,null),x=D.exports,w=function(){var e=this,t=e._self._c;return t("vx-card",{attrs:{title:"Change Locale","code-toggler":""}},[t("p",[e._v("Import locale and set "),t("code",[e._v("locale")]),e._v(" in config of picker to change locale.")]),t("div",{staticClass:"mt-5"},[t("flat-pickr",{attrs:{config:e.configdateTimePicker,placeholder:"Choose Date"},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}}),t("p",{staticClass:"mt-4"},[e._v("Selected Date: "+e._s(e.date))])],1),t("template",{slot:"codeContainer"},[e._v("\n<template>\n  <flat-pickr :config=\"configdateTimePicker\" v-model=\"date\" placeholder=\"Choose Date\" />\n</template>\n\n<script>\nimport flatPickr from 'vue-flatpickr-component'\nimport 'flatpickr/dist/flatpickr.min.css';\nimport {French as FrenchLocale} from 'flatpickr/dist/l10n/fr.js';\n\nexport default {\n    data() {\n        return {\n            date: null,\n            configdateTimePicker: {\n              locale: FrenchLocale\n            }\n        }\n    },\n    components: {\n        flatPickr\n    }\n}\n<\/script>\n        ")])],2)},F=[],j=(n("2be5"),n("0227")),S={data:function(){return{date:null,configdateTimePicker:{locale:j["French"]}}},components:{flatPickr:o.a}},I=S,O=Object(m["a"])(I,w,F,!1,null,null,null),y=O.exports,L=function(){var e=this,t=e._self._c;return t("vx-card",{attrs:{title:"Start-End Date","code-toggler":""}},[t("p",[e._v("Create start and end date - date picker")]),t("div",{staticClass:"mt-5"},[t("div",[t("flat-pickr",{attrs:{config:e.configFromdateTimePicker,placeholder:"From Date"},on:{"on-change":e.onFromChange},model:{value:e.fromDate,callback:function(t){e.fromDate=t},expression:"fromDate"}})],1),t("div",{staticClass:"mt-4"},[t("flat-pickr",{attrs:{config:e.configTodateTimePicker,placeholder:"To Date"},on:{"on-change":e.onToChange},model:{value:e.toDate,callback:function(t){e.toDate=t},expression:"toDate"}})],1)]),t("template",{slot:"codeContainer"},[e._v('\n<template>\n  <flat-pickr :config="configFromdateTimePicker" v-model="fromDate" placeholder="From Date" @on-change="onFromChange" />\n  <flat-pickr :config="configTodateTimePicker" v-model="toDate" placeholder="To Date" @on-change="onToChange" />\n</template>\n\n<script>\nimport flatPickr from \'vue-flatpickr-component\';\nimport \'flatpickr/dist/flatpickr.css\';\n\nexport default {\n    data() {\n        return {\n            fromDate: null,\n            toDate: null,\n            configFromdateTimePicker: {\n              minDate: new Date(),\n              maxDate: null\n            },\n            configTodateTimePicker: {\n              minDate: null\n            }\n        }\n    },\n    methods: {\n      onFromChange(selectedDates, dateStr, instance) {\n        this.$set(this.configTodateTimePicker, \'minDate\', dateStr);\n      },\n      onToChange(selectedDates, dateStr, instance) {\n        this.$set(this.configFromdateTimePicker, \'maxDate\', dateStr);\n      }\n    },\n    components: {\n        flatPickr\n    }\n}\n<\/script>\n        ')])],2)},$=[],R={data:function(){return{fromDate:null,toDate:null,configFromdateTimePicker:{minDate:new Date,maxDate:null},configTodateTimePicker:{minDate:null}}},methods:{onFromChange:function(e,t){this.$set(this.configTodateTimePicker,"minDate",t)},onToChange:function(e,t){this.$set(this.configFromdateTimePicker,"maxDate",t)}},components:{flatPickr:o.a}},A=R,B=Object(m["a"])(A,L,$,!1,null,null,null),E=B.exports,H=function(){var e=this,t=e._self._c;return t("vx-card",{attrs:{title:"Inline Picker","code-toggler":""}},[t("p",[e._v("Creating inline datetime picker by setting "),t("code",[e._v("inline")]),e._v(" to "),t("code",[e._v("true")])]),t("div",{staticClass:"mt-5"},[t("flat-pickr",{attrs:{config:e.configdateTimePicker,placeholder:"Inline Picker"},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}})],1),t("template",{slot:"codeContainer"},[e._v('\n<template>\n  <flat-pickr :config="configdateTimePicker" v-model="date" placeholder="Inline Picker" />\n</template>\n\n<script>\nimport flatPickr from \'vue-flatpickr-component\';\nimport \'flatpickr/dist/flatpickr.css\';\n\nexport default {\n    data() {\n        return {\n            date: null,\n            configdateTimePicker: {\n              inline: true,\n            }\n        }\n    },\n    components: {\n        flatPickr\n    }\n}\n<\/script>\n        ')])],2)},J=[],Y={data:function(){return{date:null,configdateTimePicker:{inline:!0}}},components:{flatPickr:o.a}},q=Y,M=Object(m["a"])(q,H,J,!1,null,null,null),U=M.exports,V=function(){var e=this,t=e._self._c;return t("vx-card",{attrs:{title:"Allow input in Picker","code-toggler":""}},[t("p",[e._v("Use "),t("code",[e._v("allowInput")]),e._v(" to create Datepicker with input support")]),t("div",{staticClass:"mt-5"},[t("flat-pickr",{attrs:{config:e.configdateTimePicker,placeholder:"Insert Date"},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}})],1),t("template",{slot:"codeContainer"},[e._v('\n<template>\n  <flat-pickr :config="configdateTimePicker" v-model="date" placeholder="Inline Picker" />\n</template>\n\n<script>\nimport flatPickr from \'vue-flatpickr-component\';\nimport \'flatpickr/dist/flatpickr.css\';\n\nexport default {\n    data() {\n        return {\n            date: null,\n            configdateTimePicker: {\n              inline: true,\n            }\n        }\n    },\n    components: {\n        flatPickr\n    }\n}\n<\/script>\n        ')])],2)},W=[],z={data:function(){return{date:null,configdateTimePicker:{allowInput:!0}}},components:{flatPickr:o.a}},G=z,K=Object(m["a"])(G,V,W,!1,null,null,null),N=K.exports,Q={components:{DatetimePickerBasic:f,DatetimePickerDatetime:P,DatetimePickerTime:x,DatetimePickerLocale:y,DatetimePickerStartEnd:E,DatetimePickerInline:U,DatetimePickerInput:N}},X=Q,Z=Object(m["a"])(X,a,i,!1,null,null,null);t["default"]=Z.exports}}]);