var app = new Vue({
  el: '#app',
  data: {
    title: "Smart Plant Waterer",
    buttonNum: [{text: "1"}, {text: "2"}, {text: "3"}, {text: "4"}],
    openValve: function(valveNum){
      axios.get('https://api.coindesk.com/v1/bpi/currentprice.json').then(
        response => (console.log(response)));
    }
  }
});
