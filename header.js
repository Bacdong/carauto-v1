var s = `
    <!-- Header -->

    <!-- nav mobile  -->
    <input type="checkbox" id="hidden-show-nav" hidden>

    <label class="open-nav" for="hidden-show-nav">
        <i class="icon-sun"></i>
    </label>

    <label class="close-nav" for="hidden-show-nav">
        <i class="icon-exit"></i>
    </label>
    <!-- nav mobile  -->

    <label for="hidden-show-nav" class="nav-overlay"></label>

    <header class="header box-shadow-on-mobile-tablet">
        <nav class="header-navbars">

            <!-- title/name website -->
            <section class="navbars-title">
                <a href="./index.html" class="navbars-title__link">
                    <h1>Car Auto</h1>
                </a>
            </section>
            <!-- /title/name website -->

            <!-- list category -->
            <menu class="navbars-menu">
                <ul class="menu-list">
                    <li class="list-item active">
                        <a href="" class="item-link">HOME</a>
                    </li>

                    <li class="list-item">
                        <a href="" class="item-link">PRODUCTS</a>
                    </li>

                    <li class="list-item">
                        <a href="" class="item-link">ABOUT</a>
                    </li>

                    <li class="list-item">
                        <a href="" class="item-link">SERVICES</a>
                    </li>

                    <li class="list-item">
                        <a href="" class="item-link">BLOG</a>
                    </li>

                    <li class="list-item">
                        <a href="template/contact/contact.html" 
                            class="item-link">CONTACT</a>
                    </li>
                </ul>
            </menu>
            <!-- /list category -->

            <!-- footer -->
            <footer class="navbars-info">
                <!-- copyright -->
                <section class="info-brief">
                    <p>
                        &copy; Copyright &copy;
                        <script type="text/javascript">
                            let currentDay = new Date();
                            let currentYear = currentDay.getFullYear();
                            document.write(currentYear);
                        </script>
                        All right reserved | Development by MyTeam.
                    </p>
                </section>
                <!-- /copyright -->

                <!-- social contact -->
                <menu class="info-social">
                    <ul class="social-list">
                        <li class="social-item">
                            <a href="https://www.facebook.com/DuongBacDong.2000/" 
                                class="social-link" target="_blank">
                                <i class="icon-facebook"></i>
                            </a>
                        </li>

                        <li class="social-item">
                            <a href="https://www.twitter.com/Bacdong/" 
                                class="social-link" target="_blank">
                                <i class="icon-twitter"></i>
                            </a>
                        </li>

                        <li class="social-item">
                            <a href="https://www.instagram.com/" 
                                class="social-link" target="_blank">
                                <i class="icon-instagram"></i>
                            </a>
                        </li>

                        <li class="social-item">
                            <a href="tel:+84915272291" class="social-link" target="_blank">
                                <i class="icon-telegram"></i>
                            </a>
                        </li>
                    </ul>
                </menu>
                <!-- /social contact -->
            </footer>
            <!-- /footer -->

        </nav>
    </header>

    <!-- /Header -->
`

var divElement = document.querySelector(".templateStringHeader");
divElement.innerHTML = s;

// fix bug nav mobile
// which will be triggered when the window resizes
$( window ).bind("resize", function(){
    var widthBrowser = $(document).width();
    var inputTypeCheckboxElement = document.querySelector("#hidden-show-nav");
    if(widthBrowser > 739) 
        inputTypeCheckboxElement.checked = false;
});





