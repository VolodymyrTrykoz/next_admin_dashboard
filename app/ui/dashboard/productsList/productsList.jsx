import {formatDateToString} from '@/app/utils/common';
import { deleteProductById } from "@/app/lib/actions";
import Link from 'next/link';
import Image from 'next/image';

const ProductsList = async({promise}) => {
  const {products} = await promise;
  return (
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
  )
}

export default ProductsList