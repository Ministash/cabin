import axios from "axios";

export default {
  getLattes: function () {
    return axios.get("/api/lattes/now")
    .then(resp => {console.log(resp.data)})
    .catch(error=>{console.log(error)});
  },
  pushLattes: function (){
    return axios.post("/api/lattes/now")
    .then(resp => {console.log(resp.data)})
    .catch(error=>{console.log(error)});
  }
  // Hello: function () {
  //   return axios.get("/hello")
  //     .then(resp => { console.log(resp.data) })
  //     .catch(error => { console.log(error) });
  // }

};
