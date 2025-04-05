import * as Yup from 'yup'
import { PRIORITIES } from '../constants/priorities';

export function getTodoSchema({isNew =false}={}){
    const deadlineRule= Yup
        .string()
        .nullable()
        .transform((value, originalValue)=> 
            originalValue ===""?null:value)
        .matches(/^\d{4}-\d{2}-\d{2}$/, "Enter a valid date in YYYY-MM-DD")
    return Yup.object().shape({
        name: Yup.string().required("Name is required").min(3,"Name should have atleast 3 characters").max(70,"Name should not exceed 70 characters"),
        description: Yup.string().max(200,"Description should not exceed 200 characters"),
        deadline: isNew ? deadlineRule.test("is-future-date","Deadline can't be in the past",(value)=>{
                const today=new Date().toISOString().split("T")[0]
            return value ? value>=today:true;
            }
        ):deadlineRule,
        priority: Yup.string().required("Priority is not valid").oneOf(Object.keys(PRIORITIES),"Priority is not valid")
    });
}