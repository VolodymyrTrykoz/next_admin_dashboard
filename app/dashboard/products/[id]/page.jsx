import Image from "next/image";
import {fetchProductById} from '@/app/lib/data';
import {updateProductById} from '@/app/lib/actions';


const ProductPage = async ({ params }) => {

  const {id} = params;
  const product = await fetchProductById(id)
  
  return (
    <div className='flex gap-[50px] mt-5'>
      <div className='w-1/4 background-soft p-5 font-bold text-soft h-[max-content]'>
        <div className='w-full h-[300px] relative rounded-lg overflow-hidden mb-5'>
          <Image src={product.img|| '/noavatar.png'} alt="" fill className="object-cover"/>
        </div>
        {product.title}
      </div>
      <div className='w-3/4 background-soft rounded-lg p-5'>
        <form action={updateProductById} className='form flex flex-col'>
          <input type="hidden" name="id" value={id} />
          <label>Title</label>
          <input type="text" name="title" placeholder={product.title} />
          <label>Price</label>
          <input type="email" name="price" placeholder={product.price} />
          <label>Stock</label>
          <input type="number" name="stock" placeholder={product.stock} />
          <label>Color</label>
          <input type="text" name="color" placeholder={product.color} />
          <label>Size</label>
          <textarea type="text" name="size" placeholder={product.size} />
          <label>Category</label>
          <select name="cat" id="cat">
            <option value='kitchen'>Kitchen</option>
            <option value='computers'>Computers</option>
          </select>
          <label>Description</label>
          <textarea type="desc" id='desc' name="desc" placeholder={product.description} />
          
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default ProductPage;