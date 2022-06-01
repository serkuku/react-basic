import { useState } from 'react';
import './FormComponent.css'

const FormComponent = (props) =>{
    const inputTitle = (event) =>{
        console.log(event.target.value);
        setTitle(event.target.value);
    }
    const inputAmount = (event) =>{
        console.log(event.target.value);
        setAmount(event.target.value);
    }
    
    const saveItem = (event) =>{
        event.preventDefault()
        const itemData = {
            title:title,
            amount:Number(amount)
        }
        console.log('นี่คือ '+itemData.title+' ราคา '+itemData.amount);
        props.onAddItem(itemData)
        setTitle([])
        setAmount([])
    }
    const [title,setTitle] = useState([])
    const [amount,setAmount] = useState([])
return (
    <div>
        <form onSubmit={saveItem}>
            <div>
                <label htmlFor="">ชื่อรายการ</label>
                <input type="text" placeholder='ระบุชื่อรายการ' onChange={inputTitle} value={title} required/>
            </div>
            <div>
                <label htmlFor="">จำนวนเงิน</label>
                <input type="number" placeholder='ราคา(บาท)' onChange={inputAmount} value={amount} required/>
            </div>
            <div>
                <button type="submit" className='btn'>เพิ่มข้อมูล</button>
            </div>
        </form>
    </div>
)
}

export default FormComponent