const gallery = [
    {image: "/images/TarasShevchenkoUniversity.png", title: "Київський національний університет імені Тараса Шевченка"},
    {image: "/images/KharkivKarazinUniversity.jpg", title: "Харківський національний університет імені В.Н. Каразіна"},
    {image: "/images/LvivFrankoUniversity.jpg", title: "Львівський національний університет імені Івана Франка"},
    {image: "/images/KyivPolytechnicUniversity.jpg", title: "Київський політехнічний інститут імені Ігоря Сікорського"},
    {image: "/images/LvivPolytechnicUniversity.jpg", title: "Національний університет «Львівська політехніка»"},
    {image: "/images/OdesaMechnikovUniversity.jpg", title: "Одеський національний університет імені І.І. Мечникова"},
    {image: "/images/NPU.png", title: "Національний педагогічний університет імені М.П. Драгоманова"},
    {image: "/images/KyivMohylaAcademy.jpg", title: "Національний університет «Києво-Могилянська академія»"},
    {image: "/images/BogomoletsMedicalUniversity.webp", title: "Національний медичний університет імені О.О. Богомольця"},
    {image: "/images/IhorSikorskyInstitute.jpg", title: "Інститут авіації і космічних систем імені Ігоря Сікорського"},
    {image: "/images/Cher.webp", title: "Чернівецький національний університет імені Юрія Федьковича"},
    {image: "/images/Dnipro.jpg", title: "Дніпровський національний університет ім. Олеся Гончара"},
    {image: "/images/KievPolite.jpg", title: "Київський політехнічний інститут імені Ігоря Сікорського"},
    {image: "/images/Lviv.jpg", title: "Національний університет ім. Івана Франка"},
    {image: "/images/Zapo.jpg", title: "Тернопільський національний економічний університет"},
    {image: "/images/Ternopil.jpg", title: "Запорізький університет"}
  ]

const contGallery = document.getElementById("contGallery")

function createGallery(){
    for (const news of gallery) {
        const div = document.createElement("div")

        const h2 = document.createElement("h2")
        h2.innerText = news.title
        const img = document.createElement("img")
        img.src = news.image

        div.append(h2, img)
        contGallery.append(div)
    }
}
createGallery()