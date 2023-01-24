import {Avatar, Button, Card, Col, List, message, Row, Space} from 'antd';
import VirtualList from 'rc-virtual-list';
import React, {useEffect, useState} from "react";
import {DeleteOutlined} from "@ant-design/icons";

class UserItem {
    attributeName: string;
    attributeValue: string;

    constructor(attributeName: string, attributeValue: string) {
        this.attributeName = attributeName;
        this.attributeValue = attributeValue;
    }
}

const FileInfo = (props) => {
    //const [data, setData] = useState<UserItem[]>([]);
    const [data, setData] = useState<UserItem[]>([]);
    const ContainerHeight = 400;

    const appendData = () => {
        const userData = [
            new UserItem("kMDItemKind", "Swift Source"),
            new UserItem("kMDItemLogicalSize", "285"),
            new UserItem("kMDItemPhysicalSize", "4096")
        ]

        setData(userData);
    };

    /*
    useEffect(() => {
        appendData();
    }, []);

    const onScroll = (e: React.UIEvent<HTMLElement, UIEvent>) => {
        if (e.currentTarget.scrollHeight - e.currentTarget.scrollTop === ContainerHeight) {
            appendData();
        }
    };
    */

    function handleRemove(itemToRemove: File) {
        //props.fileList.delete(item);
        const updatedList = Array.from(props.fileList).filter((item: File) => item.name != itemToRemove.name)
        this.props.fileList = updatedList;
    }

    return(
        <List>
            <VirtualList
                //data={data}
                data={Array.from(props.fileList)}
                height={ContainerHeight}
                itemHeight={47}
                itemKey="name"
                //onScroll={onScroll}
            >
                {(item: File) => (
                    <Card title={item.name} extra={
                        <Button type="primary" icon={<DeleteOutlined />} size="middle" danger onClick={() => handleRemove(item)} />
                    }>
                        <List.Item key={item.name}>
                            <Space direction="vertical">
                                <FileAttributeListItem title={"Name"} value={item.name}/>
                                <FileAttributeListItem title={"Last modified"} value={item.lastModified}/>
                                <FileAttributeListItem title={"Size"} value={item.size}/>
                                <FileAttributeListItem title={"Path"} value={item.path}/>
                                <FileAttributeListItem title={"Type"} value={item.type}/>
                            </Space>
                        </List.Item>
                    </Card>
                )}
            </VirtualList>
        </List>
    )
}

const FileAttributeListItem = (props) => {
    return(
        /*
        <Space align="center" direction="horizontal" size="middle" style={{ display: 'flex' }}>
            <List.Item.Meta
                //title={item.attributeName}
                title={props.title}
            />
            {props.value}
        </Space>
         */
        <div>
            <Row gutter={[5, 5]}>
                <Col span={10}>
                    <h4>{props.title}</h4>
                </Col>
                <Col span={10}>
                    {props.value}
                </Col>
            </Row>
        </div>
    )
}

export default FileInfo;