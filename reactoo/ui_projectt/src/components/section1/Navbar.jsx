const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-6 py-5 md:px-10">
      <div className="rounded-full bg-black px-4 py-2">
        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
          Target Audience
        </span>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
          Digital Banking Platform
        </span>

        <span className="text-sm text-black">↘</span>
      </div>
    </div>
  );
};

export default Navbar;