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

import com.example.backend.sport.janvier.models.Team;
import com.example.backend.sport.janvier.services.TeamService;

@RequestMapping("api/teams")
@CrossOrigin("*")
@RestController

public class TeamController {
	
	@Autowired
	public TeamService teamService;
	
	@GetMapping()
	public List<Team> getAllTeams(){
		return teamService.getAllTeams();
		
	
	}
	@GetMapping("/{id}")

	public Team getTeamBy(@PathVariable Long id){
		return teamService.getTeamById(id);
		
	}
	@DeleteMapping("/{id}")
	public void deleteTeam(@PathVariable Long id) {
		teamService.deleteTeamById(id);
	}
@PutMapping()
public Team editTeam(@RequestBody Team T) {
	return teamService.addTeam(T);
}
@PostMapping()
public Team addTeam(@RequestBody Team T) {
	return teamService.addTeam(T);
}
	
	
	

}
