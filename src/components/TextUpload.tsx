"use client"
import { Button } from 'antd';
import React, { useState } from 'react'
import ReactQuill from 'react-quill'

const TextUpload = () => {
    const [value, setValue] = useState<string>('');
    return (
        <div className='flex flex-col gap-4'><span className='text-[18px] font-medium'>Enter text here:</span>
            <div className='h-[370px]'>
                <ReactQuill theme="snow" value={value} onChange={setValue} placeholder='Type Here' className='h-[300px]' />
            </div>
            <Button type="primary" size='large' className='mt-[1rem] bg-[#fece51] text-[#000]'>Submit</Button>
        </div>
    )
}

export default TextUpload