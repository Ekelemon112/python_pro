const barButtom = document.querySelector("#click");
const navList = document.querySelector(".nav-list");

barButtom.addEventListener("click", () => {
    // barButtom.classList.toggle("active");
    document.querySelector(".nav-list").classList.add("active");
    // navList.innerHTML = "grid"
    console.log("click")
})

document.getElementById("close").addEventListener("click", ()=>{
    document.querySelector(".nav-list").classList.remove("active");
    console.log("click close")
})


//  function showResponse(answer) {
//         const responseText = document.getElementById('response');
//         if (answer === 'yes') {
//             responseText.textContent = "Great! Redirecting you to the booking page...";
//             responseText.style.color = "#00ff99";
//             setTimeout(() => {
//             window.location.href = ""; // change to your actual booking page
//             }, 2000);
//         } else {
//             responseText.textContent = "No problem! You can come back anytime.";
//             responseText.style.color = "#ffcccb";
//         }
//     }