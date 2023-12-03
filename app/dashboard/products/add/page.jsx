import {addProductData} from '@/app/lib/actions'

const categoriesList = [
    {
        id: 1,
        value: 'choose a category',
    },
    {
        id: 2,
        value: 'kitchen',
    },
    {
        id: 3,
        value: 'phone',
    },
    {
        id: 4,
        value: 'computer',
    },
];

const AddProductPage = () => {
  return (
    <div className="form product-form background-soft p-5 rounded-lg mt-5">
        <form action={addProductData} className="flex flex-wrap justify-between">
            <input type="text" placeholder='title' name='title' required />
            <select name="cat" id="cat">
                {
                    categoriesList.map((cat) => (
                        <option key={cat.id} value={cat.value}>{cat.value}</option>
                    ))
                }
            </select>
            <input type="number" placeholder="price" name="price"/>
            <input type="number" placeholder="stock" name="stock"/>
            <input type="text" placeholder="color" name="color"/>
            <input type="text" placeholder="size" name="size"/>
            <textarea placeholder="Description" name="desc" id="desc" rows="16"></textarea>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default AddProductPage