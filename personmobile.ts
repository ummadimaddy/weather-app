export { }
import Person  from "./Person";
import { MobileOperator } from "./MobileOperator";


let person1 = new Person(1, "madhav", 557);
let person2 = new Person(2, "usha", 667);
let person3 = new Person(3, "ahamed", 786);
let person4 = new Person(4, "momo", 765);
let person5 = new Person(5, "Roopa", 234);
let persons: Person[] = [person1, person2, person3, person4, person5];


let mo1 = new MobileOperator(557, "Vodafone", 4.0);
let mo2 = new MobileOperator(667, "Jio", 4.5);
let mo3 = new MobileOperator(786, "BSNL", 4.8);
let mo4 = new MobileOperator(765, "Idea", 4.9);
let mo5 = new MobileOperator(234, "Airtel", 3.5);
let operators: MobileOperator[] = [mo1, mo2, mo3, mo4, mo5];

let mobilesearch="Airtel";
for(let i=0;i<operators.length;i++)
{
    if(mobilesearch==MobileOperator[i])
    {
        for(let j=0;j<persons.length;j++)
        {
            if(MobileOperator[i].operatorId=Person[j].persponId)
            {
                console.log("ID:"+Person[i].personId,"Nmae:"+Person[i].name,"Mobile Operator: "+Person[i].mobileOperator)
            }
        }
    }
    else{
        console.log("invalid operator");
    }
}

for(let i=0;i<operators.length-1;i++)
{
  for(let j=0;j<operators.length-i-1;i++)
  {
      if(MobileOperator[j+1].rating>MobileOperator[j].rating)
      {
          let temp=MobileOperator[j];
          MobileOperator[j]=MobileOperator[j+1];
          MobileOperator[j+1]=temp;
      }
  }
}
console.log("person details who are using top 1 and 2 mobile operators are");
for(let i=0;i<persons.length;i++)
{
    if(MobileOperator[0].operatorId==Person[i].personId)
    {
        console.log("id: "+Person[i].personId,"Nmae: "+Person[i].name,"operator id"+Person[i].mobileOperator);
    }
}