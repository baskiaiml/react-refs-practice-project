import { forwardRef } from "react";
const Input = forwardRef(function Input({label, isTextArea, ...props}, ref){

    const classesInput = "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";
    return (
        <p className="flex flex-col gap-1 my-4">
        <label className="text-sm font-bold uppercase text-stone-500">{label}</label>
        {isTextArea?   <textarea ref={ref} className={classesInput} {...props}/>:<input ref={ref} className={classesInput} {...props}/>}
    </p>
    )
});
export default Input;