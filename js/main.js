const links = document.querySelectorAll(".nav-link");

links.forEach((item) => {
  item.addEventListener("click", () => {
    let el = document.getElementById(item.getAttribute("data-link"));
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

const user = {
  name: "Heropy",
  age: 85,
  emails: ["thesecon@gmail.com"],
};
const copyUser = { ...user };

console.log(copyUser === user);

console.log("## for ##");
const color = ["red", "blue", "green"];
for (let i = 0; i < color.length; i++) {
  console.log(color[i]);
}
color.forEach((el) => console.log(el));

const map = new Map();
map.set("19981003", "Kim");
map.set("19981002", "park");
map.set("19981001", "you");

map.forEach((value, index) => console.log(value, index));

const colors = ["red", "blue", "green"];

const newColors = colors.join("-");
console.log("Array", colors);
console.log("Array", newColors);

const set = new Set();
set.add("HongGilDong");
set.add("KimSaRang");
set.add("KangHoDong");

set.forEach((value) => console.log(value));

for (let item of set) {
  console.log(item);
}

let arr = Array.from(set);
console.log(arr);

class Animal {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getInfo() {
    return this.name + " , " + this.price;
  }
}

let p1 = new Animal("lion", 1000);
let p2 = new Animal();
p2.name = "tiger";
p2.price = 1100;

console.log(p1.getInfo());
console.log(p2.getInfo());

const timer = {
  name: "Heropy",
  timeout: function () {
    setTimeout(() => {
      console.log(this.name);
    }, 3000);
  },
};
timer.timeout();

window.addEventListener(
  "scroll",
  _.throttle(function () {
    console.log(window.scrollY);
    if (window.scrollY > 500) {
      // 배지 숨기기
      //badgeEl.style.display = 'none'; 단순히 CSS로 작업 했을시 부자연스럽게 요소가 사라진다 이떄 gsap사용.
      //gsap.to(요소, 지속시간, 옵션);
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: "none", //숫자는 그냥 문자는 꼭 따옴표로 묵자 gsap라이브러리 특징!!!
        // display: none으로 한 이유는 단순히 opcaity만 0으로 주면 눈에만 안 보일뿐이고
        //기능적으로는 남아있으니 스크롤을 내렸을떄 사용자가 의도치 않게 클릭 할 상황을 없앨 수 있다.
      });
    } else {
      // 배지 보이기
      //badgeEl.style.display = 'block';
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: "block",
      });
    }
  }, 300)
);

// ScrollMagic
const spyEls = document.querySelectorAll("section.scroll-spy");
// 요소들 반복 처리!
spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({
    // 감시할 장면(Scene)을 추가
    triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
    triggerHook: 0.4, // 화면의 80% 지점에서 보여짐 여부 감시
  })
    .setClassToggle(spyEl, "show") // 요소가 화면에 보이면 show 클래스 추가
    .addTo(new ScrollMagic.Controller()); // 컨트롤러에 장면을 할당(필수!)
});
