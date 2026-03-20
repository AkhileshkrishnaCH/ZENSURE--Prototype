import { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function Dashboard() {

    const [risk, setRisk] = useState(0)
    const [trust, setTrust] = useState(100)
    const [karma, setKarma] = useState(0)
    const [premium, setPremium] = useState(20)
    const [message, setMessage] = useState("")
    const [payout, setPayout] = useState(0)
    const [history, setHistory] = useState([])

    const [weather, setWeather] = useState("Clear")
    const [aqi, setAqi] = useState(50)
    const [traffic, setTraffic] = useState("Low")
    const [zone, setZone] = useState("Open")

    const DAILY_INCOME = 800
    const isBlacklisted = karma >= 10

    // 🔢 Multiplier
    const getMultiplier = (k) => {
        if (k >= 10) return 2
        if (k >= 5) return 1.65
        if (k >= 1) return 1.2
        return 1
    }

    // 💰 Premium
    const calculatePremium = (r, k) => {
        return Math.round((20 + r * 2) * getMultiplier(k))
    }

    // 💸 Payout
    const calculatePayout = (risk, weather, traffic, aqi, zone) => {
        let impact = 0

        if (weather === "Rain") impact += 0.4
        if (weather === "Storm") impact += 0.6
        if (traffic === "High") impact += 0.3
        if (aqi > 150) impact += 0.2
        if (zone === "Curfew") impact += 0.8
        if (zone === "Strike") impact += 1

        if (impact > 1) impact = 1

        return Math.round(DAILY_INCOME * impact * (risk / 10))
    }

    // 🌍 REALISTIC SIMULATION (IMPROVED)
    useEffect(() => {

        const interval = setInterval(() => {

            // 🌦 Weather (slow change)
            let newWeather = weather
            if (Math.random() < 0.3) {
                const weatherOptions = ["Clear", "Rain", "Storm"]
                newWeather = weatherOptions[Math.floor(Math.random() * 3)]
            }

            // 🚧 Traffic (gradual)
            let newTraffic = traffic
            if (Math.random() < 0.5) {
                if (traffic === "Low") newTraffic = "Medium"
                else if (traffic === "Medium") newTraffic = Math.random() < 0.5 ? "Low" : "High"
                else newTraffic = "Medium"
            }

            // 🌫 AQI (smooth)
            let newAqi = aqi + Math.floor(Math.random() * 40 - 20)
            if (newAqi < 0) newAqi = 0
            if (newAqi > 300) newAqi = 300

            // 🚫 Zone (rare)
            let newZone = zone
            if (Math.random() < 0.1) {
                const zoneOptions = ["Open", "Curfew", "Strike"]
                newZone = zoneOptions[Math.floor(Math.random() * 3)]
            }

            // Apply
            setWeather(newWeather)
            setTraffic(newTraffic)
            setAqi(newAqi)
            setZone(newZone)

            // 🧠 Risk logic
            let newRisk = 1

            if (newWeather === "Rain") newRisk += 3
            if (newWeather === "Storm") newRisk += 5
            if (newTraffic === "High") newRisk += 3
            if (newAqi > 150) newRisk += 2
            if (newZone === "Curfew") newRisk += 4
            if (newZone === "Strike") newRisk += 5

            const newPremium = calculatePremium(newRisk, karma)

            setRisk(newRisk)
            setPremium(newPremium)

            setHistory(prev => [
                ...prev.slice(-9),
                { time: new Date().toLocaleTimeString(), premium: newPremium }
            ])

        }, 8000)

        return () => clearInterval(interval)

    }, [karma, weather, traffic, aqi, zone])

    // ⚡ Actions
    const simulateFraud = () => {
        if (isBlacklisted) return setMessage("🚫 Blacklisted")

        setKarma(k => k + 1)
        setTrust(t => Math.max(t - 20, 0))

        setPremium(calculatePremium(risk, karma + 1))
        setPayout(0)

        setMessage("⚠️ Fraud detected → GPS/IP mismatch + abnormal behavior")
    }

    const simulateDisruption = () => {
        if (isBlacklisted) return setMessage("🚫 Blacklisted")

        const amount = calculatePayout(risk, weather, traffic, aqi, zone)

        setTrust(t => Math.min(t + 5, 100))
        setPayout(amount)

        setMessage(`✅ ₹${amount} payout issued`)
    }

    // 🧠 Decision Logic
    let decision = "Monitoring"

    if (isBlacklisted) decision = "Blocked"
    else if (trust < 40 && karma > 2) decision = "Rejected"
    else if (payout > 0) decision = "Payout Approved"

    return (
        <div className="p-6 text-white">

            <h1 className="text-4xl text-center text-blue-400 mb-2">
                ZENSURE AIIMS Dashboard
            </h1>

            <p className="text-green-400 text-center mb-4">
                Live Simulation Mode
            </p>

            <div className="text-center mb-6 text-gray-300">
                Worker: Delivery Partner | Daily Income: ₹800
            </div>

            {/* 🌍 Signals */}
            <div className="grid grid-cols-4 gap-4 mb-2">
                <div className="bg-gray-900 p-4 rounded text-center">🌦 {weather}</div>
                <div className="bg-gray-900 p-4 rounded text-center">🌫 AQI: {aqi}</div>
                <div className="bg-gray-900 p-4 rounded text-center">🚧 {traffic}</div>
                <div className="bg-gray-900 p-4 rounded text-center">🚫 {zone}</div>
            </div>

            <p className="text-xs text-gray-400 text-center mb-6">
                Simulated real-time data (API-ready)
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-4 gap-4 mb-6">
                <div className="bg-gray-900 p-4 rounded text-center">Risk<br />{risk}</div>
                <div className="bg-gray-900 p-4 rounded text-center">Trust<br />{trust}</div>
                <div className="bg-gray-900 p-4 rounded text-center">Karma<br />{karma}</div>
                <div className="bg-gray-900 p-4 rounded text-center">Premium<br />₹{premium}</div>
            </div>

            {/* Payout */}
            <div className="text-center mb-4">
                <h2 className="text-green-400">Last Payout</h2>
                <p className="text-3xl">₹{payout}</p>
            </div>

            <p className="text-xs text-gray-400 text-center mb-6">
                Based on income loss due to {weather}, {traffic}, and {zone}
            </p>

            {/* 🧠 AIIMS */}
            <div className="bg-gray-900 p-4 rounded mb-6">
                <h2 className="text-blue-400 mb-2">🧠 AIIMS Decision</h2>

                <p>✔ Signals: {weather}, {traffic}, AQI {aqi}, {zone}</p>
                <p>✔ GPS: Verified</p>
                <p>✔ IP: Verified</p>
                <p>✔ Motion: Natural</p>
                <p>✔ Trust Score: {trust >= 50 ? "Valid" : "Low"}</p>
                <p>✔ Fraud: {karma > 0 ? "Suspicious" : "Clean"}</p>

                <p className={`mt-2 ${decision === "Rejected" || decision === "Blocked"
                        ? "text-red-400"
                        : "text-green-400"
                    }`}>
                    Decision: {decision}
                </p>

                <p className="text-xs text-gray-400 mt-2">
                    Model: Rule-based + anomaly detection (ML-ready)
                </p>
            </div>

            {/* 💰 PREMIUM ENGINE */}
            <div className="bg-gray-900 p-4 rounded mb-6">
                <h2 className="text-yellow-400 mb-2">💰 Dual Premium Engine</h2>

                <p>Base Premium: ₹{20 + risk * 2}</p>
                <p>Risk Contribution: +₹{risk * 2}</p>
                <p>Karma Multiplier: {getMultiplier(karma)}x</p>

                <p className="mt-2 text-blue-400">
                    Final Premium: ₹{premium}
                </p>
            </div>

            {/* 📊 GRAPH */}
            <div className="bg-gray-900 p-4 rounded mb-6">
                <ResponsiveContainer width="100%" height={200}>
                    <LineChart data={history}>
                        <XAxis dataKey="time" hide />
                        <YAxis hide />
                        <Tooltip />
                        <Line type="monotone" dataKey="premium" stroke="#3b82f6" />
                    </LineChart>
                </ResponsiveContainer>
            </div>

            {/* Buttons */}
            <div className="flex justify-center gap-4">
                <button onClick={simulateDisruption} className="bg-green-600 px-4 py-2 rounded">
                    Disruption
                </button>

                <button onClick={simulateFraud} className="bg-red-600 px-4 py-2 rounded">
                    Fraud
                </button>
            </div>

            {isBlacklisted && (
                <p className="text-red-500 mt-4 text-center">
                    🚫 Blacklisted (Manual Review Required)
                </p>
            )}

            <p className="text-center mt-4">{message}</p>

            <p className="text-xs text-gray-500 text-center mt-6">
                Scalable, API-ready architecture
            </p>

        </div>
    )
}