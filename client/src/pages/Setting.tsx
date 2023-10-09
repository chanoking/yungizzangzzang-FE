import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Layout/Footer";
import Layout from "../components/Layout/Layout";

import { FiLogOut } from "react-icons/fi";
import { styles } from "../utils/style";

function Setting() {
  return (
    <Layout>
      <Header />
      <Body />
      <Footer />
    </Layout>
  );
}

export default Setting;

function Header() {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(-1);
      }}
      className={styles.header}
    >
      <AiOutlineArrowLeft />
      설정
    </div>
  );
}

function Body() {
  const navigate = useNavigate();
  return (
    <div className={`flex flex-col gap-2 ${styles.headerMargin}`}>
      <div className="text-[1.25rem] font-semibold p-4">내정보</div>
      <div className="flex justify-between px-4">
        <div className="font-semibold">닉네임</div>
        <div>윤기짱짱</div>
      </div>
      <div className="flex justify-between px-4">
        <div className="font-semibold">이메일</div>
        <div>yungizzang@naver.com</div>
      </div>
      <button className="flex justify-between border-y-2 border-[#C3CFD9] px-4 py-2">
        <div className="flex flex-col items-start">
          <div className="font-semibold">로그아웃</div>
          <div className="text-[0.75rem]">계정을 로그아웃 합니다.</div>
        </div>
        <button onClick={() => navigate("/login")} className="h-full">
          <FiLogOut size={24} />
        </button>
      </button>
    </div>
  );
}
