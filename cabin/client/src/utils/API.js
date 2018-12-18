import axios from "axios";

export default {
  getLattes: function () {
    return axios.get("/api/lattes/");
  },
  pushLattes: function (){
    return axios.post("/api/lattes/");
  }

};
