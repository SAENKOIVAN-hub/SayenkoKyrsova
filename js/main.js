const universities = [
  {
    image: "/images/TarasShevchenkoUniversity.png",
    title: "Київський національний університет імені Тараса Шевченка",
    description: "Заснований у 1834 році, КНУ імені Тараса Шевченка є символом вищої освіти в Україні. Відомий своїми сильними факультетами права, філософії, журналістики, інформатики та природничих наук. Університет активно співпрацює з міжнародними освітніми установами та займає високі позиції у світових рейтингах."
  },
  {
    image: "/images/KharkivKarazinUniversity.jpg",
    title: "Харківський національний університет імені В.Н. Каразіна",
    description: "Один із найстаріших університетів Східної Європи, заснований у 1804 році. Відомий як осередок фундаментальної науки та досліджень, особливо в галузях фізики, медицини, соціології та біології. Має понад 20 факультетів і веде активну наукову роботу на міжнародному рівні."
  },
  {
    image: "/images/LvivFrankoUniversity.jpg",
    title: "Львівський національний університет імені Івана Франка",
    description: "Історичний університет, що починає свою діяльність із 1661 року. Має сильні гуманітарні, юридичні, природничі та економічні факультети. Університет підтримує широкі міжнародні зв'язки і є учасником багатьох європейських програм академічної мобільності."
  },
  {
    image: "/images/KyivPolytechnicUniversity.jpg",
    title: "Київський політехнічний інститут імені Ігоря Сікорського",
    description: "Один із найбільших технічних університетів Центральної та Східної Європи, заснований у 1898 році. Відомий інноваційними розробками в галузях ІТ, інженерії, авіації та робототехніки. Має тісні зв'язки з провідними світовими компаніями та науковими центрами."
  },
  {
    image: "/images/LvivPolytechnicUniversity.jpg",
    title: "Національний університет «Львівська політехніка»",
    description: "Один із найстаріших технічних університетів Європи, заснований у 1816 році. Львівська політехніка готує фахівців у сферах архітектури, інженерії, інформаційних технологій, економіки та гуманітарних наук. Веде активну наукову роботу і має численні міжнародні проекти."
  },
  {
    image: "/images/OdesaMechnikovUniversity.jpg",
    title: "Одеський національний університет імені І.І. Мечникова",
    description: "Класичний університет, заснований у 1865 році, є науковим центром Півдня України. Спеціалізується на природничих науках, гуманітарних дисциплінах, психології та міжнародних відносинах. Має широку мережу міжнародних академічних партнерств."
  },
  {
    image: "/images/NPU.png",
    title: "Національний педагогічний університет імені М.П. Драгоманова",
    description: "Провідний заклад педагогічної освіти, заснований у 1834 році. Готує вчителів, психологів, соціальних працівників та культурологів. Відомий своїми освітніми інноваціями, методичними дослідженнями та міжнародними програмами обміну студентами і викладачами."
  },
  {
    image: "/images/KyivMohylaAcademy.jpg",
    title: "Національний університет «Києво-Могилянська академія»",
    description: "Одна з найстаріших освітніх установ Східної Європи, заснована у 1615 році. Академія славиться високим рівнем підготовки у галузях права, соціології, політології, економіки та гуманітарних наук. Активно бере участь у європейських освітніх програмах та наукових дослідженнях."
  },
  {
    image: "/images/BogomoletsMedicalUniversity.webp",
    title: "Національний медичний університет імені О.О. Богомольця",
    description: "Ведучий медичний університет України, заснований у 1841 році. Готує лікарів, стоматологів, фармацевтів і біомедичних фахівців. Має власні клініки для практичної підготовки студентів та активно співпрацює з міжнародними медичними установами."
  },
  {
    image: "/images/IhorSikorskyInstitute.jpg",
    title: "Інститут авіації і космічних систем імені Ігоря Сікорського",
    description: "Спеціалізований навчальний підрозділ КПІ ім. Ігоря Сікорського, який готує фахівців для авіаційної та космічної галузі. Веде наукові дослідження у галузях аеродинаміки, космічних технологій та безпілотних систем. Співпрацює з провідними авіаційними корпораціями світу."
  }
]

const news = [
  {image: "/images/TarasShevchenkoUniversity.png", title: "Київський університет відкриває лабораторію штучного інтелекту", description: "Київський університет ім. Т. Шевченка відкрив нову лабораторію для дослідження штучного інтелекту з потужними серверними системами для тренування моделей машинного навчання та комп'ютерного зору."},
  {image: "/images/LvivPolytechnicUniversity.jpg", title: "Львівська політехніка запускає програму з робототехніки", description: "Львівська політехніка анонсувала нову магістерську програму, яка поєднує теоретичні та практичні курси з робототехніки, включаючи стажування у технологічних компаніях."},
  {image: "/images/OdesaMechnikovUniversity.jpg", title: "Студенти Харківського університету вражають на конференції в Одесі", description: "Студенти Харківського університету представили на конференції в Одесі інноваційні екологічні проекти, зокрема нові методи збору даних для прогнозування зміни клімату."},
  {image: "/images/Shev.jpg", title: "Шевченків університет запускає програму для медичних стартапів", description: "Університет Шевченка оголосив про запуск програми підтримки стартапів у сфері медичних технологій, включаючи менторство та фінансування для інноваційних проектів."},
  {image: "/images/Cher.webp", title: "Чернівецький університет запускає курс з цифрової економіки", description: "Чернівецький університет запустив курс з цифрової економіки, що включає блокчейн, криптовалюти, електронну комерцію та безпеку в Інтернеті."}
]

const slider = document.getElementById("slider");
const img = document.createElement("img");
const numImg = document.getElementById("numImg")
const infoH2 = document.getElementById("infoH2")
const infoP = document.getElementById("infoP")

let count = 0
setInterval(() => updateImg(++count), 10000)

function updateImg(res) {
  infoH2.innerText = ""
  infoP.innerText = ""
  numImg.innerHTML = ""
  count = (res + news.length) % news.length
  img.src = news[count].image
  img.alt = "photo"
  infoH2.innerText = news[count].title
  infoP.innerText = news[count].description

  for(let i = 0; i < news.length; i++){
    const circle = document.createElement("div")
    circle.classList.add("circle")
    if(i === count){
      circle.style.background = "#fe804e"
    }else{
      circle.style.background = "#164274"
    }
    numImg.append(circle)
  }
  slider.append(img)
}
updateImg(count)

document.getElementById("further").addEventListener("click", function(){
  updateImg(++count)
})

document.getElementById("back").addEventListener("click", function(){
  updateImg(--count)
})

const contInfo = document.getElementById("contInfo")

for (const info of universities) {
  const div = document.createElement("div")
  div.classList.add("news")

  const img = document.createElement("img")
  img.src = info.image

  const h3 = document.createElement("h3")
  h3.innerText = info.title

  const accordion = document.createElement("div")
  accordion.classList.add("accordion")

  const h4 = document.createElement("h4")
  h4.innerText = "Детальніше"

  const pWrapper = document.createElement("div")
  const p = document.createElement("p")
  p.innerText = info.description
  pWrapper.append(p)

  accordion.append(h4, pWrapper)
  div.append(img, h3, accordion)
  contInfo.append(div)
}

$(function () {
  $(".accordion").accordion({
    collapsible: true,
    active: false,
    heightStyle: "content"
  })
})