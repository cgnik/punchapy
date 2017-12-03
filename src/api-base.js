class ApiBase {
   constructor(props) {
      const p = props || {};
      this.baseUrl = p['baseUrl'] || "/";
      this.endPoints = p['endPoints'] || {};
   }

   callify() {
      for (let p in this.endPoints) {
         if (this.endPoints.hasOwnProperty(p)) {
            const ep = this.endPoints[p];
         }
      }
   }

   fetch(url, method) {
      console.log(url);
   }
}

export default ApiBase;