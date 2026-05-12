import { useState } from "react";

const FindLoads = () => {
    const [darkMode, setDarkMode] = useState(false);

    const [isRegistered] = useState(false);

    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [distance, setDistance] = useState("");
    const [ton, setTon] = useState("");
    const [bodyType, setBodyType] = useState("");

    const [results, setResults] = useState([]);

    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState("");

    const tonData = {
  "1 Ton": { price: 25, material: "Small Parcel, Grocery, Boxes, Cartoon Boxes" },

  "2 Ton": { price: 29, material: "FMCG, Vegetables, Household Goods, Cartoon Boxes" },
  "3 Ton": { price: 30, material: "FMCG, Vegetables, Household Goods, Cartoon Boxes" },

  "4 Ton": { price: 35, material: "Furniture, Cement, Tiles, Hardware, Cartoon Boxes" },

  "5 Ton": { price: 40, material: "Sand, Pipes, Bricks, Construction Material, Cartoon Boxes" },

  "6 Ton": { price: 45, material: "Agriculture Goods, Packed Goods, Food Items, Cartoon Boxes" },

  "7 Ton": { price: 48, material: "FMCG, Textiles, Cartons, Packed Goods, Cartoon Boxes" },
  "8 Ton": { price: 50, material: "FMCG, Textiles, Cartons, Packed Goods, Cartoon Boxes" },
  "9 Ton": { price: 50, material: "FMCG, Textiles, Cartons, Packed Goods, Cartoon Boxes" },
  "10 Ton": { price: 55, material: "FMCG, Textiles, Cartons, Retail Stock, Cartoon Boxes" },

  "11 Ton": { price: 55, material: "Iron Rods, Timber, FMCG Goods, Cartoon Boxes" },
  "12 Ton": { price: 55, material: "Iron Rods, Timber, FMCG Goods, Cartoon Boxes" },

  "13 Ton": { price: 60, material: "Steel, Cement, Machinery, Cartoon Boxes" },
  "14 Ton": { price: 60, material: "Steel, Cement, Machinery, Cartoon Boxes" },
  "15 Ton": { price: 60, material: "Steel, Cement, Machinery, Cartoon Boxes" },
  "16 Ton": { price: 60, material: "Steel, Cement, Machinery, Cartoon Boxes" },
  "17 Ton": { price: 60, material: "Steel, Cement, Machinery, Cartoon Boxes" },
  "18 Ton": { price: 60, material: "Steel, Cement, Machinery, Cartoon Boxes" },

  "19 Ton": { price: 65, material: "Containers, Export Goods, Machinery Parts, Cartoon Boxes" },
  "20 Ton": { price: 65, material: "Containers, Export Goods, Machinery Parts, Cartoon Boxes" },

  "21 Ton": { price: 85, material: "Coal, Heavy Construction Goods, Minerals, Cartoon Boxes" },
  "22 Ton": { price: 85, material: "Coal, Heavy Construction Goods, Minerals, Cartoon Boxes" },
  "23 Ton": { price: 85, material: "Coal, Heavy Construction Goods, Minerals, Cartoon Boxes" },
  "24 Ton": { price: 85, material: "Coal, Heavy Construction Goods, Minerals, Cartoon Boxes" },
  "25 Ton": { price: 85, material: "Coal, Heavy Construction Goods, Minerals, Cartoon Boxes" },

  "26 Ton": { price: 90, material: "Stone, Mining Materials, Steel, Aggregates, Cartoon Boxes" },
  "27 Ton": { price: 91, material: "Stone, Mining Materials, Steel, Aggregates, Cartoon Boxes" },
  "28 Ton": { price: 91, material: "Stone, Mining Materials, Steel, Aggregates, Cartoon Boxes" },
  "29 Ton": { price: 90, material: "Stone, Mining Materials, Steel, Aggregates, Cartoon Boxes" },
  "30 Ton": { price: 87, material: "Stone, Mining Materials, Steel, Aggregates, Cartoon Boxes" },

  "31 Ton": { price: 105, material: "Heavy Machinery, Oversize Cargo, Industrial Equipment" },
  "32 Ton": { price: 105, material: "Heavy Machinery, Oversize Cargo, Industrial Equipment" },
  "33 Ton": { price: 107, material: "Heavy Machinery, Oversize Cargo, Industrial Equipment" },
  "34 Ton": { price: 108, material: "Heavy Machinery, Oversize Cargo, Industrial Equipment" },
  "35 Ton": { price: 109, material: "Heavy Machinery, Oversize Cargo, Industrial Equipment" },

  "36 Ton": { price: 120, material: "Heavy Machinery, Oversize Cargo, Industrial Equipment" },
  "37 Ton": { price: 120, material: "Heavy Machinery, Oversize Cargo, Industrial Equipment" },
  "38 Ton": { price: 120, material: "Heavy Machinery, Oversize Cargo, Industrial Equipment" },
  "39 Ton": { price: 120, material: "Heavy Machinery, Oversize Cargo, Industrial Equipment" },
  "40 Ton": { price: 120, material: "Heavy Machinery, Oversize Cargo, Industrial Equipment" },
  "41 Ton": { price: 120, material: "Heavy Machinery, Oversize Cargo, Industrial Equipment" },
  "42 Ton": { price: 120, material: "Heavy Machinery, Oversize Cargo, Industrial Equipment" },
};

    // SEARCH LOADS
    const handleSearch = () => {
        if (!from || !to || !distance || !ton || !bodyType) {
            setMessage("❌ Please fill all fields");
            setMessageType("error");

            setTimeout(() => setMessage(""), 3000);
            return;
        }

        const basePrice = tonData[ton].price;

        const materials = tonData[ton].material
            .split(",")
            .map((m) => m.trim());

        // CREATE 5 LOADS
        const generatedLoads = Array.from({ length: 5 }, (_, index) => {

            const randomMaterial =
                materials[Math.floor(Math.random() * materials.length)];

            const randomRate =
                basePrice + Math.floor(Math.random() * 25);

            const totalPrice =
                Number(distance) * randomRate;

            return {
                id: Date.now() + index,

                from,
                to,
                distance,
                ton,
                bodyType,

                material: randomMaterial,

                pricePerKm: randomRate,

                totalPrice,
            };
        });

        setResults((prev) => [...generatedLoads, ...prev].slice(0, 20));

        setFrom("");
        setTo("");
        setDistance("");
        setTon("");
        setBodyType("");

        // setMessage("✅ 5 Loads Found Successfully");
        setMessageType("success");

        setTimeout(() => setMessage(""), 3000);
    };

    // REMOVE LOAD
    const removeLoad = (id) => {
        setResults(results.filter((item) => item.id !== id));
    };

    // BOOK ORDER
    const handleBookOrder = (item) => {
        if (!isRegistered) {
            setMessage("❌ User is not registered. Please register to book an order.");
            setMessageType("error");

            setTimeout(() => setMessage(""), 3000);
            return;
        }

        setMessage(`🚛 Order booked: ${item.from} → ${item.to}`);
        setMessageType("success");

        setTimeout(() => setMessage(""), 3000);
    };

    return (
        <div
            className={
                darkMode
                    ? "bg-dark text-white min-vh-100"
                    : "bg-light min-vh-100"
            }
        >
            {/* HEADER */}
            <div className="container py-3 d-flex justify-content-between align-items-center">

                <div>
                    <h2 className="fw-bold">Find Loads</h2>
                </div>

                <button
                    className={`btn rounded-pill px-4 fw-bold ${darkMode ? "btn-light" : "btn-dark"
                        }`}
                    onClick={() => setDarkMode(!darkMode)}
                >
                    {darkMode ? "Light Mode" : "Dark Mode"}
                </button>

            </div>

            {/* MESSAGE */}
            {message && (
                <div className="container">
                    <div
                        className={`alert text-center fw-bold ${messageType === "error"
                                ? "alert-danger"
                                : "alert-success"
                            }`}
                    >
                        {message}
                    </div>
                </div>
            )}

            {/* SEARCH */}
            <div className="container">

                <div
                    className={`card border-0 shadow-lg rounded-4 p-4 ${darkMode ? "bg-dark text-white" : "bg-white"
                        }`}
                >

                    <div className="row g-3">

                        <div className="col-md-6">
                            <input
                                className="form-control form-control-lg"
                                placeholder="From location"
                                value={from}
                                onChange={(e) => setFrom(e.target.value)}
                            />
                        </div>

                        <div className="col-md-6">
                            <input
                                className="form-control form-control-lg"
                                placeholder="To location"
                                value={to}
                                onChange={(e) => setTo(e.target.value)}
                            />
                        </div>

                        <div className="col-md-4">
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Distance KM"
                                value={distance}
                                onChange={(e) => setDistance(e.target.value)}
                            />
                        </div>

                        <div className="col-md-4">
                            <select
                                className="form-select"
                                value={ton}
                                onChange={(e) => setTon(e.target.value)}
                            >
                                <option value="">Select Ton</option>

                                {Object.keys(tonData).map((t) => (
                                    <option key={t} value={t}>
                                        {t}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="col-md-4">
                            <select
                                className="form-select"
                                value={bodyType}
                                onChange={(e) => setBodyType(e.target.value)}
                            >
                                <option value="">Select Body</option>

                                <option>Open Body</option>
                                <option>Container</option>
                                <option>Trailer</option>
                            </select>
                        </div>

                    </div>

                    {/* BUTTON */}
                    <div className="text-center mt-4">

                        <button
                            className="btn px-5 rounded-pill fw-bold"
                            style={{
                                background: "#E63946",
                                color: "#fff",
                            }}
                            onClick={handleSearch}
                        >
                            Search Loads
                        </button>

                    </div>

                </div>

            </div>

            {/* LOAD RESULTS */}
            <div className="container mt-3">

                <div className="row g-4">

                    {results.map((item) => (

                        <div
                            className="col-lg-4 col-md-6 col-12"
                            key={item.id}
                        >

                            <div
                                className={`p-4 rounded-4 shadow-lg h-100 position-relative ${darkMode
                                        ? "bg-dark text-white"
                                        : "bg-white"
                                    }`}
                            >

                                {/* DELETE */}
                                <button
                                    onClick={() => removeLoad(item.id)}
                                    style={{
                                        position: "absolute",
                                        top: "10px",
                                        right: "15px",
                                        border: "none",
                                        background: "transparent",
                                        fontSize: "22px",
                                        color: darkMode ? "#fff" : "#000",
                                        cursor: "pointer",
                                    }}
                                >
                                    ×
                                </button>

                                {/* TOP */}
                                <div className="d-flex justify-content-between align-items-center mb-3">

                                    <span className="badge bg-success px-3 py-2">
                                        Available Load
                                    </span>

                                    <strong
                                        className="px-3"
                                        style={{
                                            color: "#28a745",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        ₹ {item.totalPrice}
                                    </strong>

                                </div>

                                {/* ROUTE */}
                                <div className="d-flex align-items-center justify-content-between">

                                    <div>
                                        <div className="text-secondary small">
                                            FROM
                                        </div>

                                        <div className="fw-bold">
                                            {item.from}
                                        </div>
                                    </div>

                                    <div className="flex-grow-1 mx-3">
                                        <div
                                            style={{
                                                height: "2px",
                                                background: darkMode
                                                    ? "#555"
                                                    : "#ccc",
                                            }}
                                        ></div>
                                    </div>

                                    <div className="text-end">
                                        <div className="text-secondary small">
                                            TO
                                        </div>

                                        <div className="fw-bold">
                                            {item.to}
                                        </div>
                                    </div>

                                </div>

                                {/* DETAILS */}
                                <div className="mt-3 d-flex justify-content-between text-secondary">

                                    <span>{item.ton}</span>

                                    <span>{item.bodyType}</span>

                                    <span>{item.distance} KM</span>

                                </div>

                                {/* MATERIAL */}
                                <div className="mt-2">

                                    <div className="small text-secondary">
                                        Material:
                                        <strong className="ms-1">
                                            {item.material}
                                        </strong>
                                    </div>


                                </div>

                                {/* BOOK */}
                                <button
                                    className="btn w-100 mt-4 rounded-pill fw-bold bg-success"
                                    style={{ color: "#fff" }}
                                    onClick={() => handleBookOrder(item)}
                                >
                                    Book Order
                                </button>

                            </div>

                        </div>
                    ))}

                </div>

            </div>

        </div>
    );
};

export default FindLoads;