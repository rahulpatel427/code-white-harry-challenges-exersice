import Card from "./componets/Card";
import Footer from "./componets/Footer";
import Navbar from "./componets/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="cards">
        <Card
          title="Tea 1"
          descri="Green tea is a popular beverage known for its numerous health benefits, including boosting metabolism and enhancing brain function. Rich in antioxidants and nutrients, it aids in weight loss and reduces the risk of chronic diseases.card 1 Description"
        />
        <Card
          title="Tea 2"
          descri="Green tea is a popular beverage known for its numerous health benefits, including boosting metabolism and enhancing brain function. Rich in antioxidants and nutrients, it aids in weight loss and reduces the risk of chronic diseases."
        />
        <Card
          title="Tea 3"
          descri="Green tea is a popular beverage known for its numerous health benefits, including boosting metabolism and enhancing brain function. Rich in antioxidants and nutrients, it aids in weight loss and reduces the risk of chronic diseases."
        />
        <Card
          title="Tea 4"
          descri="Green tea is a popular beverage known for its numerous health benefits, including boosting metabolism and enhancing brain function. Rich in antioxidants and nutrients, it aids in weight loss and reduces the risk of chronic diseases."
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
