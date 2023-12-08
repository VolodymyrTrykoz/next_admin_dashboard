import {Suspense, suspense} from 'react';
import Search from "../../ui/dashboard/search/search";
import Link from 'next/link';
import ProductsList from "@/app/ui/dashboard/productsList/productsList";
import {fetchProducts} from '@/app/lib/data';



const ProductsPage = ({searchParams}) => {
  const q = searchParams?.q || '';
  const page = searchParams?.page || '1';
  const products = fetchProducts(q, page);
  
  return (
    <div className='background-soft p-5 rounded-lg mt-5'>
      <div className='flex items-center justify-between'>
        <Search placeholder="Search for a product..." />
        <Link href="/dashboard/products/add">
          <button className='p-3 bg-[#5d57c9] text-soft rounded-md cursor-pointer'>Add New</button>
        </Link>
      </div>
      <Suspense fallback={<h1>Loading...</h1>}>
        <ProductsList 
          promise={products}
        />
      </Suspense>
      
    </div>
  )
}

export default ProductsPage