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

function loadChef(){
    let out = "<table id='tblChef'><tbody>"
    fetch('Builtin/Menu.json')
        .then(response => response.json())
        .then(data => {
            console.log(data[0].Path);
            for(let i=0; i<data.length; i++){
                out += "<tbody><tr><td><img class='Chef_img' src='"+data[i].Path+"'alt='Chef Photo'></td><td>"+data[i].Name+"</td><td>"+data[i].Food_Category+"</td></tr>";
            }
            out+="</tbody></table>";
            document.getElementById('main-content').innerHTML = out;
        })
        .catch(error => {
            console.error('Error fetching data: ', error);
            document.getElementById('userData').innerHTML = '<p>Error loading user data.</p>';
        });
}

function about(){
    let out = "<div id='about_para'><p>Nestled in the heart of our beloved city, Sahaj Restaurant stands as a testament to culinary excellence and    historical richness. Since opening its doors in 1998, our restaurant has been more than just a place to dine; it's a journey through time, where each dish tells a story of heritage, passion, and the timeless art of cooking.</p><p>Founded by Sahaj Satani, a visionary chef with a profound respect for Veg traditions, sahaj has evolved from a humble family-run eatery into a landmark of gastronomic innovation. Our walls, adorned with photographs and memorabilia, whisper tales of yesteryears, inviting diners to partake in a legacy that has shaped the local culinary scene.</p><br><br><p>At Sahaj Restaurant, we pride ourselves on our commitment to authenticity and excellence. Our menu, a curatedselection of traditional recipes passed down through generations, is complemented by modern interpretations that celebrate our evolving tastes and techniques. Each ingredient is sourced from the finest local producers,ensuring a farm-to-table experience that honors our roots and the bounty of our land.</p><p>Beyond the culinary delights, sahaj offers an array of facilities designed to enhance your diningexperience. Our elegantly appointed private dining rooms provide the perfect backdrop for intimate gatherings, celebrations, and corporate events, each serviced by our attentive staff who are dedicated to making your occasion memorable.</p><p>For those seeking an immersive experience, our cooking classes and wine tastings offer a hands-on journeythrough the flavors and crafts that define our culinary identity. Led by our talented chefs and sommeliers,these sessions are an opportunity to delve deeper into the artistry that fuels our passion.</p><p>As we look to the futurSahaj remains steadfast in our dedication to preserving the rich culinarytraditions that define us, while embracing the innovations that drive us forward. Whether you're a long-timepatron or a first-time visitor, we invite you to discover the history, flavors, and hospitality that makeSahaj Restaurant a cherished destination for all who appreciate the finer aspects of dining.</p><br><p>Join us at Sahaj Restauranwhere history is served with every meal, and each visit is an opportunity tomakeyour own mark on our storied legacy.</p></div>"
    document.getElementById('main-content').innerHTML = out;
}

function homeRedirect(){
    location.href = "index.html";
}
function contactRedirect(){
    location.href = "ContactUS.html";
}
function sign(){
    location.href = "sign.html";
}
function login(){
    location.href = "login.html";
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
