function CartWidget() {
  return (
    <div className="d-flex align-items-center text-white" style={{ cursor: 'pointer' }}>
      <span style={{ fontSize: '1.5rem' }}>🛒</span>
      <span className="badge bg-danger ms-1">0</span>
    </div>
  )
}

export default CartWidget
