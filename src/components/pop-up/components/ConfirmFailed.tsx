import bgPopUpConfirm from "../../../assets/images/bg_pop_up_confirm.png";

function ConfirmFailed() {
  return (
    <div
      id="pop-up-confirm--error"
      className="w-full h-[100vh] left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] hidden fixed z-40 bg-transparent text-black"
    >
      <div className="w-[70%] lg:w-[50%] xl:w-[40%] min-w-[320px] fixed z-50 top-[50%] -translate-x-[50%] left-[50%] -translate-y-[50%] mx-auto">
        <div className="relative">
          <div className="w-full">
            <img src={bgPopUpConfirm} alt="" className="w-full " />
          </div>
          <div className="absolute top-0 flex flex-col items-center justify-between w-full h-full p-2 md:p-4 lg:p-6">
            <div className="text-center text-white uppercase text-base md:text-[20px]">
              THÔNG BÁO
            </div>
            <div className="text-white text-center text-[14px] md:text-base">
              <span className="text-[#ff2121]">Cập nhật thất bại. </span>
              <br className="block md:hidden" />
              Vui lòng điền đầy đủ thông tin
            </div>
            <button
              id="btn-confirm--error"
              className="bg-[#ffc421] px-2 py-1 rounded text-center mx-auto w-[200px] font-bold text-[12px] md:text-[14px]"
            >
              Cập nhật
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmFailed;
