import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ItemSummary from './ItemSummary';
import './ListItem.css';

const ListItem = ({
	order,
	selectedId,
	handleOpenDetails,
	updateOrderStatus
}) => {
	return (
		<div className='list-item-wrapper'>
			<div className='header'>
				<div className='header-status'>
					<strong>Table - {order.table_number}</strong>
					<div className='status'>
						<strong>Status - </strong>
						<span className={`${order.order_status}`}>
							{order.order_status}
						</span>
					</div>
				</div>
				<div className='header-action'>
					<strong>
						Total - <div>₹ {order.total_price}</div>
					</strong>
					<div className='action'>
						{order._id === selectedId ? (
							<ExpandLessIcon onClick={() => handleOpenDetails(0)} />
						) : (
							<ExpandMoreIcon onClick={() => handleOpenDetails(order._id)} />
						)}
					</div>
				</div>
			</div>
			<ItemSummary order={order} selectedId={selectedId} key={order._id} />
			<div>
				<button
					className='status-buttons pending-action'
					onClick={() => updateOrderStatus(order._id, 'pending')}
				>
					Pending
				</button>
				<button
					className='status-buttons preparing-action'
					onClick={() => updateOrderStatus(order._id, 'preparing')}
				>
					Preparing
				</button>
				<button
					className='status-buttons completed-action'
					onClick={() => updateOrderStatus(order._id, 'completed')}
				>
					Completed
				</button>
				<button
					className='status-buttons cancalled-action'
					onClick={() => updateOrderStatus(order._id, 'cancalled')}
				>
					Cancalled
				</button>
			</div>
		</div>
	);
};

export default ListItem;
