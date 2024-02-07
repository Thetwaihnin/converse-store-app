type Props = {
    page: string;
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void
  }
   
    import AnchorLink from "react-anchor-link-smooth-scroll";
    import { SelectedPage } from "../../Shared/type";
  
  const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
    const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage
    const sale = "SALE"

    return (
      <AnchorLink className={`
        ${selectedPage === lowerCasePage ? "text-stone-950" : ""} ${page === sale ? "text-primary-500" : ""}
        transition duration-500 hover:text-gray-500 font-bold `} 
        href={`#${lowerCasePage}`} 
        onClick={() => setSelectedPage(lowerCasePage)}>
        {page}
      </AnchorLink>
    )
}
export default Link;