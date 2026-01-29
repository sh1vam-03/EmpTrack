export default function Logo({ className = "", textClassName = "", iconSize = "w-8 h-8", textSize = "text-xl", showText = true, whiteText = false }) {
    return (
        <div className={`flex items-center gap-3 ${className}`}>
            {/* Icon */}
            <div className={`${iconSize} min-w-[${iconSize.split(' ')[0]}] bg-linear-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20`}>
                <svg className="w-1/2 h-1/2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            </div>

            {/* Text */}
            {showText && (
                <div className={`font-bold tracking-tighter ${textSize} ${textClassName}`}>
                    <span className={whiteText ? "text-white" : "text-gray-900 dark:text-white"}>EMP</span>
                    <span className={whiteText ? "text-blue-200 font-light" : "text-indigo-600 dark:text-indigo-400 font-light"}>TRACK</span>
                </div>
            )}
        </div>
    );
}
