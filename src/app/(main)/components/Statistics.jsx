import React from 'react'

function Statistics() {
    const tickMarkUrl ="https://img.icons8.com/?size=100&id=pIPl8tqh3igN&format=png&color=000000";

  return (
    <div className='w-full h-full flex justify-start items-start  py-32 relative px-40'>
      <div className='bg-[#001153] rounded-xl w-[40rem] h-[30rem]'></div>
      <div className='p-20 shadow-md flex flex-col justify-center items-center rounded-xl absolute bg-white w-[40rem] h-[28rem] ml-[30rem] mb-[20rem]'>
        <span className='px-4 py-2 bg-gray-200 rounded-full text-xs text-blue-950 '>ARCHIVE</span>
        <h1 className='mt-2 text-[#001153] text-2xl font-bold'>Department Statistics</h1>
        <p className='text-xs pt-2 leading-5 text-slate-500'>Lorem ipsum dolor sit amet consectetur. Euismod venenatis vitae est malesuada risus.</p>
        <div className='py-10'>
            <div className='grid grid-cols-3 gap-10'>
                <div className='flex justify-center items-start gap-3'>
                    <img
                        className="h-[24px] mx-auto md:mx-0"
                        src={tickMarkUrl}
                        alt="Event Checkmark"
                        loading="lazy"
                        />
                        <div>
                            <h4 className='font-bold text-2xl'>3500</h4>
                            <p className='text-xs text-slate-500'>Visitors</p>
                        </div>
                </div>
                <div className='flex justify-center items-start gap-3'>
                    <img
                        className="h-[24px] mx-auto md:mx-0"
                        src={tickMarkUrl}
                        alt="Event Checkmark"
                        loading="lazy"
                        />
                        <div>
                            <h4 className='font-bold text-2xl'>400+</h4>
                            <p className='text-xs text-slate-500'>Students</p>
                        </div>
                </div>
                <div className='flex justify-center items-start gap-3'>
                    <img
                        className="h-[24px] mx-auto md:mx-0"
                        src={tickMarkUrl}
                        alt="Event Checkmark"
                        loading="lazy"
                        />
                        <div>
                            <h4 className='font-bold text-2xl'>36</h4>
                            <p className='text-xs text-slate-500'>Startups</p>
                        </div>
                </div>
                <div className='flex justify-center items-start gap-3'>
                    <img
                        className="h-[24px] mx-auto md:mx-0"
                        src={tickMarkUrl}
                        alt="Event Checkmark"
                        loading="lazy"
                        />
                        <div>
                            <h4 className='font-bold text-2xl'>30</h4>
                            <p className='text-xs text-slate-500'>Mentors</p>
                        </div>
                </div>
                <div className='flex justify-center items-start gap-3'>
                    <img
                        className="h-[24px] mx-auto md:mx-0"
                        src={tickMarkUrl}
                        alt="Event Checkmark"
                        loading="lazy"
                        />
                        <div>
                            <h4 className='font-bold text-2xl'>14</h4>
                            <p className='text-xs text-slate-500'>Faculties</p>
                        </div>
                </div>
            </div>

        </div>
      </div>
    </div>
  )
}

export default Statistics
