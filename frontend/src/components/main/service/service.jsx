var axios = require('axios');


class DataService {

    static loadData(callback) {
        axios.get('/api/data/').then(response => {
            console.log(JSON.stringify(response.data))
            callback && callback(response.data);
        }).catch(error => {
            console.log(error);
        });
    }
    static createData(url, callback) {
        axios.post('/api/data/', url).then( response => {
            callback && callback(response);
        }).catch( error => {
            console.log(error);
        });
    }


};

export default DataService;
