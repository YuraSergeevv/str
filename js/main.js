
'use strict'
$(document).ready(function () {

    /*ibg*/

    function ibg() {
        $.each($('.ibg'), function (index, val) {
            if ($(this).find('img').length > 0) {
                let src_img = $(this).find('img').attr('src');
                $(this).css('backgroundImage', 'url("' + src_img + '")');
            }
        });
    }

    ibg();

    /*попап*/

    function openPopup(id) {
        $(".js-popup[data-id-popup='" + id + "']").fadeIn(300);
    }

    function close_popup() {
        $('.js-popup').fadeOut(300);
    }

    $('.js-popup__close').click(close_popup);

    $('.js-btn-popup').click(function (e) {
        e.preventDefault();
        let index_btn_popup = $(this).attr('href');
        openPopup(index_btn_popup);
    });

    $('.js-popup').click(function (e) {
        let popup = $('.js-popup__wrapp');
        if (!popup.is(e.target) && popup.has(e.target).length === 0)
            close_popup();
    });



    function dateCheck(number) {
        if (number < 10) {
            number = '0' + String(number);
        }
        else {
            number = String(number);
        }
        return (number);
    }

    function dateCheck(number) {
        if (number < 10) {
            number = '0' + String(number);
        }
        else {
            number = String(number);
        }
        return (number);
    }

    function dateTime() {
        let date = new Date;
        let hour = dateCheck(date.getHours());
        let minute = dateCheck(date.getMinutes());
        let day = dateCheck(date.getDate());
        let mount = dateCheck(date.getMonth());
        let year = date.getFullYear();

        $('.time_js').text(hour + ':' + minute);
        $('.date_js').text(day + '.' + mount + '.' + year);

    };

    dateTime();
    setInterval(function () {
        dateTime();
    }, 1000);


    $('.card input').on('change', function () {
        if ($(this).val() == '') {
            $(this).val(0);
        }
    })


    $('.registration__icon').each(function () {

        $(this).on('click tochend', function () {
            this.classList.toggle("registration__on");
            let input = $(this).prev();
            input.attr('type') === 'password' ? input.attr('type', 'text') : input.attr('type', 'password');
            return false;
        })
    });




    let select = function () {
        let selectHeader = document.querySelectorAll('.select__header');
        let selectItem = document.querySelectorAll('.select__item');

        selectHeader.forEach(item => {
            item.addEventListener('click', selectToggle)
        });

        selectItem.forEach(item => {
            item.addEventListener('click', selectChoose)
        });

        function selectToggle() {
            this.parentElement.classList.toggle('is-active');
        }

        function selectChoose() {
            let text = this.innerText,
                select = this.closest('.select'),
                currentText = select.querySelector('.select__current');
            currentText.innerText = text;
            select.classList.remove('is-active');

        }

    };

    select();

    $('.select__item').on('click touchend', function () {
        $(this).parents('.row').find('input').val($(this).text());
    });


    $('.date_setting svg').on('click touchend', function () {
        console.log(1);
        $(this).parents('.row').find('input').click();
        return false;
    })




    $('.btn_sort').on('click touchend', function () {
        $('.column_small').addClass('active');
        return false;
    })

    $('.btn_close').on('click touchend', function () {
        $('.column_small').removeClass('active');
        return false;
    })







    let currentLocation = window.location.href.split('/');
    currentLocation = currentLocation[currentLocation.length - 1];


    let menu = $('.menu_js');
    let link;


    for (let index = 0; index < menu.length; index++) {
        link = (menu[index].href.split('/'));
        link = link[link.length - 1];
        if (link == currentLocation) {
            menu[index].classList.add('active');
        }

    };

    $('.checktrue').on("change", function () {
        console.log(0);
        if ($('.checktrue').is(':checked')) {
            $('.truecheck').show();
            console.log(1);
        }
        else {
            console.log(2);
            $('.truecheck').hide();
        }
    });

    // $('.date_wrap').on('touchend', function () {
    //     $(this).find('.date_info').toggleClass('active');
    //     $('.menu').removeClass('active');
    // });

    // $('.user_wrap').on('touchend', function () {
    //     $(this).find('.menu').toggleClass('active');
    //     $('.date_info').removeClass('active');
    // });

});