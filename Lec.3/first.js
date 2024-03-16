console.log("hello World!");

let data = {
  name1 : function(){
    console.log("Dhaval P Leelawala");
  },
  age : 24,
  marks : function (sub1,sub2,sub3){
    let total = sub1 + sub2 + sub3;
    return total;
  }
}

module.exports = data;