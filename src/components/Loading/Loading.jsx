const Loading = () => {
    return (
    //      <div className="flex justify-center items-center h-screen">
    //   {/* Spinner */}
    //   <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600"></div>
    // </div>



    <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-6">
      
      {/* Circular Spinner */}
      <div className="animate-spin rounded-full h-20 w-20 border-4 border-t-4 border-b-4 border-blue-500 border-t-transparent"></div>

      {/* Loading Text */}
      <p className="text-gray-600 text-lg font-medium animate-pulse">
         
      </p>

      {/* Skeleton Grid Example */}
      <div className="grid grid-cols-3 gap-5 w-full max-w-[1250px]">
        {[...Array(6)].map((_, idx) => (
          <div
            key={idx}
            className="h-40 bg-gray-200 rounded-lg animate-pulse"
          ></div>
        ))}
      </div>
    </div>



    );
};

export default Loading;