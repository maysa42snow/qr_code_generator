let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");
const darkToggle = document.getElementById("darkToggle");

// Generate QR code function
function generateQR() {
    if (qrText.value.length > 0) {
        // Fixed size and color
        const size = 250;
        const color = "000000";

        const apiURL = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(qrText.value)}&color=${color}`;
        qrImage.src = apiURL;

        qrImage.onload = () => {
            imgBox.classList.add("show-img");
        };
    } else {
        qrText.classList.add("error");
        setTimeout(() => {
            qrText.classList.remove("error");
        }, 1000);
    }
}

// Persistent Dark Mode toggle logic
// On page load, check saved preference
if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark");
    darkToggle.checked = true;
}

// Listen for toggle changes
darkToggle.addEventListener("change", () => {
    if (darkToggle.checked) {
        document.body.classList.add("dark");
        localStorage.setItem("darkMode", "enabled");
    } else {
        document.body.classList.remove("dark");
        localStorage.setItem("darkMode", "disabled");
    }
});
