
const Navbar = () => {
  return (
    <nav className="w-full bg-[#212529] flex items-center justify-between px-6 py-3 fixed top-0 left-0 z-50">
      {/* Restoring your original content but applying the dark style from your image */}
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center gap-12">
          <img className="w-10 h-10 object-contain scale-[1.8] origin-left ml-2" src="/logo.png" alt="logo" />
          <p className="cursor-pointer font-bold text-xl text-[#FFFFFF]">
            AI <span className="text-[#0D6EFD]">PlayZone</span>
          </p>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;