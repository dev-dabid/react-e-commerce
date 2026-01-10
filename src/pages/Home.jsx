import { useStore } from "../store/store";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const masterProducts = useStore((state) => state.products);
  const hasFetched = useStore((state) => state.hasFetched);
  const searchQuery = useStore((state) => state.searchQuery);

  const products = masterProducts.filter((item) => {
    const cleanQuery = searchQuery.toLowerCase();
    return item.title.toLowerCase().includes(cleanQuery);
  });

  return (
    <div className="">
      <div className="product-container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-1 justify-center p-2 mb-20">
        {hasFetched ? (
          products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </div>
  );
};

export default Home;
