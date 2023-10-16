import Input from '../../components/Input'
import './Colors.css'

function Colors({handleChange}) {
  return (
    <>
    <div>
      <h2 className='sidebar-title color-title'>Colors</h2>
        
      <label className='sidebar-label-container'>
        <input onChange={handleChange} type='radio' value='' name='test2' />
        <span className='checkmark all'></span>All
      </label>
      
      <Input
        handleChange={handleChange}
        value='black'
        title='Black'
        name='test2'
        color='black'
      /> 
      <Input
        handleChange={handleChange}
        value='blue'
        title='Blue'
        name='test2'
        color='blue'
      /> 
      <Input
        handleChange={handleChange}
        value='red'
        title='Red'
        name='test2'
        color='red'
      /> 
      <Input
        handleChange={handleChange}
        value='green'
        title='Green'
        name='test2'
        color='green'
      /> 
      <label className='sidebar-label-container'>
        <input onChange={handleChange} type='radio' name='test2' value='white'/>
        <span className='checkmark'style={{background:'white', border:'2px solid black'}}></span>White
      </label>
    </div>
    </>
  )
}

export default Colors
