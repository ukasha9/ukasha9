<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FastTrack Logistics</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

    <header>
        <h1>FastTrack Logistics</h1>
        <nav>
            <a href="#">Home</a>
            <a href="#">Track Shipment</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
        </nav>
    </header>

    <section class="tracking">
        <h2>Track Your Shipment</h2>
        <input type="text" id="trackingNumber" placeholder="Enter Tracking Number">
        <button onclick="trackShipment()">Track</button>
        <p id="trackingResult"></p>
    </section>

    <section class="services">
        <h2>Our Services</h2>
        <ul>
            <li>Fast Delivery</li>
            <li>Warehousing</li>
            <li>International Shipping</li>
        </ul>
    </section>

    <footer>
        <p>&copy; 2025 FastTrack Logistics | Contact: info@fasttrack.com</p>
    </footer>

    <script src="script.js"></script>

</body>
</html>
body {
    font-family: Arial, sans-serif;
    text-align: center;
    background: #f4f4f4;
}

header {
    background: #333;
    color: white;
    padding: 20px;
}

nav a {
    color: white;
    margin: 0 15px;
    text-decoration: none;
    font-weight: bold;
}

.tracking, .services {
    margin: 20px;
    padding: 20px;
    background: white;
    display: inline-block;
    border-radius: 10px;
    box-shadow: 0 0 10px gray;
}

input {
    padding: 10px;
    width: 200px;
}

button {
    padding: 10px;
    background: green;
    color: white;
    border: none;
    cursor: pointer;
}

footer {
    margin-top: 20px;
    background: #333;
    color: white;
    padding: 10px;
}
function trackShipment() {
    let trackingNumber = document.getElementById("trackingNumber").value;
    let trackingResult = document.getElementById("trackingResult");

    if (trackingNumber === "123456") {
        trackingResult.innerHTML = "Your package is in transit!";
    } else {
        trackingResult.innerHTML = "Tracking number not found.";
    }
}
