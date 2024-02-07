import { useEffect, useState } from "react";
import { SelectedPage } from "../../Shared/type";
import Link from "./LInk";
import NewAndFeatured from "./NewAndFeatured";
import WomenNav from "./WomenNav";
import MenNav from "./MenNav";
import KidNav from "./KidNav";
import Custom from "./CustomNav";
import Launch from "./LauchNav";
import Sale from "./Sale";


type Props = {
  page: SelectedPage | string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const LinkDropDown = ({ page, selectedPage, setSelectedPage }: Props) => {
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);

  const handleLinkHover = () => {
    setDropdownOpen(true);
  };

  const handleLinkLeave = () => {
    setDropdownOpen(false);
  };

  const handleDropdownLeave = () => {
    setDropdownOpen(false);
  };

  useEffect(() => {
    return () => {
      setDropdownOpen(false);
    };
  }, []);

  const getDropdownContents = (page: SelectedPage | string) => {
    switch (page) {
      case SelectedPage.NewAndFeatured:
        return <NewAndFeatured />;
      case SelectedPage.Kids:
        return <KidNav />;
      case SelectedPage.Women:
        return <WomenNav />;
      case SelectedPage.Men:
        return <MenNav />;
      case SelectedPage.Custom:
        return <Custom />;
      case SelectedPage.Launch:
        return <Launch />;
      case SelectedPage.Sale:
        return <Sale />;
      default:
        return "";
    }
  };

  return (
    <div
      className="relative group cursor-pointer hover:border-b-2 border-black "
      onMouseEnter={handleLinkHover}
      onMouseLeave={handleLinkLeave}
    >
      <Link
        page={page}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />

      {isDropdownOpen && (
        <div
          className="fixed inset-0 overflow-y-auto"
          onMouseLeave={handleDropdownLeave}
        >
          <div className={`mx-auto p-6 shadow-sm mt-14 max-w-full bg-white`}>
            {getDropdownContents(page)}
          </div>
        </div>
      )}
    </div>
  );
};

export default LinkDropDown;
