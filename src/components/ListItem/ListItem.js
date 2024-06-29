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
					className={
						order.order_status === 'completed' ||
						order.order_status === 'cancalled'
							? 'status-buttons disabled'
							: 'status-buttons pending-action'
					}
					onClick={() => updateOrderStatus(order._id, 'pending')}
					disabled={
						order.order_status === 'completed' ||
						order.order_status === 'cancalled'
					}
				>
					Pending
				</button>
				<button
					className={
						order.order_status === 'completed' ||
						order.order_status === 'cancalled'
							? 'status-buttons disabled'
							: 'status-buttons preparing-action'
					}
					onClick={() => updateOrderStatus(order._id, 'preparing')}
					disabled={
						order.order_status === 'completed' ||
						order.order_status === 'cancalled'
					}
				>
					Preparing
				</button>
				<button
					className={
						order.order_status === 'completed' ||
						order.order_status === 'cancalled'
							? 'status-buttons disabled'
							: 'status-buttons completed-action'
					}
					onClick={() => updateOrderStatus(order._id, 'completed')}
					disabled={
						order.order_status === 'completed' ||
						order.order_status === 'cancalled'
					}
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
