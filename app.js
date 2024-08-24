//localStorage.removeItem('userAccount_key');
//localStorage.removeItem('giohang');
let tk = localStorage.getItem('userAccount_key');
if (!tk) {
    alert("Xin lổi!")
    let userAccount = { //Tạo object lưu trữ tài khoản
        acc: [ //trong thuộc tính acc là một mảng
            {
                id: 1,
                name: "hee", //có các obj với các thuộc tính là name và pwd
                pwd: "hee",

         
            },
            {
                id: 2,
                name: "hii",
                pwd: "hii"
            },
        ]
    }
    localStorage.setItem('userAccount_key', JSON.stringify(userAccount));
}

let products = [ // Gồm thuộc tính data, thuộc tính này có kiểu "mảng"
    //Link mũ: https://www.adidas.com.vn/vi/mu_luoi_trai
    {// trong mảng data gồm các object, mỗi obj có 3 thuộc tính name, price, image
        name: "MATRIX 1999 DECK",
        price: "780.000đ - 1.470.000đ",
        image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/eea3771cbcbe40b096b89326764b08df_9366/Mu_adidas_golf_x_Jay3lle_DJen_JF4006_01_standard.jpg", //Chính là src của ảnh. <img src="image/matrix-1999-1.jpg">
        id:1
    },
    {
        name: "RAEDA DECK",
        price: "780.000đ - 1.470.000đ",
        image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/34463996419042dc91cd29a87a46b441_9366/Mu_Luoi_Trai_Vanh_Kep_DJen_IW8626_01_standard.jpg",
        id:2
    },
    {
        name: "MUSTY DECK",
        price: "780.000đ - 1.470.000đ",
        image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8b23e275101c4646931e878507c60a84_9366/Mu_Luoi_Trai_Code_Chaos_DJen_IS6578_01_standard.jpg",
        id: 3
    },
    {
        name: "TRISTIQUE DECK",
        price: "780.000đ - 1.470.000đ",
        image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/23462e6258a0424c85d3e2c8284b41a1_9366/Mu_Luoi_Trai_Code_Chaos_trang_IS6577_01_standard.jpg",
        id: 4
    },
    {
        name: "FIELD TRIP DECK",
        price: "780.000đ - 1.470.000đ",
        image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/aa6c69e5f9a74d4b8413a7570c67c772_9366/Mu_Bong_Chay_Sieu_Nhe_Theu_Logo_Be_IY7766_01_standard.jpg",
        id: 5
    },
    {
        name: "TARO RAINBOW LOGO DECK",
        price: "780.000đ - 1.670.000đ",
        image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/76eee5dd0abe4eee95e4550f5c94469f_9366/Mu_Snapback_Hoa_Tiet_Tour_Mau_xanh_da_troi_IW6734_01_standard.jpg",
        id: 6
    },
    {
        name: "NEON RAINBOW LOGO DECK",
        price: "780.000đ - 1.670.000đ",
        image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f6cbc7ddf0884eecb0a4df21014a1fdc_9366/Mu_Bong_Chay_San_Nha_Arsenal_DJo_IZ4387_01_standard.jpg",
        id: 7
    },
    {
        name: "ORANAGE LOGO DECK",
        price: "780.000đ - 1.670.000đ",
        image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1b392f15dbe544b996427321c2e57861_9366/Mu_Luoi_Trai_Must_Haves_Be_IM5231_01_standard.jpg",
        id: 8
    },
];

console.log(products)
//for (let items of products.data) { //Lặp lại tất cả những item trong object products với thuộc tính data vừa khai báo ở trên
//    let card = document.createElement("div") //sử dụng biến card: Tạo ra 1 thẻ div
//    card.classList.add("card") //Thẻ div đó có class là "card"

//    let imgContainer = document.createElement("div") // sd biến imgContainer để tạo thẻ div bao ngoài thẻ ảnh
//    imgContainer.classList.add("image-container") // Class của imgContainer là "image-container"

//    let image = document.createElement("img") // Tạo biến ảnh, tạo thẻ ảnh
//    image.setAttribute("src", items.image) //Gắn src cho thẻ ảnh là tên ảnh trong mảng data của product
//    imgContainer.appendChild(image) //Gắn image vừa tạo vào imgContainer (vào cuối)
//    card.appendChild(imgContainer) //Gắn imgContainer vừa tạo vào card (vào cuối)

//    let container = document.createElement("div") // Tạo biến container, tạo thẻ div
//    container.classList.add("container") // Class của thẻ là "container"

//    let name = document.createElement("h5"); // Tạo biến name, toạ thẻ h5
//    name.classList.add("product-name"); // Class của thẻ là "product-name"
//    name.innerText = items.name.toUpperCase(); // Gán text cho thẻ name là item.name của mảng data dưới dạng viết hoa
//    container.appendChild(name); //Gán name vào container (ở cuối)

//    let price = document.createElement("h6"); //Tạo biến price, tạo thẻ h6
//    price.innerHTML = "<b>Price:</b> " + items.price; //Tạo text bên trong thẻ là Price in đậm và giá có trong mảng data
//    container.appendChild(price);

//    let btn = document.createElement("button") //Tạo biến btn, tạo thẻ <button>
//    btn.setAttribute("onclick", "addToCart()") //Tạo thuộc tính onlclick="addToCart()" cho thẻ <button>
//    btn.innerHTML = "Thêm vào giỏ hàng" //Tạo text cho thẻ là "...
//    container.appendChild(btn) //Gán btn vào vị trí cuối của container
  
//    card.appendChild(container); //Gán container vào vị trí cuối của card
//    document.getElementById("products").appendChild(card); //gán card vào vị trí cuối của thẻ div có id là products
//}
//let userAccount = { //Tạo object lưu trữ tài khoản
//    acc: [] //trong thuộc tính acc là một mảng
//}
// Lưu vào localStorage với phương thức setItem:
//localStorage.setItem('userAccount_key', JSON.stringify(userAccount));

for (let product of products) { // cú pháp chèn biến ${biến}
    let card = /*html*/ `
  <div class="card">
    <div class="image-container">
      <img src="${product.image}" /> 
    </div> 
    <div class="container">
      <div class="product-name">
        <h5>${product.name}</h5> 
        <h6>Price: ${product.price}</h6>
      </div>
      <button onclick="checktoAddCart(${product.id})">Add to cart</button> 
    </div>
  </div>
  `; // function addToCart (ID) {}
    document.getElementById("products").innerHTML += card;
}
const handleAddToCartClicked = (productId) => {
    if (!localStorage.getItem("currentUser")) {
        alert("Please log in");
    } else {
        addToCart(productId);
    }
};
const logout = () => {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("cart");
    location.reload();
};


