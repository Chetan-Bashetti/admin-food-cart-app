const ItemSummary = ({ order, selectedId }) => {
	return (
		<div
			className='content'
			style={{ display: order._id === selectedId ? '' : 'none' }}
		>
			<div className='status-summary'>
				<div className='order-summary-title'>Order summary</div>
				{order.items_orderd.map((eachItem, id) => (
					<div className='each-item-summary' key={eachItem.item_id}>
						<div className='item-title-wrapper'>
							{id + 1}){' '}
							<div className='each-item-title'>{eachItem.item_name} -</div>
						</div>

						<div className='order-summary-text'>
							₹ {eachItem.price}.00 * {eachItem.count} ={' '}
							<strong>
								₹ {parseInt(eachItem.price) * parseInt(eachItem.count)}
							</strong>
						</div>
					</div>
				))}
				<div className='each-item-summary order-footer'>
					<strong>{order.items_orderd.length} Items Total bill</strong>
					<strong>₹ {order.total_price}</strong>
				</div>
			</div>
		</div>
	);
};
export default ItemSummary;
