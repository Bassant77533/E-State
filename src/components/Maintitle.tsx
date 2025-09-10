
type MaintitlePops = {
    head : string ; 
    desc : string ; 
    head2 : string ; 
}

export const Maintitle = ( {head , desc  , head2} : MaintitlePops ) => {
  return (
    <div className="text-center">
            <h1 className="font-bold text-2xl sm:text-4xl mb-2 ">{head} <span className=" underline underline-offset-4 decoration-1  font-light">{head2}</span></h1>
            <p className="text-gray-500  max-w-80 mb ">{desc}</p>
    </div>
  )
}
