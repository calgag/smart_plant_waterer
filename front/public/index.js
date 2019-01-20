var app = new Vue({
  el: '#app',
  data: {
    title: "Smart Plant Waterer",
    buttonNum: [{text: "1", open: false}, {text: "2", open: false}, {text: "3", open:false}, {text: "4", open:false}],
    changeValve: function(num){
      if(num.open == false){
        axios.get("http://10.16.8.92:8000/open/" + num.text).then(
          function(response){
            console.log(response);
          }
        );
      }else{
        axios.get("http://10.16.8.92:8000/close/" + num.text).then(
          function(response){
            console.log(response);
          }
        );
      }
      num.open = !num.open;
    }
  }
});
