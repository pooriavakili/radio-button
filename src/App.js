import React from 'react';
import {Button,Input,Select} from "antd"
import Filter from "./Filter"

export default function  App (){




        return (
            <>
                <div className="propertyOne">
                    <div className="propertySize">
                        <form className="form">

                            <div   >
                                <div className="inputGroup">
                                    <input className="input-options" id="option" name="option1" type="checkbox"/>
                                    <label className="dateTimes" id="option1" for="یک روز قبل">یک روز قبل</label>
                                </div>

                                <div className="inputGroup">
                                    <input className="input-options" id="option" name="option2" type="checkbox"/>
                                    <label className="dateTimes" id="option2" for="یک هفته اخیر">یک هفته اخیر</label>
                                </div>

                                <div className="inputGroup">
                                    <input className="input-options" id="option" name="option3" type="checkbox"/>
                                    <label className="dateTimes" id="option3" for="یک ماه اخیر">یک ماه اخیر</label>
                                </div>
                                <div className="inputGroup">
                                    <input className="input-options" id="option" name="option4" type="checkbox"/>
                                    <label className="dateTimes" id="option4" for="همه زمان ها">همه زمان ها</label>
                                </div>


                                <Button className="buttonOneButton">پاک کردن</Button>

                                <Button className="buttonTwoButton">اعمال</Button>


                            </div>

                        </form>
                    </div>
                </div>
                <Filter/>
                <style jsx>{`

.buttonOneButton{
background-color: red;
padding:10px;
  width: 89px;

  height: 41px;

  border-radius: 10px;
color:#fff;
font-size:.9rem;
cursor: pointer;

}
.buttonOneButton:hover{
background-color:#000;
   transition-delay: 1s;
  transition-duration: 1s;
}
.buttonTwoButton{
background-color: red;
padding:10px;
  width: 89px;

  height: 41px;
cursor: pointer;
  border-radius: 10px;
color:#fff;
font-size:.9rem;
position:relative;
left:10px;
}
.buttonTwoButton:hover{
background-color:#000;
transition-delay: 1s;
  transition-duration: 1s;
}
.propertySize{
width: 292px;
height: 259px;
}
.propertyOne{
display:flex;align-items:center;justify-content:center;
}
.dateTimes{
position:relative; left:160px
}
.input-options{
position:relative;
left:250px;
}
.inputGroup {
  background-color: #fff;
  display: block;
  margin: 10px 0;
  position: relative;

  label {
    padding: 12px 30px;
    width: 100%;
    display: block;
    text-align: left;
    color: #3C454C;
    cursor: pointer;
    position: relative;
    z-index: 2;
    transition: color 200ms ease-in;
    overflow: hidden;

    &:before {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      content: '';
      background-color: #5562eb;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%) scale3d(1, 1, 1);
      transition: all 300ms cubic-bezier(0.4, 0.0, 0.2, 1);
      opacity: 0;
      z-index: -1;
    }

    &:after {
      width: 32px;
      height: 32px;
      content: '';
      border: 2px solid #D1D7DC;
      background-color: #fff;
      background-image: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.414 11L4 12.414l5.414 5.414L20.828 6.414 19.414 5l-10 10z' fill='%23fff' fill-rule='nonzero'/%3E%3C/svg%3E ");
      background-repeat: no-repeat;
      background-position: 2px 3px;
      border-radius: 50%;
      z-index: 2;
      position: absolute;
      right: 30px;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
      transition: all 200ms ease-in;
    }
  }

  input:checked ~ label {
    color: #fff;

    &:before {
      transform: translate(-50%, -50%) scale3d(56, 56, 1);
      opacity: 1;
    }

    &:after {
      background-color: #54E0C7;
      border-color: #54E0C7;
    }
  }

  input {
    width: 32px;
    height: 32px;
    order: 1;
    z-index: 2;
    position: absolute;
    right: 30px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    visibility: hidden;
  }
}


// codepen formatting
.form {
padding: 0 16px;
max-width: 550px;
margin: 50px auto;
font-size: 18px;
font-weight: 600;
line-height: 36px;
}
body {
font-family: 'Fira Sans', sans-serif;
}
`}</style>
            </>
        );

}

