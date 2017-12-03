import ApiBase from './api-base.js';

const endPoints = {
   "keypress": {
      "path": "/keypress/{key}",
      "method": "POST"
   },
   "query": {
      "apps": {
         "path": "/query/apps",
         "method": "GET"
      },
      "activeApp": {
         "path": "/query/apps",
         "method": "GET"
      }
   }
};

export default class RokuApi extends ApiBase {
   constructor(props) {
      props['endPoints'] = endPoints;
      super(props);
   }
}
