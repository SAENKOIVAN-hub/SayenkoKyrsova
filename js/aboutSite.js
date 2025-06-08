const inDeatail = [
    {
        image: "images/Golovna.jpg",
        title: "Головна сторінка",
        description: "Перейдіть на головну сторінку, щоб побачити актуальну інформацію на поточний час! Тут ви знайдете останні оновлення, популярні розділи сайту, а також найцікавіші матеріали, які ми підготували саме для вас.",
        link: "index.html"
    },
    {
        image: "images/Photo.webp",
        title: "Галерея картинок",
        description: "Перейдіть, щоб побачити нашу галерею картинок з університетами! Ви зможете насолодитися візуальною колекцією університетів та їх корпусів.",
        link: "gallery.html"
    },
    {
        image: "images/News.jpg",
        title: "Новини",
        description: "Залишайтесь в курсі останніх подій та новин у світі університетів! Читайте про важливі ініціативи, нові проекти та досягнення наших вищих навчальних закладів.",
        link: "news.html"
    },
    {
        image: "images/Contact.jpg",
        title: "Контакти",
        description: "Контакти нашого сайту, щоб зв'язатися з нами! Ви можете написати нам листа, зателефонувати або залишити відгук. Ми завжди відкриті до співпраці, зворотного зв’язку та ваших ідей!",
        link: "contacts.html"
    }
]

const cart = document.getElementById("cart")

for (const detail of inDeatail) {
    const div = document.createElement("div")
    const shadow = document.createElement("div")
    const h2 = document.createElement("h2")
    const p = document.createElement("p")
    const a = document.createElement("a")
    const input = document.createElement("input")
    input.type = "button"
    input.value = "Перейти на сторінку!"
    a.href = detail.link
    a.append(input)

    div.style.backgroundImage = `url("${detail.image}")`
    h2.innerText = detail.title
    p.innerText = detail.description

    div.append(shadow, h2, p, a)

    cart.append(div)
}