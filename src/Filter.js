import React from 'react';
export default function Filter(){
    return(
        <>
<div style={{display:"flex",alignItems:"flex-end",justifyContent:"flex-end"}}>
            <label htmlFor="" style={{fontSize:"1.1rem"}}>تحصیلات</label>


                <input style={{position:"relative",right:100,top:20}} id="option" name="option1" type="checkbox"/>
                <label style={{position:"relative",right:200,top:20}}  id="option1" htmlFor="زیردیپلم">زیردیپلم</label>
    <input style={{position:"relative",right:160,top:50}} id="option" name="option1" type="checkbox"/>
    <label style={{position:"relative",right:260,top:50}}  id="option1" htmlFor="کاردانی">کاردانی</label>
    <input style={{position:"relative",right:220,top:80}} id="option" name="option1" type="checkbox"/>
    <label style={{position:"relative",right:360,top:80}}  id="option1" htmlFor="کارشناسی ارشد">کارشناسی ارشد</label>
    <input style={{position:"relative",right:490,top:20}} id="option" name="option1" type="checkbox"/>
    <label style={{position:"relative",right:550,top:20}}  id="option1" htmlFor="دیپلم">دیپلم</label>
    <input style={{position:"relative",right:530,top:50}} id="option" name="option1" type="checkbox"/>
    <label style={{position:"relative",right:620,top:50}}  id="option1" htmlFor="کارشناسی">کارشناسی</label>
</div>
            </>
    )
}