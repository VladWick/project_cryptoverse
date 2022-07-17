import React from 'react';
import millify from 'millify';

import { useGetExchangesQuery } from '../services/cryptoExchangesApi';
import Loader from './Loader';
import Table from 'antd/lib/table';

const columns = [
    {
        title: 'Logo',
        dataIndex: 'image',
        key: 'image',
        render: logo => <img src={logo}></img>,
    },
    {
        title: 'Exchanges',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
    },
    {
        title: '24h Trade Volume',
        dataIndex: 'trade_volume_24h_btc',
        key: 'trade_volume_24h_btc',
        render: number => <span>{millify(number)}</span>,
    },
    {
        title: 'Country',
        dataIndex: 'country',
        key: 'country',
    },
    {
        title: 'Url',
        dataIndex: 'url',
        key: 'url',
        render: link => <a href={link}>{link}</a>,
    }
];

const Exchanges = () => {
    const { data, isFetching } = useGetExchangesQuery();

    if (isFetching) return <Loader />;

    return (
      <>
        <Table columns={columns} dataSource={data} />
      </>
    );
};

export default Exchanges;