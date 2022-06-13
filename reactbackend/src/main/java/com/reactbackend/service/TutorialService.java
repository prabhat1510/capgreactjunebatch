package com.reactbackend.service;

import java.util.List;

import com.reactbackend.model.Tutorial;

public interface TutorialService {
	List<Tutorial>  getAllTutorials();
	Tutorial getTutorialById(Long id);
	Tutorial createTutorial(Tutorial tutorial);
	Tutorial updateTutorial(Tutorial tutorial,Long id);
	void deleteTutorial(Long tutorialId);
	void deleteAllTutorials();
	List<Tutorial> findByPublished(boolean published);
	List<Tutorial> findByTitleContaining(String title);
}
