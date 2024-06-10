"use client"

import { Button, Upload, message } from 'antd';
import React, { useEffect, useState } from 'react'
import { FaInbox } from 'react-icons/fa';
import type { GetProp, UploadFile, UploadProps } from 'antd';
import { useUploadFileMutation } from '@/redux/apis/uploadApi';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

import { NormalButton } from '@/shared/CustomButton';

const { Dragger } = Upload;

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];
const FileUpload = () => {


    const [fileList, setFileList] = useState<UploadFile[]>([]);
    const [uploading, setUploading] = useState(false);

    const [uploadFile, { isLoading, error, isError, isSuccess }] = useUploadFileMutation()
    const handleUpload = async () => {
        const formData = new FormData();
        fileList.forEach((file) => {
            formData.append('files[]', file as FileType);
        });
        setUploading(true);

        await uploadFile(formData)
    };

    useEffect(() => {
        if (isSuccess) {
            setFileList([]);
            message.success('upload successfully.');
        } else if (isError) {
            message.error((error as any).data);
        }
    }, [isSuccess, isError]);

    const props: UploadProps = {
        onRemove: (file) => {
            const index = fileList.indexOf(file);
            const newFileList = fileList.slice();
            newFileList.splice(index, 1);
            setFileList(newFileList);
        },
        beforeUpload: (file) => {
            setFileList([...fileList, file]);

            return false;
        },
        fileList,
    };
    return (
        <div>
            <Dragger {...props}>
                <div className="flex flex-col gap-2">
                    <div className="flex justify-center">
                        <FaInbox size={40} />
                    </div>
                    <p className="ant-upload-text">Click or drag file to this area to upload</p>
                    <p className="">
                        Support for a single or bulk upload.
                    </p>
                </div>
            </Dragger>
            <NormalButton variant='filled' className='mt-[1rem] w-full bg-[#fece51] text-[#000]' onClick={handleUpload} loading={isLoading} title="Upload" />

        </div>
    )
}

export default FileUpload