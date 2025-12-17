export const Footer = ({ step, handlePrev, handleClick }) => {
  return (
    <div className="flex justify-evenly pt-4 gap-3">
      <div className="h-11 w-30 cursor-pointer flex items-center justify-center rounded-md text-black border-2">
        <button onClick={handlePrev}>Previous</button>
      </div>
      <div className="bg-black h-11 w-70 cursor-pointer flex items-center rounded-md justify-center gap-2">
        <button onClick={handleClick}>Continue {step}/3</button>
        <img src="chevron.png" alt="" />
      </div>
    </div>
  );
};

export default Footer;
