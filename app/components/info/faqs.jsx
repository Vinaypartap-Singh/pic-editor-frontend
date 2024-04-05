import React from 'react'
import {client} from '../../lib/sanity.ts'

export async function getFaqData(context) {
    const query = `*[_type == "faqs"] {
      question, 
      answer, 
    }`;
    const data = await client.fetch(query, { cache: 'no-store' });
    return data; 
}
  

const faqs = async() => {

  const data = await getFaqData();
  console.log(data);

  return (
    <>
    
    <div className="bg-slate-200">
    <div className="cstmContainer">
        <div className="join join-vertical w-full py-20 px-6">

        {data.map((faqs, index) => (
 
            <div key={index} className="collapse collapse-arrow join-item border border-slate-800">
                <input type="radio" name="my-accordion-4" defaultChecked /> 
                <div className="collapse-title text-md font-medium text-slate-800">
                {faqs.question}
                </div>
                <div className="collapse-content text-slate-600"> 
                    {faqs.answer}
                </div>
            </div>

            ))}

        </div>
        </div>
    </div>

    </>
  )
}

export default faqs