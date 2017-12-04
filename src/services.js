const fetch = require('isomorphic-fetch');

const baseUrl = "/api/punch";
export default class PunchApi {
   constructor() {
   }

   newPunch(punch) {
      return fetch(baseUrl, {
         method: "POST",
         credentials: 'include',
         headers: {'Content-Type': 'application/json'},
         body: JSON.stringify(punch)
      }).then(r => r.json());
   }

   listPunches() {
      return fetch(baseUrl, {
         credentials: 'include'
      }).then(r => r.json());
   }
}
