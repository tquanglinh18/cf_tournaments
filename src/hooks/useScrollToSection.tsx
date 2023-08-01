import { useEffect } from "react";

const useScrollToSection = (
  scrollArr: {
    id: string;
    idSection: string;
  }[]
) => {
  useEffect(() => {
    if (Array.isArray(scrollArr) && scrollArr.length !== 0) {
      scrollArr.map((scrollElement) => {
        const idBtn = document.getElementById(scrollElement.id);
        idBtn?.addEventListener("click", () => {
          document.getElementById(scrollElement.idSection)?.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        });
      });
    }
  }, []);
};

export default useScrollToSection;
