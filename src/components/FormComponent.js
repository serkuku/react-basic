import { useState } from 'react';
import './FormComponent.css'

const FormComponent = () =>{
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
        setTitle('')
        setAmount('')
    }
    const [title,setTitle] = useState('')
    const [amount,setAmount] = useState('')
return (
    <div className="form-control">
        <form onSubmit={saveItem}>
            <div className="">
                <label htmlFor="">ชื่อรายการ</label>
                <input type="text" placeholder='ระบุชื่อรายการ' onChange={inputTitle} value={title} />
            </div>
            <div className="">
                <label htmlFor="">จำนวนเงิน</label>
                <input type="number" placeholder='ราคา(บาท)' onChange={inputAmount} value={amount} />
            </div>
            <div >
                <button type="submit" className='btn'>เพิ่มข้อมูล</button>
            </div>
        </form>
    </div>
)
}

export default FormComponent