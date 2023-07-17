import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

HeaderItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  urlIcon: PropTypes.string,
  subMenus: PropTypes.array,
};

HeaderItem.defaultProps = {
  id: "",
  name: "",
  urlIcon: "",
  subMenus: [],
};

function HeaderItem(props) {
  const { id, name, urlIcon, subMenus } = props;
  return (
    <a
      href="/"
      id={id}
      className="w-[100px] relative border-b-2 border-b-transparent hover:border-b-2 hover:border-b-[#f75014] hover:bg-gradient-to-t hover:from-[#742810] hover:to-transparent cursor-pointer"
    >
      <div className="flex flex-col items-center justify-center pt-4 pb-2 text-center">
        <div className="">
          <img src={urlIcon} alt="" className="mb-2" />
        </div>
        <p className="text-white text-[12px]">{name}</p>
      </div>
      {subMenus != null ? (
        <div
          id={"sub-menu-" + id}
          className="absolute hidden min-w-[240px] text-white z-50"
        >
          {subMenus.map((subMenu, index) => {
            return (
              <div
                key={index}
                className="relative border-l-2 border-l-[#2c3944] border-b-[1px] border-b-[#2c3944] hover:text-[#f75014] hover:border-l-2 hover:border-l-[#f75014] cursor-pointer bg-[#0f141a]"
              >
                <div className="flex items-center justify-between p-3">
                  <p>{subMenu.title}</p>
                  <FontAwesomeIcon
                    icon={subMenu.icon}
                    transform={{ rotate: 90 }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <></>
      )}
    </a>
  );
}

export default HeaderItem;
