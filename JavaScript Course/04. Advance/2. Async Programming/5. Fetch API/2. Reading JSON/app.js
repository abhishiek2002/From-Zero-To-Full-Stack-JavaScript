const result = document.querySelector(".result");

async function jsonDataFetching() {
  try {
    const res = await fetch("data.json");
    if (!res) throw Error(res.statusText);
    const data = await res.json();
    console.log(data);
    result.textContent = data.name;
  } catch (error) {
    console.log(error);
  }
}

jsonDataFetching();

// fetch("data.json")
