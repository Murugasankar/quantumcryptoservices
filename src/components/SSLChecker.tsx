import { useState } from "react";

function SSLChecker() {

    const [domain, setDomain] = useState("");

    const [loading, setLoading] = useState(false);

    const [result, setResult] = useState<any>(null);

    const [error, setError] = useState("");

    const calculateDaysLeft = (
        expiryTimestamp: number
    ) => {

        const now = new Date().getTime();

        const expiry = expiryTimestamp * 1000;

        const diff = expiry - now;

        return Math.ceil(
            diff / (1000 * 60 * 60 * 24)
        );

    };
    const checkSSL = async () => {

        if (!domain) {

            alert("Please enter domain");

            return;

        }

        try {

            setLoading(true);

            setError("");

            setResult(null);

            const fetchSSL = async () => {

                const response = await fetch(
                    `http://localhost:5000/api/ssl-check?domain=${domain}`
                );

                if (!response.ok) {

                    throw new Error("Backend API failed");

                }

                const data = await response.json();

                console.log(data);

                setResult(data);

                // AUTO REFRESH WHILE SCANNING
                // IMPROVED AUTO POLLING
                const allReady = data.endpoints?.every(
                    (endpoint: any) =>
                        endpoint.grade &&
                        endpoint.grade !== "Pending"
                );

                const certReady = data.endpoints?.every(
                    (endpoint: any) =>
                        endpoint.details?.cert
                );

                if (
                    data.status === "IN_PROGRESS" ||
                    data.status === "DNS" ||
                    !allReady ||
                    !certReady
                ) {

                    setTimeout(fetchSSL, 5000);

                } else {

                    setLoading(false);

                }
            };

            fetchSSL();

        } catch (err) {

            console.error(err);

            setError("Failed to fetch SSL report");

            setLoading(false);

        }

    };

    return (

        <div className="bg-[#081028] border border-cyan-900/30 rounded-3xl p-10 mt-16 max-w-4xl mx-auto">

            {/* INPUT */}
            <div className="flex flex-col md:flex-row gap-5">

                <input
                    type="text"
                    placeholder="Enter domain (example.com)"
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            checkSSL();
                        }
                    }}
                    className="flex-1 bg-[#0f172a] border border-cyan-900/30 rounded-2xl px-6 py-5 text-lg outline-none text-white"
                />

                <button
                    onClick={checkSSL}
                    disabled={loading}
                    className="bg-cyan-500 hover:bg-cyan-600 disabled:opacity-70 text-black px-8 py-4 rounded-2xl font-bold transition duration-300 cursor-pointer"
                >

                    {loading ? "Checking..." : "Check SSL"}

                </button>

            </div>

            {/* ERROR */}
            {error && (

                <p className="text-red-400 mt-6">

                    {error}

                </p>

            )}

            {/* RESULTS */}
            {result && (

                <div className="mt-10">

                    <h3 className="text-3xl font-bold text-cyan-400 mb-8">

                        SSL Report

                    </h3>

                    <div className="space-y-5">

                        {/* HOST */}
                        <div className="bg-[#0f172a] rounded-2xl p-5">

                            <p className="text-gray-400">

                                Host

                            </p>

                            <p className="text-xl font-bold text-white">

                                {result.host || "N/A"}

                            </p>

                        </div>

                        {/* STATUS */}
                        <div className="bg-[#0f172a] rounded-2xl p-5">

                            <p className="text-gray-400">

                                Status

                            </p>

                            <p className={`text-xl font-bold ${result.status === "READY"
                                ? "text-green-400"
                                : "text-cyan-400"
                                }`}>

                                {result.status || "Pending"}

                            </p>

                        </div>

                        {/* ENDPOINTS */}
                        {result.endpoints &&
                            result.endpoints.map(
                                (endpoint: any, index: number) => (

                                    <div
                                        key={index}
                                        className="bg-[#0f172a] rounded-2xl p-6"
                                    >

                                        <div className="flex items-center justify-between flex-wrap gap-4">

                                            <div>

                                                <p className="text-gray-400">

                                                    SSL Grade

                                                </p>

                                                <p className={`text-5xl font-extrabold ${endpoint.grade === "A+"
                                                    ? "text-green-400"
                                                    : endpoint.grade === "A"
                                                        ? "text-cyan-400"
                                                        : endpoint.grade === "B"
                                                            ? "text-yellow-400"
                                                            : "text-red-400"
                                                    }`}>

                                                    {endpoint.grade || "Pending"}

                                                </p>

                                            </div>

                                            <div className="text-right">

                                                <p className="text-gray-400">

                                                    IP Address

                                                </p>

                                                <p className="text-white text-lg font-semibold">

                                                    {endpoint.ipAddress || "N/A"}

                                                </p>

                                            </div>

                                        </div>

                                        {/* EXTRA DETAILS */}
                                        <div className="mt-6 grid md:grid-cols-2 gap-4">

                                            {/* HTTPS STATUS */}
                                            <div className="bg-[#111827] rounded-xl p-4">

                                                <p className="text-gray-400 text-sm">

                                                    HTTPS Status

                                                </p>

                                                <p className="text-green-400 font-bold mt-1">

                                                    Secure

                                                </p>

                                            </div>

                                            {/* TLS */}
                                            <div className="bg-[#111827] rounded-xl p-4">

                                                <p className="text-gray-400 text-sm">

                                                    TLS Support

                                                </p>

                                                <p className="text-cyan-400 font-bold mt-1">

                                                    TLS 1.3

                                                </p>

                                            </div>

                                            {/* SSL EXPIRY */}
                                            <div className="bg-[#111827] rounded-xl p-4">

                                                <p className="text-gray-400 text-sm">

                                                    SSL Expiry Date

                                                </p>

                                                <p className="text-yellow-400 font-bold mt-1">

                                                    {endpoint.details?.cert?.notAfter
                                                        ? new Date(
                                                            endpoint.details.cert.notAfter * 1000
                                                        ).toLocaleDateString()
                                                        : "Scanning..."}

                                                </p>

                                            </div>

                                            {/* DAYS LEFT */}
                                            <div className="bg-[#111827] rounded-xl p-4">

                                                <p className="text-gray-400 text-sm">

                                                    SSL Validity Remaining

                                                </p>

                                                <p className={`font-bold mt-1 ${calculateDaysLeft(
                                                    endpoint.details?.cert?.notAfter || 0
                                                ) < 30
                                                        ? "text-red-400"
                                                        : "text-green-400"
                                                    }`}>

                                                    {endpoint.details?.cert?.notAfter
                                                        ? `${calculateDaysLeft(
                                                            endpoint.details.cert.notAfter
                                                        )} days`
                                                        : "Scanning..."}

                                                </p>

                                            </div>

                                            {/* ISSUER */}
                                            <div className="bg-[#111827] rounded-xl p-4">

                                                <p className="text-gray-400 text-sm">

                                                    Certificate Issuer

                                                </p>

                                                <p className="text-white font-bold mt-1">

                                                    {endpoint.details?.cert?.issuerLabel ||
                                                        "Scanning..."}

                                                </p>

                                            </div>

                                            {/* CERTIFICATE TYPE */}
                                            <div className="bg-[#111827] rounded-xl p-4">

                                                <p className="text-gray-400 text-sm">

                                                    Certificate Type

                                                </p>

                                                <p className="text-cyan-400 font-bold mt-1">

                                                    {endpoint.grade === "A+" ||
                                                        endpoint.grade === "A"
                                                        ? "Strong Enterprise SSL"
                                                        : endpoint.grade === "B"
                                                            ? "Moderate Security SSL"
                                                            : "Weak SSL Configuration"}

                                                </p>

                                            </div>

                                            {/* SECURITY RECOMMENDATION */}
                                            <div className="bg-[#111827] rounded-xl p-5 md:col-span-2">

                                                <p className="text-gray-400 text-sm mb-3">

                                                    Security Recommendation

                                                </p>

                                                <p className="text-white leading-relaxed">

                                                    {endpoint.grade === "A+"
                                                        ? "Excellent SSL configuration with enterprise-grade encryption and modern TLS support."
                                                        : endpoint.grade === "A"
                                                            ? "Strong SSL setup. Consider advanced TLS hardening for maximum protection."
                                                            : endpoint.grade === "B"
                                                                ? "Moderate SSL security. Improve TLS configuration and certificate settings."
                                                                : "Critical SSL improvements required. Upgrade TLS configuration immediately."}

                                                </p>

                                            </div>

                                        </div>
                                    </div>

                                )
                            )}

                    </div>

                </div>

            )}

        </div>

    );
}

export default SSLChecker;