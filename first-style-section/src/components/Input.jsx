export default function CustomInput({name, $invalid,...props}){
  let labelClass = "text-sm md:text-base font-bold tracking-widest text-center uppercase text-amber-800 font-title";
  let inputClass = "w-full p-2 md:p-4 line-height-1.5 bg-stone-100 text-stone-800 border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent";
  if($invalid){
    labelClass += " text-red-500";
    inputClass += " border-red-500 bg-stone-300";
  }
  return(
        <p>
            <label className={labelClass} >{name}</label>
            <input className={inputClass} {...props}/>
        </p>
    )
}