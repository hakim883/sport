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

import com.example.backend.sport.janvier.models.Player;
import com.example.backend.sport.janvier.services.PlayerService;
@RequestMapping("api/playres")
@CrossOrigin("*")
@RestController

public class PlayerConrotller {
	
	
	
	@Autowired
	public PlayerService playerService;
	
	@GetMapping()
	public List<Player> getAllPlayres(){
		return playerService.getAllPlayres();
		
	
	}
	@GetMapping("/{id}")

	public Player getPlayerBy(@PathVariable Long id){
		return playerService.getPlayerById(id);
		
	}
	@DeleteMapping("/{id}")
	public void deletePlayer(@PathVariable Long id) {
		playerService.deletePlayerById(id);
	}
@PutMapping()
public Player editPlayer(@RequestBody Player P) {
	return playerService.addPlayer(P);
}
@PostMapping()
public Player addPlayer(@RequestBody Player P) {
	return playerService.addPlayer(P);
}
	
	
	

}
