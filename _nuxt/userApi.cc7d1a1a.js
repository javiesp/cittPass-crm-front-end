import{a as s}from"./axios.4d564c32.js";s.defaults.validateStatus=function(e){return e>=200&&e<300};const r=s.create({baseURL:"http://localhost:3005/",timeout:1e5}),t=localStorage.getItem("accessToken");r.interceptors.request.use(e=>(t&&(e.headers.Authorization=`Bearer ${t}`),e),e=>Promise.reject(e));r.interceptors.response.use(e=>e,e=>Promise.reject(e));const n=e=>r.post("/users/login",e),a=e=>r.get("users/find-all-users",{params:{proyect_id:e}});export{a as g,n as u};
