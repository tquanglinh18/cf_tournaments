import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

type Props = {
  id: string;
  name: string;
  urlIcon: string;
  subMenus: any;
};

function HeaderItem(props: Props) {
  const { id, name, urlIcon, subMenus } = props;
  return (
    <div
      id={id}
      className="w-[100px] relative border-b-2 border-b-transparent hover:border-b-2 hover:border-b-[#f75014] hover:bg-gradient-to-t hover:from-[#742810] hover:to-transparent cursor-pointer"
    >
      <Link
        to={"/" + id}
        className="flex flex-col items-center justify-center pt-4 pb-2 text-center"
      >
        <div className="">
          <img src={urlIcon} alt="" className="mb-2" />
        </div>
        <p className="text-white text-[12px]">{name}</p>
      </Link>
      {subMenus != null ? (
        <div
          id={"sub-menu-" + id}
          className="absolute hidden min-w-[240px] text-white z-50"
        >
          {subMenus.map((subMenu: any, index: number) => {
            return (
              <div
                key={index}
                className="relative border-l-2 border-l-[#2c3944] border-b-[1px] border-b-[#2c3944] hover:text-[#f75014] hover:border-l-2 hover:border-l-[#f75014] cursor-pointer bg-[#0f141a]"
              >
                <Link
                  to={"/" + id + "/" + subMenu.path}
                  className="flex items-center justify-between p-3"
                >
                  <p>{subMenu.title}</p>
                  <FontAwesomeIcon
                    icon={subMenu.icon}
                    transform={{ rotate: 90 }}
                  />
                </Link>
              </div>
            );
          })}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default HeaderItem;
