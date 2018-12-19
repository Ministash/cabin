import axios from "axios";

export default {
  getLattes: function (id) {
    return axios.get("/api/lattes/" + id);
  },
  pushLattes: function (){
    return axios.post("/api/lattes/");
  }

};
