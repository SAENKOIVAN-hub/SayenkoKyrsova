function updateUser() {
    const userStr = localStorage.getItem("user")
    const $checkUsers = $(".checkUser")

    if (userStr) {
        const user = JSON.parse(userStr)

        $checkUsers.html(`
            <p>${user.name}</p>
            <button class="logoutBtn">Вийти</button>
        `)

        $(".logoutBtn").on("click", function() {
            localStorage.clear()
            updateUser()
        })

    } else {
        $checkUsers.html(`<a href="html/auth.html">Авторизація</a>`)
    }
}
updateUser()

$("#burger").on("click", function() {
    $("#burgerMenu").toggleClass("active")
})