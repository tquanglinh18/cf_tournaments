import bgHeading from "../../assets/images/bg_heading.png";
import headingMemberOnPage from "../../assets/images/heading_member_on_page.png";
import icArrowDown from "../../assets/images/ic_arrow_down.png";
import icFacebok from "../../assets/images/icon_facebook.png";
import "./index.css";
import "./index.js";

Player.propTypes = {};

function Player(props) {
  return (
    <section class="bg-[#161d22] relative">
      <div class="absolute top-0 w-full">
        <img class="object-cover w-full" src={bgHeading} alt="" />
      </div>
      <div class="relative max-w-[1350px] w-full mx-auto pb-[5%] pt-[18.75%] px-3 sm:px-5 overflow-hidden">
        <div class="w-full px-5 mb-8 lg:mb-14">
          <img class="w-full" src={headingMemberOnPage} alt="" />
        </div>
        <form class="flex flex-wrap md:flex-nowrap items-center w-full justify-center space-y-[2%] md:space-y-0 md:space-x-[2%] mb-8 lg:mb-14">
          <input
            class="md:max-w-[230px] w-full py-4 px-5 rounded bg-[#353f48] text-[#959697] placeholder:text-[#959697]"
            type="text"
            placeholder="Tìm theo tên"
          />
          <div class="relative md:max-w-[230px] w-full">
            <select
              placeholder="Tìm theo vị trí"
              class="md:max-w-[230px] w-full py-4 px-5 rounded bg-[#353f48] text-[#959697] placeholder:text-[#959697]"
            >
              <option value="">Tanker</option>
              <option value="">Attacker</option>
              <option value="">Supporter</option>
            </select>
            <img
              class="absolute right-[5%] top-1/2 -translate-y-1/2"
              src={icArrowDown}
              alt=""
            />
          </div>
          <button
            type="submit"
            class="md:max-w-[230px] w-full text-center px-3 py-4 rounded bg-[#f75014] text-white"
          >
            Tìm kiếm
          </button>
        </form>
        <div class="overflow-x-auto">
          <table class="w-full custom_member_on_page min-w-[992px]">
            <thead>
              <tr>
                <th>
                  <div>STT</div>
                </th>
                <th>
                  <div>Tên tuyển thủ</div>
                </th>
                <th>
                  <div>Nickname</div>
                </th>
                <th>
                  <div> Vị trí</div>
                </th>
                <th>
                  <div>Facebook</div>
                </th>
                <th>
                  <div>Thông tin chi tiết</div>
                </th>
                <th>
                  <div>Trạng thái</div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div>
                    <h3>1</h3>
                  </div>
                </td>
                <td class="w-[30%]">
                  <div>
                    <h3 class="line-clamp-1">
                      Bùi Trọng Hiếu Bùi Trọng Hiếu Bùi Trọng Hiếu Bùi Trọng
                      Hiếu Bùi Trọng Hiếu
                    </h3>
                  </div>
                </td>
                <td>
                  <div>
                    <h3>18Typn</h3>
                  </div>
                </td>
                <td>
                  <div>
                    <h3>Attacker</h3>
                  </div>
                </td>
                <td>
                  <div class="flex justify-center">
                    <div>
                      <img src={icFacebok} alt="" />
                    </div>
                  </div>
                </td>
                <td>
                  <div>
                    <button class="min-w-[100px] px-5 py-1 rounded bg-[#f75014] text-center">
                      Xem chi tiết
                    </button>
                  </div>
                </td>
                <td>
                  <div>
                    <h3>Đội trưởng</h3>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div>
                    <h3>2</h3>
                  </div>
                </td>
                <td>
                  <div>
                    <h3>Bùi Trọng Hiếu</h3>
                  </div>
                </td>
                <td>
                  <div>
                    <h3>18Typn</h3>
                  </div>
                </td>
                <td>
                  <div>
                    <h3>Attacker</h3>
                  </div>
                </td>
                <td>
                  <div class="flex justify-center">
                    <div>
                      <img src={icFacebok} alt="" />
                    </div>
                  </div>
                </td>
                <td>
                  <div>
                    <button class="min-w-[100px] px-5 py-1 rounded bg-[#f75014] text-center">
                      Xem chi tiết
                    </button>
                  </div>
                </td>
                <td>
                  <div>
                    <button class="min-w-[100px] px-5 py-1 rounded bg-[#f75014] text-center">
                      Mời gia nhập
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div>
                    <h3>3</h3>
                  </div>
                </td>
                <td class="w-[30%]">
                  <div>
                    <h3 class="line-clamp-1">
                      Bùi Trọng Hiếu Bùi Trọng Hiếu Bùi Trọng Hiếu Bùi Trọng
                      Hiếu Bùi Trọng Hiếu
                    </h3>
                  </div>
                </td>
                <td>
                  <div>
                    <h3>18Typn</h3>
                  </div>
                </td>
                <td>
                  <div>
                    <h3>Attacker</h3>
                  </div>
                </td>
                <td>
                  <div class="flex justify-center">
                    <div>
                      <img src={icFacebok} alt="" />
                    </div>
                  </div>
                </td>
                <td>
                  <div>
                    <button class="min-w-[100px] px-5 py-1 rounded bg-[#f75014] text-center">
                      Xem chi tiết
                    </button>
                  </div>
                </td>
                <td>
                  <div>
                    <h3>Đã có đội tuyển</h3>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div>
                    <h3>4</h3>
                  </div>
                </td>
                <td>
                  <div>
                    <h3>Bùi Trọng Hiếu</h3>
                  </div>
                </td>
                <td>
                  <div>
                    <h3>18Typn</h3>
                  </div>
                </td>
                <td>
                  <div>
                    <h3>Attacker</h3>
                  </div>
                </td>
                <td>
                  <div class="flex justify-center">
                    <div>
                      <img src={icFacebok} alt="" />
                    </div>
                  </div>
                </td>
                <td>
                  <div>
                    <button class="min-w-[100px] px-5 py-1 rounded bg-[#f75014] text-center">
                      Xem chi tiết
                    </button>
                  </div>
                </td>
                <td>
                  <div>
                    <h3>Đang xin gia nhập</h3>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div>
                    <h3>5</h3>
                  </div>
                </td>
                <td class="w-[30%]">
                  <div>
                    <h3 class="line-clamp-1">
                      Bùi Trọng Hiếu Bùi Trọng Hiếu Bùi Trọng Hiếu Bùi Trọng
                      Hiếu Bùi Trọng Hiếu
                    </h3>
                  </div>
                </td>
                <td>
                  <div>
                    <h3>18Typn</h3>
                  </div>
                </td>
                <td>
                  <div>
                    <h3>Attacker</h3>
                  </div>
                </td>
                <td>
                  <div class="flex justify-center">
                    <div>
                      <img src={icFacebok} alt="" />
                    </div>
                  </div>
                </td>
                <td>
                  <div>
                    <button class="min-w-[100px] px-5 py-1 rounded bg-[#f75014] text-center">
                      Xem chi tiết
                    </button>
                  </div>
                </td>
                <td>
                  <div>
                    <button class="min-w-[100px] px-5 py-1 rounded bg-[#f75014] text-center">
                      Xin gia nhập
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default Player;
