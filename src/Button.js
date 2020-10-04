
import {Input,Select} from "antd"
import React from "react"
export default function Button(){
return(
  <>
      <Input.Group compact>
          <Select className="DateSends" defaultValue="تاریخ ارسال">
          </Select>
      </Input.Group>
  </>
)
}