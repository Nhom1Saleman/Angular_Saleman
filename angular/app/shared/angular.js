
        //-------------------------------------------------------------------------------------------------------------------
        $(document).ready(function () {
            $("#logo").hide();
            $(".navbar-brand").click(function () {
                $("#logo").slideToggle("slow", function () {
                });
            });

            $("#pull-LR ul li > a").click(function () {

                var $ul = $(this).next();

                var visible = $("#pull-LR ul li ul:visible");

                visible.slideToggle("slow");

                $ul.slideToggle("slow");

                return false;

            });

            $(document).click(function () {

                var visible = $("#pull-LR ul li ul:visible");

                visible.hide();
            });

        });

        $('#sidebarCollapse').on('click', function () {
            $('#sidebar').toggleClass('active');
            $(this).toggleClass('active');
        });
        $(function () {
            $('[data-toggle="tooltip"]').tooltip()
        })