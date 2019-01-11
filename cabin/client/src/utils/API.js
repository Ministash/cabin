import axios from "axios";

export default {
  getDrinks: function (id) {
    return axios.get("/api/drinks/" + id);
  },
  pushDrinks: function (id){
    return axios.post("/api/drinks/" + id);
  },
  getFoods: function (id){
    return axios.get("/api/foods/" + id)
  }

};
