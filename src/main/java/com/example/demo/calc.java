package com.example.demo;
import java.util.Arrays;
import java.util.Scanner;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins="http://localhost:4200/")
@RequestMapping("/print")
public class calc{
	

	
	@GetMapping("/expression")
	public String calco(@RequestParam String first, @RequestParam String second,@RequestParam String third) {
		
		 return obj.operations(first, second, third);
		
	}
	
	operationscalc obj = new operationscalc() ;






}
