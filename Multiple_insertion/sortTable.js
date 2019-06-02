function sort1() {
    var tbody = document.getElementsByTagName('tbody')[0];
    var rows = [];

    for (var i = tbody.children.length - 1; i >= 0; i--) {
      var child = tbody.removeChild(tbody.children[i]);
      rows.push(child);
    }

    rows.sort(function(a, b) {
      return a.lastChild.innerHTML - b.lastChild.innerHTML;
    })

    for (var i = 0; i < rows.length; i++) {
      tbody.appendChild(rows[i]);
    }

  }

  sort1();