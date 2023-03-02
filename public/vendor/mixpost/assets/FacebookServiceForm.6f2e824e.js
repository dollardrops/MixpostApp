import{r as _,o as v,m as k,w as s,b as t,a as e,f as c,d as b}from"./app.02ca75b8.js";import{u as h}from"./useNotifications.d73c650d.js";import{a as x,_ as g}from"./PrimaryButton.b981af70.js";import{_ as n}from"./Input.42d14616.js";import{F as w}from"./Facebook.d72fed30.js";import{H as m}from"./HorizontalGroup.f63dde90.js";import{_ as V,a as f}from"./ReadDocHelp.efa3b9fa.js";const F={class:"flex items-center"},y={class:"mr-xs"},S=t("span",null,"Facebook",-1),$=t("p",null,[t("a",{href:"https://developers.facebook.com/apps",class:"link",target:"_blank"},"Create an App on Facebook"),c('. Select "Business" for the type of application. ')],-1),B=c("App ID"),N={class:"w-full"},A=c("App secret"),C={class:"w-full"},I=c("Save"),G={__name:"FacebookServiceForm",props:{form:{required:!0,type:Object}},setup(o){const d=o,{notify:u}=h(),a=_({}),p=()=>{a.value={},b.Inertia.put(route("mixpost.services.update",{service:"facebook"}),d.form,{preserveScroll:!0,onSuccess(){u("success","Facebook credentials have been saved")},onError:i=>{a.value=i}})};return(i,l)=>(v(),k(g,{class:"mt-lg"},{title:s(()=>[t("div",F,[t("span",y,[e(w,{class:"text-facebook"})]),S])]),description:s(()=>[$,e(V,{href:"https://mixpost.app/docs/1.0.0/facebook",class:"mt-xs"})]),default:s(()=>[e(m,{class:"mt-lg"},{title:s(()=>[B]),default:s(()=>[t("div",N,[e(n,{modelValue:o.form.client_id,"onUpdate:modelValue":l[0]||(l[0]=r=>o.form.client_id=r),type:"text",class:"w-full",autocomplete:"off"},null,8,["modelValue"]),e(f,{message:a.value.client_id},null,8,["message"])])]),_:1}),e(m,{class:"mt-lg"},{title:s(()=>[A]),default:s(()=>[t("div",C,[e(n,{modelValue:o.form.client_secret,"onUpdate:modelValue":l[1]||(l[1]=r=>o.form.client_secret=r),type:"password",class:"w-full",autocomplete:"new-password"},null,8,["modelValue"]),e(f,{message:a.value.client_secret},null,8,["message"])])]),_:1}),e(x,{onClick:p,class:"mt-lg"},{default:s(()=>[I]),_:1})]),_:1}))}};export{G as default};
