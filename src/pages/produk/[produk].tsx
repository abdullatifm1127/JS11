import fetcher from "@/utlis/db/swr/fetcher";
import { useRouter } from "next/router";
import useSWR from "swr";
import DetailProduk  from "@/views/DetailProduct";
import { ProductType } from "@/types/product.type";

const HalamanProduk = ({product}: {product: ProductType}) => {
    // const Router = useRouter();
    // console.log(Router); 
    // const { query } = useRouter();
    // const {data, error, isLoading} = useSWR(`/api/products/${query.produk}`, fetcher);
    // return (
    //     <div>
    //         <DetailProduk products={isLoading ? [] : data.data}/>
    //     </div>
    // );
    
    return (
        <div>
            <DetailProduk products={product} />
        </div>
    );
};

export default HalamanProduk;

export async function getServerSideProps({ params}: { params: { produk: string } }) {
    const res = await fetch(`http://localhost:3000/api/products/${params?.produk}`);
    const respone = await res.json();
    return {
        props: {
            products: respone.data,
        },
    };
}   