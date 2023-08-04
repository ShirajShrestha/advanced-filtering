import './Colors.css'

function Colors() {
  return (
    <>
      <h2 className='sidebar-title color-title'>Colors</h2>
       <label className='sidebar-label-container'>
        <input type='radio' name='test2' />
            <span className='checkmark'></span>All
        </label>
        <label className='sidebar-label-container'>
        <input type='radio' name='test2' />
            <span className='checkmark'></span>Black
        </label>
        <label className='sidebar-label-container'>
        <input type='radio' name='test2' />
            <span className='checkmark'></span>White
        </label>
    </>
  )
}

export default Colors
