{/* <ul>
<li>1</li>
<li>2</li>
</ul>

 */}


const el = document.querySelector("ul");
// console.log(el);
el.insertAdjacentHTML("beforeEnd", "<li>3</li><li>4</li><li>5</li>");