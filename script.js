let btn1 = document.getElementsByClassName("btn")[0];
btn1.addEventListener("click", getfox);

async function getfox() {
  const foxes = async () => {
    const res = await fetch("https://randomfox.ca/floof/");
    const data = await res.json();
    return data;
  };
  const f = await foxes();
  let ff = f.image;
  let img1 = document.getElementsByClassName("result")[1];

  img1.style.backgroundImage = "url(" + ff + ")";
}