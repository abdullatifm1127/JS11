import TampilanProduk from "@/views/product";
import { ProductType } from "../../types/product.type";

const halamanProdukStatic = ({products}: {products: ProductType[]}) => {
    return (
        <div>
            <h1>Halaman Produk Static by Abdul Latif</h1>
            <TampilanProduk products={products} />
        </div>
    );
}

export default halamanProdukStatic;

export async function getStaticProps() {
    const res = await fetch('http://127.0.0.1:3000/api/produk');
    const data: { data: ProductType[] } = await res.json();

    return {
        props: {
            products: data.data,
        },
    };
}