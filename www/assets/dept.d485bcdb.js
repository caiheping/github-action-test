import{H as t,M as e}from"./index.b4c50d36.js";function n(n={}){return t("/admin/system/department",e.get,n,!1)}function s(n){return t("/admin/system/department/"+n,e.get,{},!1)}function a(n){return t("/admin/system/department/"+n,e.del)}function r(n={}){return t("/admin/system/department",e.post,n)}function m(n){return t("/admin/system/department/"+n.deptId,e.put,n)}export{r as a,s as b,a as d,n as g,m as u};