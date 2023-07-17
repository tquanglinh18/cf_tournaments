import footerCfLogo from "../../assets/images/footer_cf_logo.png";
import footerCfsLogo from "../../assets/images/footer_cfs_logo.png";
import footerSgeLogo from "../../assets/images/footer_sge_logo.png";
import footerVtcoLogo from "../../assets/images/footer_vtco_logo.png";
import icDiscord from "../../assets/images/ic_discord.png";
import icFacebook from "../../assets/images/ic_facebook.png";
import icMessenger from "../../assets/images/ic_messenger.png";
import icYoutube from "../../assets/images/ic_youtube.png";

function Footer() {
  return (
    <footer className="w-full bg-[#07090a]">
    <div className="container flex flex-col items-center justify-between flex-shrink-0 w-full px-8 py-8 mx-auto space-y-8 md:space-y-8 lg:space-y-0 xl:space-y-0 2xl:space-y-0 lg:flex-row xl:flex-row 2xl:flex-row">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4">
        <div className="flex items-center justify-center">
          <img src={footerCfLogo} alt="" className="object-contain" />
        </div>
        <div className="flex items-center justify-center">
          <img src={footerCfsLogo} alt="" className="object-contain" />
        </div>
        <div className="flex items-center justify-center">
          <img src={footerSgeLogo} alt="" className="object-contain" />
        </div>
        <div className="flex items-center justify-center">
          <img src={footerVtcoLogo} alt="" className="object-contain" />
        </div>
      </div>
      <div className="flex items-center justify-center ">
        <a href="/" className="mx-4 cursor-pointer">
          <img src={icFacebook} alt="" className="object-contain" />
        </a>
        <a href="/" className="mx-4 cursor-pointer">
          <img src={icYoutube} alt="" className="object-contain" />
        </a>
        <a href="/" className="mx-4 cursor-pointer">
          <img src={icDiscord} alt="" className="object-contain" />
        </a>
        <a href="/" className="mx-4 cursor-pointer">
          <img src={icMessenger} alt="" className="object-contain" />
        </a>
      </div>
    </div>
  </footer>
  );
}

export default Footer;
