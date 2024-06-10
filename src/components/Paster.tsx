import { Tabs, TabsProps } from 'antd';
import React from 'react'
import { FaCode, FaFile } from 'react-icons/fa';
import { MdOutlineTextFields } from 'react-icons/md';
import TextUpload from './TextUpload';
import FileUpload from './FileUpload';

const Paster = () => {

    const items: TabsProps['items'] = [
        {
            key: '1',
            label: <span className='flex items-center gap-2' ><MdOutlineTextFields size={30} /> Text</span>,
            children: <TextUpload />,
        },

        {
            key: '2',
            label: <span className='flex items-center gap-2' ><FaFile size={24} /> File</span>,
            children: <FileUpload />,
        },
    ];
    return (
        <div>
            <Tabs
                type='card'
                tabBarGutter={20}
                defaultActiveKey="1"
                centered
                items={items}
            /></div>
    )
}

export default Paster