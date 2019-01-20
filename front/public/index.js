var app = new Vue({
  el: '#app',
  data: {
    title: "Smart Plant Waterer",
    buttonNum: [{text: "1", open: false}, {text: "2", open: false}, {text: "3", open:false}, {text: "4", open:false}],
    changeValve: function(num){
      axios.get('https://api.coindesk.com/v1/bpi/currentprice.json').then(
        function(response){
          console.log(response);
          num.open = !num.open;
        }
      );
    }
  }
});
