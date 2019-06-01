const data = {
    "Рыбы": {
      "Форель": {},
      "Щука": {}
    },
  
    "Деревья": {
      "Хвойные": {
        "Лиственница": {},
        "Ель": {}
      },
      "Цветковые": {
        "Берёза": {},
        "Тополь": {}
      }
    }
  };

function isEmpty(obj) {
  for(var key in obj) {
    if(obj.hasOwnProperty(key))
      return false;
  }
    return true;
}

const container = document.getElementById("container");

function createTree(container, data) {
  if(!isEmpty(data)) {
    let ul = document.createElement("ul");
    container.append(ul);
    for(let key in data) {
      let li = document.createElement("li");
      li.textContent = key;
      ul.appendChild(li);
      createTree(li, data[key]);
    }
  }
}

createTree(container, data);