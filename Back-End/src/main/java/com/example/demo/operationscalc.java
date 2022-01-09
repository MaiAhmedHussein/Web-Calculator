package com.example.demo;
import org.springframework.util.*;

public class operationscalc {
	
	double result=0,Result = 0;
	String s1="", s2="";

	public String operations(String operand1, String operand2, String operator){
		
		boolean op1=false;double resultop1 = 0; double resultop2=0;
		this.s1=operand1;this.s2=operand2;
		
	    if (getandcheckOperand(operand1) && getandcheckOperand(operand2)){
	    	
	        	op1=getandcheckOperand(operand1);resultop1=this.result;
	        	op1=getandcheckOperand(operand2);resultop2 =this.result;
	        	
	            if (operation(resultop1, resultop2, operator)) {
	                return String.valueOf(Result);
	            }else {
	            	//the second operand value is zero
	                return "Error!";
	            }
	            
	    }else{
	            return "Error!";
	    }
	}
	
	
	    
    //checking if each of the 2 operands are written in the right form and calculate the square or reciprocal,... if needed
	public boolean getandcheckOperand(String operand) {
	    int neg=0;double n=0;
	    
	    if(operand.contains("√")){
	    	
	    	if(operand.charAt(0)=='-'){
	    		neg=1;
	    	}
	    	
	    	//getting the double value of the operand to make operations on
	    	n=Double.parseDouble(operand.substring(2+neg, operand.length()-1));
	    	if(n<0){
	    		return false;
	    	}
	    	
	    	this.result=Math.sqrt(n);
	    	if(neg==1){
	    		this.result=this.result*-1;
	    	}
	    	
	    }else if(operand.contains("²")){
	    	
	    	if(operand.charAt(0)=='-') {
	    		neg=1;
	    	}
	    	
	    	n=Double.parseDouble(operand.substring(1+neg, operand.length()-2));
	    	this.result= n*n;
	    	if(neg==1){
	   			this.result=this.result*-1;
	   		}
	    	
	    }else if(operand.contains("/")){
	    	
	    	if(operand.charAt(0)=='-'){
	    		neg=1;
	    	}
	    	
	   		n=Double.parseDouble(operand.substring(3+neg, operand.length()-1));
	   		if(n==0){
	   			return false;
	   		}
	    	this.result= 1/n;
	   		if(neg==1){
	   			this.result=this.result*-1;
	   		}
	   		
	   	}else if(operand.contains("%")){
	   		
	    	if(operand.charAt(0)=='-'){
	   			neg=1;
	    	}
	    	
	    	n=Double.parseDouble(operand.substring(1+neg, operand.length()-2));
	    	this.result= n/100;
	    	if(neg==1){
	    		this.result=this.result*-1;
	   		}
	    	
	    }else{
	    	
	    	//check if there is more than 1 decimal point 
	    	if(StringUtils.countOccurrencesOf(operand, ".")>1){
	    		return false;
	   		}
	        
	    	
	   		 result = Double.parseDouble(operand);
	    	
	   	}
	    
	    return true;
	    
	 }

	  
	
	
	
	//Calculate the operation on the 2 operands.
	 public boolean operation(double operand1, double operand2, String operator) {
		       
	    if(operator.equals(" ")){
	    	   if(this.s1.charAt(this.s1.length()-1)=='%') {
	    		   operand1=0;
	    	   }
               if(this.s2.charAt(this.s2.length()-1)=='%') {
	    		   operand2=operand1*operand2;
	    	   }
	    	   
	               this.Result = operand1 + operand2;
	    	   
	    }else if(operator.equals("-")){
	    	
	    	if(this.s1.charAt(this.s1.length()-1)=='%') {
	    		   operand1=0;
	    	   }
	    	if(this.s2.charAt(this.s2.length()-1)=='%') {
	    		   operand2=operand1*operand2;
	    	   }
	    	   
	               this.Result = operand1 - operand2;
	            
	    }else if(operator.equals("x")){
	    	
	    	if(this.s1.charAt(this.s1.length()-1)=='%') {
	    		   operand1=0;
	    	}
	    	   
	               this.Result = operand1 * operand2;
	            
	    }else if (operator.equals("÷")){
	    	if(this.s1.charAt(this.s1.length()-1)=='%') {
	    		   operand1=0;
	    	}
	    	
	            if (operand2 == 0){
	                return false;
	            }    
	            this.Result = (operand1/ operand2);
	            
        }
	    	
	    return true;
	 }
}
