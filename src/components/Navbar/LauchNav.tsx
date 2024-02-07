import turnstile from "../../assets/turnstile.jpg"

const LauchNav = () => {
  return (
    <div className="flex flex-row items-start justify-center py-6 px-10">
      <div className="flex flex-row justify-center basis-4/6 ">
        <div className="basis-[30%]">
          <div className="text-2xl mb-2">Featured</div>
          <ul className="text-sm py-4">
            <li className="font-normal mb-2">Comme Des Garcon</li>
            <li className="font-normal mb-2">DRK SHDW</li>
            <li className="font-normal mb-2">A-COLD-WALL*</li>
            <li className="font-normal mb-2">Stussy</li>
            <li className="font-normal mb-2">Liverpool FC</li>
          </ul>
        </div>
        <div className="basis-[35%]">
          <div className="text-2xl mb-2">Shop Launch</div>
          <ul className="text-sm py-4">
            <li className="font-normal mb-2">All Launch</li>
          </ul>
        </div>
        <div className="basis-[30%]">
          <div className="text-2xl mb-2">Latest</div>
          <div className="w-full relative">
            <img
              className="w-full h-full object-cover"
              src={turnstile}
              alt="red-converse"
            />
            <p className="absolute bottom-0 z-50 ml-1 text-white font-bold pb-2">
              Converse x Turnstile
            </p>
            <div className="absolute bg-slate-300 z-30 px-6 inset-0 bg-opacity-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LauchNav;
