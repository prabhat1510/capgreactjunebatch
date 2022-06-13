package com.reactbackend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.reactbackend.model.Tutorial;
import com.reactbackend.repository.TutorialRepository;

@Service
public class TutorialServiceImpl implements TutorialService {
	@Autowired
	TutorialRepository repository;

	@Override
	public List<Tutorial> getAllTutorials() {

		return repository.findAll();
	}

	@Override
	public Tutorial getTutorialById(Long id) {
		Optional<Tutorial> tutData = repository.findById(id);
		if (tutData.isPresent()) {
			return tutData.get();
		} else {
			return null;
		}

	}

	@Override
	public Tutorial createTutorial(Tutorial tutorial) {
		
		return repository.save(tutorial);
	}

	@Override
	public Tutorial updateTutorial(Tutorial tutorial,Long id) {
		Optional<Tutorial> tutorialData = repository.findById(id);
		if (tutorialData.isPresent()) {
			Tutorial _tutorial = tutorialData.get();
			_tutorial.setTitle(tutorial.getTitle());
			_tutorial.setDescription(tutorial.getDescription());
			_tutorial.setPublished(tutorial.isPublished());
			return repository.save(_tutorial);
		}else {
				return null;
			}
		
	}

	@Override
	public void deleteTutorial(Long tutorialId) {
		repository.deleteById(tutorialId);

	}

	@Override
	public void deleteAllTutorials() {
	repository.deleteAll();

	}

	@Override
	public List<Tutorial> findByPublished(boolean published) {
		List<Tutorial> tutorials = repository.findByPublished(published);
		return tutorials;
	}

	@Override
	public List<Tutorial> findByTitleContaining(String title) {
		List<Tutorial> tutorials = repository.findByTitleContaining(title);
		return tutorials;
	}

}
