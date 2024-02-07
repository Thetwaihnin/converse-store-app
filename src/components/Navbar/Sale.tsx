const Sale = () => {
  return (
    <div className="flex flex-row items-start justify-center py-6 px-10">
      <div className="flex flex-row basis-4/5 justify-center">
        <div className="basis-[25%]">
          <div className="text-2xl mb-2">Featured</div>
          <ul className="text-sm py-4">
            <li className="font-normal mb-2">All Sale</li>
            <li className="font-normal mb-2">Outlet</li>
            <li className="font-normal mb-2">Shoes Under €50</li>
          </ul>
        </div>
        <div className="basis-[25%]">
          <div className="text-2xl mb-2">Women</div>
          <ul className="text-sm py-4">
            <li className="font-normal mb-2">All Sale</li>
            <li className="font-normal mb-2">Shoes</li>
            <li className="font-normal mb-2">Clothing And Accessories</li>
          </ul>
        </div>
        <div className="basis-[25%]">
          <div className="text-2xl mb-2">Men</div>
          <ul className="text-sm py-4">
            <li className="font-normal mb-2">All Sale</li>
            <li className="font-normal mb-2">Shoes</li>
            <li className="font-normal mb-2">Clothing And Accessories</li>
          </ul>
        </div>
        <div className="basis-[25%]">
          <div className="text-2xl mb-2">Kids</div>
          <ul className="text-sm py-4">
            <li className="font-normal mb-2">All Sale</li>
            <li className="font-normal mb-2">Shoes</li>
            <li className="font-normal mb-2">Clothing And Accessories</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sale;
