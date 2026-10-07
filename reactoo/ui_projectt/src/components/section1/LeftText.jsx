const LeftText = () => {
  return (
    <div className="flex h-full flex-col justify-between py-6 md:py-10">
      <div>
        <h1 className="max-w-[320px] text-4xl font-bold leading-[0.95] tracking-[-0.04em] text-black sm:text-5xl md:text-[52px]">
          Prospective
          <br />
          customer
          <br />
          segmentation
        </h1>

        <p className="mt-7 max-w-[270px] text-sm leading-6 text-neutral-500">
          Depending on customer satisfaction and access to banking products,
          potential target audience can be divided into three groups.
        </p>
      </div>

      <div className="mt-12 hidden text-5xl leading-none text-black md:block">
        ↗
      </div>
    </div>
  );
};

export default LeftText;