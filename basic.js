var app = new Vue({ 
    el: '#app',
    data: {
        message: 'Hello Miguel!'
    }
});

var app2 = new Vue({
    el: '#app-2',
    data: {
        bucl:[
            { message:"primer pagina ok"  },
            { message:"Segunda pagina Nok" },
            { message:'Tercer pagina ok' },
        ]
    }
  })