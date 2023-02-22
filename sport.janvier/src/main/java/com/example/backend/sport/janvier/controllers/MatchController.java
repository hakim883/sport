package com.example.backend.sport.janvier.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.sport.janvier.models.Matche;
import com.example.backend.sport.janvier.services.MatchService;

@RequestMapping("api/matches")
@CrossOrigin("*")
@RestController
public class MatchController {
	@Autowired
	public MatchService matchService;
	
	@GetMapping()
	public List<Matche> getAllMatches(){
		return matchService.getAllMatches();
		
	
	}
	@GetMapping("/{id}")

	public Matche getMatcheBy(@PathVariable Long id){
		return matchService.getMatchById(id);
		
	}
	@DeleteMapping("/{id}")
	public void deleteMatche(@PathVariable Long id) {
		matchService.deleteMatchById(id);
	}
@PutMapping()
public Matche editMatch(@RequestBody Matche m) {
	return matchService.addMatch(m);
}
@PostMapping()
public Matche addMatch(@RequestBody Matche m) {
	return matchService.addMatch(m);
}
}
