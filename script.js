function addItem()
{
    var content = document.getElementById("inputItemList").value;
    //console.log(content);
    if( content !== "")
    {
        var element = document.createElement("li");
        element.classList.add("list-group-item");
        element.innerText = content;
        document.getElementById("list").appendChild(element);
        document.getElementById("inputItemList").value = "";
    }
}

function changeTitle()
{
    var title = document.getElementById("inputTitle").value;

    document.getElementById("title").innerHTML = title;
}

function setTitle()
{
    var title = document.getElementById("inputTitle").value;

    if(title !== "") {
       document.getElementById("title").innerHTML = title;
       document.getElementById("inputTitle").value = "";
    }
}

function changeUrlImg()
{
    if(document.getElementById("image").src === "https://media-exp1.licdn.com/dms/image/C4E0BAQHJVUdjXcahnQ/company-logo_200_200/0?e=2159024400&v=beta&t=jzN30LRzuT9F1uzXKHmVyd_KzeZOvH2tfhj22z2AWfQ")
    {
        document.getElementById("image").src = "https://miro.medium.com/max/852/1*sSgZ71s6I_m4f37-7N7eYw.jpeg";
        document.getElementById("image").style.height = "200px"
    }else{
        document.getElementById("image").src = "https://media-exp1.licdn.com/dms/image/C4E0BAQHJVUdjXcahnQ/company-logo_200_200/0?e=2159024400&v=beta&t=jzN30LRzuT9F1uzXKHmVyd_KzeZOvH2tfhj22z2AWfQ";
        document.getElementById("image").style.height = "200px"
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

function changeFormat()
{   
    let element = document.getElementById("inputMoney");
    let valor = element.value;

    valor = valor + '';
    valor = parseInt(valor.replace(/[\D]+/g, ''));
    valor = valor + '';
    valor = valor.replace(/([0-9]{2})$/g, ",$1");

    if (valor.length > 6) {
        valor = valor.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
    }

    element.value = valor;
    if(valor == 'NaN') element.value = '';
    
}