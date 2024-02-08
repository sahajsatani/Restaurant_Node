function Menu(){
    fetch('Builtin/Menu.json')
    .then((res) => res.json())
    .then((data) => {
        let out = 
        `<table id="menu-table">
        <thead>
            <tr>
                <th>No</th>
                <th>Item_Name</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody id="main_body">`
        for (let item of data) {
            out += `
            <tr>
                <td>${item.No}</td>
                <td>${item.Item_Name}</td>
                <td>${item.Price}</td>
            </tr>
        `;
            idx++;
        }
        out += `</tbody>
        </table>`;
        placeorder.innerHTML = out;
    });
}
// $(document).ready(function () {
//     // Load default content on page load
//     loadContent('Menu.html');
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

// const dt = new Object();
// fetch('./Menu.json')
//     .then((res) => res.json())
//     .then((data) => {
//         try {
//             console.log(data)
//             dt = JSON.parse(data)
//         } catch (error) {
//             console.log(error)
//         }
//     });
//     console.log(dt.No);
