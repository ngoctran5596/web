"use client";

import FooterDashboard from "@/components/dashboard/FooterDashboard";
import HeaderDashboard from "@/components/dashboard/HeaderDasboard";
import ImageFlyRandom from "@/components/dashboard/ImageFlyRandom";
import NavbarDashboard from "@/components/dashboard/NavbarDashboard";
import ScrollAnimationImage from "@/components/dashboard/ScrollAnimationImage";
import { Footer_data_dashboard } from "@/constants";
const DataImages = [
  "https://i.ibb.co/12JrbMW/IMG-20200814-214842.jpg",
  "https://i.ibb.co/C945Gr9/IMG-20200814-214857.jpg",
  "https://i.ibb.co/F0mqfCs/IMG-20200805-140524.jpg",
  "https://i.ibb.co/nQ4qSfZ/IMG-20200805-140443.jpg",
  "https://i.ibb.co/Tw0RGzK/IMG-20200805-140402.jpg",
  "https://i.ibb.co/VpMCWRv/IMG-20200805-135458.jpg",
  "https://i.ibb.co/n1Txz5D/IMG-20210219-144153.jpg",
  "https://i.ibb.co/xs2HqQ1/IMG-20210219-143846.jpg",
  "https://i.ibb.co/sVTxLvb/IMG-20210219-144237.jpg",
  "https://i.ibb.co/CnTPJ45/IMG-20210214-174905.jpg",
  "https://i.ibb.co/VqfsLCD/IMG-20210214-174901.jpg",
  "https://i.ibb.co/Lv1pLdZ/IMG-20210214-144016.jpg",
  "https://i.ibb.co/0hgcWLK/IMG-20210214-144033.jpg",
  "https://i.ibb.co/nCP8rFm/IMG-20221001-200924.jpg",
  "https://i.ibb.co/f0J1W4N/IMG-20221001-153324.jpg",
  "https://i.ibb.co/G31bV1X/IMG-20221001-200904.jpg",
  "https://i.ibb.co/Kb3TcgX/IMG-20221002-201110.jpg",
  "https://i.ibb.co/r24dVbg/IMG-20221002-191628.jpg",
  "https://i.ibb.co/Sn4sfJJ/IMG-20220911-085830.jpg",
  "https://i.ibb.co/C6cRJtD/IMG-20220911-085743.jpg",
  "https://i.ibb.co/Z8G8d32/IMG-20220828-124302.jpg",
  "https://i.ibb.co/GRGMt8J/IMG-20220828-203823.jpg",
  "https://i.ibb.co/nk33XCv/IMG-20220423-181316.jpg",
  "https://i.ibb.co/6Bkh9m3/IMG-20220421-193530.jpg",
  "https://i.ibb.co/x5hCm8B/IMG-20220411-131801.jpg",
  "https://i.ibb.co/pZXNjWJ/IMG-20220411-121439.jpg",
  "https://i.ibb.co/bNrWYhK/IMG-20220228-161757.jpg",
  "https://i.ibb.co/V93vmKd/IMG-20220228-161530.jpg",
  "https://i.ibb.co/z4fp2Cb/IMG-20220228-161556.jpg",
  "https://i.ibb.co/1rjkHxC/IMG-20220228-152655.jpg",
  "https://i.ibb.co/4WS6YmF/IMG-20220228-152238.jpg",
  "https://i.ibb.co/sjghXYH/IMG-20220228-110317.jpg",
];

const Dashboard = () => {
  return (
    <main className="h-full w-full">
      <div className="container mx-auto flex flex-col gap-20 space-y-32">
        <HeaderDashboard />
        <ScrollAnimationImage />
        <ImageFlyRandom images={DataImages} />
        <FooterDashboard items={Footer_data_dashboard} />
        <NavbarDashboard />
      </div>
    </main>
  );
};

export default Dashboard;
