document.getElementById("login-form").addEventListener("submit", function(event){
            event.preventDefault();
            let input = document.getElementById("input").value;
            const PW = "PERIB OPMAZ";
            if (input === PW) {
                window.location.href = "ADMIN.html";
            } else {
                alert("Password salah");
            }
        });