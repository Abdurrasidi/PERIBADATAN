document.getElementById("login-form").addEventListener("submit", function(event){
            event.preventDefault();
            var input = document.getElementById("input").value;
            var PW = "PERIB OPMAZ";
            if (input === PW) {
                window.location.href = "HALAMAN KE-2.html";
            } else {
                alert("Password salah");
            }
        });