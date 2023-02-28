package com.example.backend.backend.services;

import java.util.List;

import com.example.backend.backend.models.Player;

public interface PlayerService {
	public List<Player> getAllPlayers();

	public Player getPlayerById(Long id);

	public Player addPlayer(Player m);

	public Player updatePlayer(Player m);

	public void deletePlayer(Long id);
}
