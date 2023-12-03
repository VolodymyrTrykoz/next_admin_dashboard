import Search from "../../ui/dashboard/search/search";
import Link from 'next/link';
import Image from 'next/image'
import Pagination from "../../ui/dashboard/pagination/pagination";
import {fetchProducts} from '@/app/lib/data';
import {formatDateToString} from '@/app/utils/common';
import { deleteProductById } from "@/app/lib/actions";


const ProductsPage = async ({searchParams}) => {
  const q = searchParams?.q || '';
  const page = searchParams?.page || '1';
  const {products, count} = await fetchProducts(q, page);
  
  return (
    <div className='background-soft p-5 rounded-lg mt-5'>
      <div className='flex items-center justify-between'>
        <Search placeholder="Search for a product..." />
        <Link href="/dashboard/products/add">
          <button className='p-3 bg-[#5d57c9] text-soft rounded-md cursor-pointer'>Add New</button>
        </Link>
      </div>
      <table className='w-full'>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {
            products.map((product) => (
              <tr key={product.id}>
                <td>
                  <div className='flex  items-center gap-3'>
                    <Image
                      src={product.img || "/noavatar.png"}
                      alt=""
                      width={40}
                      height={40}
                      className='rounded-[50%]'
                    />
                    {product.title}
                  </div>
                </td>
                <td>{product.desc}</td>
                <td>{product.price}</td>
                <td>{formatDateToString(product.createdAt)}</td>
                <td>{product.stock}</td>
                <td>
                  <div className='flex gap-2'>
                    <Link href={`/dashboard/products/${product.id}`}>
                      <button className='px-2 py-1 rounded-md text-text border-none cursor-pointer bg-[teal]'>
                        View
                      </button>
                    </Link>
                    <form action={deleteProductById}>
                    <input type="hidden" name="id" value={(product.id)} />
                      <button className="px-2 py-1 rounded-md text-text border-none cursor-pointer bg-[crimson]">
                        Delete
                      </button>
                    </form>
                  </div>
                </td>
              </tr>
            ))
          }
        </tbody>
        </table>
        <Pagination />
    </div>
  )
}

export default ProductsPage