
import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";

const HomeLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (

    <>
      <Header></Header>
      <div className="min-h-[calc(100vh-60px)]">
        {children}
      </div>
      <Footer></Footer>


    </>


  );
}

export default HomeLayout;