import {addUserData} from '@/app/lib/actions';

const AddUserPage = () => {
return (
  <div className="product-form background-soft p-5 rounded-lg mt-5">
      <div className="product-form background-soft p-5 rounded-lg mt-5">
        <form action={addUserData} className="form flex flex-wrap justify-between">
            <input type="text" placeholder='username' name='username' required />
            <input type="email" placeholder='email' name='email' required />
            <input type="password" placeholder="password" name="password"/>
            <input type="phone" placeholder="phone" name="phone"/>
            <select name="isAdmin" id="isAdmin">
                <option value={false} className="capitalize">Is Admin?</option>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
            </select>
            <select name="isActive" id="isActive">
                <option value={false} className="capitalize">Is Active?</option>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
            </select>
            
            <textarea placeholder="address" name="address" id="address" rows="16"></textarea>
            <button type="submit">Submit</button>
        </form>
    </div>
  </div>
)
}

export default AddUserPage