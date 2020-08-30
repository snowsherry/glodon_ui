import React,{useState,useEffect} from 'react'
interface ButttonProps {
    type:string,
    size:string,
}
const Button:React.FC<ButttonProps>=props=>{
    let {type,size,children}=props;
    useEffect(()=>{
        console.log('hello,world')
    },[])
    return <button className={`${type} ${size}`}>{children}</button>
}
export  default Button;

