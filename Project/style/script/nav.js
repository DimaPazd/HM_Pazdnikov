const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `<nav class="navbar">
    <div class="nav">
        <img src="style/imgs/logo.jpg" class="brand-logo" alt="sssssss">
        <p> Ship.Shop</p>
   
        <div class="nav-items">
            <div class="search">
                <input type="text" class="search-box" placeholder="поиск бренда">
                <button class="search-btn">Поиск</button>
            </div>
            <a href="#"><img src="style/imgs/user.png" alt=""></a>
            <a href="#"><img src="style/imgs/cart.png" alt=""></a>
        </div>
    </div>
    <ul class="links-container">
        <li class="link-item"> <a href="#" class="link">Главная</a></li>
        <li class="link-item"> <a href="#" class="link">Женское</a></li> 
        <li class="link-item"> <a href="#" class="link">Мужское</a></li>     
        <li class="link-item"> <a href="#" class="link">Аксессуары</a></li> 
    </ul>
</nav>
`;
}

createNav();