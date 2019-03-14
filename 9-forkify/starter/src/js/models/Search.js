import axios from "axios";

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults(query) {
    const key = "efdfec10879af9ff45387b287cb605a0";
    try {
      const res = await axios(
        `https://www.food2fork.com/api/search?key=${key}&q=${this.query}`
      );

        this.result = res.data.recipes;
        //console.log(this.result);
    } catch (error) {
      alert(error);
    }
  }
}
