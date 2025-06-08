const form = document.getElementById("form")

form.addEventListener("submit", function(event) {
    event.preventDefault()

    const name = form.name.value
    const email = form.email.value
    const password = form.password.value

    if (!name || !email || !password) {
        const warning = document.getElementById("warning")
        warning.innerHTML = `
            <div class="alert alert-warning" role="alert">
                Усі поля обов'язкові для заповнення!
            </div>
        `
    } else {
        localStorage.setItem("user", JSON.stringify({
            name,
            email,
            password
        }))

        window.location.href = " main.html"
    }
})