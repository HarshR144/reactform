
import React,{useState} from 'react';
import './App.css';


function App() {
  const [formData,setFormData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    country:"India",
    streetAddress:"",
    city:"",
    state:"",
    postalCode:"",
    comments:false,
    candidates:false,
    offers:false,
    pushNotifications:""



  })

  function changeHandler(event){
      const {name, value, checked,type  } = event.target;
      setFormData((prev)=>({
        ...prev, 
        [name]:type=== 'checkbox' ? checked : value

        })
      )
  }

function submitHandler(event){
    event.preventDefault();
    console.log("Finally printing form Data:")
    console.log(formData);
}

  return (
    <div className="flex flex-col items-center">

      <form onSubmit={submitHandler}>
          <label htmlFor='firstName'>First Name</label>
          <br/>
          <input 
          type='text'
          name='firstName'
          value={formData.firstName}
          id='firstName'
          placeholder='ex: Raj'
          onChange={changeHandler}
          className="outline "
          />

          <br/>
          <label htmlFor='lastName'>Last Name</label>
          <br/>
          <input
            type='text'
            name='lastName'
            value={formData.lastName}
            id='lastName'
            onChange={changeHandler}
            placeholder='ex: Roy'
            className='outline'
          />

          <br/>
          <label htmlFor='email'>Email address</label>
          <br/>
          <input
            type='email'
            name='email'
            value={formData.email}
            id='email'
            onChange={changeHandler}
            placeholder='ex: rock123@xyz.com'
            className='outline'
          />

          <br/>
          <label htmlFor="country">Country</label>
          <br/>
          <select
            id='country'
            name='country'
            value={formData.country}
            onChange={changeHandler}
            className='outline'


          >
            <option value="India">India</option>
            <option value="United States">Unites States</option>
            <option value="Canada">Canada</option>
            <option value="Mexico">Mexico</option>
          </select>

          <br/>
          <label htmlFor='street'>Street address</label>
          <br/>
          <input
            type='text'
            name='streetAddress'
            value={formData.streetAddress}
            id='street'
            onChange={changeHandler}
            placeholder='ex: B-25'
            className='outline'
          />

          <br/>
          <label htmlFor='city'>City</label>
          <br/>
          <input
            type='text'
            name='city'
            value={formData.city}
            id='city'
            onChange={changeHandler}
            placeholder='ex: Delhi'
            className='outline'
          />

          <br/>
          <label htmlFor='postalCode'>ZIP/postal code</label>
          <br/>
          <input
            type='text'
            name='postalCode'
            value={formData.postalCode}
            id='postalCode'
            onChange={changeHandler}
            placeholder='ex: 435353'
            className='outline'
          />

      <br/>
      <br/>
      <fieldset>
        <legend>By email</legend>
        <div className='flex flex-row'>
            <input 
              type='checkbox'
              name='comments'
              id='comments'
              checked={formData.comments}
              onChange={changeHandler}/>

            
            <div>
              <label htmlFor='comments'>Comments</label>
              <p>get notified when  someone posts a comment on a posting.</p>
            </div>
        </div>

        <div className='flex '>
            <input 
              type='checkbox'
              name='candidates'
              id='candidates'
              checked={formData.candidates}
              onChange={changeHandler}/>

            
            <div>
              <label htmlFor='candidates'>Candidates</label>
              <p>get notified when a candidate applies for a job.</p>
            </div>
        </div>

        <div className='flex'>
            <input 
              type='checkbox'
              name='offers'
              id='offers'
              checked={formData.offers}
              onChange={changeHandler}/>

            
            <div>
              <label htmlFor='offers'>Offers</label>
              <p>get notified when  a candidate accepts or rejects an offer.</p>
            </div>
        </div>
        
      </fieldset>

      <br/>
      <br/>
      <fieldset>
        <legend>Push Notifications</legend>
        <p>These are delivered via SMS to your mobile  phone.</p>

        <input
          type='radio'
          name='pushNotifications'
          id='Everything'
          value="everything"
          onChange={changeHandler}
        />
        <label htmlFor='Everything'>Everything</label>

        <br/>

        <input
          type='radio'
          name='pushNotifications'
          id='pushEmail'
          value="Same as email"
          onChange={changeHandler}
        />
        <label htmlFor='pushEmail'>Same as email</label>

        <br/>
        <input
          type='radio'
          name='pushNotifications'
          id='pushNothing'
          value="No Push Notifications"
          onChange={changeHandler}
        />
        <label htmlFor='pushNothing'>No push Notifications</label>

        <br/>

      </fieldset>

      <button className="bg-blue-500 text-white font-bold rounded py-2 px-4">Save</button>
      </form>     
    </div>
  );
}

export default App;
