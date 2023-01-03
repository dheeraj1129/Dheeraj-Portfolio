<script>

        var tablink = document.getElementsByClassName("tab-link");
        var tabcon = document.getElementsByClassName("tab-con");

        function opentab(tabname)
            for(tablink of tablink) {
                tablink.classList.remove("active-link")

            }


            for (tabcon of tabcon) {
                tabcon.classList.remove("active-tab")
            }

            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab");
        
    </script>