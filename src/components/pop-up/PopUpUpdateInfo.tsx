import { useForm } from "react-hook-form";
import bgPopUp from "../../assets/images/bg_pop_up.png";
import icHeadingInfo from "../../assets/images/heading_info_player.png";
import icChecked from "../../assets/images/ic_sucess.png";
import icUpload from "../../assets/images/ic_upload.png";
import bgPopUpConfirm from "../../assets/images/bg_pop_up_confirm.png";

type Props = {};

function PopUpUpdateInfo(props: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    document
      .getElementById("pop-up-confirm--success")
      ?.classList.remove("hidden");
  };

  const onErrors = (errors: any) => {
    document
      .getElementById("pop-up-confirm--error")
      ?.classList.toggle("hidden");
  };

  function handleConfirmSuccess() {
    document.getElementById("pop-up-confirm--success")?.classList.add("hidden");
    document.getElementById("pop-up-update")?.classList.add("hidden");
  }

  const fieldOptions = {
    name: {
      required: "Họ và tên không được bỏ trống",

      maxLength: {
        value: 50,
        message: "Họ và tên quá dài",
      },
    },
    nickname: {
      required: "Nickname không được bỏ trống",
      maxLength: {
        value: 50,
        message: "Nickname quá dài",
      },
    },
    year_of_birth: {
      required: "Năm sinh không được bỏ trống",
      max: {
        value: 2023,
        message: "Năm sinh không hợp lệ",
      },
      min: {
        value: 1900,
        message: "Năm sinh không hợp lệ",
      },
      maxLength: {
        value: 4,
        message: "Năm sinh không hợp lệ",
      },
    },
    facebook: {
      required: "Facebook không được bỏ trống",
    },
    location: {
      required: "Tỉnh thành không được bỏ trống",
    },
    forte: {
      required: "Vị trí sở trường không được bỏ trống",
    },
  };
  return (
    <form
      id="pop-up-update"
      onSubmit={handleSubmit(onSubmit, onErrors)}
      className="overflow-y-auto w-full text-black pop-up-info"
    >
      <div className="w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] mx-auto bg-[#253138] border-[#ffc421] border-2">
        <div className="relative w-full px-12 py-8 z-10">
          <div className="w-full mb-12">
            <img
              src={bgPopUp}
              alt=""
              className="object-contain absolute top-0 -z-10 left-0 right-0"
            />
          </div>
          <div className="mb-[5%] w-full">
            <img src={icHeadingInfo} alt="" className="w-full" />
          </div>
          <div className="grid grid-cols-3 gap-8 mb-[5%]">
            <div className="flex flex-col space-y-2">
              <label htmlFor="name-value" className="flex mb-4 space-x-2">
                <div className="px-2 bg-[#ffc421] rounded-full">1</div>
                <div className="text-[#ffc421]">Họ và tên</div>
              </label>
              <input
                className="w-full px-4 py-2 mb-1 rounded shadow-inner"
                type="text"
                placeholder="Họ và tên"
                {...register("name", fieldOptions.name)}
              />
              <small className="text-[#F20000]">
                {errors?.name && errors.name.message?.toString()}
              </small>
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="nick-name-value" className="flex mb-4 space-x-2">
                <div className="px-2 bg-[#ffc421] rounded-full">2</div>
                <div className="text-[#ffc421]">Nickname</div>
              </label>
              <input
                className="w-full px-4 py-2 mb-1 rounded shadow-inner"
                type="text"
                placeholder="Nickname"
                {...register("nickname", fieldOptions.nickname)}
              />
              <small className="text-[#F20000]">
                {errors?.nickname && errors.nickname.message?.toString()}
              </small>
            </div>

            <div className="flex flex-col space-y-2">
              <label
                htmlFor="year-of-birth-value"
                className="flex mb-4 space-x-2"
              >
                <div className="px-2 bg-[#ffc421] rounded-full">3</div>
                <div className="text-[#ffc421]">Năm sinh</div>
              </label>
              <input
                className="w-full px-4 py-2 mb-1 rounded shadow-inner"
                type="number"
                placeholder="Năm sinh"
                {...register("year_of_birth", fieldOptions.year_of_birth)}
              />
              <small className="text-[#F20000]">
                {errors?.year_of_birth &&
                  errors.year_of_birth.message?.toString()}
              </small>
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="facebook-value" className="flex mb-4 space-x-2">
                <div className="px-2 bg-[#ffc421] rounded-full">4</div>
                <div className="text-[#ffc421]">Facebook</div>
              </label>
              <input
                className="w-full px-4 py-2 mb-1 rounded shadow-inner"
                type="url"
                placeholder="Facebook"
                {...register("facebook", fieldOptions.facebook)}
              />
              <small className="text-[#F20000]">
                {errors?.facebook && errors.facebook.message?.toString()}
              </small>
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="location-value" className="flex mb-4 space-x-2">
                <div className="px-2 bg-[#ffc421] rounded-full">5</div>
                <div className="text-[#ffc421]">Tỉnh thành</div>
              </label>
              <select
                className="flex w-full px-4 py-2 bg-white rounded shadow-inner cursor-pointer hover:bg-[#E8E8E8]"
                {...register("location", fieldOptions.location)}
              >
                <option value="" disabled selected>
                  Chọn tỉnh thành
                </option>
                <option value="Hà Nội">Hà Nội</option>
                <option value="Nam Định">Nam Định</option>
                <option value="Bắc Ninh">Bắc Ninh</option>
              </select>
              <small className="text-[#F20000]">
                {errors?.location && errors.location.message?.toString()}
              </small>
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="forte-value" className="flex mb-4 space-x-2">
                <div className="px-2 bg-[#ffc421] rounded-full">6</div>
                <div className="text-[#ffc421]">Vị trí sở trưởng</div>
              </label>
              <select
                className="flex w-full px-4 py-2 bg-white rounded shadow-inner cursor-pointer hover:bg-[#E8E8E8]"
                {...register("forte", fieldOptions.forte)}
              >
                <option value="" disabled selected>
                  Chọn vị trí sở trường
                </option>
                <option value="Attack">Attack</option>
                <option value="Sniper">Sniper</option>
                <option value="ADR">ADR</option>
              </select>
              <small className="text-[#F20000]">
                {errors?.forte && errors.forte.message?.toString()}
              </small>
            </div>
          </div>
          <div className="border-[#959697] border-[1px] p-4 md:p-8 lg:p-12 mb-8">
            <div className="flex flex-col justify-between space-y-12 lg:flex-row lg:space-x-12 lg:space-y-0">
              <div className="w-full mx-auto md:w-[70%] lg:w-[50%] 2xl:w-[30%]">
                <div className="w-full bg-[#0f141a] shadow-inner aspect-square flex justify-center mb-8">
                  <img
                    src="https://static2.yan.vn/YanNews/2167221/202003/cf-la-gi-nghia-cua-cf-trong-6-linh-vuc-khac-nhau-139141d0.PNG"
                    alt=""
                    className="object-cover"
                  />
                </div>
                <label className="cursor-pointer w-full rounded bg-[#ffc421] flex items-center space-x-2 px-2 py-1 justify-center">
                  <div className="">Tải ảnh đại diện</div>
                  <div className="aspect-square">
                    <img src={icUpload} alt="" />
                  </div>
                </label>
                <input
                  type="file"
                  name="upload-avatar"
                  id="input-file-avatar"
                  className="hidden"
                />
              </div>
              <div className="w-full lg:w-[50%] 2xl:w-[70%]">
                <div className="text-[#ffc421] font-bold mb-4">
                  Những lưu ý khi đăng tải ảnh đại diện:
                </div>
                <div className="w-full text-white">
                  <div className="flex px-2 py-1 bg-[#0c1015] space-x-2 text-[14px] items-center mb-2">
                    <div className="aspect-square w-[15px] h-[15px]">
                      <img src={icChecked} alt="" className="w-full" />
                    </div>
                    <div className="">
                      Ảnh tải lên có kích thước tiêu chuẩn 1000x1000, dung lượng
                      dưới 2MB.
                    </div>
                  </div>
                  <div className="flex px-2 py-1 bg-[#0c1015] space-x-2 text-[14px] items-center mb-2">
                    <div className="aspect-square w-[15px] h-[15px]">
                      <img src={icChecked} alt="" className="w-full" />
                    </div>
                    <div className="">
                      Nghiêm cấm hình ảnh vi phạm thuần phong mỹ tục, khỏa thân,
                      khiêu dâm.
                    </div>
                  </div>
                  <div className="flex px-2 py-1 bg-[#0c1015] space-x-2 text-[14px] items-center mb-2">
                    <div className="aspect-square w-[15px] h-[15px]">
                      <img src={icChecked} alt="" className="w-full" />
                    </div>
                    <div className="">
                      Việc không tuân thủ quy định về sử dụng ảnh. BQT có thể
                      khóa tài khoản trên trang của bạn.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center w-full">
            <button
              type="submit"
              className="bg-[#ffc421] px-2 py-1 rounded text-center w-[200px] mx-auto font-bold"
            >
              Cập nhật
            </button>
          </div>
        </div>
      </div>

      {/* PopUp Confirm Success */}
      <div
        id="pop-up-confirm--success"
        className="w-full hidden h-[100vh] left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] fixed z-40 bg-transparent text-black"
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
              <div className="text-[#ffc421] text-center text-[14px] md:text-base">
                Cập nhật thành công
              </div>
              <button
                id="btn-confirm--success"
                onClick={handleConfirmSuccess}
                className="bg-[#ffc421] px-2 py-1 rounded text-center mx-auto w-[200px] font-bold text-[12px] md:text-[14px]"
              >
                Cập nhật
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* PopUp Confirm Faild */}
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
    </form>
  );
}

export default PopUpUpdateInfo;
