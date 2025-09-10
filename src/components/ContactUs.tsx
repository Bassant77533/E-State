import React from "react";
import { Maintitle } from "./Maintitle";
  import { toast } from 'react-toastify';

export const ContactUs = () => {

 const [result] = React.useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "1d1e8af5-18cb-42e4-9d46-8fc316b22895");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
       toast.success("Form Submitted Successfully");
    event.currentTarget.reset(); 
    } else {
      console.log("Error", data);
       toast.error(data.message);
    }
  };

  
return (
    
    <div  id='Contact' className='mx-auto container    p-14 overflow-hidden lg:px-32'>
        <div className='w-fit mx-auto'>
            <Maintitle head='Contact ' head2='With Us' desc='Ready to Make a Move? Let’s Build Your Future Together' /> 
        </div>
        <form  onSubmit={onSubmit} className='    text-gray-500 mx-auto max-w-2xl   mt-20'>
            <div className='md:pr-4 flex flex-wrap '>
                <div className='  w-full mt-4 md:w-1/2   gap-2 flex  flex-col '>
                    <label htmlFor="">Your Name</label>
                    <input   required placeholder='Your Name' className="w-full  border border-gray-300 rounded py-3  px-4 " type="text" />
                </div>
                <div className='md:pl-4 mt-4  w-full md:w-1/2   gap-2 flex flex-col'>
                    <label htmlFor="" >Your Email</label>
                    <input required placeholder='Your Email' className=' w-full   border border-gray-300 rounded py-3 px-4' type="text" />
                </div>
            </div>
            <div className=' flex flex-col mt-3 gap-2 '>
                <label htmlFor="">Message</label>
                <textarea required placeholder='Message'  className=' w-full border   h-48    border-gray-200 rounded  p-4 resize-none' name="" id=""></textarea>
            </div>
            <button  className='bg-blue-600 text-white block mx-auto    mt-5 px-12 py-2 rounded  hover:bg-blue-300 cursor-pointer '>{result ? result : "Send Message"}</button>
        </form>
    </div>
)
}
