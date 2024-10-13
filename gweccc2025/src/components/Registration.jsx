import React, { useState } from 'react'

function Registration() {
     const [formData, setFormData] = useState({
          name:'',
          email:'',
          contact:'',
          organisation:'',
          delegates:''


     })

     const handleSubmit = (e)=>{
          e.preventDefault();
          const existData = JSON.parse(localStorage.getItem('userData')) ||[]
          const updatedData = [...existData, formData]
          localStorage.setItem('userData', JSON.stringify(updatedData));

          setFormData({
                name:'',
                email:'',
                contact:'',
                organisation:'',
                delegates:''
          })
          alert('Thank you for registering!');
     }

     const handleChange = (e)=>{
         const {name,value} = e.target;
         setFormData({
          ...formData,
          [name]:value
         })
     }
  return (
    
     <section className='registration-section'>
      <h1>Register Now</h1>
        <form onSubmit={handleSubmit} className='registerForm'>
         <input
          type="text" 
          name='name' 
          placeholder='Enter your name....'  
          value={formData.name}
          onChange={handleChange}
          />
          <input
          type="email" 
          name='email' 
          placeholder='Enter your email....'  
          value={formData.email}
          onChange={handleChange} 
          />
           
          <input
          type="tel" 
          name='contact' 
          placeholder='Enter your contact no....'  
          value={formData.contact}
          onChange={handleChange}
          />
          <input
          type="text" 
          name='organisation' 
          placeholder='Enter your organisation....'  
          value={formData.organisation}
          onChange={handleChange}
          />
          <select name="delegates" value={formData.delegates} onChange={handleChange}>
          <option value="Regular">Regular</option>
          <option value="VIP">VIP</option>
          <option value="Student">Student</option>
        </select>
        <button type="submit">Submit</button>
        </form>
     </section>
    
  )
}

export default Registration