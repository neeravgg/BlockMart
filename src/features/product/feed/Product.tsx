import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { Product as ProductType } from "types/product";
import { pageTransition, pageZoom } from "utils/animations";
import ProductInfo from "./ProductInfo";
import ProductImage from "./ProductImage";
import { useStore } from "stores/store";
import { observer } from "mobx-react-lite";

interface ProductProps {
  product: ProductType;
}

const Product: React.FC<ProductProps> = ({ product }) => {
  const { loadProduct } = useStore().productStore;
  const router = useRouter();

  return (
    <motion.div
      className="w-3/4 bg-[#1a1a2c] rounded-lg shadow-md flex flex-col
      transition-all duration-200 transform hover:scale-150 hover:shadow-lg  cursor-pointer"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageZoom}
      transition={pageTransition}
      layout
      onClick={async () => {
        await loadProduct(product.id);

        router.push(`/product/${product.id}`);
      }}
    >
      <ProductImage product={product} />
      <ProductInfo product={product} />
    </motion.div>
  );
};

export default observer(Product);
