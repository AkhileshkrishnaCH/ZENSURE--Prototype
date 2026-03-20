export default function Risk() {
    return (
        <div className="p-6 text-white">

            <h1 className="text-3xl text-yellow-400 mb-6">Risk Analysis Engine</h1>

            <div className="bg-gray-900 p-4 rounded">

                <p>Input Signals:</p>
                <p>Weather → AQI → Traffic → Zone</p>

                <p className="mt-4">Processing:</p>
                <p>Signal Weighting → Risk Scoring → Severity Mapping</p>

                <p className="mt-4">Output:</p>
                <p>Final Risk Score (0–10)</p>

            </div>

            <div className="mt-6 bg-gray-900 p-4 rounded">

                <p>Flow Diagram:</p>

                <p className="mt-2">
                    [Weather] + [AQI] + [Traffic] + [Zone]
                    ↓
                    Weighted Risk Model
                    ↓
                    Risk Score
                    ↓
                    Premium + Payout Impact
                </p>

            </div>

        </div>
    )
}