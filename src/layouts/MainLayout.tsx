import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

function MainLayout(props: any) {
  return (
    <div>
      <Navbar />
      {props.body}
      <Footer />
    </div>
  );
}

export default MainLayout;
