# 🚀 ZENSURE Prototype  
**Zero-touch Engine for Networked Smart Unified Risk Evaluation**

> No Claims. No Delays. Just Protection.

---

## 🌐 Live Demo
🔗 https://your-vercel-link.vercel.app

---

## 🧠 Overview

ZENSURE is an AI-powered parametric insurance system designed for gig workers (delivery partners, drivers, etc.) to protect against **real-time income disruptions**.

This prototype demonstrates:
- Real-time environmental monitoring
- Intelligent risk scoring
- Fraud detection system
- Dynamic premium pricing
- Instant automated payouts

---

## ⚙️ Core System – AIIMS

**AIIMS (AI-driven Integrated Monitoring & Settlement System)** powers the entire system:

- 📡 Monitoring Layer → Collects signals (Weather, AQI, Traffic, Zone)
- 🧠 Analyzer Engine → Computes risk & disruption severity
- 🛡 Fraud Detection → Identifies suspicious behavior
- ⚖️ Decision Engine → Approves / Rejects / Flags
- 💸 Payout Executor → Issues instant payouts

---

## 🌍 Real-Time Simulation

This prototype simulates real-world conditions:

- 🌦 Weather (Clear / Rain / Storm)
- 🌫 AQI levels
- 🚧 Traffic conditions
- 🚫 Zone status (Open / Curfew / Strike)

> ⚠️ Note: Data is simulated, but the system is designed for real API integration.

---

## 💰 Dual Premium Engine

Premium is dynamically calculated using:

Premium = Base + Risk Contribution × Karma Multiplier


### Inputs:
- Risk Score (environment-based)
- Karma Points (fraud behavior)

### Multiplier Logic:
| Karma | Multiplier |
|------|-----------|
| 0 | 1.0x |
| 1–4 | 1.2x |
| 5–9 | 1.65x |
| ≥10 | 2.0x (Blacklist) |

---

## 💸 Parametric Payout Model

Payout is calculated based on **income disruption**, not claims:

Payout = Daily Income × Disruption Impact × Severity


### Factors:
- Weather severity
- Traffic conditions
- AQI levels
- Curfew / Strike

---

## 🛡 Fraud Detection System

ZENSURE uses a **Trust + Karma system**:

- Fraud increases karma points
- Higher karma → higher premiums
- Excessive fraud → account blacklisted

### Simulated signals:
- 📍 GPS consistency
- 🌐 IP validation
- 📱 Motion patterns

---

## 🧠 AIIMS Decision Logic

| Condition | Output |
|----------|--------|
| Valid disruption | ✅ Payout Approved |
| Suspicious activity | ⚠️ Under Review |
| Fraudulent behavior | ❌ Rejected |
| Excessive fraud | 🚫 Blocked |

---

## 📊 Features Demonstrated

- ✅ Real-time signal updates  
- ✅ Dynamic risk scoring  
- ✅ Premium adjustment  
- ✅ Fraud penalty system  
- ✅ Automated payouts  
- ✅ AIIMS decision transparency  
- ✅ Visual analytics (live graph)

---

## 🖥 Tech Stack

- **Frontend:** React.js + Tailwind CSS  
- **Charts:** Recharts  
- **Backend:** Simulated (FastAPI-ready design)  
- **Data:** Mock real-time signals  

---

## ⚠️ Disclaimer

This is a **simulation prototype** built for demonstration purposes.

The architecture is designed to integrate with:
- Weather APIs
- Traffic APIs
- Platform data (Swiggy/Zomato, etc.)

---

## 🏁 Conclusion

ZENSURE demonstrates a **zero-touch insurance model** that:

- Eliminates manual claims  
- Detects disruptions in real time  
- Prevents fraud using behavioral signals  
- Protects gig workers instantly  

---

💡 *Built as part of a hackathon to showcase intelligent, scalable insurance systems.*
