package com.example.backend.sport.janvier.services;

import java.util.List;

import com.example.backend.sport.janvier.models.Player;

public interface PlayerService {
	
	
	
	public Player addPlayer(Player P);
	public List<Player> getAllPlayres();
	public Player getPlayerById(Long id);
	public void deletePlayerById(Long id);
	public Player editPlayer(Player P);
	List<Player> getAllPlayers();

}