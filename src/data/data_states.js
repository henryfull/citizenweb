
module.exports = {


  addDataCar: function() {
    var data = [];

    let temp = [];
    for (let i = 2000; i < 2020; i++) {
      temp.push(i);
    }
    data.year =  temp;
    temp = [];
    for (let i = 1; i < 13; i++) {
      temp.push(i);
    }
    data.month = temp; temp = [];
    for (let i = 3; i < 8; i++) {
      temp.push(i);
    }
    data.puertas = temp; temp = [];
    for (let i = 0; i < 24; i++) {
      if (i < 10) {
        let num = parseInt("0" + i)
        temp.push(num);
      } else {
        temp.push(i);
      }
    }
    data.hour = temp;temp = [];
    for (let i = 0; i < 60; i++) {
      if (i < 10) {
        let num = parseInt("0" + i)
        temp.push(num);
      } else {
        temp.push(i);
      }
      i += 4;
    }
    data.min = temp;temp = [];

  
    return data


  },

  addDataUser: function(data) {

    const captacion = [
      'web', 'scraping','phone'
      
    ];
    const account_type = [
      "basic","pro", "commercial","analyst", "master"
    ]
    const account_type_client = [
      "Cliente vendedor", "Cliente comprador","client","interesado"
    ]
    const account_type_work = [
      "develop","design", "worker","sales", "workshop", "marketing", "master"
    ]
    let edad = []
    for (let i = 18; i < 100; i++) {
      edad.push(i);
    }
    
    data.edad =  edad;
    /* 
    for (const value of captacion) {
      data.captacion[value] = { captacion: value };
    }
    for (const value of account_type_client) {
      data.account_type_client[value] = { account_type_client: value };
    }
    */
   data.captacion =  captacion;
    data.account_type = account_type;
    data.account_type_client = account_type_client;
    data.account_type_work = account_type_work;
  }


};
