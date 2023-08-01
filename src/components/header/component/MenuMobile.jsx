import PropTypes from "prop-types";

MenuMobile.propTypes = {
  nickName: PropTypes.string,
};

MenuMobile.defaultProps = {
  nickName: "",
};

function MenuMobile(props) {
  const { nickName } = props;
  return (
    <div className="fixed top-[72px] right-0 w-[85%] z-50 overflow-y-auto text-white text-base h-[100vh] bg-black bg-opacity-90 px-4 text-center justify-center py-12 transform">
      <div className="flex flex-col items-center mb-8 space-y-4">
        <div className="flex items-center justify-center mx-8 space-x-8">
          <div className="bg-[#f75014] px-2 py-1 rounded min-w-[120px] text-center">
            {nickName}
          </div>
          <button className="cursor-pointer">Thoát</button>
        </div>
        <a href="/home" className="mb-2">
          [ TRANG CHỦ ]
        </a>
        <a href="/tournaments" className="mb-2">
          [ GIẢI ĐẤU ]
        </a>
        <a href="/teams" className="mb-2">
          [ ĐỘI TUYỂN ]
        </a>
        <a href="/player" className="mb-2">
          [ THÀNH VIÊN ]
        </a>
        <a href="/rank" className="mb-2">
          [ XẾP HẠNG ]
        </a>
        <a href="/media" className="mb-2">
          [ MEDIA ]
        </a>
      </div>
    </div>
  );
}

export default MenuMobile;
