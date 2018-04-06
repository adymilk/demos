(function ($, Drupal) {

    $(function(){

         window.iframeWin = document.getElementById("registration-step1-widget-iframe").contentWindow,
            src = $('#registration-step1-widget-iframe').attr('src').split('?');


        $('.regform-event').on('click', function(e){
            e.preventDefault();
            var event = $(this).data('event');

            if(event){

                if(event == 'switchToReg'){
                    iframeWin.postMessage({event: 'switchWidgetTabs', action: 'REGISTER'}, src[0]);
                }
                if(event == 'switchToLogin'){
                    iframeWin.postMessage({event: 'switchWidgetTabs', action: 'LOGIN'}, src[0]);
                }
            }
        });


        window.addEventListener("message", function(evt){
            var isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            var data = evt.data;
            if (data) {
                if (data == 'openProactiveChat') {
                    setTimeout(function() {
                        $('.proactive-chat-container').css({
                            'position':'relative',
                            'bottom':'0'
                        });
                        if(isMobileDevice) {
                            window._paq.push(['trackEvent', 'proactiveChat', 'Proactive chat Popup triggered - mobile', siteVersionForProactiveChat()]);
                        } else {
                            window._paq.push(['trackEvent', 'proactiveChat', 'Proactive chat Popup triggered - desktop', siteVersionForProactiveChat()]);
                        }
                    }, 240000);
                }
            }
        }, false);

        function siteVersionForProactiveChat() {
            if(SITE.version == 'eu' || SITE.version == 'uk') {
                return 'EU';
            } else {
                return 'GLOBAL';
            }
        }


    });


})(jQuery, Drupal);
