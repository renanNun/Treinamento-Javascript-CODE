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

function mascaraData(val) {
    var pass = val.value;
    var expr = /[0123456789]/;
  
    for (i = 0; i < pass.length; i++) {
      // charAt -> retorna o caractere posicionado no índice especificado
      var lchar = val.value.charAt(i);
      var nchar = val.value.charAt(i + 1);
  
      if (i == 0) {
        // search -> retorna um valor inteiro, indicando a posição do inicio da primeira
        // ocorrência de expReg dentro de instStr. Se nenhuma ocorrencia for encontrada o método retornara -1
        // instStr.search(expReg);
        if ((lchar.search(expr) != 0) || (lchar > 3)) {
          val.value = "";
        }
  
      } else if (i == 1) {
  
        if (lchar.search(expr) != 0) {
          // substring(indice1,indice2)
          // indice1, indice2 -> será usado para delimitar a string
          var tst1 = val.value.substring(0, (i));
          val.value = tst1;
          continue;
        }
  
        if ((nchar != '/') && (nchar != '')) {
          var tst1 = val.value.substring(0, (i) + 1);
  
          if (nchar.search(expr) != 0)
            var tst2 = val.value.substring(i + 2, pass.length);
          else
            var tst2 = val.value.substring(i + 1, pass.length);
  
          val.value = tst1 + '/' + tst2;
        }
  
      } else if (i == 4) {
  
        if (lchar.search(expr) != 0) {
          var tst1 = val.value.substring(0, (i));
          val.value = tst1;
          continue;
        }
  
        if ((nchar != '/') && (nchar != '')) {
          var tst1 = val.value.substring(0, (i) + 1);
  
          if (nchar.search(expr) != 0)
            var tst2 = val.value.substring(i + 2, pass.length);
          else
            var tst2 = val.value.substring(i + 1, pass.length);
  
          val.value = tst1 + '/' + tst2;
        }
      }
  
      if (i >= 6) {
        if (lchar.search(expr) != 0) {
          var tst1 = val.value.substring(0, (i));
          val.value = tst1;
        }
      }
    }
  
    if (pass.length > 10)
      val.value = val.value.substring(0, 10);
    return true;
  }