import React from 'react';
import { Alert, Space, Spin } from 'antd';

const LoadingIndicator: React.FC = () => (
    <div>
        <Spin tip="Loading" size="large">
            <div className="content" />
        </Spin>
    </div>
);

export default LoadingIndicator;