import axios from "axios";

export default {
  getDrinks: function (id) {
    return axios.get("/api/lattes/" + id);
  },
  pushDrinks: function (){
    return axios.post("/api/lattes/");
  }

};
