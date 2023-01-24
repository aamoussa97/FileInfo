import { Avatar, List, message } from 'antd';
import VirtualList from 'rc-virtual-list';
import React, {useEffect, useState} from "react";

class UserItem {
    attributeName: string;
    attributeValue: string;

    constructor(attributeName: string, attributeValue: string) {
        this.attributeName = attributeName;
        this.attributeValue = attributeValue;
    }
}

const FileInfo = () => {
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

    useEffect(() => {
        appendData();
    }, []);

    const onScroll = (e: React.UIEvent<HTMLElement, UIEvent>) => {
        if (e.currentTarget.scrollHeight - e.currentTarget.scrollTop === ContainerHeight) {
            appendData();
        }
    };

    return(
        <List>
            <VirtualList
                data={data}
                height={ContainerHeight}
                itemHeight={47}
                itemKey="attributeName"
                onScroll={onScroll}
            >
                {(item: UserItem) => (
                    <List.Item key={item.attributeName}>
                        <List.Item.Meta
                            title={item.attributeName}
                        />
                        <div>{item.attributeValue}</div>
                    </List.Item>
                )}
            </VirtualList>
        </List>
    )
}

export default FileInfo;