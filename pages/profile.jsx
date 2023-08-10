const profile = ({ token }) => {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // Add other styles as needed
    width: "100%",
    height: "300px", // Set your desired height for the container
  };
  return (
    <div className="md:w-[420px] mt-14 mx-auto">
      <div className="">
        <h3 className="mb-2 text-2xl font-bold">WELCOME TO YOUR MEXC BOT!</h3>
        <p></p>
        <p>Please contact the Administrator to Activate/Deactivate MEXC BOT.</p>
        {/* Add your profile information here */}
        <div style={containerStyle}>{/* Your other JSX content */}</div>
      </div>
    </div>
  );
};

export default profile;
