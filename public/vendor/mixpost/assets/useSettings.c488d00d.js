import{r as N,a as T}from"./helpers.2ea8ee66.js";import{j as w,U}from"./app.02ca75b8.js";var g=6e4,p=36e5;function j(t,e){var r;N(1,arguments);var a=T((r=e==null?void 0:e.additionalDigits)!==null&&r!==void 0?r:2);if(a!==2&&a!==1&&a!==0)throw new RangeError("additionalDigits must be 0, 1 or 2");if(!(typeof t=="string"||Object.prototype.toString.call(t)==="[object String]"))return new Date(NaN);var n=S(t),i;if(n.date){var l=x(n.date,a);i=z(l.restDateString,l.year)}if(!i||isNaN(i.getTime()))return new Date(NaN);var v=i.getTime(),s=0,o;if(n.time&&(s=O(n.time),isNaN(s)))return new Date(NaN);if(n.timezone){if(o=Y(n.timezone),isNaN(o))return new Date(NaN)}else{var u=new Date(v+s),d=new Date(0);return d.setFullYear(u.getUTCFullYear(),u.getUTCMonth(),u.getUTCDate()),d.setHours(u.getUTCHours(),u.getUTCMinutes(),u.getUTCSeconds(),u.getUTCMilliseconds()),d}return new Date(v+s+o)}var m={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},h=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,C=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,I=/^([+-])(\d{2})(?::?(\d{2}))?$/;function S(t){var e={},r=t.split(m.dateTimeDelimiter),a;if(r.length>2)return e;if(/:/.test(r[0])?a=r[0]:(e.date=r[0],a=r[1],m.timeZoneDelimiter.test(e.date)&&(e.date=t.split(m.timeZoneDelimiter)[0],a=t.substr(e.date.length,t.length))),a){var n=m.timezone.exec(a);n?(e.time=a.replace(n[1],""),e.timezone=n[1]):e.time=a}return e}function x(t,e){var r=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+e)+"})|(\\d{2}|[+-]\\d{"+(2+e)+"})$)"),a=t.match(r);if(!a)return{year:NaN,restDateString:""};var n=a[1]?parseInt(a[1]):null,i=a[2]?parseInt(a[2]):null;return{year:i===null?n:i*100,restDateString:t.slice((a[1]||a[2]).length)}}function z(t,e){if(e===null)return new Date(NaN);var r=t.match(h);if(!r)return new Date(NaN);var a=!!r[4],n=f(r[1]),i=f(r[2])-1,l=f(r[3]),v=f(r[4]),s=f(r[5])-1;if(a)return $(e,v,s)?Z(e,v,s):new Date(NaN);var o=new Date(0);return!M(e,i,l)||!_(e,n)?new Date(NaN):(o.setUTCFullYear(e,i,Math.max(n,l)),o)}function f(t){return t?parseInt(t):1}function O(t){var e=t.match(C);if(!e)return NaN;var r=c(e[1]),a=c(e[2]),n=c(e[3]);return W(r,a,n)?r*p+a*g+n*1e3:NaN}function c(t){return t&&parseFloat(t.replace(",","."))||0}function Y(t){if(t==="Z")return 0;var e=t.match(I);if(!e)return 0;var r=e[1]==="+"?-1:1,a=parseInt(e[2]),n=e[3]&&parseInt(e[3])||0;return b(a,n)?r*(a*p+n*g):NaN}function Z(t,e,r){var a=new Date(0);a.setUTCFullYear(t,0,4);var n=a.getUTCDay()||7,i=(e-1)*7+r+1-n;return a.setUTCDate(a.getUTCDate()+i),a}var F=[31,null,31,30,31,30,31,31,30,31,30,31];function D(t){return t%400===0||t%4===0&&t%100!==0}function M(t,e,r){return e>=0&&e<=11&&r>=1&&r<=(F[e]||(D(t)?29:28))}function _(t,e){return e>=1&&e<=(D(t)?366:365)}function $(t,e,r){return e>=1&&e<=53&&r>=0&&r<=6}function W(t,e,r){return t===24?e===0&&r===0:r>=0&&r<60&&e>=0&&e<60&&t>=0&&t<25}function b(t,e){return e>=0&&e<=59}const y=()=>{const t=w(()=>U().props.value.mixpost.settings);return{getSetting:r=>t.value[r],timeZone:t.value.timezone,timeFormat:t.value.time_format,weekStartsOn:t.value.week_starts_on}};export{j as p,y as u};
