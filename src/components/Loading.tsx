const Loading = () => {
  return (
    <div className="bg-sky-100 flex justify-center items-center w-screen h-screen">
      <div
        className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] text-gray-700"
        role="status"
      ></div>
    </div>
  );
};

export default Loading;
