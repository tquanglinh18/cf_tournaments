import icError from "../../../assets/images/ic_error.png";
import icSuccess from "../../../assets/images/ic_sucess.png";

type Props = {
  type: string;
  message: string;
};

function NotifyItem(props: Props) {
  const { type, message } = props;
  return (
    <a
      href="/"
      className="flex items-center border-b-[#31404e] border-b-[2px] px-4 py-3 cursor-pointer"
    >
      <div className="flex pr-4 flex-shrink-1">
        <img
          className="w-[15px] h-[15px]"
          src={type === "success" ? icSuccess : icError}
          alt=""
        />
      </div>
      <p> {message}</p>
    </a>
  );
}

export default NotifyItem;
