import axios from 'axios';
import React from 'react';

import Header from 'components/Header/Header';
import ListItem from 'components/ListItem/ListItem';
import Loader from 'components/Loader/Loader';

import './Orders.css';

const Orders = () => {
	const [allOrders, setAllOrders] = React.useState([]);
	const [orderCount, setOrdersCount] = React.useState(0);
	const [selectedId, setSelectedId] = React.useState(0);
	const [isLoading, setIsLoading] = React.useState(false);

	React.useEffect(() => {
		getAllOrders();
	}, []);

	const getAllOrders = async () => {
		try {
			setIsLoading(true);
			let res = await axios({
				method: 'get',
				url: `${process.env.REACT_APP_API_URL}orders/list`
			});
			setOrdersCount(res.data.count);
			setAllOrders(res.data.data);
			setIsLoading(false);
		} catch (err) {
			console.log(err);
			setIsLoading(false);
		}
	};

	const handleOpenDetails = (id) => {
		setSelectedId(id);
	};

	const updateOrderStatus = async (id, status) => {
		try {
			setIsLoading(true);
			let res = await axios({
				method: 'patch',
				url: `${process.env.REACT_APP_API_URL}orders/update/${id}`,
				data: {
					order_status: status
				}
			});
			getAllOrders();
		} catch (err) {
			console.log(err);
			setIsLoading(false);
		}
	};

	return (
		<div className='orders-wrapper'>
			{!isLoading ? (
				<>
					<Header orderCount={orderCount} />
					<div className='orders'>
						{allOrders.map((eachOrder) => (
							<ListItem
								key={eachOrder._id}
								order={eachOrder}
								selectedId={selectedId}
								setSelectedId={setSelectedId}
								handleOpenDetails={handleOpenDetails}
								updateOrderStatus={updateOrderStatus}
							/>
						))}
					</div>
				</>
			) : (
				<div className='loader-wrapper'>
					<Loader />
				</div>
			)}
		</div>
	);
};
export default Orders;
