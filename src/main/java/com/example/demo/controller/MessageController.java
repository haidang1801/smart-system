package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.service.MessageService;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class MessageController {
	@Autowired
	private MessageService messageService;
	
	@PostMapping("/sendMessage")
    public ResponseEntity<String> sendMessage(@RequestParam("message") String message) {
        return ResponseEntity.ok(messageService.solveMessage(message));
    }
}
