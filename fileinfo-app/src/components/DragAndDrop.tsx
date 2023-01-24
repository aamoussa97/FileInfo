import React from 'react';
import {InboxOutlined} from '@ant-design/icons';
import type {UploadProps} from 'antd';
import {message, Upload} from 'antd';

const {Dragger} = Upload;

const props: UploadProps = {
    name: 'file',
    multiple: true,
    showUploadList: false,
    onDrop(event) {
        /*
        console.log(event.dataTransfer.files[0].lastModified);
        console.log(event.dataTransfer.files[0].name);
        console.log(event.dataTransfer.files[0].path);
        console.log(event.dataTransfer.files[0].size);

        console.log('Dropped files', event.dataTransfer.files);

        console.log(this.onFileChange);
        console.log(this.fileList);

         */

        // Update props
        //this.setState({});
    }
    /*,
    onChange(info) {
        const { status } = info.file;

        console.log(info);

        const fileName = info.file.originFileObj.path + '/' + info.file.name;
        console.log(info.file.originFileObj.lastModified);
        console.log(info.file.originFileObj.name);
        console.log(info.file.originFileObj.path);
        console.log(info.file.originFileObj.size);

                            {1 == 0 ?                     <Button type="primary" onClick={handleClick}>Toggle theme</Button>
                        : <p></p>}

        if (status !== 'uploading') {
            //console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            //message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            //message.error(`${info.file.name} file upload failed.`);
        }
    },
    onDrop(e) {
    },
    */
};

const DragAndDrop: React.FC = ({handleFileListChange}) => {
    //console.log(fileList);

    return (
        <Dragger {...props} onDrop={(event) => handleFileListChange(event.dataTransfer.files)}>
            <p className="ant-upload-drag-icon">
                <InboxOutlined/>
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
            <p className="ant-upload-hint">
                Support for a single or bulk upload.
            </p>
        </Dragger>
    )
};

export default DragAndDrop;