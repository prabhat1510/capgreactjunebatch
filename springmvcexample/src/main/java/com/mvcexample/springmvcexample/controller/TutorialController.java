package com.mvcexample.springmvcexample.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.servlet.ModelAndView;

import com.mvcexample.springmvcexample.model.Tutorial;
import com.mvcexample.springmvcexample.service.TutorialService;

@Controller
public class TutorialController {
	@Autowired
	TutorialService service;

	@GetMapping("/tutorials")
	public ModelAndView getAllTutorials() {
		//ModelAndView modelAndView = new ModelAndView();
		Map model = new HashMap();
		
		List<Tutorial> tutorials = service.getAllTutorials();
		
		if (tutorials.isEmpty()) {
			model.put("noTutorial", "No tutorials found");
			
			return new ModelAndView("tutorials",model);
		} else {
			model.put("tutorialData", tutorials);
			return new ModelAndView("tutorials",model);
		}
	}

	@GetMapping("/tutorials/{id}")
	public ModelAndView getTutorialById(@PathVariable("id") Long id) {
		Map model = new HashMap();
		Tutorial tutorial = service.getTutorialById(id);
		if (tutorial != null) {
			model.put("tutorialData", tutorial);
			return new ModelAndView("tutorials",model);
		} else {
			model.put("noTutorial", "No tutorial found");
			
			return new ModelAndView("notutorial",model);
		}
	}

	
	@PostMapping("/tutorials/add")
	public ModelAndView createTutorial(Tutorial tutorial) {
		Tutorial tutorialData = service.createTutorial(tutorial);
		ModelAndView modelAndView;
		// Model in Spring Web MVC is a map
		Map messageModel = new HashMap();
		if (tutorialData != null) {
			messageModel.put("tutorialData", tutorialData);
			modelAndView = new ModelAndView("successWithData", messageModel);
		} else {
			messageModel.put("errormsg", "Unable to add tutorial");
			modelAndView = new ModelAndView("errorMsg", messageModel);
		}
		return modelAndView;
	}
	
		// Get Tutorial Form
		@GetMapping("/tutorial")
		public ModelAndView getTutorialForm(@ModelAttribute Tutorial tutorial) {
			ModelAndView modelAndView = new ModelAndView("tutorialform");
			return modelAndView;
		}
}
