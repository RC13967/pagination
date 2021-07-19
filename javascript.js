function fun(id){
   const tableselect = document.querySelector("table");
   if(tableselect!=null){
       tableselect.remove()
   }
var table = document.createElement("table");
var thead = document.createElement("thead");
var tr = document.createElement("tr");
var th1 = document.createElement("th");
var th2 = document.createElement("th");
th1.innerHTML="name";
th2.innerHTML="email";
tr.append(th1,th2);
thead.append(tr);
var tbody = document.createElement("tbody");
fetch("https://gist.githubusercontent.com/rvsp/add40254aa126f045837fa5b51f47f1f/raw/4d724bfabf4cce7379a386e23bef6576ab99a2f9/pagination.json", {
    method: "GET"
  })
    .then((data) => {
      return data.json();
    })
    .then((users) => foo(users))
    function foo(users){
        var count=id*10;
        for(i=count;i<count+10;i++){
            var tr1 = document.createElement("tr");
            var td1= document.createElement("td");
            td1.innerHTML=users[i].name;
            var td2= document.createElement("td");
            td2.innerHTML=users[i].email;
            tr1.append(td1,td2);
            tbody.append(tr1);
        }   
    }
    table.append(thead,tbody);
    document.body.append(table);
   
}


