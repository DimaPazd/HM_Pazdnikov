const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = ` <div class="footer-content">
    <img src="style/imgs/logo.jpg" class="logo" alt="">
    <div class="footer-ul-container">
        <ul class="category">
            <li class="category-title">Мужское</li>
            <li><a href="#" class="footer-link">Джинсы</a></li>
            <li><a href="#" class="footer-link">Свитеры</a></li>
            <li><a href="#" class="footer-link"Майки</a></li>
            <li><a href="#" class="footer-link">шорты</a></li>
            
        </ul>
        <ul class="category">
            <li class="category-title">Женское</li>
            <li><a href="#" class="footer-link">Джинсы</a></li>
            <li><a href="#" class="footer-link">Свитеры</a></li>
            <li><a href="#" class="footer-link">Майки</a></li>
            <li><a href="#" class="footer-link">шорты</a></li>
            
        </ul>
    </div>

    
</div>
<p class="footer-title">Про компанию</p>
<p class="info">Натуральные материалы, продуманные силуэты, современный дизайн и возможность легкого сочетания моделей помогут Вам всегда оставаться в центре внимания и чувствовать себя уместно в любой ситуации.
Если Вы любите одеваться ярко, модно и оригинально, у нас Вы найдете все необходимое, чтобы всегда быть в центре внимания. У нас большая коллекция для любого тор-

жества и праздника, которая сможет удовлетворить вкус самой взыскательной модницы!</p>
<p class="info">Служба поддержки - help@questions.com</p>
<p class="info">Телефоны - +375 (44) 524-05-68, +375 (33) 132-85-57</p>
<div class="footer-social-container">
    <div>
        <a href="#" class="social-link">Ship-shop</a>
        <a href="#" class="social-link">privacy page</a>
    </div>
    <div>
        <a href="https://instagram.com/ship.shop.by?igshid=YmMyMTA2M2Y=" class="social-link">instagram</a>
    </div>
</div>
<p class="footer-credit">С заботой о твоём стиле ! 🕊</p>
`;
}

createFooter();