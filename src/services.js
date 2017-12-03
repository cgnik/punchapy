const fetch = require('isomorphic-fetch');

const baseUrl = "/api/punch";
export default class PunchApi {
   constructor() {
   }

   listPunches() {
      console.log(baseUrl);
      return fetch(baseUrl, {
         credentials: 'include'
      }).then(r => r.json());
   }
}
