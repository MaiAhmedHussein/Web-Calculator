import { NumberSymbol } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ReturnStatement } from '@angular/compiler';
import { Component, Input } from '@angular/core';
import { Injectable } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

 constructor(private http:HttpClient){}

  input1:string = '';/*First operand */
  input2:string = '';/*Second operand */
  input3:string = '';/*The operation */
  input:string = '';
  input4:string= '0';
  op:string = '';
  in:string='';
  result:string  ='0';
  t:string='';p:string='';
  title = 'webCalc';
  c:number=0;o:number=0;

  send(y:string, x:string, z:string,i:string){
    this.http.get('http://localhost:8080/print/expression',{
      responseType:"text",
      params:{
        first:y,
        second:x,
        third:z
      },
      observe:'response'
    }).subscribe(response=>{
      this.input1=response.body!
      this.input=response.body!
      
      /*Remove ".0" returning from the double result as it is useless */
      if(this.input.charAt(this.input.length-1)=='0'&&this.input.charAt(this.input.length-2)=='.'){
        this.input=this.input.slice(0,-1);
        this.input=this.input.slice(0,-1);
      }
     
      
      this.input4=this.input;

      if(this.input=="Error!"){
        this.in=this.in+"!";
        this.input4=this.input;
        this.result="";this.input="";
        this.c=0;
        this.input1="";this.input2="";this.input3="";
        
      }else if(i=="="){
        this.input4=this.input;
        this.input="";
      }else{
        this.input=this.input+this.op;
        this.input2="";
      }

    })
    
  }

  display(i: string){
     this.result='';this.o=1;
     this.send(this.input1,this.input2,this.input3,i ); 
     
  }


  

  
  pressNum(num: string) {
 
  
  if(this.in.charAt(this.in.length -1)=="!" && num != "0"&& num != "1"&& num != "2"&& num != "3"&& num != "4"&& num != "5"&& num != "6"&& num != "7"&& num != "8" && num != "9"&&num != "C"&& num != "CE"&& num != "="&& num != "del"){
     return;
     
  }else if(this.in.charAt(this.in.length -1)=="!" ){
    this.in=this.in.slice(0,-1);
  }
 
    if(this.in.charAt(this.in.length -1)=="e"){
      if(!(num != "0"&& num != "1"&& num != "2"&& num != "3"&& num != "4"&& num != "5"&& num != "6"&& num != "7"&& num != "8" && num != "9"&&num != ".")){
        this.result="";this.input="";this.in="";
        this.c=0;this.o=0;
        this.input4="0";
        this.input1="";this.input2="";this.input3="";
      }else if(num=="="){
        return;
      }else{
        this.c=0;this.o=0;
        if(this.input1.charAt(this.input1.length-1)=='0'&&this.input1.charAt(this.input1.length-2)=='.'){
          this.input=(this.input1.slice(0,-1)).slice(0,-1);
        }else{
          this.input=this.input1;
        }
        this.input1=this.input;
      }   
      this.in=this.in.slice(0,-1);
    }
    

    /*Is the 2 operands and the operation are ready to be calculated? */
    if(this.input1!="" &&this.input2!=""&&this.input3!=""&&(num=="-"||num=="+"||num=="÷"||num=="x")){
        
         this.display("==");
         this.input1="";this.input2="";this.input3="";
         this.c=1;
    }

    if(this.input1.charAt(this.input1.length-1)==")" || this.input1.charAt(this.input1.length-1)=="%" ||this.input1.charAt(this.input1.length-1)=="²" ){
       if(this.input2==""&&this.input4!="0"&&(num=="x^2"||num=="%"||num=="x^0.5"||num=="1/x")){
           return;
       }
       if(num == "0"|| num == "1"|| num == "2"|| num == "3"|| num == "4"|| num == "5"|| num == "6"|| num == "7"|| num == "8" || num == "9"||num == "."){
          if(this.c==0){
            this.input1="";
            this.input="";
          }
       }

    }
    if(this.input2.charAt(this.input2.length-1)==")" || this.input2.charAt(this.input2.length-1)=="%" ||this.input2.charAt(this.input2.length-1)=="²" ){
      if((num=="x^2"||num=="%"||num=="x^0.5"||num=="1/x")){
          return;
      }
      if(num == "0"|| num == "1"|| num == "2"|| num == "3"|| num == "4"|| num == "5"|| num == "6"|| num == "7"|| num == "8" || num == "9"||num == "."){
        if(this.c==1){
          this.input2="";
          this.input2="";
          this.input4="";
          if(this.input1.charAt(this.input1.length-1)=='0'&&this.input1.charAt(this.input1.length-2)=='.'){
            this.input=(this.input1.slice(0,-1)).slice(0,-1)+this.input3+this.input2;
          }else{
            this.input=this.input1+this.input3+this.input2;
          }
        }
     }
   }

    if(num=="+/-" ){
       if(this.input4=="0" || this.input4=="0."){
            return;
       } 
       if(this.c==0 && this.input1==""){
            return;
       }else if(this.c==1&& this.input2==""){
        if(this.input1.charAt(this.input1.length-1)=='0'&&this.input1.charAt(this.input1.length-2)=='.'){
          this.input2=(this.input1.slice(0,-1)).slice(0,-1);
          this.input4=this.input2;
          this.input=(this.input1.slice(0,-1)).slice(0,-1)+this.input3+this.input2;
        }else{
          this.input2=this.input1;
          this.input4=this.input2;
          this.input=this.input1+this.input3+this.input2;
        }
       }
    }

    
    if(num=="1/x"){
      
      /*Add the following to the first operand */
      if(this.c==0){
        if(this.input1==""){
          this.input1="0";
        }
        this.input1="1/("+this.input1+")";
        this.input4=this.input1;
      }else{ /*Add the following to the second operand */
        if(this.input2==''){
          if(this.o==0){
            this.input2=this.input4;
          }else{
            this.input2=this.input4;
          }
        }
        this.input2="1/("+this.input2+")";
        this.input4=this.input2;
      }

      if(this.input1.charAt(this.input1.length-1)=='0'&&this.input1.charAt(this.input1.length-2)=='.'){
        this.input=(this.input1.slice(0,-1)).slice(0,-1)+this.input3+this.input2;
      }else{
        this.input=this.input1+this.input3+this.input2;
      }

    }else if(num=="+"||num=="÷"||num=="x"||num=="-"){/*Add this operation to input3 */

      /*In case user didnot enter first operand it will be set "zero" by default */
      if(this.input1==""){
        this.input1="0";
        this.input="0";
      }else if(this.input4=="0" && this.c==1 ){
        this.input2="0";this.display("==");
      }else if(this.input2=="" && this.c==1){
        this.input=this.input.slice(0,-1);
      }

      this.c=1;
      this.input3=num;
      this.input=this.input+num;
      this.op=num
      
    }else if(num=="x^0.5"){

      if(this.c==0){
        if(this.input1==""){
          this.input1="0";
        }
        this.input1="√("+this.input1+")";
        this.input4=this.input1;
      }else{
        if(this.input2==""){
          if(this.o==0){
            this.input2=this.input4;
          }else{
            this.input2=this.input4;
          }
        }
        this.input2="√("+this.input2+")";
        this.input4=this.input2;
      }
      if(this.input1.charAt(this.input1.length-1)=='0'&&this.input1.charAt(this.input1.length-2)=='.'){
        this.input=(this.input1.slice(0,-1)).slice(0,-1)+this.input3+this.input2;
      }else{
        this.input=this.input1+this.input3+this.input2;
      }

    }else if(num=="%"){

      if(this.c==0){
        if(this.input1==""){
          this.input1="0";
        }
        this.input1="("+this.input1+")%";
        this.input4=this.input1;
      }else{
        if(this.input2==""){
          this.input2=this.input4;
        }
        this.input2="("+this.input2+")%";
        this.input4=this.input2;
      }
      if(this.input1.charAt(this.input1.length-1)=='0'&&this.input1.charAt(this.input1.length-2)=='.'){
        this.input=(this.input1.slice(0,-1)).slice(0,-1)+this.input3+this.input2;
      }else{
        this.input=this.input1+this.input3+this.input2;
      }

    }else if(num=="C"){

        this.result="";this.input="";
        this.in="";
        this.c=0;this.o=0;
        this.input4="0";
        this.input1="";this.input2="";this.input3="";

    }else if(num=="x^2"){

      if(this.c==0){
        if(this.input1==""){
          this.input1=this.input4;
        }
        this.input1="("+this.input1+")²";
        this.input4=this.input1;
        
      }else{

        if(this.input2==""){
          this.input2=this.input4;
        
        }
        
        this.input2="("+this.input2+")²";
        this.input4=this.input2;
      }
      if(this.input1.charAt(this.input1.length-1)=='0'&&this.input1.charAt(this.input1.length-2)=='.'){
        this.input=(this.input1.slice(0,-1)).slice(0,-1)+this.input3+this.input2;
      }else{
        
        this.input=this.input1+this.input3+this.input2;
      }
      
      
    }else if(num=="del"){

      if(this.c==0 && this.input3==""){
        if(this.input1.charAt(this.input1.length-1)==")" || this.input1.charAt(this.input1.length-1)=="%" ||this.input1.charAt(this.input1.length-1)=="²" ){
            return;
        }
        this.input1= this.input1.slice(0,-1);
        if(this.input1==""){
          this.input4="0";
        }else{
          this.input4=this.input1;
        }
        this.input=this.input.slice(0, -1);
        this.in = this.in.slice(0, -1);
      }else if(this.input2!=""){
        if(this.input2.charAt(this.input2.length-1)==")" || this.input2.charAt(this.input2.length-1)=="%" ||this.input2.charAt(this.input2.length-1)=="²" ){
          return;
      }
        this.input2=this.input2.slice(0,-1);
        if(this.input2==""){
          this.input4="0";
        }else{
          this.input4=this.input2;
        }
        this.input=this.input.slice(0, -1);
        this.in = this.in.slice(0, -1);
      }
      
      if(this.input1.charAt(this.input1.length-1)=='0'&&this.input1.charAt(this.input1.length-2)=='.'){
        this.input=(this.input1.slice(0,-1)).slice(0,-1)+this.input3+this.input2;
      }else{
        this.input=this.input1+this.input3+this.input2;
      }

    }else if(num=="CE"){

      if(this.c==0 && this.input3==""){
        this.input1= "";
      }else if(this.input2!=""){
        this.input2="";
      }
      
      this.input4="0";
      if(this.input1.charAt(this.input1.length-1)=='0'&&this.input1.charAt(this.input1.length-2)=='.'){
        this.input=(this.input1.slice(0,-1)).slice(0,-1)+this.input3+this.input2;
      }else{
        this.input=this.input1+this.input3+this.input2;
      }
      this.in = this.in.slice(0, -1);

    }else if(num=="="){

      if(this.input1==""){
        this.input1="0";
      }
      if(this.input2=="" && this.input3==""){
        this.input2="0";this.input3="+";
      }
      if(this.input2=="" && this.input3!=""){
        this.input2=this.input4;
      }

      this.in=this.in+"e";
      this.display("=");
      this.input1="";this.input2="";this.input3="";this.input="";

    }else if(num=="+/-"){
      if(this.c==0){
        if(this.input1.charAt(0)=="-"){
        this.input1=this.input1.slice(1);
        this.input4=this.input1;
        }else{
          this.input1="-"+this.input1;
          this.input4=this.input1;
        }
        this.input=this.input1;
      }else{
        if(this.input2.charAt(0)=="-"){
          this.input2=this.input2.slice(1);
          this.input4=this.input2;
        }else{
          this.input2="-"+this.input2;
          this.input4=this.input2;
        }
        if(this.input1.charAt(this.input1.length-1)=='0'&&this.input1.charAt(this.input1.length-2)=='.'){
          this.input=(this.input1.slice(0,-1)).slice(0,-1)+this.input3+this.input2;
        }else{
          this.input=this.input1+this.input3+this.input2;
        }
      }
     

    }else{
      if(this.c==0){
        if(num=="." && this.input1==""){
          this.input1="0";this.input=this.input+"0";
        }
        this.input1=this.input1+num;
        this.input4=this.input1;
      }else{
        if(num=="." && this.input2==""){
          this.input2="0";this.input=this.input+"0";
        }
        this.input2=this.input2+num;
        this.input4=this.input2;
      }
      this.input = this.input + num;
      
    }
  }
}
