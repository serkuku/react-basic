import { useState,useEffect } from 'react';
import './FormComponent.css'

const FormComponent = (props) =>{
    const [title,setTitle] = useState('')
    const [amount,setAmount] = useState('')
    const [formValid,setFormValid] = useState(false)
    

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
        setTitle('')
        setAmount('')
    }
    useEffect(()=>{
        const checkData = title.length > 0 && amount !== ""
        setFormValid(checkData)
    },[title,amount])
return (
    <div>
        <form onSubmit={saveItem}>
            <div>
                <label htmlFor="">ชื่อรายการ</label>
                <input type="text" placeholder='ระบุชื่อรายการ' onChange={inputTitle} value={title} />
            </div>
            <div>
                <label htmlFor="">จำนวนเงิน</label>
                <input type="number" placeholder='ราคา(บาท)' onChange={inputAmount} value={amount} />
            </div>
            <div>
                <button type="submit" className='btn' disabled={!formValid}>เพิ่มข้อมูล</button>
            </div>
        </form>
    </div>
)
}

export default FormComponent