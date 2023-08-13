
const data=[{
    id:1,
    title:"Accordion1",
    Desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae possimus amet, eveniet quisquam beatae reprehenderit facilis accusantium iure! Debitis tempora minima quis, officiis facilis voluptate eveniet unde vitae cumque id."
        },
        {
            id:2,
            title:"Accordion2",
            Desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae possimus amet, eveniet quisquam beatae reprehenderit facilis accusantium iure! Debitis tempora minima quis, officiis facilis voluptate eveniet unde vitae cumque id."
                }
                ,
                
        {
            id:3,
            title:"Accordion3",
            Desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae possimus amet, eveniet quisquam beatae reprehenderit facilis accusantium iure! Debitis tempora minima quis, officiis facilis voluptate eveniet unde vitae cumque id."
                }
                ,
                
                {
                    id:4,
                    title:"Accordion3",
                    Desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae possimus amet, eveniet quisquam beatae reprehenderit facilis accusantium iure! Debitis tempora minima quis, officiis facilis voluptate eveniet unde vitae cumque id."
                        }
                
    ]    
function Accordion() {
   return(
    <div className="accordion">
{data.map((item)=>(<AccordionItem key={item.id} item={item}/>
))}
    </div>
   );}
      

export default Accordion;


function AccordionItem(item){
return <div className="accordion-item">
<div className="accordion-item__header">{item.title}</div>
<div className="accordion-item__content">{item.Desc}</div>
</div>
}
