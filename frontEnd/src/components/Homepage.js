import MenuNavbar from "./MenuNavbar";
import AddMenu from "./addMenu";
function HomePage() {
  return (
    <>
      <MenuNavbar />
      <div
        className="container-fluid HomePage bg-dark text-light "
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AddMenu />
      </div>
    </>
  );
}

export default HomePage;
