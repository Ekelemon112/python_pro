// Responsive Navbar Toggle
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Handle Flight Search
document.getElementById("flightForm").addEventListener("submit", function (e) {
  e.preventDefault();

    const from = document.getElementById("from").value.trim();
    const to = document.getElementById("to").value.trim();
    const departure = document.getElementById("departure").value;
    const passengers = parseInt(document.getElementById("passengers").value);
    const travelClass = document.getElementById("class").value;

if (from.toLowerCase() === to.toLowerCase()) {
    alert("Departure and destination cannot be the same!");
    return;
}

  // Simulated Qatar Airways flight data
const flightData = [
    { airline: "Travello Airlines", flightNo: "QR202", time: "07:45 AM", basePrice: 350 },
    { airline: "Travello Airlines", flightNo: "QR318", time: "02:15 PM", basePrice: 420 },
    { airline: "Travello Airlines", flightNo: "QR540", time: "09:30 PM", basePrice: 480 },
];

const classMultiplier = {
    economy: 1,
    premium: 1.5,
    business: 2.5,
    first: 3.2
};

const resultsDiv = document.getElementById("flightResults");
    resultsDiv.innerHTML = "";

  flightData.forEach(f => {
    const totalPrice = (f.basePrice * passengers * classMultiplier[travelClass]).toFixed(2);
    const card = document.createElement("div");
    card.classList.add("flight-card");
    card.innerHTML = `
      <div>
        <strong>${f.airline}</strong> (${f.flightNo})<br>
        ${from} → ${to}<br>
        Departure: ${departure}, ${f.time}<br>
        Class: ${travelClass.charAt(0).toUpperCase() + travelClass.slice(1)}<br>
        Passengers: ${passengers}<br>
        <strong>Total: $${totalPrice}</strong>
      </div>
      <button onclick="bookFlight('${f.airline}', '${f.flightNo}', '${from}', '${to}', '${departure}', '${f.time}', ${passengers}, '${travelClass}', ${totalPrice})">Book</button>
    `;
    resultsDiv.appendChild(card);
  });

   document.getElementById("results").classList.remove("hidden");
});

// Generate a random booking reference
function generateBookingRef() {
  return "QR" + Math.floor(100000 + Math.random() * 900000);
}

// Create Qatar Airways flight ticket
function bookFlight(airline, flightNo, from, to, departure, time, passengers, travelClass, totalPrice) {
  const bookingRef = generateBookingRef();
  const ticket = document.createElement("div");
  ticket.classList.add("qatar-ticket");

  ticket.innerHTML = `
    <div class="ticket-top">
      <div class="airline-logo">
        <img src="./image/logo.png" alt="Qatar Airways Logo">
      </div>
      <div class="airline-info">
        <h2>${airline}</h2>
        <p>Booking Reference: <strong>${bookingRef}</strong></p>
        <p>Flight No: <strong>${flightNo}</strong></p>
      </div>
    </div>
    <div class="ticket-body">
      <div class="ticket-details">
        <div><span>From:</span><strong>${from.toUpperCase()}</strong></div>
        <div><span>To:</span><strong>${to.toUpperCase()}</strong></div>
        <div><span>Date:</span><strong>${departure}</strong></div>
        <div><span>Time:</span><strong>${time}</strong></div>
        <div><span>Class:</span><strong>${travelClass.charAt(0).toUpperCase() + travelClass.slice(1)}</strong></div>
        <div><span>Passengers:</span><strong>${passengers}</strong></div>
        <div class="price"><span>Total Fare:</span><strong>$${totalPrice}</strong></div>
      </div>
      <div class="barcode">
        <img src="https://api.qrserver.com/v1/create-qr-code/?data=${bookingRef}&size=100x100" alt="QR Code">
      </div>
    </div>
    <div class="ticket-footer">
      <p>✅ Booking Confirmed — Thank you for flying with <strong>${airline}</strong></p>
      <small>Check-in opens 3 hours before departure. Please carry a valid ID and this e-ticket.</small>
    </div>
  `;

  // Remove old tickets if any
  const oldTicket = document.querySelector(".qatar-ticket");
  if (oldTicket) oldTicket.remove();

  document.body.appendChild(ticket);
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
}


function generateBookingRef() {
  return "QR" + Math.floor(100000 + Math.random() * 900000);
}

function randomSeat() {
  const row = Math.floor(Math.random() * 60) + 1;
  const seat = ["A","B","C","D","E","F"][Math.floor(Math.random() * 6)];
  return row + seat;
}

function bookFlight(airline, flightNo, from, to, departure, time, passengers, travelClass, totalPrice) {
  const bookingRef = generateBookingRef();
  const seat = randomSeat();
  const gate = "E" + Math.floor(Math.random() * 20 + 1);
  const boarding = "1 hour before";

  const ticket = document.createElement("div");
  ticket.classList.add("boarding-pass");

  ticket.innerHTML = `
    <div class="bp-header">
      <div class="bp-logo">
        <img src="./image/logo.png" alt="Travello airline Logo">
      </div>
      <div class="bp-title">
        <h3>✈️ Travello Airline</h3>
        <p>BOARDING PASS</p>
      </div>
    </div>
    <div class="bp-body">
      <div class="bp-left">
        <p><span>Passenger:</span> <strong>Guest Traveler</strong></p>
        <p><span>From:</span> <strong>${from.toUpperCase()}</strong></p>
        <p><span>To:</span> <strong>${to.toUpperCase()}</strong></p>
        <p><span>Date:</span> <strong>${departure}</strong></p>
        <p><span>Time:</span> <strong>${time}</strong></p>
        <p><span>Flight:</span> <strong>${flightNo}</strong></p>
        <p><span>Seat:</span> <strong>${seat}</strong></p>
        <p><span>Gate:</span> <strong>${gate}</strong></p>
        <p><span>Class:</span> <strong>${travelClass.charAt(0).toUpperCase() + travelClass.slice(1)}</strong></p>
      </div>
      <div class="bp-right">
        <img src="https://api.qrserver.com/v1/create-qr-code/?data=${bookingRef}&size=100x100" alt="QR Code">
        <p>Booking Ref: <strong>${bookingRef}</strong></p>
        <p>Boarding: <strong>${boarding}</strong></p>
        <p>Total: <strong>$${totalPrice}</strong></p>
      </div>
    </div>
  `;

  // Remove previous ticket if exists
  const old = document.querySelector(".boarding-pass");
  if (old) old.remove();

  document.body.appendChild(ticket);
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
}
