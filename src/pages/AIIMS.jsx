export default function AIIMS() {
    return (
        <div className="p-6 text-white">

            <h1 className="text-3xl text-blue-400 mb-6">AIIMS Engine</h1>

            <div className="bg-gray-900 p-4 rounded">

                <p>📡 Monitoring Layer → Collects signals</p>
                <p>🧠 Analyzer → Calculates risk & disruption</p>
                <p>🛡 Fraud Detection → Checks anomalies</p>
                <p>⚖️ Decision Engine → Approves / Rejects</p>
                <p>💸 Payout Executor → Issues payout</p>

            </div>

            <div className="mt-6 bg-gray-900 p-4 rounded">

                <p>System Flow:</p>

                <p className="mt-2">
                    Signals → Analyzer → Fraud Check → Decision → Payout
                </p>

                <p className="mt-4">
                    If Fraud → Reject
                    If Valid → Approve
                    If Suspicious → Review
                </p>

            </div>

        </div>
    )
}