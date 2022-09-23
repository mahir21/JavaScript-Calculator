
class Calculator{
  constructor(previousOperandTextElement,currentOperandTextElement)
  {
    this.previousOperandTextElement=previousOperandTextElement;
    this.currentOperandTextElement=currentOperandTextElement;
    this.clear();
    
  }
  clear()
  {
   this.currentOperand=''
   this.previousOperand=' '
   this.operation=' '
  }
  
   appendNumber(number)
   {
      
       this.currentOperand = this.currentOperand.toString()+number.toString();
      
   }







  delete()
  {
      this.currentOperand=this.currentOperand.toString().slice(0,-1);
  }
  getDisplayNumber(number) 
  {

       


  }
  chooseOperation(operation)
  {
   if(this.currentOperand===' ')return;
   this.operation=operation;
   if(this.previousOperand!==' ')
    compute();
   this.previousOperand=this.currentOperand;
   this.currentOperand=' ';
   
  }
  
   compute()
  {
    let compute;
    const val1=parseFloat(this.currentOperand);
    const val2=parseFloat(this.previousOperand);
    if(isNaN(this.previousOperand) || isNaN(this.currentOperand)) return;
    switch(this.operation)
    {
      case '+':
      compute=val2+val1;
      break;
      case '-':
      compute=val2-val1;
      break;
      case '/':
      compute=val2/val1;
      break;
      case '*':
      compute=val2*val1;
      break;
      default:
      return
    }
    this.currentOperand=compute;
    this.previousOperand='';
    this.operation=undefined;
   

  }

  




    
  

  getDisplayNumber(number)
  {
    


  }
 
  updateDisplay()
  {   
      
      this.currentOperandTextElement.innerText=this.currentOperand;

      this.previousOperandTextElement.innerText=this.previousOperand;

      if(this.operation!=null)
      {
       this.previousOperandTextElement.innerText=`${this.previousOperand}${this.operation}`
      }


    
      

  }

}



const numberButtons=document.querySelectorAll('[data-number]')
const operationButtons=document.querySelectorAll('[data-operation]')
const equalsButton=document.querySelector('[data-equals]')
const deleteButton=document.querySelector('[data-delete]')
const allClearButton=document.querySelector('[data-all-clear]')
const previousOperandTextElement=document.querySelector('[data-previous-operand]')
const currentOperandTextElement=document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandTextElement,currentOperandTextElement);

numberButtons.forEach(button => {
  button.addEventListener('click',()=>{

      calculator.appendNumber(button.innerText);
      console.log(button.inner)
      calculator.updateDisplay()
  })

})

operationButtons.forEach(button=>{
  button.addEventListener('click',()=>{
     calculator.chooseOperation(button.innerText);
     calculator.updateDisplay();
  })
})


equalsButton.addEventListener('click',()=>{
  calculator.compute();
  calculator.updateDisplay();
  })

deleteButton.addEventListener('click',()=>{
  calculator.delete();
  calculator.updateDisplay();
})

allClearButton.addEventListener('click',()=>{
  calculator.clear();
  calculator.updateDisplay();
})

