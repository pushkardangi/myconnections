const StatusGlobe = ({ statusInfo }) => {
    return (
        <div className={`relative w-40 h-40 rounded-full p-5 ${ statusInfo.status == "error" ? "bg-red-300" : "bg-green-200" } flex items-center text-center`}>
            <span className={`absolute text-8xl left-0 top-0 ${ statusInfo.status == "error" ? "text-red-500" : "text-green-400" }`}>
                "
            </span>
            {statusInfo.message}
        </div>
    );
};

export default StatusGlobe;
