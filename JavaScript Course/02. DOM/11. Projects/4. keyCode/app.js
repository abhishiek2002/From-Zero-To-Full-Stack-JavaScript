console.log("Hello");
const insert = document.getElementById("insert");

window.addEventListener("keyup", (event) =>{
    
    insert.innerHTML = `

    <div class="key w-1/4 text-sm flex flex-col items-center gap-1">
    <small class="w-1/4">event.key</small>
    <div class="w-full bg-purple-700 text-white text-center h-1/2">${event.key === ""?"Space":event.key}</div>
    </div>

    <div class="key w-1/4 text-sm flex flex-col items-center gap-1">
    <small>event.keycode</small>
    <div class="w-full bg-purple-700 text-white text-center h-1/2">${event.keyCode}</div>
    </div>

    <div class="key w-1/4 text-sm flex flex-col items-center gap-1">
    <small>event.code</small>
    <div class="w-full bg-purple-700 text-white text-center h-1/2">${event.code}</div>
    </div>

    `
});

