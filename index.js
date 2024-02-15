function loadMenu(){
    // alert("Enter in function");
    let out = "<table id='tblMenu'><thead><tr><th>Menu id</th><th>Food Category</th><th>Food Itemname</th><th>Food Ingredient</th><th>Price</th><th>Qty</th></tr></thead><tbody>"
    console.log(out);

    let req = new XMLHttpRequest();
    req.open('GET','Builtin/MenuItem.xml',true);

    req.onreadystatechange = function(){

        let data = req.responseXML;
        if(req.readyState==4 && req.status==200){
            let items = data.getElementsByTagName("item");
            
            for(let i=0; i<items.length; i++){
                let mid = items[i].getElementsByTagName('menuid')[0].textContent;
                let fcategory = items[i].getElementsByTagName('foodcategory')[0].textContent;
                let fname = items[i].getElementsByTagName('fooditemname')[0].textContent;
                let fingred = items[i].getElementsByTagName('foodingredient')[0].textContent;
                let pr = items[i].getElementsByTagName('price')[0].textContent;
                let qt = items[i].getElementsByTagName('qty')[0].textContent;
                out += "<tr><td>"+mid+"</td>"+"<td>"+fcategory+"</td>"+"<td>"+fname+"</td>"+"<td>"+fingred+"</td>"+"<td>"+pr+"</td>"+"<td>"+qt+"</td>"+"</td></tr>"
            }
            out += "</tbody></table>";
        }
        document.getElementById('main-content').innerHTML = out;
    }
    req.send();
}

function homeRedirect(){
    location.href = "index.html";
}


























// $(document).ready(function () {
//     $('nav a').click(function (e){
//         e.preventDefault();
//         var page = $(this).attr("href");
//         loadContent(page);
//     })
// });


// function loadContent(page){
//     $('#main-content').load(page);
// }


// $(document).ready(function () {
//     // Load default content on page load
//     loadContent('Home.html');
//     // Handle navigation clicks
//     $('nav a').click(function (e) {
//         e.preventDefault();
//         var page = $(this).attr('href');
//         loadContent(page);
//     });
// });

// function loadContent(page) {
//     $('#main-content').load(page);
// }
