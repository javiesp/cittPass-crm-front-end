import{a as s}from"./axios.4d564c32.js";s.defaults.validateStatus=function(e){return e>=200&&e<300};const t=s.create({baseURL:"http://localhost:3005/",timeout:1e5}),a=localStorage.getItem("accessToken");t.interceptors.request.use(e=>(a&&(e.headers.Authorization=`Bearer ${a}`),e),e=>Promise.reject(e));t.interceptors.response.use(e=>e,e=>Promise.reject(e));const c=()=>t.get("/rack-type/find-all-rack-types"),n=e=>t.delete("/rack-type/delete-rack-type/"+e),u=e=>(console.log(e),t.post("/rack-type/create-rack-type",e)),l=(e,r)=>(console.log("Datos enviados a la API:",r),t.put("/rack-type/update-rack-type/"+e,r));export{u as c,n as d,c as g,l as u};
