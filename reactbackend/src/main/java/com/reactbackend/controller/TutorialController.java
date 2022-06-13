package com.reactbackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.reactbackend.model.Tutorial;
import com.reactbackend.service.TutorialService;


@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")
public class TutorialController {

	@Autowired
	TutorialService service;

	@GetMapping("/tutorials")
	public ResponseEntity<List<Tutorial>> getAllTutorials() {

		List<Tutorial> tutorials = service.getAllTutorials();
		if (tutorials.isEmpty()) {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} else {
			return new ResponseEntity<>(tutorials, HttpStatus.OK);
		}
	}

	@GetMapping("/tutorials/{id}")
	public ResponseEntity<Tutorial> getTutorialById(@PathVariable("id") Long id) {

		Tutorial tutorial = service.getTutorialById(id);
		if (tutorial != null) {
			return new ResponseEntity<>(tutorial, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@PostMapping("/tutorials/add")
	public ResponseEntity<Tutorial> createTutorial(@RequestBody Tutorial tutorial) {
		Tutorial tutorialData = service.createTutorial(tutorial);
		return new ResponseEntity<>(tutorialData, HttpStatus.CREATED);
	}

}
