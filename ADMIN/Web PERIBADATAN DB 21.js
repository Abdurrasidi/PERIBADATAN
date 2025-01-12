document.getElementById("login-form").addEventListener("submit", function(event){
            event.preventDefault();
            var input = document.getElementById("input").value;
            var PW = "PERIB OPMAZ";
            if (input === PW) {
                window.location.href = "ADMIN.html";
            } else {
                alert("Password salah");
            }
        });