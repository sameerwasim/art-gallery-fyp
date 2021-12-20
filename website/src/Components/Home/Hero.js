
const Hero = () => {
    var heroStyle = {
        background:
          "url(https://images.unsplash.com/photo-1499892477393-f675706cbe6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQ4fHxwYWludGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60) no-repeat fixed center",
        backgroundSize: "cover",height:"70vh"
      };
  return (
    <>
      {/*==================================== Hero ============================= */}
      
        <div style={heroStyle} className="p-5 ">
            <h1 className="p-5 text-white text-center m-5">
            Lorem Ipsum is simply dummy text of the printing 
           
            </h1>
           
        </div>
     
    </>
  );
};

export default Hero;
