function addItem()
{
    var content = document.getElementById("inputItem").children[0].value;
    //console.log(content);

    if(content !== "")
    {
        let element = document.createElement("li");
        element.classList.add("list-group-item");
        element.innerText = content;
        document.getElementById("listItem").children[0].appendChild(element);
        document.getElementById("inputItem").children[0].value = "";
    }
}

function changeTitle()
{
    var title = document.getElementById("image").children[2].value;

    document.getElementById("image").children[0].innerHTML = title;

}

function setTitle()
{
    var title = document.getElementById("image").children[2].value;
    //console.log(title);
    if(title !== "") {
       document.getElementById("image").children[0].innerHTML = title;
       var title = document.getElementById("image").children[2].value = "";
    }
}

function changeUrlImg()
{
    var image = document.getElementById("image").children[1];
    //console.log(image.src);

    if(image.src === "https://media-exp1.licdn.com/dms/image/C4E0BAQHJVUdjXcahnQ/company-logo_200_200/0?e=2159024400&v=beta&t=jzN30LRzuT9F1uzXKHmVyd_KzeZOvH2tfhj22z2AWfQ")
    {
        image.src = "https://miro.medium.com/max/852/1*sSgZ71s6I_m4f37-7N7eYw.jpeg";
        image.style.height = "200px"
    }else{
        image.src = "https://media-exp1.licdn.com/dms/image/C4E0BAQHJVUdjXcahnQ/company-logo_200_200/0?e=2159024400&v=beta&t=jzN30LRzuT9F1uzXKHmVyd_KzeZOvH2tfhj22z2AWfQ";
        image.style.height = "200px"
    }

}

function changeClass()
{
    let body = document.getElementById("body");
    
    if(body.classList.contains("body-class")){
        body.classList.remove("body-class");
        body.classList.add("new-body");
    }else{
        body.classList.remove("new-body");
        body.classList.add("body-class"); 
    }
}

function mascaraData(val){
    var data = val.value;
    //console.log(data);
    if (data.length == 2){
      data = data + '/';
      val.value = data;
      return true;              
    }
    if (data.length == 5){
        data = data + '/';
        val.value = data;
        return true;
    }
}